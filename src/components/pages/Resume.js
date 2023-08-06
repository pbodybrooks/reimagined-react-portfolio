import React from 'react';

export default function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>

      <a target="_blank" rel="noopener noreferrer" className="tab4" href={process.env.PUBLIC_URL + "/assets/resume.pdf"}>  Click here to view my resume.</a>
    </div>
  );
}
