import "./hero.css";
import heroImage from "../assets/hero.jpg";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1>Hello👋, I am Millyannah Gidayi</h1>
        <h1>
          <TypeAnimation
            sequence={[
              "A Fullstack Developer,",
              1000,
              "UI & UX Designer,",
              1000,
              "Welcome to My Portfolio!",
              1000,
              "I have interest in DataScience and AI engineering too,",
              1000,
              "Passionate about coding with proficiency in,",
              1000,
              "Javascript,",
              1000,
              "React,",
              1000,
              "ExpressJs,",
              1000,
              "Python,",
              1000,
              "PowerBI,",
              1000,
              "NodeJs,",
              1000,
              "Ruby on rails,",
              1000,
              "Figma.",
              1000,

            ]}
            wrapper="div"
            repeat={Infinity}
            speed={10}
          />
        </h1>
      </div>
    </div>
  );
}

export default Hero;
