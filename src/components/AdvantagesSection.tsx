import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, ClipboardCheck, Clock, ShieldCheck, MapPin, Scale, Handshake, SearchCheck, Network } from 'lucide-react';
import AnimatedBox from './AnimatedBox';

const CountUp = ({ end, duration = 2000, startOnView = true, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!startOnView || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime;
          const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            
            if (progress < 1) {
              window.requestAnimationFrame(animateCount);
            }
          };
          window.requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [end, duration, startOnView, hasAnimated]);

  // Format the number with commas for display
  const formattedCount = typeof count === 'number' ? 
    count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 
    count;

  return (
    <span ref={elementRef} className="font-karantina">
      {formattedCount}{suffix}
    </span>
  );
};

const AdvantagesSection = () => {
  // Updated advantages for Shomron
  const advantages = [
    {
      icon: MapPin, // Keep icon or choose a new one
      title: "התמחות ייחודית ביהודה ושומרון",
      description: "ניסיון עשיר של 20 שנה בעסקאות מכר באזור, הכרות מעמיקה עם הדרישות הייחודיות של המנהל האזרחי, והבנה מלאה של האתגרים המשפטיים הספציפיים לאזור."
    },
    {
      icon: Scale, // Keep icon or choose a new one
      title: "מומחיות כפולה: משפטית ופיננסית",
      description: "ידע דיני מקרקעין ייחודיים לשטחים והבנה פיננסית רחבה עם התמחות במימון - חיוני במיוחד בעסקאות ביהודה ושומרון, בהן רבים מהבנקים נזהרים ממתן משכנתאות."
    },
    {
      icon: Handshake, // Keep icon or choose a new one
      title: "פתרונות מימון יצירתיים",
      description: "קשרים עם גורמי מימון בנקאיים וחוץ-בנקאיים, יכולת להציג את העסקה באופן שיקטין את רמת הסיכון בעיני המערכת הבנקאית, וניסיון בהשגת משכנתאות גם במקרים מורכבים."
    },
    {
      icon: SearchCheck, // Keep icon or choose a new one
      title: "טיפול בקרקעות מורכבות",
      description: "טיפול בקרקעות בלתי‑רשומות ותיקוני גבולות במינהל האזרחי, זיהוי מוקדם של סיכונים כמו קרקע פרטית פלסטינית, ומניעת הפתעות לא נעימות שעלולות לסכן את העסקה."
    },
    {
      icon: Users, // Keep icon or choose a new one
      title: "ליווי אישי וזמינות גבוהה",
      description: "פגישות ביתיות אישיות בישובים, שירות טלפוני וייעוץ מקוון. אנו מבינים את המתח והחששות הנלווים לרכישת נכס ביהודה ושומרון, ולכן מעניקים ליווי אישי וצמוד."
    },
    {
      icon: Network, // Keep icon or choose a new one
      title: "רשת מקצועית ייעודית לאזור",
      description: "שיתופי פעולה עם שמאים, יועצי משכנתאות, נוטריונים וגורמים במנהל האזרחי, המאפשרים לנו להעניק מעטפת מקצועית מקיפה ומותאמת לאזור."
    }
  ];
  
  // Keep statistics in consistent order for desktop and mobile
  const statistics = [{
    value: 100,
    suffix: '%',
    label: 'שיעור הצלחה בהשלמת עסקאות',
    description: 'כל העסקאות שליוויתי הגיעו לקו הסיום בהצלחה'
  }, {
    value: 100,
    suffix: '%',
    label: 'מהלקוחות ממליצים לחבריהם',
    description: 'לקוחות מרוצים שבוחרים להמליץ עליי לחבריהם'
  }, {
    value: 300000,
    suffix: ' ₪',
    label: 'חיסכון ממוצע ללקוח למשכנתא',
    description: 'בזכות זיהוי מוקדם של סיכונים אפשריים בעסקה'
  }];
  
  return (
    <section id="advantages" className="section-padding py-16 md:py-20 bg-gradient-to-b from-primary-light to-secondary-gray relative overflow-hidden">
      {/* Decorative elements */}
      <div 
        className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-b from-primary-light to-gray-50 -z-10"
        aria-hidden="true"
      ></div>
      <div 
        className="hidden lg:block absolute top-10 right-10 w-40 h-40 bg-primary-gold/10 rounded-full -z-10 opacity-70"
        aria-hidden="true"
      ></div>
       <div 
        className="hidden lg:block absolute bottom-20 left-10 w-60 h-60 bg-primary-gold/5 rounded-full -z-10 opacity-50"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <AnimatedBox animation="fadeIn" duration={1000} threshold={0.05}>
          <div className="flex flex-col items-center">
            <h2 className="section-title text-center text-3xl md:text-5xl mb-4 relative">
              למה לבחור בנו לליווי עסקת הנדל"ן שלכם ביהודה ושומרון?
              <span className="absolute -bottom-2 right-0 w-16 h-1 bg-primary-gold"></span>
            </h2>
            <p className="section-subtitle text-center font-assistant mb-6 text-xl max-w-3xl mx-auto">
            היתרונות שמעניקים לכם שקט נפשי ובטחון מלא באזור מאתגר משפטית
            </p>
          </div>
        </AnimatedBox>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {advantages.map((advantage, index) => (
            <AnimatedBox 
              key={index} 
              animation="scaleIn" 
              delay={100 * index} 
              duration={800}
              threshold={0.05}
              className="bg-primary-light rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 text-center h-full flex flex-col"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-primary-gold/30 rounded-full p-4 inline-block text-primary-gold">
                  <advantage.icon size={28} className="text-primary-gold" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary-gold">{advantage.title}</h3>
              <p className="text-black font-assistant text-base flex-grow">{advantage.description}</p>
            </AnimatedBox>
          ))}
        </div>

        <AnimatedBox animation="slideUp" delay={300} duration={1000} threshold={0.1} className="mt-16">
          <div className="bg-primary-navy rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                {statistics.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-5xl md:text-6xl font-bold text-primary-gold mb-2 font-karantina">
                      <CountUp end={stat.value} suffix={stat.suffix} duration={2000} />
                    </div>
                    <div className="text-primary-light font-assistant font-bold mb-1">{stat.label}</div>
                    <div className="text-primary-light/80 font-assistant text-sm md:text-base">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedBox>

        <AnimatedBox animation="fadeIn" delay={500} duration={1000} className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block py-4 px-10 bg-primary-gold text-primary-light font-assistant font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-xl"
            aria-label="צור קשר עכשיו לקבלת ייעוץ ראשוני"
          >
            צרו קשר עכשיו
          </a>
        </AnimatedBox>
      </div>
    </section>
  );
};

export default AdvantagesSection;