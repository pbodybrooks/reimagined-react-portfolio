import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <h3 style={{ fontStyle: "italic" }}>{props.name}</h3>
        <ul>
          <li>
             {props.description}
          </li>
          <li>
            <strong>Technologies:</strong> {props.technologies}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
