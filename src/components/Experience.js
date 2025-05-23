// Experience.js
import React, { useEffect, useRef } from 'react';
import './Experience.css';
import { FaMobileAlt, FaCode, FaLaptopCode } from 'react-icons/fa';

const Experience = () => {
  const cardsRef = useRef([]);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            entry.target.style.animationDelay = `${index * 0.15}s`;
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <div className="experience-container">
        <div className="experience-grid">
          <div
            className="experience-card primary"
            ref={el => (cardsRef.current[0] = el)}
          >
            <div className="card-icon">
              <div className="icon-background"></div>
              <FaCode className="icon" />
            </div>
            <h3 className="card-title">Full-Stack Development</h3>
            <p className="card-description">
              End-to-end web application development with modern frameworks like React, Node.js, and Express. I build scalable, performant solutions with clean architecture.
            </p>
            <div className="card-footer">
              <span className="experience-years">3+ Years Experience</span>
            </div>
          </div>
          
          <div
            className="experience-card"
            ref={el => (cardsRef.current[1] = el)}
          >
            <div className="card-icon">
              <div className="icon-background"></div>
              <FaMobileAlt className="icon" />
            </div>
            <h3 className="card-title">Mobile Development</h3>
            <p className="card-description">
              Cross-platform mobile apps using Flutter and React Native. I create smooth, native-like experiences with attention to UI/UX and performance optimization.
            </p>
            <div className="card-footer">
              <span className="experience-years">2+ Years Experience</span>
            </div>
          </div>
          
          <div
            className="experience-card"
            ref={el => (cardsRef.current[2] = el)}
          >
            <div className="card-icon">
              <div className="icon-background"></div>
              <FaLaptopCode className="icon" />
            </div>
            <h3 className="card-title">Frontend Engineering</h3>
            <p className="card-description">
              Beautiful, responsive interfaces with React, TypeScript, and modern CSS. I focus on creating intuitive user experiences with pixel-perfect implementation.
            </p>
            <div className="card-footer">
              <span className="experience-years">4+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;