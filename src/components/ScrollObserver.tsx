"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Optional: Stop observing once revealed
          // observer.unobserve(entry.target); 
        }
      });
    }, { 
      threshold: 0.1, 
      rootMargin: '0px 0px -50px 0px' 
    });

    // Re-query elements whenever pathname changes
    const timeoutId = setTimeout(() => {
      const hiddenElements = document.querySelectorAll('.reveal, .reveal-stagger');
      hiddenElements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
