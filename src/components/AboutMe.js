import React, { useEffect, useRef } from 'react';
import './AboutMe.css';

const Certification = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% visible
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <section id="certification" className="certification">
      <div className="certification-container">
        <div className="certification-card" ref={cardRef}>
          <h2>ICD - ICET Certified Developer</h2>
          <p className="subtitle">Institute of Computer Engineering Technology</p>
          <p className="description">
            The training provided by the institute offers the knowledge required to become skilled in computer engineering and technology, enhancing expertise in software development and system design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certification;