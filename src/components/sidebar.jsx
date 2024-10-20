import "./sidebar.css";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import headshot from "../assets/headshot.jpg";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="profile">
                <img src={headshot} alt="Gidayi Headshot" className="headshot" />
            </div>
            <h3>Millyannah Gidayi</h3>
            <div className="social-icons">
                <a href="https://github.com/gidayi-dev" target="_blank">
                <FaGithub />
                </a>
                <a href="https://linkedin.com/in/millyannah-gidayi" target="_blank">
                <FaLinkedin />
                </a>
                <a href="millyannahi@gmail.con" target="_blank">
                <MdEmail />
                </a>
                <a href="https://x.com/in/IMillyannah">
                <FaTwitter />
                </a>
            </div>
            <nav className="nav-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About me</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact me</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;