"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './HeroSection.module.css';

const slides = [
  {
    id: 1,
    title: "Your Gateway to ",
    highlight: "Global Opportunities",
    description: "H&B Trading is your trusted partner for securing work permits, visit visas, and study visas. We simplify the complex immigration process so you can focus on your journey.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 2,
    title: "Unlock Your ",
    highlight: "Professional Potential",
    description: "Advance your career internationally. Our expert consultants handle your work permit applications with precision and care, ensuring a smooth transition to your new role.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 3,
    title: "Shape Your Future With ",
    highlight: "World-Class Education",
    description: "Access the best universities across the globe. We provide comprehensive guidance for student visa applications to turn your academic dreams into reality.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80",
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={styles.overlay}></div>
          <div className={`container ${styles.heroContent}`}>
            <h1 className={styles.heroTitle}>
              {slide.title} <span>{slide.highlight}</span>
            </h1>
            <p className={styles.heroDescription}>
              {slide.description}
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contact" className="btn-primary">
                Book a Free Consultation
              </Link>
              <Link href="#services" className={styles.btnOutlineLight}>
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      <div className={styles.sliderControls}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
