import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

import myPic from '../assets/images/myPic.jpeg';

import hero from '../assets/images/hero-surf.jpg';

export default function About() {
  return (
    <div>
      <div 
        className="hero"
        src={hero}
        alt="hero"
        >
      </div>
      <div className="hero-content">
        <h1>Parker Brook</h1>
        <h2>Full Stack Web Developer</h2>
      </div>
      <div className="aboutCard">
        <img height="400px" width="400px" src={myPic} alt="myPic" />
        <p className="col-6 aboutMe">
          My name is Parker, a Mechanical Engineer and Full Stack Web Developer based in Salt Lake City, Utah. I bring an engineering mindset and analytically oriented approach to web development and problem solving. I am a recent graduate of the University of Utah's Full Stack Web Development Bootcamp. I am passionate about creating web applications that are intuitive, responsive, and dynamic. I am a team player and enjoy collaborating with others to create a great product. I am excited to continue to learn and grow as a developer.
        </p>
      </div>
    </div>
  );
}

// const myPic = process.env.PUBLIC_URL + '/assets/images/myPic.jpeg';
// const hero = process.env.PUBLIC_URL + '/assets/images/hero-surf.jpg';

// export default function About() {
//   return (
//     <div>
//       <div 
//         className="hero"
//         style={{"--img":`url(${hero})`}}>
//       </div>
//       <div className="hero-content">
//         <h1>Parker Brook</h1>
//         <h2>Full Stack Web Developer</h2>
//       </div>
//       <div className="aboutCard">
//         <img height="400px" width="400px" src={myPic} alt="myPic" />
//         <p className="col-6 aboutMe">
//           My name is Parker, a Mechanical Engineer and Full Stack Web Developer based in Salt Lake City, Utah. I bring an engineering mindset and analytically oriented approach to web development and problem solving. I am a recent graduate of the University of Utah's Full Stack Web Development Bootcamp. I am passionate about creating web applications that are intuitive, responsive, and dynamic. I am a team player and enjoy collaborating with others to create a great product. I am excited to continue to learn and grow as a developer.
//         </p>
//       </div>
//     </div>
//   );
// }

