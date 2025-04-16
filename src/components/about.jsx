import aboutImage from "../assets/about.jpg";
import "./about.css";

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-description">
        <h2>About Me</h2>
        <p>
          Hi! I’m Millyannah Gidayi, a passionate Fullstack and Mobile Developer
          with a growing love for Machine Learning and Data Science. I enjoy
          building clean, intuitive applications whether it’s a dynamic web
          interface, a seamless mobile app, or a data-driven dashboard.
        </p>
        <p>
          With strong experience in JavaScript, React, Python, and mobile
          technologies, I love turning ideas into user-friendly experiences.
          Lately, I’ve been exploring how to turn messy data into meaningful
          insights using tools like Pandas, NumPy, Seaborn, and Matplotlib.
        </p>
        <p>
          Outside of coding, I’m usually geeking out over emerging tech, working
          on side projects, or learning something new from the dev community and
          watching documentaries. I believe in the power of curiosity,
          collaboration, and always leveling up.
        </p>
        <p>
          Let’s build, learn, or chat tech together I'm always open to great
          convos and cool collabs!
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="I love coding" />
      </div>
    </div>
  );
}

export default AboutMe;
