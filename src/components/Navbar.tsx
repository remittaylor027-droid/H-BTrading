"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo} onClick={() => setIsMenuOpen(false)}>
          H&B <span>Trading</span>
        </Link>
        
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksActive : ''}`}>
          <Link href="/services" className={styles.link} onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/about" className={styles.link} onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link href="/testimonials" className={styles.link} onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
          <Link href="/contact" className="btn-primary" onClick={() => setIsMenuOpen(false)}>Get Consultation</Link>
        </div>
        
        <button 
          className={styles.mobileMenuBtn} 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
