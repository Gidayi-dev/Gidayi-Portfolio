import aboutImage from '../assets/about.jpg';
import './about.css';

function AboutMe() {
    return (
        <div className="about-me">
            <div className='about-description'>
            <h2>About Me</h2>
            <p>
                Hi! I’m Millyannah Gidayi, a passionate Fullstack Developer with expertise in various technologies.
                I enjoy creating web applications that not only look great but also provide a seamless user experience.
                I have a strong background in JavaScript, React, Python, and more.
            </p>
            <p>
                When I’m not coding, you can find me exploring new tech trends, working on personal projects, or
                collaborating with other developers. I believe in the power of community and continuous learning,
                and I'm always eager to improve my skills.
            </p>
            <p>
                Feel free to reach out to me if you want to collaborate or just want to chat about technology!
            </p>
            </div>
            <div className='about-image'>
                <img src={aboutImage} alt="I love coding" />
            </div>
        </div>
    );
}

export default AboutMe;