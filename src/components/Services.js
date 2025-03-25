import React, { useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Services.css';

import projectImage1 from '../assets/images/img_no1.webp';
import projectImage2 from '../assets/images/img_no2.webp';
import projectImage3 from '../assets/images/img_no3.webp';

const Services = () => {
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

  const projects = [
    {
      title: "Mobile Selling Helper App",
      description: "A Flutter-based mobile application designed to assist sellers by streamlining inventory management, tracking sales, and providing real-time analytics for small businesses on iOS and Android.",
      image: projectImage1,
      tags: ["Flutter", "Firebase", "Dart"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Elephant Protection System",
      description: "A web application developed with React and Express to monitor elephant movements near railway tracks, using real-time data to alert train operators and prevent accidents in wildlife zones.",
      image: projectImage2,
      tags: ["React", "Express", "Node.js"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Rent Bodim House",
      description: "A Flutter-crafted mobile app that simplifies finding and renting boarding houses, offering features like location-based search, pricing filters, and direct booking for students and travelers.",
      image: projectImage3,
      tags: ["Flutter", "Google Maps API", "Dart"],
      links: {
        github: "#",
        live: "#"
      }
    }
  ];

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing my best work and technical solutions</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              className="project-card" 
              key={index}
              ref={el => (cardsRef.current[index] = el)}
            >
              <div className="card-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image" 
                />
                <div className="image-overlay"></div>
              </div>
              
              <div className="card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.links.github} 
                    className="link-button github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="link-icon" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.links.live} 
                    className="link-button live"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="link-icon" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;