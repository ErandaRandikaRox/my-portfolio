import React, { useState, useEffect, useRef } from 'react';
import './AboutMe.css';
import Education from './Education';
import Skills from './Skills';
import ExperienceContent from './ExperienceContent'; // Ensure correct import

const AboutMe = () => {
  const [activeSection, setActiveSection] = useState(null); // Start with null (no content initially)
  const titleRef = useRef(null);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            if (entry.target === titleRef.current) {
              entry.target.style.animationDelay = '0s'; // Title first
            } else {
              entry.target.style.animationDelay = `${index * 0.2}s`; // Buttons staggered
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% visible
    );

    if (titleRef.current) observer.observe(titleRef.current);
    buttonsRef.current.forEach(button => {
      if (button) observer.observe(button);
    });

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      buttonsRef.current.forEach(button => {
        if (button) observer.unobserve(button);
      });
    };
  }, []);

  const handleButtonClick = (section) => {
    setActiveSection(prev => (prev === section ? null : section)); // Toggle or clear active section
  };

  return (
    <section id="about-me" className="about-me">
      <div className="about-me-container">
        <h2 ref={titleRef}>3+ Years of Experience</h2>
        <p className="resume">My Resume</p>
        <div className="button-group">
          <button
            ref={el => (buttonsRef.current[0] = el)}
            className={`about-button ${activeSection === 'education' ? 'active' : ''}`}
            onClick={() => handleButtonClick('education')}
          >
            Education
          </button>
          <button
            ref={el => (buttonsRef.current[1] = el)}
            className={`about-button ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => handleButtonClick('skills')}
          >
            Professional Skills
          </button>
          <button
            ref={el => (buttonsRef.current[2] = el)}
            className={`about-button ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => handleButtonClick('experience')}
          >
            Experience
          </button>
        </div>
        <div className="content-wrapper">
          {activeSection && (
            <>
              {activeSection === 'education' && <Education />}
              {activeSection === 'skills' && <Skills />}
              {activeSection === 'experience' && <ExperienceContent />}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;