import React, { useState } from "react";
import "./sidebar.css";
import { MdEmail } from "react-icons/md";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import headshot from "../assets/headshot.jpg";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen); 
    };

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <button className="menu-icon" onClick={toggleSidebar}>
                ☰
            </button>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
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
                    <a href="https://x.com/@IMillyannah" target="_blank" rel="noreferrer">
                        <FaTwitter />
                    </a>
                </div>
                <nav className="nav-links">
                    <ul>
                        <li><a href="#hero" onClick={() => scrollToSection('hero')}>Home</a></li>
                        <li><a href="#about" onClick={() => scrollToSection('about')}>About me</a></li>
                        <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
                        <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
                        <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact me</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Sidebar;
