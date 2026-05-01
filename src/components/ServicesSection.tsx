import React from 'react';
import Link from 'next/link';
import styles from './ServicesSection.module.css';

const services = [
  {
    title: 'Work Permits',
    description: 'Unlock global career opportunities. We handle the complexities of work visa applications so you can focus on your professional growth.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
    link: '#work-permits'
  },
  {
    title: 'Visit Visas',
    description: 'Explore the world with ease. Our experts ensure a smooth and hassle-free tourist visa process for your next adventure.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    link: '#visit-visas'
  },
  {
    title: 'Study Visas',
    description: 'Shape your future with world-class education. We guide students through the entire study visa application journey.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    link: '#study-visas'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className={`section ${styles.servicesSection}`}>
      <div className="container">
        <h2 className="section-title">Our Premium Services</h2>
        <p className="section-subtitle">
          Comprehensive immigration solutions tailored to your unique goals and aspirations.
        </p>
        
        <div className={`${styles.cardsGrid} reveal-stagger`}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.imageContainer}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={service.image} alt={service.title} className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <Link href={service.link} className={styles.learnMore}>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
