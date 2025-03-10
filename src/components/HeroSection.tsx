import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import AnimatedBox from './AnimatedBox';

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-28 md:pt-16 pb-16 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.65)), url("/lovable-uploads/bg-image.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced overlay with better gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <AnimatedBox animation="slideInRight" className="w-full lg:w-6/12 mb-12 lg:mb-0 text-center lg:text-right">
            <div className="inline-block relative mb-8">
              <span 
                style={{ color: '#b08d57' }} 
                className="inline-block text-primary-gold px-6 py-2 rounded-full border border-primary-gold font-bold text-xl font-assistant relative z-10 shadow-lg"
              >
                עו״ד אבי ליפינר - מומחה במקרקעין
              </span>
              <div className="absolute -inset-0.5 bg-primary-gold/20 rounded-full blur-sm"></div>
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-light leading-tight mb-6 md:mb-8 font-karantina relative"
              style={{ color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
            >
              <span className="relative">
                ליווי משפטי מקצועי ואישי
                <div className="absolute h-1 w-24 bg-primary-gold right-0 -bottom-2 lg:block hidden"></div>
              </span>
              <br />
              <span className="text-primary-gold" style={{ color: '#b08d57' }}>בעסקאות מכר דירות</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-primary-light mb-0 md:mb-8 max-w-2xl lg:mx-0 mx-auto font-assistant leading-relaxed" style={{ color: '#fbfbfb' }}>
              <p className="mb-4">מהייעוץ הראשוני ועד למסירת המפתח - שילוב מנצח של מומחיות משפטית ופיננסית</p>
              <div className="flex flex-col space-y-4 md:space-y-3">
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-primary-gold mt-2 ml-4" style={{ backgroundColor: '#b08d57', minWidth: '12px' }}></div>
                  <span>עסקה בטוחה ומוצלחת</span>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-primary-gold mt-2 ml-4" style={{ backgroundColor: '#b08d57', minWidth: '12px' }}></div>
                  <span>ליווי אישי לאורך כל התהליך</span>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-primary-gold mt-2 ml-4" style={{ backgroundColor: '#b08d57', minWidth: '12px' }}></div>
                  <span>ללא דאגות וללא פשרות</span>
                </div>
              </div>
            </div>
          </AnimatedBox>
          
          <AnimatedBox animation="scaleIn" delay={300} className="w-full lg:w-5/12">
            <div 
              className="backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-white/10"
              style={{ 
                backgroundColor: 'rgba(251, 251, 251, 0.92)',
                boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3), 0 8px 10px -6px rgba(0,0,0,0.2)'
              }}
            >
              <div className="p-6 sm:p-8">
                <h3 
                  style={{ color: '#b08d57' }} 
                  className="font-bold text-primary-gold mb-8 text-center text-3xl md:text-4xl relative"
                >
                  קבעו שיחת ייעוץ חינם
                  <div className="absolute -bottom-3 left-0 right-0 mx-auto h-1 w-16 bg-primary-gold/60" style={{ backgroundColor: 'rgba(176, 141, 87, 0.6)' }}></div>
                </h3>
                
                {/* Replace with your actual form implementation */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-right mb-1">שם מלא</label>
                    <input 
                      type="text" 
                      placeholder="הזן/י את שמך המלא" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold/50 focus:border-primary-gold/50 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-right mb-1">טלפון נייד</label>
                    <input 
                      type="tel" 
                      placeholder="הזן/י מספר טלפון נייד" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold/50 focus:border-primary-gold/50 transition"
                    />
                  </div>
                  <button 
                    style={{ backgroundColor: '#b08d57' }}
                    className="w-full py-3 px-4 rounded-lg text-white font-bold mt-2 transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-md"
                  >
                    קבעו שיחת ייעוץ חינם
                  </button>
                </div>
                
                <p className="text-xs text-gray-500 mt-4 text-center">
                  הפרטים שלך מאובטחים ולא יועברו לגורם שלישי.
                </p>
              </div>
            </div>
          </AnimatedBox>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div 
        className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 transition-all duration-500 ease-in-out ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
        onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
      >
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-gold/40 backdrop-blur-md text-primary-light transition-transform hover:scale-110 animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#ffffff' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;