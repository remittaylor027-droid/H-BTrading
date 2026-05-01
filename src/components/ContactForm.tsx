"use client";

import React, { useState, useRef } from 'react';
import styles from './ContactForm.module.css';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setErrorMessage('');
    
    emailjs.sendForm(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_CONTACT,
      formRef.current,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    .then((result) => {
      console.log('Email successfully sent!', result.text);
      setIsSubmitting(false);
      setIsSubmitted(true);
      formRef.current?.reset();
      
      // Reset success message after 7 seconds
      setTimeout(() => setIsSubmitted(false), 7000);
    }, (error) => {
      console.error('Failed to send email:', error.text);
      setIsSubmitting(false);
      setErrorMessage('Oops! Something went wrong. Please try again later or contact us directly.');
    });
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

      {errorMessage && (
        <div style={{ color: '#dc2626', backgroundColor: '#fee2e2', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', border: '1px solid #fecaca', textAlign: 'center', fontWeight: '600' }}>
          {errorMessage}
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Full Name *</label>
          <input type="text" id="name" name="user_name" required className={styles.input} placeholder="John Doe" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email Address *</label>
          <input type="email" id="email" name="user_email" required className={styles.input} placeholder="john@example.com" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>Phone Number</label>
          <input type="tel" id="phone" name="user_phone" className={styles.input} placeholder="+92 327 7700016" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="service" className={styles.label}>Service Interested In *</label>
          <select id="service" name="visa_service" required className={styles.select}>
            <option value="">Select a service...</option>
            <option value="Work Permits">Work Permits</option>
            <option value="Visit Visas">Visit Visas</option>
            <option value="Study Visas">Study Visas</option>
            <option value="Permanent Residence (PR)">Permanent Residence (PR)</option>
            <option value="Business / Investor Visas">Business / Investor Visas</option>
            <option value="Other">Other Inquiry</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Tell us about your goals</label>
          <textarea id="message" name="message" className={styles.textarea} placeholder="I am looking to relocate to Canada for work..."></textarea>
        </div>

        <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
          {isSubmitting ? 'Sending Request...' : 'Submit Request'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
