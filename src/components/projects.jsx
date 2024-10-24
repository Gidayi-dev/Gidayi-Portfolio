import './projects.css';
import Portfolio from '../assets/portfolio.png';
import Dictionary from '../assets/dictionary.png';
import Landing from '../assets/landing.png';
import Mutech from '../assets/mutech.png';
import Tudo from '../assets/tudo.png';
import Urban from '../assets/urban.png';
import List from '../assets/list.png';

function Projects() {
    return (
        <div className="projects-section">
            <h2>Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <img src={Portfolio} alt="Portfolio Project" />
                    <h3>My Portfolio</h3>
                    <p>A personal portfolio website showcasing my skills, projects, and contact information.</p>
                    <a href="https://github.com/Gidayi-dev/Gidayi-Portfolio" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                </div>

                <div className="project-card">
                    <img src={Dictionary} alt="Dictionary App" />
                    <h3>Dictionary App</h3>
                    <p>An app that allows users to search for word definitions, synonyms, and pronunciations.</p>
                    <a href="https://github.com/Gidayi-dev/Dictionary-app" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                </div>

                <div className="project-card">
                    <img src={Landing} alt="Landing Page" />
                    <h3>Landing Page</h3>
                    <p>A modern and responsive landing page I designed as a demo to perfect on my Cascading Style Sheets skills.</p>
                    <a href="https://github.com/Gidayi-dev/Landing-Page" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                </div>

                <div className="project-card">
                    <img src={Mutech} alt="Mutech Project" />
                    <h3>Mutech</h3>
                    <p>An innovative web application for Mutech, providing seamless access to their services and information.</p>
                    <a href="https://github.com/Gidayi-dev/MUT" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                </div>

                <div className="project-card">
                    <img src={Tudo} alt="Tudo Healthcare Website" />
                    <h3>tudo Healthcare Website</h3>
                    <p>A healthcare platform aimed at connecting patients with doctors and healthcare services.</p>
                    <a href="https://github.com/your-tudo-healthcare-link" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                </div>

                <div className="project-card">
                    <img src={Urban} alt="Urban Have Apartments" />
                    <h3>Urban Have Apartments</h3>
                    <p>A real estate website showcasing available properties for rent and purchase at Urban Have Apartments.</p>
                    <a href="https://github.com/Gidayi-dev/URBAN-HAVEN-APARTMENTS" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                </div>

                <div className="project-card">
                    <img src={List} alt="To-do List" />
                    <h3>To-do List</h3>
                    <p>A simple to-do list app for managing tasks, with the ability to add, remove, and mark tasks as complete.</p>
                    <a href="https://github.com/Gidayi-dev/To-do-list" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                </div>
            </div>
        </div>
    );
}

export default Projects;
