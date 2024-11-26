import "./footer.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://github.com/gidayi-dev"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/millyannah-gidayi"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:millyannahi@gmail.com" target="_blank" rel="noreferrer">
          <MdEmail />
        </a>
        <a href="https://x.com/@IMillyannah" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a
          href="https://stackoverflow.com/users/27302740/gidayi-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaStackOverflow />
        </a>
      </div>
      <p className="footer-text">Designed and developed by Gidayi-dev</p>
    </footer>
  );
}

export default Footer;
