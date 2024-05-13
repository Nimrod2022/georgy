import { useState } from 'react';
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About';
function App() {

  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  

  return (
    <>
    <Navbar darkMode={darkMode} setDarkMode={toggleDarkMode}/>

    <Home darkMode={darkMode} setDarkMode={toggleDarkMode}/>
    <About darkMode={darkMode} setDarkMode={toggleDarkMode} />
    
    </>
  )
}

export default App
