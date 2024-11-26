import {
  FaJsSquare,
  FaReact,
  FaNode,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import { SiFlask, SiDjango, SiJira, SiGit } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import "./skills.css";

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <FaJsSquare className="skill-icon" />
          <h3>JavaScript</h3>
          <p>
            Expertise in JavaScript, including ES6+ features, DOM manipulation,
            and modern frameworks.
          </p>
        </div>
        <div className="skill-card">
          <FaReact className="skill-icon" />
          <h3>React</h3>
          <p>
            Proficient in building interactive user interfaces using React and
            hooks.
          </p>
        </div>
        <div className="skill-card">
          <FaNode className="skill-icon" />
          <h3>Node.js & Express</h3>
          <p>
            Experience in building server-side applications using Node.js and
            Express for REST APIs.
          </p>
        </div>
        <div className="skill-card">
          <FaPython className="skill-icon" />
          <h3>Python</h3>
          <p>
            Skilled in Python for scripting and backend development, including
            Flask and Django.
          </p>
        </div>
        <div className="skill-card">
          <SiFlask className="skill-icon" />
          <h3>Flask</h3>
          <p>Experience in building lightweight web applications with Flask.</p>
        </div>
        <div className="skill-card">
          <SiDjango className="skill-icon" />
          <h3>Django</h3>
          <p>
            Proficient in building scalable and secure web applications using
            Django.
          </p>
        </div>
        <div className="skill-card">
          <FaGithub className="skill-icon" />
          <h3>Git & GitHub</h3>
          <p>
            Version control expertise with Git for tracking changes, and GitHub
            for project collaboration.
          </p>
        </div>
        <div className="skill-card">
          <SiGit className="skill-icon" />
          <h3>Git</h3>
          <p>
            Fluent in managing repositories, branching, and merging using Git.
          </p>
        </div>
        <div className="skill-card">
          <SiJira className="skill-icon" />
          <h3>Jira</h3>
          <p>
            Familiar with Jira for project management and tracking tasks in
            agile workflows.
          </p>
        </div>
        <div className="skill-card">
          <SiTailwindcss className="skill-icon" />
          <h3>TailwindCSS</h3>
          <p>
            I’m skilled in Tailwind CSS, using utility classes to build
            responsive, customizable, and efficient designs.
          </p>
        </div>
        <div className="skill-card">
          <FaHtml5 className="skill-icon" />
          <h3>HTML & CSS</h3>
          <p>
            Proficient in HTML and CSS, creating structured, visually appealing,
            and responsive web pages.
          </p>
        </div>
        <div className="skill-card">
          <GiArtificialIntelligence className="skill-icon" />
          <h3>Exploring AI & ML</h3>
          <p>
            Currently diving into AI and Machine Learning, focusing on model
            training and data analysis techniques.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
