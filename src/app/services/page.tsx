import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import styles from './ServicesPage.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Our Services | H&B Trading',
  description: 'Explore our premium immigration services and specific country destinations including the UK, Canada, and Saudi Arabia.',
};

const countries = [
  {
    name: 'United Kingdom',
    flag: 'https://flagcdn.com/w80/gb.png',
    description: 'From Tier 2 work visas to student routes, we provide end-to-end support for your journey to the UK. Our specialists stay updated with the latest Home Office regulations to ensure a seamless application process.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Canada',
    flag: 'https://flagcdn.com/w80/ca.png',
    description: 'Discover the vast opportunities in Canada. We specialize in Permanent Residence (PR) applications, Express Entry, Provincial Nominee Programs (PNP), and study permits, helping you navigate the IRCC requirements with ease.',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Saudi Arabia',
    flag: 'https://flagcdn.com/w80/sa.png',
    description: 'Expert guidance for navigating the business and employment landscape in Saudi Arabia. We streamline the process for work permits, business visas, and family visits, ensuring full compliance with local laws.',
    image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=800&q=80',
  }
];

const processSteps = [
  { num: '01', title: 'Initial Consultation', desc: 'We assess your profile, understand your goals, and recommend the best visa pathways.' },
  { num: '02', title: 'Document Preparation', desc: 'Our experts help you gather, verify, and organize all necessary legal documents.' },
  { num: '03', title: 'Application Submission', desc: 'We handle the complex paperwork and submit your application to the respective embassy.' },
  { num: '04', title: 'Visa Approval', desc: 'We track your application and prepare you for interviews until your visa is successfully approved.' }
];

const testimonials = [
  { quote: "H&B Trading made my Canadian PR process incredibly smooth. Their attention to detail in the Express Entry paperwork was flawless.", name: "Sarah Jenkins", role: "Software Engineer, Canada" },
  { quote: "I was overwhelmed by the UK Tier 2 visa requirements, but their team handled everything. I'm now working in London thanks to them!", name: "Ahmed Al-Farsi", role: "Financial Analyst, UK" },
  { quote: "Securing a business visa for Saudi Arabia used to be a headache. H&B Trading streamlined the entire process for my consulting firm.", name: "David Chen", role: "Business Owner" }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Premium Hero Header */}
        <section className={styles.pageHeader}>
          <div className={`container ${styles.headerContainer}`}>
            <h1 className={styles.pageTitle}>Elevate Your Global Journey</h1>
            <p className={styles.pageSubtitle}>
              World-class immigration consultancy tailored to your personal and professional aspirations.
            </p>
          </div>
        </section>

        {/* Existing Services Component */}
        <div style={{ padding: '2rem 0', backgroundColor: 'var(--background-alt)' }}>
          <ServicesSection />
        </div>

        {/* NEW: Our Process Section */}
        <section className={`section ${styles.processSection}`}>
          <div className="container">
            <h2 className="section-title">Our Streamlined Process</h2>
            <p className="section-subtitle">A transparent, four-step journey to your visa approval.</p>
            
            <div className={`${styles.processGrid} reveal-stagger`}>
              {processSteps.map((step, idx) => (
                <div key={idx} className={styles.processStep}>
                  <div className={styles.stepNumber}>{step.num}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Countries We Serve Section */}
        <section className={`section ${styles.countriesSection}`}>
          <div className="container">
            <h2 className="section-title">Key Destinations We Serve</h2>
            <p className="section-subtitle">
              We specialize in facilitating smooth transitions to these top global destinations.
            </p>
            
            <div className={`${styles.countriesGrid} reveal-stagger`}>
              {countries.map((country, index) => (
                <div key={index} className={styles.countryCard}>
                  <div className={styles.countryImageContainer}>
                    <div className={styles.flagOverlay}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={country.flag} alt={`${country.name} flag`} className={styles.flagImage} />
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={country.image} alt={country.name} className={styles.countryImage} />
                  </div>
                  <div className={styles.countryContent}>
                    <h3 className={styles.countryName}>{country.name}</h3>
                    <p className={styles.countryDescription}>{country.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW: Testimonials Section */}
        <section className={`section ${styles.testimonialsSection}`}>
          <div className="container">
            <h2 className="section-title">Client Success Stories</h2>
            <p className="section-subtitle">Don't just take our word for it. Hear from professionals we've helped worldwide.</p>
            
            <div className={`${styles.testimonialGrid} reveal-stagger`}>
              {testimonials.map((test, idx) => (
                <div key={idx} className={styles.testimonialCard}>
                  <div className={styles.quoteIcon}>&quot;</div>
                  <p className={styles.quoteText}>{test.quote}</p>
                  <div className={styles.quoteAuthor}>
                    <div className={styles.authorName}>{test.name}</div>
                    <div className={styles.authorRole}>{test.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW: CTA Section */}
        <section className={`${styles.ctaSection} reveal`}>
          <div className="container">
            <h2 className={styles.ctaTitle}>Ready to Take the Next Step?</h2>
            <p className={styles.ctaDesc}>Book a free, no-obligation consultation with our immigration experts today.</p>
            <Link href="/contact" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
              Book Free Consultation
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
