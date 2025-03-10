import React from 'react';
import { Check } from 'lucide-react';
import AnimatedBox from './AnimatedBox';
const AboutSection = () => {
  const achievements = ['מאות משפחות שלוו בהצלחה בתהליכי רכישת ומכירת דירות', 'יועץ משכנתאות מוסמך מטעם התאחדות יועצי המשכנתאות', 'בעל רישיון תיווך מקרקעין המעניק יתרון בהבנת שוק הנדל"ן', 'תארים אקדמיים במשפטים ובמנהל עסקים עם התמחות במימון', 'ניסיון רב בהתמודדות עם עסקאות מורכבות ותביעות נגד יזמים'];
  return <section id="about" className="section-padding bg-fbfbfb relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <AnimatedBox animation="slideInRight" className="w-full lg:w-5/12 mb-10 lg:mb-0">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full bg-primary-gold/10 rounded-lg"></div>
              <img src="/public/lovable-uploads/d33894e1-3185-4556-9cfa-c82530c7e965.png" alt="עו״ד אבי ליפינר" className="w-full h-auto rounded-lg shadow-xl relative z-10 object-cover" style={{
              aspectRatio: '3/4'
            }} />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-gold rounded-lg"></div>
            </div>
          </AnimatedBox>
          
          <div className="w-full lg:w-7/12">
            <AnimatedBox animation="slideInLeft" delay={100}>
              <h2 className="section-title mb-6 text-3xl md:text-5xl">עו"ד אבי ליפינר - מומחה במקרקעין ופיננסים</h2>
              
              <div className="text-black space-y-4 mb-8 text-xl">
                <p className="text-xl">
                  את דרכי המקצועית התחלתי מתוך תשוקה ללוות אנשים ולהקל עליהם בתהליך המורכב של רכישת דירה. כשאתם נכנסים לעסקת מקרקעין, אתם לא מחפשים רק עורך דין - אתם מחפשים שותף לדרך שיבין את כל ההיבטים של העסקה.
                </p>
                <p className="text-xl">
                  המומחיות הייחודית שלי משלבת ידע משפטי מעמיק בתחום המקרקעין יחד עם רקע פיננסי מוצק. כבעל תואר ראשון במנהל עסקים עם התמחות במימון, תואר ראשון במשפטים, ותואר שני במשפטים מאוניברסיטת בר אילן, אני מביא לשולחן ידע מקיף. בנוסף, אני גם יועץ משכנתאות מוסמך ובעל רישיון לתיווך מקרקעין - שילוב שמאפשר לי להציע מענה הוליסטי ולהוביל את העסקה שלכם לקו הסיום בצורה חלקה ובטוחה.
                </p>
              </div>
            </AnimatedBox>
            
            <AnimatedBox animation="slideUp" delay={300}>
              <div className="bg-secondary-gray rounded-xl p-6 shadow-md py-[28px] px-[26px]">
                <h3 className="font-bold mb-4 text-primary-gold text-3xl">הישגים מקצועיים:</h3>
                <ul className="space-y-3 text-lg">
                  {achievements.map((achievement, index) => <li key={index} className="flex items-start">
                      <div className="bg-primary-gold rounded-full p-1 mt-1 ml-3 flex-shrink-0">
                        <Check size={14} className="text-primary-light" />
                      </div>
                      <span className="text-black text-xl">{achievement}</span>
                    </li>)}
                </ul>
              </div>
            </AnimatedBox>
            
            <AnimatedBox animation="fadeIn" delay={500}>
              <div className="mt-8 p-6 border-r-4 border-primary-gold bg-primary-light shadow-md rounded-lg">
                <h3 className="font-bold mb-2 text-primary-gold text-3xl">המחויבות שלי אליכם:</h3>
                <p className="text-black text-xl">
                  המחויבות שלי היא לספק ללקוחותיי שירות מקצועי, אמין ואישי. אני מאמין ביחס אישי לכל לקוח, בזמינות מרבית, בסבלנות לכל שאלה ובקשה, ובדקדקנות תוך ירידה לפרטים הקטנים ביותר. יחד נבטיח שהעסקה שלכם תהיה בטוחה, מוצלחת, ללא דאגות וללא פשרות!
                </p>
              </div>
            </AnimatedBox>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden lg:block absolute top-20 left-10 w-64 h-64 bg-primary-gold/5 rounded-full"></div>
      <div className="hidden lg:block absolute bottom-20 right-10 w-40 h-40 bg-primary-gold/10 rounded-full"></div>
    </section>;
};
export default AboutSection;