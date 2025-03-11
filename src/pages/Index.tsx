
import React, { useEffect, useState } from 'react';
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // On page load, ensure all elements are visible
  useEffect(() => {
    // This enables smooth scrolling when clicking on navigation links
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Apply necessary CSS fixes for decorative elements
    const fixDecorative = () => {
      document.querySelectorAll('[aria-hidden="true"]').forEach(el => {
        (el as HTMLElement).style.zIndex = '-1';
      });
      
      document.querySelectorAll('.decorative-element').forEach(el => {
        (el as HTMLElement).style.zIndex = '-1';
        (el as HTMLElement).style.position = 'absolute';
      });
    };
    
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
          }
        });
      
      // Fix specific color issues with FAQ text
      document.querySelectorAll('.faq-question').forEach(el => {
        (el as HTMLElement).style.color = '#b08d57';
      });
      
      document.querySelectorAll('.faq-answer').forEach(el => {
        (el as HTMLElement).style.color = '#000000';
      });
      
      // Fix font family issues
      document.querySelectorAll('.font-karantina').forEach(el => {
        (el as HTMLElement).style.fontFamily = 'Karantina, sans-serif';
      });
      
      document.querySelectorAll('.font-assistant').forEach(el => {
        (el as HTMLElement).style.fontFamily = 'Assistant, sans-serif';
      });

      fixDecorative();
      setIsLoaded(true);
    };

    // Track scroll position to detect which section is active
    const handleScroll = () => {
      const sections = ['hero', 'about', 'advantages', 'services', 'testimonials', 'faq', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
      
      // Re-fix decorative elements on scroll
      fixDecorative();
    };

    // Run on load and after a delay to catch dynamically rendered elements
    forceVisibility();
    setTimeout(forceVisibility, 500);
    setTimeout(forceVisibility, 1500);

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} dir="rtl">
      <Navbar activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
      
      {/* Back to top button with enhanced animation */}
      <a 
        href="#hero" 
        className={`fixed bottom-6 left-6 bg-primary-navy text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-gold transition-all duration-300 z-30 ${activeSection === 'hero' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
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
