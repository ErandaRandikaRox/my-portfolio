import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close menu after clicking
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <span>Eranda Randika</span>
        </div>
        <div className="nav-right">
          <span>📞 0778454338</span>
        </div>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'} {/* Hamburger icon (☰) or close (✕) */}
        </button>
        <div className={`nav-center ${isOpen ? 'open' : ''}`}>
          <button onClick={() => scrollToSection('about')}>About Me</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
          <button onClick={() => scrollToSection('experience')}>Experience</button>
          <button onClick={() => scrollToSection('services')}>Services</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;