import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './styles.css';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <div className={darkMode ? 'app dark' : 'app light'}>
        <nav className="navbar">
          <h1 className="logo">Nirmal Barot</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="toggle-switch" onClick={() => setDarkMode(!darkMode)}>
            <span className="slider"></span>
          </div>
        </nav>
      {/* <Hero darkMode={darkMode} /> */}
        <Routes>
          <Route path="/" element={<Hero darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>

        <Footer darkMode={darkMode} />
      </div>
    </Router>
    
  );
};

export default App;
