
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // On page load, set scroll behavior to smooth
  useEffect(() => {
    // This enables smooth scrolling when clicking on navigation links
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      
      {/* Back to top button */}
      <a 
        href="#hero" 
        className="fixed bottom-6 left-6 bg-primary-navy text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-gold transition-colors duration-300 z-30"
        aria-label="חזרה למעלה"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </a>
    </div>
  );
};

export default Index;
