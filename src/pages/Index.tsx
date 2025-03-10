
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
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  // On page load, ensure all elements are visible
  useEffect(() => {
    // This enables smooth scrolling when clicking on navigation links
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Force any hidden elements to be visible
    const forceVisibility = () => {
      // Apply inline styles to ensure text visibility
      document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, label, input, textarea, select, button')
        .forEach((element) => {
          const el = element as HTMLElement;
          
          // Ensure all text elements have proper opacity and visibility
          if (getComputedStyle(el).opacity === '0' || getComputedStyle(el).visibility === 'hidden') {
            el.style.opacity = '1';
            el.style.visibility = 'visible';
          }
          
          // Ensure text has proper color contrast
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
            if (!el.style.color || el.style.color === 'transparent') {
              el.style.color = '#000000';
            }
          } else if (el.classList.contains('faq-question')) {
            el.style.color = '#b08d57';
          } else if (el.classList.contains('faq-answer')) {
            el.style.color = '#000000';
          }
        });
      
      // Fix specific color issues
      document.querySelectorAll('.font-karantina').forEach(el => {
        (el as HTMLElement).style.fontFamily = 'Karantina, sans-serif';
      });
      
      document.querySelectorAll('.font-assistant').forEach(el => {
        (el as HTMLElement).style.fontFamily = 'Assistant, sans-serif';
      });
    };

    // Run on load and after a delay to catch dynamically rendered elements
    forceVisibility();
    setTimeout(forceVisibility, 500);
    setTimeout(forceVisibility, 1500);

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
      
      {/* WhatsApp Button (replaced the duplicate button in ContactSection) */}
      <WhatsAppButton />
      
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
