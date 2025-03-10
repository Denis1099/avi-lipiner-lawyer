import React from 'react';
import { Check } from 'lucide-react';
import AnimatedBox from './AnimatedBox';

const AboutSection = () => {
  // Reordered achievements from most to least impressive
  const achievements = [
    'מאות משפחות שלוו בהצלחה בתהליכי רכישת ומכירת דירות',
    'ניסיון רב בהתמודדות עם עסקאות מורכבות ותביעות נגד יזמים',
    'יועץ משכנתאות מוסמך מטעם התאחדות יועצי המשכנתאות',
    'בעל רישיון תיווך מקרקעין המעניק יתרון בהבנת שוק הנדל"ן',
    'תארים אקדמיים במשפטים ובמנהל עסקים עם התמחות במימון'
  ];

  return (
    <section id="about" className="section-padding bg-fbfbfb relative overflow-hidden scroll-smooth">
      <div className="container mx-auto px-5 md:px-8">
        {/* Desktop layout */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left column (image) - Only visible on desktop */}
          <div className="hidden lg:block lg:w-5/12">
            <AnimatedBox animation="slideInRight">
              <div className="relative">
                <div 
                  className="absolute -top-4 -right-4 w-full h-full bg-primary-gold/15 rounded-lg"
                  aria-hidden="true"
                ></div>
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/avi-image.webp" 
                    alt="עו״ד אבי ליפינר" 
                    className="w-full h-auto relative z-10 object-cover transform scale-[0.95]" 
                    style={{ 
                      aspectRatio: '3/4',
                      filter: 'contrast(1.08) saturate(1.08) brightness(1.02)',
                      imageRendering: 'crisp-edges'
                    }}
                    width="600"
                    height="800"
                    loading="lazy"
                  />
                  
                  {/* Vignette overlay to add depth and hide compression artifacts */}
                  <div 
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                      boxShadow: 'inset 0 0 40px rgba(0,0,0,0.15), inset 0 0 3px rgba(0,0,0,0.1)',
                      background: 'radial-gradient(circle, transparent 60%, rgba(0,0,0,0.07) 100%)'
                    }}
                  ></div>
                  
                  {/* Subtle golden highlight at the bottom */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-20 z-20 pointer-events-none opacity-30"
                    style={{
                      background: 'linear-gradient(to top, rgba(176, 141, 87, 0.18), transparent)'
                    }}
                  ></div>
                </div>
                <div 
                  className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-gold rounded-lg"
                  aria-hidden="true"
                ></div>
              </div>
            </AnimatedBox>
          </div>
          
          {/* Right column (content) - Full width on mobile */}
          <div className="w-full lg:w-7/12">
            {/* Title and intro paragraphs */}
            <AnimatedBox animation="slideInLeft" delay={100}>
              <h2 className="section-title mb-6 text-3xl md:text-5xl">עו"ד אבי ליפינר - מומחה במקרקעין ופיננסים</h2>
              
              <div className="text-black space-y-5 mb-8" style={{ lineHeight: '1.6' }}>
                <p className="text-lg font-medium">
                  את דרכי המקצועית התחלתי מתוך תשוקה להקל על אנשים בתהליך המורכב של רכישת דירה. בעסקת מקרקעין, אתם זקוקים ליותר מעורך דין - אתם צריכים שותף שמבין את כל היבטי העסקה.
                </p>
                <p className="text-base font-medium">
                  אני משלב ידע משפטי מעמיק במקרקעין עם רקע פיננסי מוצק. עם תארים במנהל עסקים ומשפטים (תואר שני מבר אילן), יחד עם הסמכה כיועץ משכנתאות ורישיון תיווך מקרקעין, אני מציע מענה הוליסטי שמוביל את העסקה שלכם לקו הסיום בצורה בטוחה.
                </p>
              </div>
            </AnimatedBox>
            
            {/* Mobile-only image - appears earlier in the flow */}
            <div className="block lg:hidden mb-8">
              <AnimatedBox animation="slideInRight">
                <div className="relative">
                  <div 
                    className="absolute -top-4 -right-4 w-full h-full bg-primary-gold/15 rounded-lg"
                    aria-hidden="true"
                  ></div>
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="/lovable-uploads/avi-image.webp" 
                      alt="עו״ד אבי ליפינר" 
                      className="w-full h-auto relative z-10 object-cover transform scale-[0.95]" 
                      style={{ 
                        aspectRatio: '3/4',
                        filter: 'contrast(1.08) saturate(1.08) brightness(1.02)',
                        imageRendering: 'crisp-edges'
                      }}
                      width="400"
                      height="533"
                      loading="lazy"
                    />
                    
                    {/* Vignette overlay */}
                    <div 
                      className="absolute inset-0 z-20 pointer-events-none"
                      style={{
                        boxShadow: 'inset 0 0 40px rgba(0,0,0,0.15), inset 0 0 3px rgba(0,0,0,0.1)',
                        background: 'radial-gradient(circle, transparent 60%, rgba(0,0,0,0.07) 100%)'
                      }}
                    ></div>
                    
                    {/* Subtle golden highlight at the bottom */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-16 z-20 pointer-events-none opacity-30"
                      style={{
                        background: 'linear-gradient(to top, rgba(176, 141, 87, 0.18), transparent)'
                      }}
                    ></div>
                  </div>
                  <div 
                    className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-gold rounded-lg"
                    aria-hidden="true"
                  ></div>
                </div>
              </AnimatedBox>
            </div>
            
            {/* Achievements section */}
            <AnimatedBox animation="slideUp" delay={300}>
              <div className="bg-secondary-gray rounded-xl p-6 shadow-md py-[30px] px-[30px]">
                <h3 className="font-bold mb-5 text-primary-gold text-3xl">הישגים מקצועיים:</h3>
                <ul className="space-y-4 text-lg">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="bg-primary-gold rounded-full p-1 mt-1 ml-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <Check size={16} className="text-primary-light" />
                      </div>
                      <span className="text-black text-lg font-medium">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedBox>
            
            {/* Commitment section */}
            <AnimatedBox animation="fadeIn" delay={500}>
              <div className="mt-10 p-6 border-r-4 border-primary-gold bg-primary-light shadow-md rounded-lg">
                <h3 className="font-bold mb-3 text-primary-gold text-3xl">המחויבות שלי אליכם:</h3>
                <p className="text-black text-lg font-medium" style={{ lineHeight: '1.6' }}>
                  המחויבות שלי היא לספק ללקוחותיי שירות מקצועי, אמין ואישי. אני מאמין ביחס אישי לכל לקוח, בזמינות מרבית, בסבלנות לכל שאלה ובקשה, ובדקדקנות תוך ירידה לפרטים הקטנים ביותר. יחד נבטיח שהעסקה שלכם תהיה בטוחה, מוצלחת, ללא דאגות וללא פשרות!
                </p>
              </div>
            </AnimatedBox>
            
            {/* Signature section */}
            <AnimatedBox animation="fadeIn" delay={600}>
              <div className="mt-6 flex justify-center">
                <div className="w-48 md:w-64">
                  <img 
                    src="/lovable-uploads/avi-lipiner-signature.webp" 
                    alt="חתימת עו״ד אבי ליפינר" 
                    className="w-full h-auto transition-all duration-300 hover:opacity-90"
                    width="256"
                    height="100"
                    loading="lazy"
                  />
                </div>
              </div>
            </AnimatedBox>
          </div>
        </div>
      </div>
      
      {/* Decorative elements - enhanced visibility */}
      <div 
        className="hidden lg:block absolute top-20 left-10 w-72 h-72 bg-primary-gold/8 rounded-full"
        aria-hidden="true"
      ></div>
      <div 
        className="hidden lg:block absolute bottom-20 right-10 w-48 h-48 bg-primary-gold/12 rounded-full"
        aria-hidden="true"
      ></div>
      <div 
        className="block lg:hidden absolute top-10 left-5 w-32 h-32 bg-primary-gold/8 rounded-full"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default AboutSection;