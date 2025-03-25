import React, { useState, useEffect, useRef } from 'react';
import { FaGraduationCap, FaCode, FaBriefcase, FaUserTie } from 'react-icons/fa';
import './AboutMe.css';
import Education from './Education';
import Skills from './Skills';
import ExperienceContent from './ExperienceContent';

const AboutMe = () => {
  const [activeSection, setActiveSection] = useState('education');
  const sectionRefs = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const sections = [
    {
      id: 'education',
      title: 'Education',
      icon: <FaGraduationCap />,
      component: <Education />
    },
    {
      id: 'skills',
      title: 'Skills',
      icon: <FaCode />,
      component: <Skills />
    },
    {
      id: 'experience',
      title: 'Experience',
      icon: <FaBriefcase />,
      component: <ExperienceContent />
    }
  ];

  return (
    <section id="about-me" className="about-me-section">
      <div className="about-me-container">
        <div className="section-header">
          <h2 ref={titleRef} className="section-title">
            <FaUserTie className="title-icon" />
            Professional Journey
          </h2>
          <p className="section-subtitle">3+ years of development experience</p>
        </div>

        <div className="tab-container">
          {sections.map((section, index) => (
            <button
              key={section.id}
              ref={el => (sectionRefs.current[index] = el)}
              className={`tab-button ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.icon}
              <span>{section.title}</span>
            </button>
          ))}
        </div>

        <div className="content-container">
          {sections.find(s => s.id === activeSection)?.component}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;