import React from 'react';
import ProjectCard from "../ProjectCard";
import Wrapper from "../Wrapper";
import projects from "../../projects.json";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <p>
        Some of my favorite projects are shown below. Click a card to see the live application (or repository if not deployed).
      </p>
      <Wrapper>
        {projects.map(project => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" key={project.id} className="anchor"> 
            <ProjectCard
              id={project.id}
              name={project.name}
              imagePath={project.imagePath}
              imageLink={project.imageLink}
              description={project.description}
              technologies={project.technologies}
            />
        </a>
        ))}
      </Wrapper>
    </div>
  );
}
