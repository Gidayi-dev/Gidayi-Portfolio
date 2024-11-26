import "./projects.css";
import Portfolio from "../assets/portfolio.png";
import Dictionary from "../assets/dictionary.png";
import Landing from "../assets/landing.png";
import Mutech from "../assets/mutech.png";
import Tudo from "../assets/tudo.png";
import Urban from "../assets/urban.png";
import List from "../assets/list.png";
import Blogit from "../assets/blogit.jpg";
import AspirePath from "../assets/Aspirepath.jpg";
import Wildlife from "../assets/Wildlife.jpg";

function Projects() {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img src={AspirePath} alt="Aspire-path" />
          <h3>AspirePath</h3>
          <p>
            Currently in development, AspirePath helps users explore careers,
            build skills, and track progress. It focuses on intuitive and
            impactful user experiences.
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
            A personal portfolio website showcasing my skills, projects, and
            contact information.
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
          <img src={Blogit} alt="Blogit" />
          <h3>Blog It</h3>
          <p>
            A responsive web app for creating and sharing blogs, featuring
            secure authentication, a text editor, and commenting. Built with
            React, Node.js, and PostgreSQL to showcase full-stack development
            skills.
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
          <img src={Wildlife} alt="Wildlife" />
          <h3>Wildlife Community</h3>
          <p>
            Currently in progress, this project focuses on raising awareness and
            promoting conservation efforts through educational and interactive
            features.
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
          <img src={Dictionary} alt="Dictionary App" />
          <h3>Dictionary App</h3>
          <p>
            An app that allows users to search for word definitions, synonyms,
            and pronunciations.
          </p>
          <a
            href="https://github.com/Gidayi-dev/Dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>

        <div className="project-card">
          <img src={Landing} alt="Landing Page" />
          <h3>Landing Page</h3>
          <p>
            A modern and responsive landing page I designed as a demo to perfect
            on my Cascading Style Sheets skills.
          </p>
          <a
            href="https://github.com/Gidayi-dev/Landing-Page"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>

        <div className="project-card">
          <img src={Mutech} alt="Mutech Project" />
          <h3>Mutech</h3>
          <p>
            An innovative web application for Mutech, providing seamless access
            to their services and information.
          </p>
          <a
            href="https://github.com/Gidayi-dev/MUT"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>

        <div className="project-card">
          <img src={Tudo} alt="Tudo Healthcare Website" />
          <h3>Tudo Healthcare Website</h3>
          <p>
            A healthcare platform aimed at connecting patients with doctors and
            healthcare services.
          </p>
          <a
            href="https://github.com/your-tudo-healthcare-link"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>

        <div className="project-card">
          <img src={Urban} alt="Urban Have Apartments" />
          <h3>Urban Haven Apartments</h3>
          <p>
            A real estate website showcasing available properties for rent and
            purchase at Urban Have Apartments.
          </p>
          <a
            href="https://github.com/Gidayi-dev/URBAN-HAVEN-APARTMENTS"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>

        <div className="project-card">
          <img src={List} alt="To-do List" />
          <h3>To-do List</h3>
          <p>
            A simple to-do list app for managing tasks, with the ability to add,
            remove, and mark tasks as complete.
          </p>
          <a
            href="https://github.com/Gidayi-dev/To-do-list"
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
