import React from 'react';
import './ExperienceContent.css';

const ExperienceContent = () => {
  return (
    <div className="experience-container">
      <div className="experience-cards">
        <div className="experience-card">
          <h4>Software Developer</h4>
          <p>
            Worked as a Software Developer from 2022 to 2024, developing mobile and web applications using Flutter, React, and JavaScript. Delivered projects on time, improving user experience for over 10,000 users across various platforms.
          </p>
        </div>
        <div className="experience-card">
          <h4>Freelance Developer</h4>
          <p>
            Since 2024, I’ve been freelancing, creating custom solutions for clients using Python, Django, and MySQL. Built scalable systems for e-commerce and educational platforms, enhancing business efficiency and user satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceContent;