import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="">
      <nav>Navbar</nav>
      <div>
        {projects.map((project) => (
          <div>
            <ProjectCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
