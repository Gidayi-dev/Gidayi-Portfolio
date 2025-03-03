import "./projects.css";
import Portfolio from "../assets/portfolio.png";
import AspirePath from "../assets/Aspirepath.jpg";
import Blogit from "../assets/blogit.jpg";
import Wildlife from "../assets/Wildlife.jpg";
import ChurchWebsite from "../assets/church.jpg"; // Add church website image

function Projects() {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img src={AspirePath} alt="AspirePath" />
          <h3>AspirePath</h3>
          <p>
            AspirePath is a career exploration and skill-building platform that helps users navigate their professional journey with intuitive tools and personalized progress tracking.
          </p>
          <a
            href="https://github.com/Gidayi-dev/AspirePath"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>

        <div className="project-card">
          <img src={Portfolio} alt="Portfolio Project" />
          <h3>My Portfolio</h3>
          <p>
            A personal portfolio website showcasing my skills, projects, and contact information.
          </p>
          <a
            href="https://github.com/Gidayi-dev/Gidayi-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>

        <div className="project-card">
          <img src={Blogit} alt="Blog It" />
          <h3>Blog It</h3>
          <p>
            A responsive web app for creating and sharing blogs, featuring secure authentication, a text editor, and commenting. Built with React, Node.js, and PostgreSQL to showcase full-stack development skills.
          </p>
          <a
            href="https://github.com/Gidayi-dev/Blogit"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>

        <div className="project-card">
          <img src={Wildlife} alt="Wildlife Community" />
          <h3>Wildlife Community</h3>
          <p>
            Currently in progress, this project focuses on raising awareness and promoting conservation efforts through educational and interactive features.
          </p>
          <a
            href="https://github.com/Gidayi-dev/Wildlife-Community"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>

        <div className="project-card">
          <img src={ChurchWebsite} alt="Church Website" />
          <h3>Church Website</h3>
          <p>
            A modern and fully responsive church website designed from a Figma prototype. It features event schedules, sermon archives, donation options, and a welcoming user experience.
          </p>
          <a
            href="https://github.com/Gidayi-dev/Church-Website"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
