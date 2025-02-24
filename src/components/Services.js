import React, { useEffect, useRef } from 'react';
import './Services.css';

import projectImage1 from '../assets/images/img_no1.webp';
import projectImage2 from '../assets/images/img_no2.webp';
import projectImage3 from '../assets/images/img_no3.webp';
import githubIcon from '../assets/svg/github.svg';

const Services = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            entry.target.style.animationDelay = `${index * 0.2}s`; // Staggered delay
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% visible
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
    <section id="services" className="services">
      <div className="services-container">
        <h2>My Projects</h2>
        <h3 className="subtitle">Explore My Work</h3>
        <div className="services-cards">
          <div className="card" ref={el => (cardsRef.current[0] = el)}>
            <img src={projectImage1} alt="Mobile Selling Helper App" className="card-image" />
            <h4>Mobile Selling Helper App</h4>
            <p>
              A Flutter-based mobile application designed to assist sellers by streamlining inventory management, tracking sales, and providing real-time analytics for small businesses on iOS and Android.
            </p>
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </div>
          <div className="card" ref={el => (cardsRef.current[1] = el)}>
            <img src={projectImage2} alt="Elephant Protect from Train Accident" className="card-image" />
            <h4>Elephant Protect from Train Accident</h4>
            <p>
              A web application developed with React and Express to monitor elephant movements near railway tracks, using real-time data to alert train operators and prevent accidents in wildlife zones.
            </p>
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </div>
          <div className="card" ref={el => (cardsRef.current[2] = el)}>
            <img src={projectImage3} alt="Rent Bodim House" className="card-image" />
            <h4>Rent Bodim House</h4>
            <p>
              A Flutter-crafted mobile app that simplifies finding and renting boarding houses, offering features like location-based search, pricing filters, and direct booking for students and travelers.
            </p>
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;