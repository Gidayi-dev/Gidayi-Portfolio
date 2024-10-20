
import './App.css'
import Sidebar from "./components/sidebar";
import Hero from "./components/hero";
import AboutMe from './components/about';

function App() {

  return (
    <>
    <div className='app-container'>
    <Sidebar />
    <Hero />
    </div>
    <AboutMe />
    </>
  )
}

export default App
