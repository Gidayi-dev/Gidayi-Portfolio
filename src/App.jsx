import Hero from "./components/hero";
import './App.css';
import Sidebar from "./components/sidebar";
import AboutMe from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <>
      <div className='app-container'>
        <Sidebar />
        <div className="hero" id = 'hero'>
          <Hero />
        </div>
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
