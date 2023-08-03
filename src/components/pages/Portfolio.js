import React from 'react';
import ProjectCard from "../ProjectCard";
import Wrapper from "../Wrapper";
import Title from "../Title";
import projects from "../../projects.json";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        Some of my favorite projects are shown below. Click on the image to go to the deployed application.
      </p>
      <Wrapper>
        <Title>My Projects</Title>
        {projects.map(project => (
          <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            occupation={project.occupation}
            location={project.location}
          />
        ))}
      </Wrapper>
    </div>
  );
}
