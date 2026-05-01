"use client";

import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>Book Your Assessment</h3>
      <p className={styles.formDesc}>Fill out the form below and one of our consultants will be in touch within 24 hours.</p>

      {isSubmitted && (
        <div className={styles.successMessage}>
          Thank you! Your request has been sent successfully. We will contact you shortly.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Full Name *</label>
          <input type="text" id="name" required className={styles.input} placeholder="John Doe" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email Address *</label>
          <input type="email" id="email" required className={styles.input} placeholder="john@example.com" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>Phone Number</label>
          <input type="tel" id="phone" className={styles.input} placeholder="+92 327 7700016" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="service" className={styles.label}>Service Interested In *</label>
          <select id="service" required className={styles.select}>
            <option value="">Select a service...</option>
            <option value="work">Work Permits</option>
            <option value="visit">Visit Visas</option>
            <option value="study">Study Visas</option>
            <option value="pr">Permanent Residence (PR)</option>
            <option value="business">Business / Investor Visas</option>
            <option value="other">Other Inquiry</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Tell us about your goals</label>
          <textarea id="message" className={styles.textarea} placeholder="I am looking to relocate to Canada for work..."></textarea>
        </div>

        <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
          {isSubmitting ? 'Sending Request...' : 'Submit Request'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
