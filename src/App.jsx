import { useState } from 'react';
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  

  return (
    <>
    <Navbar darkMode={darkMode} setDarkMode={toggleDarkMode}/>

    <Home darkMode={darkMode} setDarkMode={toggleDarkMode}/>
    <About darkMode={darkMode} setDarkMode={toggleDarkMode} />
    <Services darkMode={darkMode} setDarkMode={toggleDarkMode} />
    <Projects darkMode={darkMode} setDarkMode={setDarkMode} />
    <Contact darkMode={darkMode} setDarkMode={setDarkMode} />
    <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    
    </>
  )
}

export default App
