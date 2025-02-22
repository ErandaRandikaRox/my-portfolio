import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <span>Eranda Randika</span>
        </div>
        <div className="nav-center">
          <button onClick={() => scrollToSection('about')}>About Me</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
          <button onClick={() => scrollToSection('experience')}>Experience</button>
          <button onClick={() => scrollToSection('services')}>Services</button>
        </div>
        <div className="nav-right">
          <span>📞 0778454338</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;