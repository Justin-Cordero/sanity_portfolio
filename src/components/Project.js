import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
           title,
           date,
           description,
           projectType,
           link,
           tags
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-blue-200 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Check out some of my work
        </h2>
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-14">
                <h3 className="text-gray-800 text-3xl text-center font-bold mb-2 hover:text-blue-600">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-center text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Completed on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-blue-500 text-xl font-bold hover:underline hover:text-blue-400"
                  >
                    View Project{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
