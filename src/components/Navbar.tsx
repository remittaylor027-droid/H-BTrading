import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          H&B <span>Trading</span>
        </Link>
        
        <div className={styles.navLinks}>
          <Link href="/services" className={styles.link}>Services</Link>
          <Link href="/about" className={styles.link}>About Us</Link>
          <Link href="/testimonials" className={styles.link}>Testimonials</Link>
          <Link href="/contact" className="btn-primary">Get Consultation</Link>
        </div>
        
        <button className={styles.mobileMenuBtn} aria-label="Menu">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
