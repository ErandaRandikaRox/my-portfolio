import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  // Initialize EmailJS with your Public Key (User ID)
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID || 'YOUR_USER_ID'); // Replace with your User ID if not using .env
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Use environment variables or replace with your actual credentials
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';

    emailjs
      .send(serviceID, templateID, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })
      .then(
        (result) => {
          console.log('Success:', result.text);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Error:', error); // Log full error object
          setStatus(`Failed to send message: ${error.text || 'Unknown error'}`);
        }
      );
  };

  return (
    <section id="contact">
      <div>
        <h2>Contact</h2>
        <p>Feel free to reach out to me!</p>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
        {status && <p className="status-message">{status}</p>}
        <p className="email-fallback">
          Or email me directly at:{' '}
          <a href="mailto:erandarandika200112drckstudy@gmail.com">
            erandarandika9@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;