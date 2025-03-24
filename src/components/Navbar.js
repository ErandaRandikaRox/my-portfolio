import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close menu after clicking a link
  };

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <span>Eranda Randika</span>
        </div>
        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'} // Accessibility improvement
          aria-expanded={isOpen} // Accessibility improvement
        >
          {isOpen ? '✖' : '☰'} {/* Hamburger or close icon */}
        </button>
        <div className={`nav-center ${isOpen ? 'open' : ''}`}>
          <button onClick={() => scrollToSection('intro')}>Intro</button>
          <button onClick={() => scrollToSection('AboutMe')}>About Me</button>
          <button onClick={() => scrollToSection('experience')}>Experience</button>
          <button onClick={() => scrollToSection('services')}>Services</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;