import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import sanityClient from "../client";

const NavBar = () => {
  const [name, setName] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "profile"]{
      name,
    }`
      )
      .then((data) => setName(data))
      .catch(console.error);
  }, []);

  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        {name ? (
          <NavLink to="/">
            <h2 className="animate-fade-in inline-flex items-center py-3 px-3 my-6 rounded text-red-20 italic">
              {name[0].name}
            </h2>
          </NavLink>
        ) : (
          <h2></h2>
        )}
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest transition-color"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-red-100 bg-red-700 border-b-2 border-red-100"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 transition-all duration-300"
          >
            About Me!
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-red-100 bg-red-700 border-b-2 border-red-100"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 transition-all duration-300"
          >
            Projects
          </NavLink>
          <NavLink
            to="/certification"
            activeClassName="text-red-100 bg-red-700 border-b-2 border-red-100"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 transition-all duration-300"
          >
            Certifications
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="text-red-100 bg-red-700 border-b-2 border-red-100"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 transition-all duration-300"
          >
            Contact
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/akashpatel2699"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://linkedin.com/in/akashpatel2699"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
