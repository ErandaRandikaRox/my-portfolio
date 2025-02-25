import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Flutter', percentage: 100 },
    { name: 'React', percentage: 90 },
    { name: 'MySQL', percentage: 85 },
    { name: 'Express', percentage: 72 },
    { name: 'HTML', percentage: 60 },
    { name: 'CSS', percentage: 60 },
    { name: 'JavaScript', percentage: 50 }, // Replaced duplicate "Express" with JavaScript
    { name: 'Python', percentage: 50 },
  ];

  return (
    <div className="skills-container">
      <h3 className="skills-title">Professional Skills</h3>
      <div className="skills-graph">
        {skills.map((skill, index) => (
          <div key={index} className="skill-bar">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-progress">
              <div
                className="skill-level"
                style={{ height: `${skill.percentage}%` }}
              >
                {skill.percentage}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;