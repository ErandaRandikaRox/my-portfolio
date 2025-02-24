import React, { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            entry.target.style.animationDelay = `${index * 0.2}s`;
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="experience-left">
          <h2>What I Do</h2>
        </div>
        <div className="experience-right">
          <div className="experience-cards">
            <div
              className="card"
              ref={el => (cardsRef.current[0] = el)}
            >
              <h4>EXPERIENCE</h4>
              <p>
                I have worked on various projects, honing my skills in software development, collaborating with teams, and delivering impactful solutions across multiple domains.
              </p>
            </div>
            <div
              className="card"
              ref={el => (cardsRef.current[1] = el)}
            >
              <h4>App Development</h4>
              <p>
                I design and build mobile applications using frameworks like Flutter and React Native, delivering seamless, user-friendly experiences across iOS and Android platforms.
              </p>
            </div>
            <div
              className="card"
              ref={el => (cardsRef.current[2] = el)}
            >
              <h4>Web Development</h4>
              <p>
                I create responsive, high-performance websites with modern technologies like React, JavaScript, and CSS, ensuring robust functionality and stunning visuals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;