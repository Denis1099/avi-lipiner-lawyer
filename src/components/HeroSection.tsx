
import React from 'react';
import ContactForm from './ContactForm';
import AnimatedBox from './AnimatedBox';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-16 pb-12 overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=3870)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-navy/80 backdrop-blur-xs"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <AnimatedBox 
            animation="slideInRight" 
            className="w-full lg:w-6/12 mb-12 lg:mb-0 text-center lg:text-right"
          >
            <span className="inline-block text-primary-light font-medium px-4 py-1 rounded-full border border-primary-light text-sm mb-6">
              עו״ד אבי ליפינר - מומחה במקרקעין
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 font-heebo">
              ליווי משפטי מקצועי ואישי בעסקאות מכר דירות
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl lg:mx-0 mx-auto">
              מהייעוץ הראשוני ועד למסירת המפתח - שילוב מנצח של מומחיות משפטית ופיננסית שמבטיח לכם עסקה בטוחה, מוצלחת, ללא דאגות וללא פשרות
            </p>
          </AnimatedBox>
          
          <AnimatedBox 
            animation="scaleIn" 
            delay={300}
            className="w-full lg:w-5/12"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl">
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-primary-navy mb-6 text-center">
                  קבעו שיחת ייעוץ חינם
                </h3>
                <ContactForm simplified />
              </div>
            </div>
          </AnimatedBox>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-float">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
