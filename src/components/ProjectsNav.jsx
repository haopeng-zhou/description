import React from "react";
import { NavLink } from "react-router-dom";

const ProjectsNav = () => {
  return (
    <div>
      <ul className="projectsNavUl">
        <li>
          <NavLink
            to="/description/projects"
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
          >
            Description
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/description/transcendence"
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
          >
            Transcendence
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/description/red-tetris"
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
          >
            Red-tetris
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsNav;
