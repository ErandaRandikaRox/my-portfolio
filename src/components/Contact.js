import React, { useState } from 'react';
import { FaPaperPlane, FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
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

  const sendWhatsAppMessage = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const phoneNumber = '94778454338'; // WhatsApp number in international format without +
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    setStatus({ type: 'success', message: 'Redirecting to WhatsApp...' });
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p className="subtitle">Have a project in mind or want to discuss opportunities? Let's connect!</p>
        </div>
        
        <div className="contact-content">
          <form onSubmit={sendWhatsAppMessage} className="contact-form">
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
                  <FaWhatsapp className="icon" /> Send via WhatsApp
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
              <div className="whatsapp-contact">
                <a href="https://wa.me/94778454338" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp /> 077 845 4338
                </a>
              </div>
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