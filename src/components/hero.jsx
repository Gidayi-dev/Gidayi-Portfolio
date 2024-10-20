import { TypeAnimation } from "react-type-animation";
import "./hero.css";
import heroImage from '../assets/hero.jpg'; 

function Hero () {
    return (
        <div className="hero">
            <h1>
                Hello👋, I am Millyannah Gidayi
            </h1>
            <h2>
                <TypeAnimation
                sequence={['A Fullstack Developer', 'Passionate about coding with proficiency in', 'Javascript', 'React', 'ExpressJs', 'Python', 'Flask', 'Django']}
                wrapper="p"
                repeat={Infinity}
                />
            </h2>
        </div>
    )
}

export default Hero;