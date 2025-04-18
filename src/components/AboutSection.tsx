import React from 'react';
import { Check } from 'lucide-react';
import AnimatedBox from './AnimatedBox';

const AboutSection = () => {
  // Reordered achievements from most to least impressive
  const achievements = [
    'מאות משפחות שלוו בהצלחה בתהליכי רכישה ומכירה של דירות',
    'ניסיון רב בהתמודדות עם עסקות מורכבות לרבות קומבינציות ותמ"א 38',
    'יועץ משכנתאות מוסמך מטעם התאחדות יועצי המשכנתאות',
    'בעל רישיון תיווך מקרקעין המעניק יתרון בהבנת שוק הנדל"ן',
    'תארים אקדמיים במשפטים ובמנהל עסקים עם התמחות במימון'
  ];

  return (
    <section id="about" className="section-padding py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-8 relative z-10">
        {/* Title section */}
        <AnimatedBox animation="fadeIn">
          <div className="flex flex-col items-center mb-10 md:mb-16">
            <h2 className="section-title text-center text-3xl md:text-5xl mb-3 relative">
              {/* Updated Section Title */}
              עו"ד אבי ליפינר ועו״ד ירון פוקס: המומחיות המשפטית והפיננסית שלך ביהודה ושומרון
              <span className="absolute -bottom-2 right-0 w-16 h-1 bg-primary-gold"></span>
            </h2>
            <p className="text-center text-lg text-black/80 max-w-3xl mx-auto">
              {/* Updated Sub-Title */}
              שילוב נדיר של ניסיון במינהל האזרחי ובמערכת הבנקאית להסדרת עסקאות מורכבות
            </p>
          </div>
        </AnimatedBox>

        {/* Content section */}
        <AnimatedBox animation="slideUp" delay={200}>
          <div className="flex flex-col md:flex-row items-center justify-between bg-primary-light rounded-xl shadow-lg p-6 md:p-10 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            {/* Image section - IMPROVED for mobile */}
            <div className="w-full md:w-5/12 mb-6 md:mb-0 md:ml-10 flex-shrink-0 order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="/lovable-uploads/avi-lipiner-real-estate-profile.webp" 
                  alt="תמונת פרופיל של עו״ד אבי ליפינר" 
                  className="w-full h-auto object-cover"
                  width="500"
                  height="500"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Text section - IMPROVED for mobile */}
            <div className="w-full md:w-7/12 order-2 md:order-1">
              <div className="space-y-3 md:space-y-4 text-right">
                {/* Updated Paragraph 1 */}
                <p className="text-black text-base md:text-lg font-medium" style={{ lineHeight: '1.7' }}>
                  עו"ד אבי ליפינר, בוגר תואר ראשון במשפטים ותואר שני במנהל עסקים עם התמחות במימון, מביא ניסיון של מעל 20 שנה בליווי עסקאות נדל"ן כלליות ובשטחי יהודה ושומרון, שבהם רישום הקרקע נעשה במינהל האזרחי במקום בטאבו.
                </p>
                {/* Updated Paragraph 2 */}
                <p className="text-black text-base md:text-lg font-medium" style={{ lineHeight: '1.7' }}>
                  ההתמחות של משרדנו אינה מסתכמת רק בדיני מקרקעין. שילוב הבנה פיננסית מעמיקה מאפשר לייעץ בתכנון משכנתא גם כשבנקים מסויימים נזהרים ממתן אשראי לאזורים אלו ומבטיח שהלקוחות יקבלו לא רק הגנה משפטית מיטבית, אלא גם פתרונות מימון יצירתיים.
                </p>
                {/* Updated Paragraph 3 */}
                <p className="text-black text-base md:text-lg font-medium" style={{ lineHeight: '1.7' }}>
                  רכישת נכס ביהודה ושומרון היא הזדמנות משמעותית, אך היא טומנת בחובה אתגרים ייחודיים – הן משפטיים והן מימוניים. שיתוף פעולה עם עו"ד ירון פוקס, מומחה בתיקוני גבולות ובבירוקרטיה עות'מאנית ישנה, מבטיח פתרונות נכונים לרישום והגנה על זכויות.
                </p>
                {/* Updated Paragraph 4 */}
                <p className="text-black text-base md:text-lg font-medium" style={{ lineHeight: '1.7' }}>
                  משרדנו מציע פגישות ייעוץ ביתיות בישובים וטיפול מקצועי מול מינהל האזרחי לצמצום סיכוני עיכובים משפטיים. אנו מתמחים בזיהוי מראש מוקשים משפטיים ובמציאת פתרונות מותאמים, תוך הבטחת ביטחון העסקה ומניעת הפתעות לא נעימות בהמשך.
                </p>
                
                {/* Highlight box for the key message - IMPROVED for mobile */}
                <div className="mt-3 md:mt-4 bg-primary-gold/10 p-3 md:p-4 rounded-lg border-r-2 border-primary-gold">
                  <p className="text-black text-base md:text-lg font-bold text-center">
                    {/* Updated Highlight Box Text */}
                    השילוב בין מקצועיות בלתי מתפשרת, ניסיון עשיר ביהודה ושומרון, ויחס אישי וחם הוא המפתח לליווי המשפטי המוצלח שאנו מאמינים בו.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedBox>
        
        {/* Partnership section - IMPROVED for mobile */}
        <AnimatedBox animation="fadeIn" delay={500}>
          <div className="mt-6 md:mt-10 bg-primary-light rounded-xl px-4 md:px-16 py-5 md:py-6 shadow-md border-r-4 border-primary-gold">
            <h3 className="font-bold mb-4 md:mb-6 text-primary-gold text-2xl md:text-3xl text-center">שיתוף פעולה ייחודי ומקצועי:</h3>
            
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mb-3 items-center">
              {/* Image container with decorative elements - IMPROVED for mobile */}
              <div className="w-full lg:w-1/3 relative max-w-xs mx-auto lg:mx-0">
                <div className="relative">
                  <div 
                    className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-full h-full bg-primary-gold/15 rounded-lg z-0"
                    aria-hidden="true"
                  ></div>
                  <div className="relative rounded-lg overflow-hidden shadow-lg z-10">
                    <img 
                      src="/lovable-uploads/avi-and-yaron.webp" 
                      alt="עו״ד אבי ליפינר ועו״ד ירון פוקס" 
                      className="w-full h-auto object-cover mx-auto"
                      width="400"
                      height="400"
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
                  </div>
                </div>
              </div>
              
              {/* Text describing the partnership - IMPROVED for mobile */}
              <div className="w-full lg:w-2/3 flex flex-col justify-center">
                <div className="bg-white/50 p-4 md:p-8 rounded-lg shadow-sm border-r-2 border-primary-gold/30">
                  <p className="text-black text-base md:text-lg font-medium mb-4 md:mb-8" style={{ lineHeight: '1.7' }}>
                  משרדנו גאה לשתף פעולה עם עו"ד ירון פוקס, המתמחה במגוון שירותים המשלימים את השירותים המשפטיים שאנו מעניקים. שיתוף פעולה זה מאפשר לנו להציע מענה משפטי כולל ומקיף תחת קורת גג אחת.
                  </p>
                  <p className="text-black text-base md:text-lg font-medium" style={{ lineHeight: '1.7' }}>
                  עו"ד ירון פוקס הינו תושב ותיק ומוכר בשכונת הדר גנים בפתח תקווה, שכונה בעלת קהילה חמה ומגובשת. אנו שמחים להציע לתושבי השכונה שירות משפטי אישי ומקצועי ברמה הגבוהה ביותר, הכולל פגישות ייעוץ בבית הלקוח, ליווי צמוד לאורך כל התהליך, וכמובן - הטבות והנחות ייחודיות ובלעדיות.
                  </p>
                </div>
                
                {/* Highlight box for the key message - IMPROVED for mobile */}
                <div className="mt-3 md:mt-4 bg-primary-gold/10 p-3 md:p-4 rounded-lg border-r-2 border-primary-gold">
                  <p className="text-black text-base md:text-lg font-bold text-center">
                    השילוב בין מקצועיות בלתי מתפשרת לבין יחס אישי וחם הוא המפתח לשירות המשפטי שאנו מאמינים בו.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedBox>
            
        {/* Signature section - IMPROVED for mobile */}
        <AnimatedBox animation="fadeIn" delay={600}>
          <div className="mt-8 md:mt-12 flex justify-center">
            <div className="w-52 md:w-64">
              <img 
                src="/lovable-uploads/avi-lipiner-signature.webp" 
                alt="חתימת עו״ד אבי ליפינר" 
                className="w-full h-auto"
                width="256"
                height="100"
                loading="lazy"
              />
            </div>
          </div>
        </AnimatedBox>
      </div>
      
      {/* Decorative elements - IMPROVED for mobile */}
      <div 
        className="hidden lg:block absolute top-20 left-10 w-72 h-72 bg-primary-gold/8 rounded-full -z-10"
        aria-hidden="true"
      ></div>
      <div 
        className="hidden lg:block absolute bottom-20 right-10 w-48 h-48 bg-primary-gold/12 rounded-full -z-10"
        aria-hidden="true"
      ></div>
      <div 
        className="block lg:hidden absolute top-10 left-5 w-24 h-24 bg-primary-gold/8 rounded-full -z-10"
        aria-hidden="true"
      ></div>
      {/* Added an additional decorative element for mobile */}
      <div 
        className="block lg:hidden absolute bottom-10 right-5 w-32 h-32 bg-primary-gold/10 rounded-full -z-10"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default AboutSection;