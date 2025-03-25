import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const userID = 'YOUR_USER_ID';

    emailjs.send(serviceID, templateID, {
      name: formData.name,
      email: formData.email,
      message: formData.message
    }, userID)
      .then((result) => {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p className="subtitle">Have a project in mind or want to discuss opportunities? Let's connect!</p>
        </div>
        
        <div className="contact-content">
          <form onSubmit={sendEmail} className="contact-form">
            <div className="form-group floating-label">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={formData.name ? 'has-value' : ''}
              />
              <label htmlFor="name">Your Name</label>
            </div>
            
            <div className="form-group floating-label">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={formData.email ? 'has-value' : ''}
              />
              <label htmlFor="email">Your Email</label>
            </div>
            
            <div className="form-group floating-label">
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className={formData.message ? 'has-value' : ''}
              />
              <label htmlFor="message">Your Message</label>
            </div>
            
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <FaPaperPlane className="icon" /> Send Message
                </>
              )}
            </button>
            
            {status && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}
          </form>
          
          <div className="contact-info">
            <div className="direct-contact">
              <h3>Direct Contact</h3>
              <a href="mailto:erandarandika9@gmail.com" className="email-link">
                erandarandika9@gmail.com
              </a>
            </div>
            
            <div className="social-links">
              <h3>Find Me On</h3>
              <div className="social-icons">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;