import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">AG</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium items-center">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500"
              : "text-[whitesmoke] hover:text-blue-500 transition-all ease-linear duration-200"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500"
              : "text-[whitesmoke] hover:text-blue-500 transition-all ease-linear duration-200"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
