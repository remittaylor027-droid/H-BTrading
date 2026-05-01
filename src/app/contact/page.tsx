import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import styles from './ContactPage.module.css';

export const metadata = {
  title: 'Get Consultation | H&B Trading',
  description: 'Book a free consultation with our immigration experts. Start your global journey with H&B Trading today.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className={styles.pageHeader}>
          <div className="container">
            <h1 className={styles.pageTitle}>Get a Free Consultation</h1>
            <p className={styles.pageSubtitle}>
              Take the first step towards your international goals. Our experts are ready to assist you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <div className={`container ${styles.contactGrid}`}>
            
            {/* Left Side: Contact Info */}
            <div className={styles.contactInfo}>
              <h2 className={styles.infoTitle}>Let's Talk</h2>
              <p className={styles.infoDesc}>
                Whether you're planning to study abroad, seeking global career opportunities, or expanding your business internationally, we have the expertise to guide you.
              </p>
              
              <div className={styles.infoBlock}>
                <h3 className={styles.infoLabel}>📍 Our Location</h3>
                <p className={styles.infoText}>DHA phase, 3 60 K Block,<br/>Lahore, Pakistan</p>
              </div>
              
              <div className={styles.infoBlock}>
                <h3 className={styles.infoLabel}>📞 Direct Phone</h3>
                <p className={styles.infoText}>+92 327 7700016</p>
              </div>
              
              <div className={styles.infoBlock}>
                <h3 className={styles.infoLabel}>✉️ Email Address</h3>
                <p className={styles.infoText}>info@h&btrading.com</p>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.infoLabel}>🕒 Business Hours</h3>
                <p className={styles.infoText}>Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 2:00 PM</p>
              </div>

              <div className={styles.mapContainer}>
                <div className={styles.mapPlaceholder}>
                  <div className={styles.mapOverlay}>Lahore Office</div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div>
              <ContactForm />
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
