import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';
import AnimatedBox from './AnimatedBox';

interface Testimonial {
  text: string;
  name: string;
  location: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      text: "עו\"ד אבי ליפינר ליווה אותנו ברכישת הדירה הראשונה שלנו. כזוג צעיר, היינו חסרי ניסיון וחששנו מאוד. אבי הוביל אותנו צעד אחר צעד, הסביר כל שלב בבהירות, וגרם לנו להרגיש בטוחים. הידע הפיננסי שלו חסך לנו עשרות אלפי שקלים במשכנתא!",
      name: "משפחת כהן",
      location: "קנו דירה בפתח תקווה"
    },
    {
      text: "מכרנו דירה שהייתה בבעלותנו כ-30 שנה. אבי ידע לטפל בכל המורכבויות הקשורות למס שבח, תיאום מול הבנק ודרישות המיוחדות של הקונים. הכל התנהל בצורה חלקה והרבה מעבר למה שציפינו.",
      name: "חיים ושרה לוי",
      location: "מכרו דירה בתל אביב"
    },
    {
      text: "עסקת המכר שלנו הייתה מורכבת במיוחד וכללה פיצול נכסים ואתגרים משפטיים לא פשוטים. אבי הפגין מקצועיות יוצאת דופן, ידע להתמודד עם כל הסוגיות שעלו, והצליח להביא את העסקה לידי סיום מוצלח.",
      name: "דוד אברהמי",
      location: "עסקת מכר מורכבת בירושלים"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goToNextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToPrevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
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

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id="testimonials" className="section-padding bg-primary-light">
      <div className="container mx-auto">
        <AnimatedBox animation="fadeIn">
          <h2 className="section-title text-center mx-auto text-3xl md:text-5xl">לקוחות מספרים על הליווי המשפטי שקיבלו</h2>
        </AnimatedBox>

        <div className="mt-16 relative">
          <div 
            className="overflow-hidden rounded-xl bg-primary-light shadow-lg relative max-w-3xl mx-auto"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="absolute top-6 right-8 text-4xl text-primary-gold"
              aria-hidden="true"
            >
              <Quote size={48} opacity={0.6} />
            </div>
            
            <div className="pt-14 pb-16 px-6 sm:px-10 relative z-10">
              <div className="flex flex-col items-center min-h-fit relative">
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
                  >
                    <div className="flex flex-col items-center">
                      <p className="text-xl text-black mb-10 leading-relaxed text-center max-w-xl mx-auto">
                        {testimonial.text}
                      </p>
                      <div className="text-center mt-6">
                        <p className="font-bold text-primary-gold text-2xl font-karantina">
                          {testimonial.name}
                        </p>
                        <p className="text-black font-assistant">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 space-x-reverse">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-primary-gold w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <button
            onClick={goToPrevSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary-light rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 text-primary-gold z-20"
            aria-label="Previous testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          <button
            onClick={goToNextSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary-light rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 text-primary-gold z-20"
            aria-label="Next testimonial"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;