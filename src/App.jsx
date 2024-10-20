
import './App.css'
import Sidebar from "./components/sidebar";
import Hero from "./components/hero";
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
    <Hero />
    </div>
    <AboutMe />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
    </>
  )
}

export default App
