import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'H&B Trading | Global Visa & Immigration Consultancy',
  description: 'Expert guidance for work permits, visit visas, and study visas. Start your global journey with H&B Trading today.',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </>
  );
}
