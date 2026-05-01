import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import Link from 'next/link';
import styles from './AboutPage.module.css';

export const metadata = {
  title: 'About Us | H&B Trading',
  description: 'Learn about H&B Trading, our mission, our expert team, and why we are the trusted choice for global immigration services.',
};

const teamMembers = [
  {
    name: 'Alexander Sterling',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    bio: 'With over 15 years in global mobility, Alexander founded H&B Trading to simplify the complexities of international immigration.'
  },
  {
    name: 'Sophia Chen',
    role: 'Lead Immigration Consultant',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    bio: 'Sophia specializes in corporate immigration and Express Entry programs, boasting a 99% success rate for her clients over the last decade.'
  },
  {
    name: 'Marcus Thorne',
    role: 'Senior Global Advisor',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    bio: 'Marcus brings extensive expertise in navigating the intricate legal requirements of UK and European work and study visas.'
  }
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className={styles.pageHeader}>
          <div className={`container ${styles.headerContainer}`}>
            <h1 className={styles.pageTitle}>Our Story</h1>
            <p className={styles.pageSubtitle}>
              Empowering global citizens to live, work, and study anywhere in the world.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className={`section ${styles.missionSection}`}>
          <div className={`container ${styles.missionGrid} reveal-stagger`}>
            <div className={styles.missionCard}>
              <div className={styles.iconBox}>🎯</div>
              <h3 className={styles.missionTitle}>Our Mission</h3>
              <p className={styles.missionText}>
                To demystify the global immigration process, providing transparent, ethical, and expert guidance that turns our clients' international aspirations into reality. We believe that borders should not limit human potential.
              </p>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.iconBox}>👁️</div>
              <h3 className={styles.missionTitle}>Our Vision</h3>
              <p className={styles.missionText}>
                To be the world's most trusted and innovative immigration consultancy firm, setting the gold standard for client success and global mobility solutions across all continents.
              </p>
            </div>
          </div>
        </section>

        {/* Existing Why Choose Us Component */}
        <div className={styles.whyUsWrapper}>
          <WhyChooseUsSection />
        </div>

        {/* Our Team Section */}
        <section className={`section ${styles.teamSection}`}>
          <div className="container">
            <h2 className="section-title">Meet Our Experts</h2>
            <p className="section-subtitle">
              Our success is driven by a team of dedicated legal professionals and immigration specialists.
            </p>
            
            <div className={`${styles.teamGrid} reveal-stagger`}>
              {teamMembers.map((member, idx) => (
                <div key={idx} className={styles.teamCard}>
                  <div className={styles.imageWrapper}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={member.image} alt={member.name} className={styles.memberImage} />
                  </div>
                  <div className={styles.memberInfo}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole}>{member.role}</p>
                    <p className={styles.memberBio}>{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`${styles.ctaSection} reveal`}>
          <div className="container">
            <h2 className={styles.ctaTitle}>Start Your Application Today</h2>
            <p className={styles.ctaDesc}>Let our experts handle the paperwork while you plan your future.</p>
            <Link href="/contact" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
              Contact Our Team
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
