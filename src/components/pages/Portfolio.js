import React from 'react';
import ProjectCard from "../ProjectCard";
import Wrapper from "../Wrapper";
import Title from "../Title";
import projects from "../../projects.json";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <p>
        Some of my favorite projects are shown below. Click on the image to go to the deployed application.
      </p>
      <Wrapper>
        {projects.map(project => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" key={project.id} className="anchor"> 
            <ProjectCard
              id={project.id}
              name={project.name}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
            />
        </a>
        ))}
      </Wrapper>
    </div>
  );
}
