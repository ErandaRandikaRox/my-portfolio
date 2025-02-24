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

import myPhoto from '../assets/potos/2.jpg'; 

const Intro = () => {
  const jobTitles = ['App Developer', 'Web Developer', 'Python Developer'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [jobTitles.length]);

  // Handlers for social media links
  const openLink = (url) => {
    window.open(url, '_blank'); // Opens URL in a new tab
  };

  return (
    <section id="intro" className="intro">
      <div className="intro-container">
        <div className="intro-left">
          <h2>WELCOME!</h2>
          <h1>Hi, I'm Eranda Randika</h1>
          <h3>{jobTitles[currentTitleIndex]}</h3>
          <p>
            I like to study new things. Being knowledgeable about PROGRAMMING or any subject is an ongoing process, and I’m always proactive about seeking new opportunities to develop and grow in my role. Those opportunities could be in the form of training, a conference, listening to a speaker, or taking on a new project, but the motivation is to increase my knowledge of the field.
          </p>
          <div className="intro-columns">
            <div className="column find-me">
              <h4>FIND ME IN</h4>
              <div className="button-grid find-me-row">
                <button
                  className="svg-button"
                  onClick={() => openLink('https://github.com/ErandaRandikaRox')}
                >
                  <img src={githubIcon} alt="GitHub" className="svg-icon" />
                </button>
                <button
                  className="svg-button"
                  onClick={() => openLink('https://web.facebook.com/?_rdc=1&_rdr')}
                >
                  <img src={facebookIcon} alt="Facebook" className="svg-icon" />
                </button>
                <button
                  className="svg-button"
                  onClick={() => openLink('https://www.linkedin.com/feed/')}
                >
                  <img src={linkedinIcon} alt="LinkedIn" className="svg-icon" />
                </button>
              </div>
            </div>
            <div className="column skills">
              <h4>Best Skill On</h4>
              <div className="skills-grid">
                <div className="button-row">
                  <button className="svg-button">
                    <img src={flutterIcon} alt="Flutter" className="svg-icon" />
                  </button>
                  <button className="svg-button">
                    <img src={reactIcon} alt="React" className="svg-icon" />
                  </button>
                  <button className="svg-button">
                    <img src={pythonIcon} alt="Python" className="svg-icon" />
                  </button>
                </div>
                <div className="button-row">
                  <button className="svg-button">
                    <img src={javascriptIcon} alt="JavaScript" className="svg-icon" />
                  </button>
                  <button className="svg-button">
                    <img src={expressIcon} alt="Express" className="svg-icon" />
                  </button>
                  <button className="svg-button">
                    <img src={mongodbIcon} alt="MongoDB" className="svg-icon" />
                  </button>
                </div>
                <div className="button-row centered">
                  <button className="svg-button">
                    <img src={mysqlIcon} alt="MySQL" className="svg-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="intro-right">
          <img src={myPhoto} alt="Eranda Randika" className="intro-photo" />
        </div>
      </div>
    </section>
  );
};

export default Intro;