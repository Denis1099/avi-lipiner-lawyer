
import React from 'react';
import ContactForm from './ContactForm';
import AnimatedBox from './AnimatedBox';

const HeroSection = () => {
  return <section id="hero" className="relative min-h-screen flex items-center pt-16 pb-12 overflow-hidden" style={{
    backgroundColor: '#d6d6d6',
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=3870)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <AnimatedBox animation="slideInRight" className="w-full lg:w-6/12 mb-12 lg:mb-0 text-center lg:text-right">
            <span style={{
            color: '#b08d57'
          }} className="inline-block text-primary-gold px-4 py-1 rounded-full border border-primary-gold mb-6 font-bold text-xl font-assistant">
              עו״ד אבי ליפינר - מומחה במקרקעין
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-light leading-tight mb-4 font-karantina" style={{
            color: '#fbfbfb'
          }}>
              ליווי משפטי מקצועי ואישי בעסקאות מכר דירות
            </h1>
            <p className="text-2xl text-primary-light mb-8 max-w-2xl lg:mx-0 mx-auto font-assistant" style={{
            color: '#fbfbfb'
          }}>
              מהייעוץ הראשוני ועד למסירת המפתח - שילוב מנצח של מומחיות משפטית ופיננסית שמבטיח לכם עסקה בטוחה, מוצלחת, ללא דאגות וללא פשרות
            </p>
          </AnimatedBox>
          
          <AnimatedBox animation="scaleIn" delay={300} className="w-full lg:w-5/12">
            <div className="bg-primary-light/90 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl" style={{
            backgroundColor: 'rgba(251, 251, 251, 0.9)'
          }}>
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-primary-gold mb-6 text-center" style={{
                color: '#b08d57'
              }}>
                  קבעו שיחת ייעוץ חינם
                </h3>
                <ContactForm simplified />
              </div>
            </div>
          </AnimatedBox>
        </div>
        
        {/* Scroll indicator - adjusted position to be lower */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer animate-float">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-gold/30 backdrop-blur-md text-primary-light">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{
            color: '#fbfbfb'
          }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>;
};

export default HeroSection;
