import './App.css';
import { Header, Footer, Navigation, Projects } from './Components';
import { useState } from 'react';

function App() {
  const pages = [
    {
      key: "about-me",
      displayName: "About Me",
    },
    {
      key: "projects",
      displayName: "Projects",
    },
    {
      key: "contact",
      displayName: "Contact",
    },
    {
      key: "resume",
      displayName: "Resume",
    },
  ];

  const projects = [
    {
      title: "Project 1",
      technologies: ["React", "HTML", "CSS"],
      description: "This is a project",
      link: "https://www.google.com",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Project 2",
      technologies: ["React", "HTML", "CSS"],
      description: "This is a project",
      link: "https://www.google.com",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Project 3",
      technologies: ["React", "HTML", "CSS"],
      description: "This is a project",
      link: "https://www.google.com",
      image: "https://via.placeholder.com/150",
    },
  ];

  const [currentPage, setCurrentPage] = useState("about-me");

  const renderPage = () => {
    switch (currentPage) {
      case "projects":
        return 
      case "contact":
        return <h1>Contact</h1>;
      case "resume":
        return <h1>Resume</h1>;
      default:
        return <h1>About Me</h1>;
    }
  };

  return (
    <div className="App">
      <Header />
      <Navigation pages={pages} onPageClick={setCurrentPage}/>
      <div>{renderPage()}</div>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

