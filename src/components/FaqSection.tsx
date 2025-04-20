import React, { useState, useEffect } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedBox from './AnimatedBox';

interface FaqItem {
  question: string;
  answer: string;
  id?: string;
}

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  // Updated FAQs for Shomron, adding unique IDs
  const faqs = [
    {
      id: "shomron-faq-1",
      question: "איך מתבצע רישום נכס במינהל האזרחי?",
      answer: "התהליך שונה מרישום בטאבו. יש להגיש טופס בקשה ונסחים עות'מאניים במינהל האזרחי, לרבות תשלום אגרות ותיאום עם ספרי המקרקעין. התהליך עשוי להיות ארוך יותר ולקחת בין 6 חודשים לשנה, בהתאם למורכבות המקרה ולעומס במנהל האזרחי. הליווי המשפטי המקצועי שלנו כולל מעקב צמוד אחר התהליך וטיפול מיידי בכל דרישה או בעיה שעולה."
    },
    {
      id: "shomron-faq-2",
      question: "האם ניתן להשיג משכנתא לנכסים ביהודה ושומרון?",
      answer: "כן, אך האפשרויות מוגבלות יותר. חלק מהבנקים נזהרים ממתן אשראי לאזורים אלו, ולרוב נדרש הון עצמי גבוה יותר וגיוס דרך גופים חוץ‑בנקאיים. עם זאת, בעזרת ליווי מקצועי נכון, הצגת העסקה באופן מיטבי, ושימוש בקשרים עם גורמי מימון בנקאיים וחוץ-בנקאיים, ניתן להשיג מימון בתנאים סבירים כולל אפשרות להון עצמי נמוך מ-30% במקרים מסוימים."
    },
    {
      id: "shomron-faq-3",
      question: "אילו בדיקות מקדימות חשוב לבצע לפני רכישת נכס ביהודה ושומרון?",
      answer: "מעבר לבדיקות הרגילות, יש לוודא שהקרקע מסומנת בתב\"ע שאושרה על‑ידי המינהל ושיש היתר תקף לבנייה. נדרשת בדיקה מעמיקה של סטטוס הקרקע במנהל האזרחי, בחינת היסטוריית הבעלות, וידוא שאין מדובר בקרקע פרטית פלסטינית, בדיקת תוכניות מתאר ותב\"ע רלוונטיות, וידוא קיום היתרי בנייה, ובחינת מגבלות ביטחוניות או אחרות שעשויות להשפיע על הנכס."
    },
    {
      id: "shomron-faq-4",
      question: "מהם המיסים העיקריים בעסקאות באזור יהודה ושומרון?",
      answer: "ככלל, חוקי המיסוי דומים למקובל בישראל. המיסים העיקריים הם מס רכישה (לרוב בין 3.5% ל-6% בהתאם לשווי הנכס) ומס שבח (חל על המוכר). קיימות אפשרויות לבדוק זכאות להקלות ופטורים, במיוחד לדירת מגורים יחידה. משרדנו מכיר היטב את דיני המיסוי הרלוונטיים ואת הפרקטיקה הנוהגת באזור, ויסייע לכם בתכנון מס אופטימלי."
    },
    {
      id: "shomron-faq-5",
      question: "מה עושים במקרה של קרקע פרטית פלסטינית?",
      answer: "זהו נושא מורכב הדורש טיפול מקצועי. יש לערוך בדיקות זהות בעלות מעמיקות, לבחון אפשרות להליך תיקון גבולות במינהל האזרחי, ובמקרים מסוימים אף להשיג חוות דעת משפטית מומחה. משרדנו, עם ניסיון רב בתחום, יוכל לנתח את המקרה הספציפי ולהציע פתרונות מותאמים, תוך זיהוי מוקדם של סיכונים אלה כבר בשלב הבדיקות המקדמיות."
    },
    {
      id: "shomron-faq-6",
      question: "כמה זמן נמשכת עסקת נדל\"ן ביהודה ושומרון?",
      answer: "עסקת נדל\"ן ביהודה ושומרון עשויה להימשך זמן רב יותר מעסקאות דומות בתוך ישראל, בעיקר בשל תהליכי הרישום והבדיקות המורכבים יותר. בממוצע, התהליך אורך כ-3-6 חודשים מחתימת החוזה ועד להעברת החזקה, אך תהליך הרישום המלא במנהל האזרחי עשוי להימשך 6-12 חודשים נוספים. עם ליווי מקצועי, ניתן לצמצם עיכובים ולוודא שהתהליך מתקדם ביעילות המרבית."
    }
  ];

  // Check if there's a hash in the URL to open a specific FAQ
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const index = faqs.findIndex(faq => faq.id === id);
      if (index !== -1) {
        setOpenIndex(index);
      }
    }
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    
    // Update URL hash when opening a FAQ
    if (openIndex !== index && faqs[index].id) {
      window.history.pushState(null, '', `#${faqs[index].id}`);
    } else {
      window.history.pushState(null, '', window.location.pathname);
    }
  };



  return (
    <section id="faq" className="section-padding py-16 bg-secondary-gray relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-8">
        <AnimatedBox animation="fadeIn">
          <div className="flex flex-col items-center mb-10 md:mb-16">
            <h2 className="section-title text-center text-3xl md:text-5xl mb-3 relative">
              {/* Updated Section Title */}
              שאלות נפוצות בנושא נדל"ן ביהודה ושומרון
              <span className="absolute -bottom-2 right-0 w-16 h-1 bg-primary-gold"></span>
            </h2>
            <p className="text-center text-lg text-black/80 max-w-3xl mx-auto">
              {/* Updated Section Subtitle */}
              התשובות המקצועיות לשאלות המטרידות רוכשים ומוכרים ביהודה ושומרון
            </p>
          </div>
        </AnimatedBox>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <AnimatedBox animation="slideInRight">
              <h2 className="section-title text-3xl md:text-5xl mb-4">שאלות נפוצות בעסקאות מכר דירות</h2>
              
              <p className="text-lg text-black/80 mb-8">
                כאן תוכלו למצוא תשובות לשאלות הנפוצות ביותר בנוגע לליווי משפטי בעסקאות נדל"ן
              </p>
              
              <div className="relative hidden lg:block">
                <div className="relative z-10">
                  <div className="relative bg-primary-gold/10 rounded-full p-5 inline-block">
                    <HelpCircle size={100} className="text-primary-gold" />
                  </div>
                </div>
                <div className="absolute top-20 right-8 w-40 h-40 bg-primary-gold/5 rounded-full -z-10"></div>
              </div>
            </AnimatedBox>
          </div>
          
          <div className="lg:col-span-8">
            <AnimatedBox animation="slideInLeft" delay={200} className="space-y-4">
              {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    id={faq.id}
                    className={cn(
                      "border border-gray-200 rounded-lg overflow-hidden transition-all duration-300",
                      openIndex === index 
                        ? "shadow-md border-primary-gold/30" 
                        : "shadow-sm hover:border-primary-gold/20"
                    )}
                  >
                    <button 
                      onClick={() => toggleAccordion(index)} 
                      className="w-full px-6 py-5 text-right flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-200"
                      aria-expanded={openIndex === index}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span className="text-xl text-primary-gold font-bold pr-2 border-r-4 border-primary-gold">
                        {faq.question}
                      </span>
                      <div className={cn(
                        "bg-primary-gold/10 rounded-full p-2 transition-transform duration-300",
                        openIndex === index ? "transform rotate-180" : ""
                      )}>
                        <ChevronDown className="text-primary-gold" size={20} />
                      </div>
                    </button>
                    <div 
                      id={`faq-answer-${index}`}
                      className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out bg-white",
                        openIndex === index ? "max-h-[1000px] py-5 px-8" : "max-h-0"
                      )}
                    >
                      <p className="text-black text-lg leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                ))}
            </AnimatedBox>
            

          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div 
        className="absolute bottom-10 left-5 w-32 h-32 bg-primary-gold/5 rounded-full" 
        aria-hidden="true"
      ></div>
      <div 
        className="absolute top-40 right-5 w-24 h-24 bg-primary-gold/5 rounded-full"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default FaqSection;