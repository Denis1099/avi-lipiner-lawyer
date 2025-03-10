
import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import AnimatedBox from './AnimatedBox';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName('');
      setPhone('');
      
      // Reset success message after delay
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

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
      
      {/* Animated particles */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-primary-gold/20"
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.1
            }}
          ></div>
        ))}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <AnimatedBox animation="slideInRight" className="w-full lg:w-6/12 mb-12 lg:mb-0 text-center lg:text-right">
            <div className="inline-block relative mb-8 group hover:scale-105 transition-transform duration-500">
              <span 
                style={{ color: '#b08d57' }} 
                className="inline-block text-primary-gold px-6 py-2 rounded-full border border-primary-gold font-bold text-xl font-assistant relative z-10 shadow-lg group-hover:shadow-primary-gold/30 transition-shadow duration-300"
              >
                עו״ד אבי ליפינר - מומחה במקרקעין
              </span>
              <div className="absolute -inset-0.5 bg-primary-gold/20 rounded-full blur-sm group-hover:bg-primary-gold/30 transition-colors duration-300"></div>
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-light leading-tight mb-6 md:mb-8 font-karantina relative animate-slideUp"
              style={{ color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
            >
              <span className="relative inline-block">
                ליווי משפטי מקצועי ואישי
                <div className="absolute h-1 w-24 bg-primary-gold right-0 -bottom-2 lg:block hidden"></div>
              </span>
              <br />
              <span className="text-primary-gold relative inline-block" style={{ color: '#b08d57' }}>
                בעסקאות מכר דירות
                <Sparkles className="absolute -top-8 -left-8 text-primary-gold/60 w-6 h-6 animate-pulse" />
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-primary-light mb-0 md:mb-8 max-w-2xl lg:mx-0 mx-auto font-assistant leading-relaxed" style={{ color: '#fbfbfb' }}>
              <p className="mb-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>מהייעוץ הראשוני ועד למסירת המפתח - שילוב מנצח של מומחיות משפטית ופיננסית</p>
              <div className="flex flex-col space-y-4 md:space-y-3">
                <div className="flex items-start transform transition-transform duration-300 hover:translate-x-[-5px]">
                  <div className="w-3 h-3 rounded-full bg-primary-gold mt-2 ml-4" style={{ backgroundColor: '#b08d57', minWidth: '12px' }}></div>
                  <span>עסקה בטוחה ומוצלחת</span>
                </div>
                <div className="flex items-start transform transition-transform duration-300 hover:translate-x-[-5px]">
                  <div className="w-3 h-3 rounded-full bg-primary-gold mt-2 ml-4" style={{ backgroundColor: '#b08d57', minWidth: '12px' }}></div>
                  <span>ליווי אישי לאורך כל התהליך</span>
                </div>
                <div className="flex items-start transform transition-transform duration-300 hover:translate-x-[-5px]">
                  <div className="w-3 h-3 rounded-full bg-primary-gold mt-2 ml-4" style={{ backgroundColor: '#b08d57', minWidth: '12px' }}></div>
                  <span>ללא דאגות וללא פשרות</span>
                </div>
              </div>
            </div>
          </AnimatedBox>
          
          <AnimatedBox animation="scaleIn" delay={300} className="w-full lg:w-5/12">
            <div 
              className="backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-white/10 hover:shadow-primary-gold/10 transition-shadow duration-500"
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
                
                {submitted ? (
                  <div className="py-6 text-center animate-fadeIn">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">תודה על פנייתך!</h4>
                    <p className="text-gray-600">אצור איתך קשר בהקדם.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="transition-all duration-300 hover:translate-y-[-2px]">
                      <label className="block text-gray-700 text-right mb-1">שם מלא</label>
                      <input 
                        type="text" 
                        placeholder="הזן/י את שמך המלא" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold/50 focus:border-primary-gold/50 transition"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="transition-all duration-300 hover:translate-y-[-2px]">
                      <label className="block text-gray-700 text-right mb-1">טלפון נייד</label>
                      <input 
                        type="tel" 
                        placeholder="הזן/י מספר טלפון נייד" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold/50 focus:border-primary-gold/50 transition"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                    <button 
                      type="submit"
                      style={{ backgroundColor: '#b08d57' }}
                      className="w-full py-3 px-4 rounded-lg text-white font-bold mt-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md relative overflow-hidden group"
                      disabled={isSubmitting}
                    >
                      <span className="relative z-10">
                        {isSubmitting ? 'שולח...' : 'קבעו שיחת ייעוץ חינם'}
                      </span>
                      <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </button>
                  </form>
                )}
                
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
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-gold/40 backdrop-blur-md text-primary-light transition-all duration-300 hover:scale-110 hover:bg-primary-gold/60 animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#ffffff' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
