import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, ClipboardCheck, Clock, ShieldCheck } from 'lucide-react';
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

  return (
    <span ref={elementRef} className="font-karantina">
      {count}{suffix}
    </span>
  );
};

const AdvantagesSection = () => {
  const advantages = [{
    icon: <Award size={24} />,
    title: 'מענה הוליסטי',
    description: 'שילוב ייחודי של ידע משפטי ופיננסי מקיף'
  }, {
    icon: <ShieldCheck size={24} />,
    title: 'מומחיות מוכחת',
    description: 'יועץ משכנתאות מוסמך ובעל רישיון תיווך מקרקעין'
  }, {
    icon: <ClipboardCheck size={24} />,
    title: 'ליווי אישי ומדוקדק',
    description: 'ירידה לפרטים הקטנים ביותר בכל שלב בעסקה'
  }, {
    icon: <Clock size={24} />,
    title: 'זמינות וסבלנות',
    description: 'זמן אישי לכל לקוח ומענה לכל שאלה ובקשה'
  }, {
    icon: <Users size={24} />,
    title: 'ניסיון מוכח',
    description: 'מאות משפחות שלוו בהצלחה בעסקאות מורכבות'
  }];
  
  const statistics = [{
    value: 100,
    suffix: '%',
    label: 'שיעור הצלחה בהשלמת עסקאות'
  }, {
    value: 95,
    suffix: '%',
    label: 'מהלקוחות ממליצים לחבריהם'
  }, {
    value: 3000,
    suffix: 'י ₪',
    label: 'חיסכון ממוצע ללקוח בזכות זיהוי מוקדם של סיכונים'
  }];
  
  return (
    <section id="advantages" className="section-padding bg-gradient-to-b from-primary-light to-secondary-gray relative overflow-hidden">
      <div className="container mx-auto">
        <AnimatedBox animation="fadeIn">
          <h2 className="section-title text-center mx-auto text-3xl md:text-5xl">למה לבחור בליווי משפטי של עו"ד אבי ליפינר?</h2>
          <p className="section-subtitle text-center font-assistant text-xl">
            עסקת מכר דירה היא אחת ההחלטות הפיננסיות המשמעותיות בחייכם. ליווי משפטי מקצועי ומנוסה עושה את ההבדל בין עסקה מוצלחת לבין כאב ראש מתמשך.
          </p>
        </AnimatedBox>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {advantages.map((advantage, index) => (
            <AnimatedBox key={index} animation="scaleIn" delay={100 * index} className="bg-primary-light rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-gold/30 rounded-full p-4 inline-block text-primary-gold">
                  {advantage.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary-gold">{advantage.title}</h3>
              <p className="text-black font-assistant text-base">{advantage.description}</p>
            </AnimatedBox>
          ))}
        </div>

        <AnimatedBox animation="slideUp" delay={400} className="mt-16">
          <div className="bg-primary-navy rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                {statistics.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-primary-gold mb-2 font-karantina">
                      <CountUp end={stat.value} suffix={stat.suffix} duration={2000} />
                    </div>
                    <div className="text-primary-light font-assistant">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedBox>

        <AnimatedBox animation="fadeIn" delay={600} className="mt-12 text-center">
          <a href="#contact" className="inline-block py-3 px-8 bg-primary-gold text-primary-light font-assistant font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-xl">
            צרו קשר עכשיו
          </a>
        </AnimatedBox>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary-gold/10 rounded-full"></div>
      <div className="absolute top-1/4 -right-8 w-32 h-32 bg-primary-navy/10 rounded-full"></div>
    </section>
  );
};

export default AdvantagesSection;
