import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './TestimonialsPage.module.css';

export const metadata = {
  title: 'Client Testimonials | H&B Trading',
  description: 'Read success stories and reviews from our clients who have successfully secured their visas with H&B Trading.',
};

const reviews = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Software Engineer, Canada PR',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    text: "H&B Trading made my Canadian Permanent Residence process incredibly smooth. Their attention to detail in the Express Entry paperwork was flawless. I received my ITA much faster than I expected, and they were there to guide me through every single document required. Highly recommended for anyone looking to move to Canada!",
    stars: 5
  },
  {
    id: 2,
    name: 'Ahmed Al-Farsi',
    role: 'Financial Analyst, UK Tier 2',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    text: "I was completely overwhelmed by the UK Tier 2 visa requirements, but the consulting team handled everything. From dealing with my sponsor to reviewing my financial proofs, they left no stone unturned. I'm now happily working in London thanks to their incredible dedication.",
    stars: 5
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Business Owner, Saudi Arabia',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    text: "Securing a business visa for Saudi Arabia used to be a massive headache for our firm. H&B Trading stepped in and streamlined the entire process. They deeply understand local compliance laws and got our executive team their visas in record time.",
    stars: 5
  },
  {
    id: 4,
    name: 'Priya Sharma',
    role: 'International Student, UK',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    text: "Applying for a student visa was stressful, especially with University deadlines approaching. The team at H&B were lifesavers. They checked my CAS letter, prepared me for the interview, and I got my visa approved without a single hitch!",
    stars: 5
  },
  {
    id: 5,
    name: 'Michael Osei',
    role: 'Tourist, Europe Visit Visa',
    image: null,
    text: "I wanted to take my family on a holiday, but the tourist visa process seemed daunting. H&B Trading gave us a clear checklist, helped us book the appointments, and ensured our itinerary was perfect. The visas were granted within two weeks.",
    stars: 4
  },
  {
    id: 6,
    name: 'Elena Rostova',
    role: 'Healthcare Professional, Canada PNP',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80',
    text: "The Provincial Nominee Program is notoriously complex. I had previously applied through another agency and was rejected. H&B Trading took over my case, identified the errors, and submitted a flawless application. I just landed in Ontario last month!",
    stars: 5
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className={styles.pageHeader}>
          <div className="container">
            <h1 className={styles.pageTitle}>What Our Clients Say</h1>
            <p className={styles.pageSubtitle}>
              We measure our success by the success of our clients. Read firsthand accounts of professionals, students, and families who trusted H&B Trading with their global journey.
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className={`section ${styles.testimonialsSection}`}>
          <div className="container">
            <div className={styles.masonryGrid}>
              {reviews.map((review) => (
                <div key={review.id} className={styles.reviewCard}>
                  <div className={styles.stars}>
                    {'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}
                  </div>
                  <p className={styles.quoteText}>&quot;{review.text}&quot;</p>
                  
                  <div className={styles.authorInfo}>
                    {review.image ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={review.image} alt={review.name} className={styles.avatar} />
                    ) : (
                      <div className={styles.avatarFallback}>{review.name.charAt(0)}</div>
                    )}
                    <div className={styles.authorDetails}>
                      <div className={styles.authorName}>{review.name}</div>
                      <div className={styles.authorRole}>{review.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <h2 className={styles.ctaTitle}>Ready to Become Our Next Success Story?</h2>
            <p className={styles.ctaDesc}>
              Join thousands of satisfied clients who have successfully navigated the immigration process with H&B Trading.
            </p>
            <Link href="/contact" className="btn-primary" style={{ backgroundColor: 'var(--background)', color: 'var(--primary)' }}>
              Start Your Journey Today
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
