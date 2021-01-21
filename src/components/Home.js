import React from "react";
import image from "../headerbg.jpeg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Scenic River"
        className="absolute object-cover h-screen w-screen"
      />
      <section className="pt-36 lg:pt-72 px-8">
        <h1 className="relative text-gray-50 text-4xl text-center font-bold cursive md:text-7xl lg:text-9xl">
          John Smith.<br></br>Traveler & Photographer.
        </h1>
      </section>
    </main>
  );
}
