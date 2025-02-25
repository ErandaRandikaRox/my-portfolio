import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <h3 className="education-year">2022</h3>
      <h4 className="education-title">Educational Qualities</h4>
      <div className="education-cards">
        <div className="education-card">
          <h5>Udemy Courses Completed</h5>
          <p>
            I completed comprehensive Udemy courses in Web Development and Flutter App Development, mastering key skills such as HTML, CSS, JavaScript, React, and Flutter for building responsive websites and cross-platform mobile apps.
          </p>
        </div>
        <div className="education-card">
          <h5>Self-Taught Programmer</h5>
          <p>
            I have been learning programming languages and frameworks on my own since 2022. I have mastered many technologies, including React, JavaScript, Python, Django, Flutter, Firebase, MongoDB, and MySQL, enabling me to tackle diverse development challenges independently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;