import {
  FaJsSquare,
  FaReact,
  FaNode,
  FaPython,
  FaGithub,
  FaHtml5,
  FaGem, // Ruby Icon
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiTableau,
  SiJira,
  SiGit,
  SiRubyonrails, // Ruby on Rails Icon
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import "./skills.css";

function Skills() {
  const skills = [
    {
      icon: <FaJsSquare className="skill-icon" />,
      title: "JavaScript",
      description:
        "Strong understanding of ES6+ features, asynchronous programming, and modern frameworks.",
    },
    {
      icon: <FaReact className="skill-icon" />,
      title: "React",
      description:
        "Experienced in building dynamic, interactive, and responsive UI using React, Hooks, and Context API.",
    },
    {
      icon: <FaNode className="skill-icon" />,
      title: "Node.js & Express",
      description:
        "Developed scalable backend applications and REST APIs using Node.js and Express.",
    },
    {
      icon: <FaPython className="skill-icon" />,
      title: "Python",
      description:
        "Proficient in Python for scripting, backend development, and data science applications.",
    },
    {
      icon: <SiRubyonrails className="skill-icon" />,
      title: "Ruby on Rails",
      description:
        "Experienced in developing robust, scalable web applications using Ruby on Rails.",
    },
    {
      icon: <SiTailwindcss className="skill-icon" />,
      title: "Tailwind CSS",
      description:
        "Skilled in utility-first CSS with Tailwind for rapid and responsive UI development.",
    },
    {
      icon: <SiFigma className="skill-icon" />,
      title: "Figma",
      description:
        "Experienced in UI/UX design, wireframing, and prototyping with Figma for user-centric design.",
    },
    {
      icon: <GiArtificialIntelligence className="skill-icon" />,
      title: "AI & Machine Learning",
      description:
        "Knowledge in machine learning algorithms, neural networks, and AI model development.",
    },
    {
      icon: <SiTableau className="skill-icon" />,
      title: "Data Analysis",
      description:
        "Skilled in data visualization, analytics, and insights generation using Tableau and Python.",
    },
    {
      icon: <SiGit className="skill-icon" />,
      title: "Git & GitHub",
      description:
        "Version control expertise with Git for tracking changes, and GitHub for project collaboration.",
    },
    {
      icon: <SiJira className="skill-icon" />,
      title: "JIRA",
      description:
        "Experienced in Agile project management and issue tracking using JIRA.",
    },
  ];

  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
