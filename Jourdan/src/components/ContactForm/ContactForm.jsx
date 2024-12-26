import React, { useState } from 'react';
import './ContactForm.css'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('All fields are required!');
    } else {
      console.log('Form Submitted:', formData);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">
          <span>NOUS</span>
          <span>CONTACTER</span>
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="name" className="label">
            
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="input"
            />
          </div>

          <div className="input-group">
            <label htmlFor="email" className="label">

            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Persona"
              required
              className="input"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="label">
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="input"
          />
        </div>

        <div>
          <label htmlFor="message" className="label">
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="textarea"
          />
        </div>

        <div className='contact-submit-btn'>
          <button
            type="submit"
            className="button"
          >
            ENVOI
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
