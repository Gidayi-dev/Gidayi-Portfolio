import "./projects.css";
import Portfolio from "../assets/portfolio.png";
import AspirePath from "../assets/Aspirepath.jpg";
import Blogit from "../assets/blogit.jpg";
import Wildlife from "../assets/Wildlife.jpg";
import Tracker from "../assets/Tracker.jpg";
import DriveSafe from "../assets/DriveSafe.jpg";
import Nobel from "../assets/Nobel.jpg";
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
            AspirePath is a career exploration and skill-building platform that
            helps users navigate their professional journey with intuitive tools
            and personalized progress tracking.
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
          <img src={Blogit} alt="Blog It" />
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
          <img src={Wildlife} alt="Wildlife Community" />
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
          <img src={ChurchWebsite} alt="Church Website" />
          <h3>Church Website</h3>
          <p>
            A modern and fully responsive church website designed from a Figma
            prototype. It features event schedules, sermon archives, donation
            options, and a welcoming user experience.
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

        <div className="project-card">
          <img src={Tracker} alt="Job Tracker" />
          <h3>Job Tracker</h3>
          <p>
            A simple job tracking system that helps me monitor job applications,
            including company details, job titles, application status, and
            deadlines all in one place for easy follow-up and organization.
          </p>
          <a
            href="https://github.com/Gidayi-dev/Tracking-System"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>

        <div className="project-card">
          <img src={DriveSafe} alt="DriveSafe" />
          <h3>Drive Safe</h3>
          <p>
            A data analytics project that uses NumPy and Pandas to process
            driving safety data. Seaborn and Matplotlib are used to visualize
            key patterns and trends, offering insights to improve road safety.
          </p>
          <a
            href="https://github.com/Gidayi-dev/DriveSafe-Analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>

        <div className="project-card">
          <img src={Nobel} alt="Nobel" />
          <h3>Nobel Prize</h3>
          <p>
            A data visualization project analyzing Nobel Prize data with NumPy
            and Pandas. Seaborn and Matplotlib bring the data to life through
            visual stories that highlight trends across categories, countries,
            and decades.
          </p>
          <a
            href="https://github.com/Gidayi-dev/Nobel-Prize"
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
