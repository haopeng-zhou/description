import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink
            to="/description/about"
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
          >
            About me
          </NavLink>
        </li>
        <li>|</li>
        <li>
          <NavLink
            to="/description/projects"
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
