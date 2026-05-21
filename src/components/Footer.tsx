"use client";

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';

const Footer = () => {
  const newsletterRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterRef.current) return;

    setIsSubmitting(true);
    setStatus('idle');

    emailjs.sendForm(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_NEWSLETTER,
      newsletterRef.current,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    .then((result) => {
      console.log('Newsletter subscription successful!', result.text);
      setIsSubmitting(false);
      setStatus('success');
      newsletterRef.current?.reset();
      setTimeout(() => setStatus('idle'), 5000);
    }, (error) => {
      console.error('Newsletter subscription failed:', error.text);
      setIsSubmitting(false);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    });
  };

  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>

          <div className={styles.footerBrand}>
            <Link href="/" className={styles.logo}>
              H&B <span>Trading</span>
            </Link>
            <p className={styles.footerDesc}>
              Your trusted partner for global immigration. We provide expert guidance to make the complex visa process simple and accessible for professionals and students worldwide.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
            </div>
          </div>

          <div className={styles.footerLinksGroup}>
            <h4 className={styles.footerHeading}>Company</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/about">Why Choose Us</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
            </ul>
          </div>

          <div className={styles.footerLinksGroup}>
            <h4 className={styles.footerHeading}>Immigration</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="#work-permits">Work Permits</Link></li>
              <li><Link href="#visit-visas">Visit Visas</Link></li>
              <li><Link href="#study-visas">Study Visas</Link></li>
              <li><Link href="#business-visas">Business Visas</Link></li>
            </ul>
          </div>

          <div className={styles.footerNewsletter}>
            <h4 className={styles.footerHeading}>Stay Updated</h4>
            <p className={styles.newsletterDesc}>Subscribe to our newsletter for the latest immigration news.</p>
            <form ref={newsletterRef} className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
              <input type="email" name="user_email" placeholder="Email Address" className={styles.newsletterInput} required />
              <button type="submit" className={styles.newsletterBtn} disabled={isSubmitting}>
                {isSubmitting ? '...' : '→'}
              </button>
            </form>
            {status === 'success' && <p style={{ color: '#10b981', fontSize: '0.85rem', marginTop: '0.5rem' }}>Subscribed successfully!</p>}
            {status === 'error' && <p style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.5rem' }}>Try again later.</p>}
            
            <div className={styles.contactInfo}>
              <p>📍 DHA phase, 3 60 K Block, Lahore, Pakistan</p>
              <p>📞 +92 327 7700016</p>
              <p>✉️ info@hb-trading.com</p>
            </div>
          </div>

        </div>

        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} H&B Trading. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
