import React, { useState } from "react";
import "./style.css";

function ProjectCard(props) {
  // const [imageSrc, setImageSrc] = useState(props.imageLink);

  // const handleImageError = () => {
  //   setImageSrc(process.env.PUBLIC_URL + props.imagePath);
  // };

  const [imageSrc, setImageSrc] = useState(process.env.PUBLIC_URL + props.imagePath);

  const handleImageError = () => {
    setImageSrc(props.imageLink);
  };

  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={props.name}
          src={imageSrc}
          onError={handleImageError}
        />
      </div>
      <div className="content">
        <h3 style={{ fontStyle: "italic" }}>{props.name}</h3>
        <ul>
          <li>{props.description}</li>
          <li>
            <strong>Technologies:</strong> {props.technologies}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;

// No image conditional logic:

// import React from "react";
// import "./style.css";



// function ProjectCard(props) {
//   return (
//     <div className="card">
//       <div className="img-container">
//         <img alt={props.name} src={process.env.PUBLIC_URL + props.image} />
//         <img alt={props.name} src={props.image} />
//       </div>
//       <div className="content">
//         <h3 style={{ fontStyle: "italic" }}>{props.name}</h3>
//         <ul>
//           <li>
//              {props.description}
//           </li>
//           <li>
//             <strong>Technologies:</strong> {props.technologies}
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default ProjectCard;