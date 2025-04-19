import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Quote, Star } from 'lucide-react';
import AnimatedBox from './AnimatedBox';

interface Testimonial {
  text: string;
  name: string;
  location: string;
  rating?: number;
  projectType?: string;
}

const TestimonialsSection: React.FC = () => {
  // Updated testimonials for Shomron
  const testimonials: Testimonial[] = [
    {
      text: "עו\"ד אבי ליפינר ליווה אותנו ברכישת הבית הראשון שלנו באפרת. היו מספר אתגרים מורכבים בנוגע לרישום במינהל האזרחי וקושי משמעותי בהשגת משכנתא. אבי הצליח למצוא לנו פתרון מימון יצירתי עם הון עצמי של 25% בלבד, וטיפל בכל הבירוקרטיה בצורה יעילה שחסכה לנו חודשים של המתנה. הליווי האישי שלו היה מעל ומעבר למצופה.",
      name: "משפחת לוי",
      location: "רכשו בית באפרת",
      rating: 5, // Keep or remove rating
      projectType: "רכישת בית ביישוב"
    },
    {
      text: "מכרנו נכס עם סוגיות תכנוניות מורכבות באריאל. כאשר התגלו בעיות ברישום ההיסטורי במינהל האזרחי, חשבנו שהעסקה תתבטל. עו\"ד ליפינר ועו\"ד פוקס עבדו במשותף מול המינהל האזרחי, הצליחו לתקן את הרישום ולפתור את הבעיות באופן שהפתיע גם אותנו. הידע והניסיון שלהם ביהודה ושומרון הציל את העסקה.",
      name: "יעקב ורחל כהן",
      location: "מכרו נכס באריאל",
      rating: 5, // Keep or remove rating
      projectType: "מכירת נכס במורכבות גבוהה"
    },
    {
      text: "כשכל הבנקים אליהם פנינו סירבו לתת לנו משכנתא לנכס בבית אל בגלל מיקומו, עו\"ד ליפינר לא ויתר. הוא פתח בפנינו אפשרויות מימון שלא הכרנו, עזר לנו לבנות תיק פיננסי מותאם, וליווה אותנו בתהליך מרוכב עד שהשגנו את המימון המלא. ללא הניסיון שלו במקרים דומים ביהודה ושומרון, לא היינו מצליחים לרכוש את הבית.",
      name: "משפחת אברהמי",
      location: "רכשו בית בבית אל",
      rating: 5, // Keep or remove rating
      projectType: "התמודדות עם בעיות מימון"
    },
    {
      text: "במהלך רכישת ביתנו ביצהר, התגלו בעיות בנסחים העות\'מאניים שאיימו לטרפד את העסקה. עו\"ד ליפינר נעזר בצוות המקצועי שלו, כולל מומחה לבדיקת מסמכים עות\'מאניים, וייצג אותנו בהליך מורכב מול המינהל האזרחי. הוא הצליח להסדיר את כל הרישומים ולהבטיח שהעסקה תושלם ללא עיכובים מיותרים.",
      name: "דוד ושרה ברקוביץ",
      location: "רכשו נכס ביצהר",
      rating: 5, // Keep or remove rating
      projectType: "עסקה עם בעיות רישום"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const autoSlideTime = 10000; // Increased to 10 seconds

  const resetProgressBar = () => {
    if (progressRef.current) {
      progressRef.current.style.transition = 'none';
      progressRef.current.style.width = '0%';
      // Force reflow
      progressRef.current.offsetHeight; 
      progressRef.current.style.transition = `width ${autoSlideTime}ms linear`;
      progressRef.current.style.width = '100%';
    }
  };

  const goToNextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    resetProgressBar();
  };

  const goToPrevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    resetProgressBar();
  };

  // Handle touch events for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Minimum distance required for a swipe
    
    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swiped right to left -> go to next slide
        goToNextSlide();
      } else {
        // Swiped left to right -> go to previous slide
        goToPrevSlide();
      }
    }
    
    // Reset values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Handle auto-sliding
  useEffect(() => {
    if (!isPaused) {
      resetProgressBar();
      const interval = setInterval(() => {
        goToNextSlide();
      }, autoSlideTime);

      return () => clearInterval(interval);
    }
    return undefined;
  }, [activeIndex, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToNextSlide();
      } else if (e.key === 'ArrowRight') {
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, isAnimating]);

  // Pause sliding when tab is not in focus
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const renderStars = (rating: number) => {
    return (
      <div className="flex justify-center mb-2" aria-label={`דירוג ${rating} מתוך 5`}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            fill={i < rating ? "#D4AF37" : "none"}
            color={i < rating ? "#D4AF37" : "#D4AF37"}
            className="mx-0.5"
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="section-padding py-16 bg-gradient-to-b from-primary-light to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-8">
        <AnimatedBox animation="fadeIn">
          <div className="flex flex-col items-center">
            <h2 className="section-title text-center text-3xl md:text-5xl mb-3 relative">
              {/* Updated Section Title */}
              לקוחות מספרים על הליווי המשפטי שלנו ביהודה ושומרון
              <span className="absolute -bottom-2 right-0 w-16 h-1 bg-primary-gold"></span>
            </h2>
            <p className="text-center text-lg text-black/80 max-w-3xl mx-auto">
              {/* Updated Section Subtitle */}
              המטרה שלנו היא לספק שירות ברמה הגבוהה ביותר, עם מענה מותאם לאתגרים הייחודיים של האזור
            </p>
          </div>
        </AnimatedBox>

        <div className="mt-12 relative">
          <div 
            className="overflow-hidden rounded-xl bg-white shadow-lg relative max-w-3xl mx-auto border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}

            role="region"
            aria-roledescription="carousel"
            aria-label="המלצות לקוחות"
          >
            {/* Progress bar */}
            <div className="h-1 w-full bg-gray-100 absolute top-0 left-0 z-20">
              <div 
                ref={progressRef}
                className="h-full bg-primary-gold transition-width" 
                style={{ width: '0%' }}
              ></div>
            </div>
            
            <div 
              className="absolute top-6 right-8 text-5xl text-primary-gold"
              aria-hidden="true"
            >
              <Quote size={60} opacity={0.4} />
            </div>
            
            <div className="pt-16 pb-28 px-6 sm:px-12 relative z-10">
              <div className="flex flex-col items-center min-h-[280px] relative">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`w-full transition-all duration-500 ease-in-out ${
                      index === activeIndex
                        ? 'opacity-100 translate-x-0 relative'
                        : index < activeIndex
                        ? 'opacity-0 translate-x-[100px] absolute'
                        : 'opacity-0 translate-x-[-100px] absolute'
                    }`}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`המלצה ${index + 1} מתוך ${testimonials.length}`}
                    aria-hidden={index !== activeIndex}
                  >
                    <div className="flex flex-col items-center">
                      {testimonial.projectType && (
                        <span className="px-4 py-1 bg-primary-gold/10 text-primary-gold rounded-full text-sm mb-5">
                          {testimonial.projectType}
                        </span>
                      )}
                      
                      {testimonial.rating && renderStars(testimonial.rating)}
                      
                      <p className="text-xl text-black mb-10 leading-relaxed text-center max-w-2xl mx-auto">
                        {testimonial.text}
                      </p>
                      
                      <div className="text-center mt-6 border-t border-gray-100 pt-6 w-32">
                        <p className="font-bold text-primary-gold text-2xl font-karantina">
                          {testimonial.name}
                        </p>
                        <p className="text-black/80 font-assistant text-sm">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 space-x-reverse mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    resetProgressBar();
                  }}
                  className={`transition-all duration-300 ${
                    index === activeIndex 
                      ? 'w-8 h-2 bg-primary-gold rounded-full' 
                      : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                  }`}
                  aria-label={`הצגת המלצה ${index + 1}`}
                  aria-pressed={index === activeIndex}
                />
              ))}
            </div>
          </div>
          
          <button
            onClick={goToPrevSlide}
            className="absolute top-1/2 right-2 md:right-6 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 text-primary-gold z-20 hover:bg-primary-gold hover:text-white"
            aria-label="המלצה קודמת"
          >
            <ChevronRight size={24} />
          </button>
          
          <button
            onClick={goToNextSlide}
            className="absolute top-1/2 left-2 md:left-6 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 text-primary-gold z-20 hover:bg-primary-gold hover:text-white"
            aria-label="המלצה הבאה"
          >
            <ChevronLeft size={24} />
          </button>
        </div>

        <AnimatedBox animation="fadeIn" delay={300} className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block py-4 px-10 bg-primary-gold text-primary-light font-bold rounded-lg shadow-md hover:bg-primary-gold/90 transition-all duration-300 text-xl"
            aria-label="צור קשר לקבלת ייעוץ ראשוני"
          >
            צרו קשר עכשיו
          </a>
        </AnimatedBox>
      </div>

      {/* Decorative elements */}
      <div 
        className="absolute -bottom-16 -right-16 w-60 h-60 bg-primary-gold/5 rounded-full" 
        aria-hidden="true"
      ></div>
      <div 
        className="absolute top-20 -left-20 w-48 h-48 bg-primary-gold/5 rounded-full"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default TestimonialsSection;
