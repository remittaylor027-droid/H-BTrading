"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './WhyChooseUsSection.module.css';

const Counter = ({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * end));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={nodeRef} className={styles.statNumber}>
      {count}{suffix}
    </div>
  );
};

const WhyChooseUsSection = () => {
  return (
    <section id="about" className={`section ${styles.whyChooseUs}`}>
      <div className={`container ${styles.contentWrapper}`}>
        <div className={`${styles.textContent} reveal`}>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Why Choose H&B Trading?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
            With years of experience in the immigration industry, we have built a reputation for excellence, transparency, and unparalleled success rates. Our dedicated team of experts is committed to making your global dreams a reality through personalized guidance.
          </p>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              <span className={styles.checkmark}>✓</span> Expert Guidance & Free Consultation
            </li>
            <li className={styles.featureItem}>
              <span className={styles.checkmark}>✓</span> Transparent & Streamlined Process
            </li>
            <li className={styles.featureItem}>
              <span className={styles.checkmark}>✓</span> Unmatched Application Success Rate
            </li>
            <li className={styles.featureItem}>
              <span className={styles.checkmark}>✓</span> Dedicated 24/7 Priority Client Support
            </li>
          </ul>
        </div>
        
        <div className={`${styles.statsGrid} reveal-stagger`}>
          <div className={styles.statCard}>
            <Counter end={10} suffix="+" />
            <div className={styles.statLabel}>Years Experience</div>
          </div>
          <div className={styles.statCard}>
            <Counter end={5} suffix="k+" />
            <div className={styles.statLabel}>Visas Approved</div>
          </div>
          <div className={styles.statCard}>
            <Counter end={98} suffix="%" />
            <div className={styles.statLabel}>Success Rate</div>
          </div>
          <div className={styles.statCard}>
            <Counter end={50} suffix="+" />
            <div className={styles.statLabel}>Countries Covered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
