import "./sidebar.css";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import headshot from "../assets/headshot.jpg";

function Sidebar() {
    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="sidebar">
            <div className="profile">
                <img src={headshot} alt="Gidayi Headshot" className="headshot" />
            </div>
            <h3>Millyannah Gidayi</h3>
            <div className="social-icons">
                <a href="https://github.com/gidayi-dev" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/millyannah-gidayi" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href="mailto:millyannahi@gmail.com" target="_blank" rel="noreferrer">
                    <MdEmail />
                </a>
                <a href="https://x.com/in/IMillyannah" target="_blank" rel="noreferrer">
                    <FaTwitter />
                </a>
            </div>
            <nav className="nav-links">
                <ul>
                    <li><a href="#hero" onClick={() => scrollToSection('hero')}>Home</a></li>
                    <li><a href="#about" onClick={() => scrollToSection('home')}>About me</a></li>
                    <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
                    <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
                    <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact me</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
