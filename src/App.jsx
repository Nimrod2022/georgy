import { useState } from 'react';
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

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
    <Contact darkMode={darkMode} setDarkMode={setDarkMode} />
    
    </>
  )
}

export default App
