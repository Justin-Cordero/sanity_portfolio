import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-gray-300">
      <div className="container mx-auto flex flex-wrap justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center px-3 text-gray-500 hover:text-gray-50 text-6xl font-bold cursive tracking-widest lg:mr-36 md:mr-6"
          >
            JS
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-gray-50 bg-gray-400"
            className="inline-flex items-center py-3 px-3 my-6 text-xl hover:text-gray-50 hover:bg-gray-600 rounded lg:mr-36 md:mr-6"
          >
            About
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-gray-50 bg-gray-400"
            className="inline-flex items-center py-3 px-3 my-6 text-xl hover:text-gray-50 hover:bg-gray-600 rounded lg:mr-36 md:mr-6"
          >
            Projects
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-gray-50 bg-gray-400"
            className="inline-flex items-center py-3 px-3 my-6 text-xl hover:text-gray-50 hover:bg-gray-600 rounded lg:mr-36 md:mr-6"
          >
            Blog
          </NavLink>
        </nav>
        <div className="inline-flex flex-wrap py-2">
          <SocialIcon
            url="https://twitter.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://youtube.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://instagram.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="mailto:johnsmith@johnsmith.john"
            className="mr-4"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
