import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

let myPic = '/assets/images/myPic.jpeg';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img height="200px" width="200px" src={process.env.PUBLIC_URL + myPic} alt="myPic" />
      <p>
        My name is Parker, a Mechanical Engineer and Full Stack Web Developer based in Salt Lake City, Utah. I bring an engineering mindset and analytically oriented approach to web development and problem solving. I am a recent graduate of the University of Utah's Full Stack Web Development Bootcamp. I am passionate about creating web applications that are intuitive, responsive, and dynamic. I am a team player and enjoy collaborating with others to create a great product. I am excited to continue to learn and grow as a developer.
      </p>
    </div>
  );
}
