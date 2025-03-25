import React, { useState, useEffect } from 'react';
import './Intro.css';

import githubIcon from '../assets/svg/github.svg';
import facebookIcon from '../assets/svg/facebook.svg';
import linkedinIcon from '../assets/svg/icons8-linkedin-100.svg';
import flutterIcon from '../assets/svg/flutter.svg';
import reactIcon from '../assets/svg/react.svg';
import pythonIcon from '../assets/svg/python.svg';
import javascriptIcon from '../assets/svg/javascript.svg';
import expressIcon from '../assets/svg/express.svg';
import mongodbIcon from '../assets/svg/mongodb.svg';
import mysqlIcon from '../assets/svg/mysql.svg';

import myPhoto from '../assets/images/2.jpg';

const Intro = () => {
  const jobTitles = ['App Developer', 'Web Developer', 'Python Developer'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
        setIsTyping(true);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, [jobTitles.length]);

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="intro" className="intro">
      <div className="intro-container">
        <div className="intro-left">
          <div className="welcome-badge">WELCOME!</div>
          <h1>
            Hi, I'm <span className="highlight-name">Eranda Randika</span>
          </h1>
          <div className="job-title-container">
            <h3 className={`job-title ${isTyping ? 'typing' : ''}`}>
              {jobTitles[currentTitleIndex]}
            </h3>
            <span className="cursor">|</span>
          </div>
          <p className="intro-description">
            I'm passionate about creating innovative digital solutions. With expertise in multiple programming languages and frameworks, I transform ideas into functional, beautiful applications. Continuous learning and staying updated with the latest technologies drive my work.
          </p>
          
          <div className="intro-columns">
            <div className="column find-me">
              <h4 className="section-subtitle">FIND ME ON</h4>
              <div className="social-links">
                <button
                  className="social-button github"
                  onClick={() => openLink('https://github.com/ErandaRandikaRox')}
                  aria-label="GitHub"
                >
                  <img src={githubIcon} alt="GitHub" className="social-icon" />
                  <span>GitHub</span>
                </button>
                <button
                  className="social-button facebook"
                  onClick={() => openLink('https://web.facebook.com/?_rdc=1&_rdr')}
                  aria-label="Facebook"
                >
                  <img src={facebookIcon} alt="Facebook" className="social-icon" />
                  <span>Facebook</span>
                </button>
                <button
                  className="social-button linkedin"
                  onClick={() => openLink('https://www.linkedin.com/feed/')}
                  aria-label="LinkedIn"
                >
                  <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                  <span>LinkedIn</span>
                </button>
              </div>
            </div>
            
            <div className="column skills">
              <h4 className="section-subtitle">TECH STACK</h4>
              <div className="skills-grid">
                <div className="skill-category">
                  <h5 className="skill-category-title">Frontend</h5>
                  <div className="skill-items">
                    <div className="skill-item">
                      <img src={flutterIcon} alt="Flutter" className="skill-icon" />
                      <span>Flutter</span>
                    </div>
                    <div className="skill-item">
                      <img src={reactIcon} alt="React" className="skill-icon" />
                      <span>React</span>
                    </div>
                  </div>
                </div>
                
                <div className="skill-category">
                  <h5 className="skill-category-title">Backend</h5>
                  <div className="skill-items">
                    <div className="skill-item">
                      <img src={pythonIcon} alt="Python" className="skill-icon" />
                      <span>Python</span>
                    </div>
                    <div className="skill-item">
                      <img src={expressIcon} alt="Express" className="skill-icon" />
                      <span>Express</span>
                    </div>
                  </div>
                </div>
                
                <div className="skill-category">
                  <h5 className="skill-category-title">Databases</h5>
                  <div className="skill-items">
                    <div className="skill-item">
                      <img src={mongodbIcon} alt="MongoDB" className="skill-icon" />
                      <span>MongoDB</span>
                    </div>
                    <div className="skill-item">
                      <img src={mysqlIcon} alt="MySQL" className="skill-icon" />
                      <span>MySQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="intro-right">
          <div className="photo-container">
            <img src={myPhoto} alt="Eranda Randika" className="intro-photo" />
            <div className="photo-decoration"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;