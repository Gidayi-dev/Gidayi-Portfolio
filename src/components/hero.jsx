import "./hero.css";
import heroImage from "../assets/hero.jpg";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-greeting">Hello 👋, I'm Millyannah Gidayi</h1>
        <h2 className="hero-subtitle">
          <TypeAnimation
            sequence={[
              "I build awesome web and mobile apps.",
              2000, // Increased pause for readability
              "Exploring the world of AI & Data Science.",
              2000,
              "Let's create something amazing together!",
              2000,
            ]}
            wrapper="span" // Changed to span for inline styling
            repeat={Infinity}
            speed={50} // Slower speed for better readability
          />
        </h2>
        <a
          href="https://github.com/Gidayi-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta"
        >
          My Work
        </a>
      </div>
    </div>
  );
}

export default Hero;
