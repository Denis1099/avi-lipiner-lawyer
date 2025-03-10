import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedBox from './AnimatedBox';
interface FaqItem {
  question: string;
  answer: string;
}
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs: FaqItem[] = [{
    question: "מתי כדאי לפנות לעורך דין בעסקת מכר דירה?",
    answer: "מומלץ לפנות לעורך דין כבר בשלב הפנייה וההתייעצות טרם הרכישה המתוכננת, לפני חתימה על כל מסמך מחייב. ליווי משפטי מהשלבים המוקדמים מאפשר לזהות בעיות פוטנציאליות, לנהל משא ומתן יעיל יותר, ולהבטיח שהאינטרסים שלכם מוגנים מההתחלה. המשרד שלנו מספק מענה הוליסטי הן בפן המשפטי והן בפן המימוני של העסקה כבר משלבים אלו."
  }, {
    question: "מה כולל הליווי המשפטי בעסקת מכר דירה?",
    answer: "הליווי כולל: בדיקות מקדימות של הנכס והזכויות, ניסוח או בדיקת חוזה המכר, ליווי במשא ומתן, טיפול בהיבטים הפיננסיים והמשכנתא, תיאום העברות כספים, דיווחים לרשויות המס, וטיפול ברישום הזכויות בטאבו. אני מלווה את הלקוחות שלי באופן אישי לאורך כל התהליך, מהמשא ומתן ועד לקבלת המפתח."
  }, {
    question: "כמה עולה ליווי משפטי בעסקת מכר דירה?",
    answer: "עלות הליווי המשפטי נקבעת בהתאם למורכבות העסקה ולהיקף השירותים הנדרשים. בפגישת הייעוץ הראשונית (ללא עלות) אוכל לבחון את פרטי העסקה שלכם ולהציע הצעת מחיר מדויקת ושקופה. חשוב לזכור שהשקעה בליווי משפטי מקצועי עשויה לחסוך לכם הרבה כסף, זמן וכאב ראש בהמשך."
  }, {
    question: "מה ההבדל בין ליווי של עו\"ד מקרקעין מנוסה לעומת עו\"ד כללי?",
    answer: "עו\"ד מקרקעין מתמחה בעל ניסיון ספציפי בתחום מכיר לעומק את כל המורכבויות והמלכודות בעסקאות נדל\"ן. במקרה שלי, משרד עו\"ד אברהם ליפינר הינו משרד בוטיק המתמחה בדיני מקרקעין. כיועץ משכנתאות מוסמך ובעל רישיון תיווך, בנוסף להשכלה אקדמית במשפטים ובמנהל עסקים, אני מביא לשולחן פרספקטיבה ייחודית הכוללת הבנה עמוקה של היבטים משפטיים, פיננסיים ומסחריים בשוק הנדל\"ן - מה שמאפשר לי לזהות סיכונים, למקסם הזדמנויות, ולהבטיח שהעסקה מתאימה ליכולות ולצרכים שלכם."
  }, {
    question: "כמה זמן אורכת עסקת מכר דירה מתחילתה ועד סופה?",
    answer: "משך הזמן הממוצע של עסקת מכר דירה נע בין חודשיים לארבעה חודשים, מהחתימה על החוזה ועד להעברת הזכויות בטאבו. הזמן המדויק תלוי במספר גורמים, כולל מורכבות העסקה, מימון במשכנתא, ולוחות הזמנים של הצדדים. בליווי מקצועי, אני פועל לייעל את התהליך ולמנוע עיכובים מיותרים."
  }, {
    question: "האם אתם מטפלים בעסקאות בכל רחבי הארץ?",
    answer: "כן, אני מטפל בעסקאות מכר בכל רחבי הארץ. לנוחות הלקוחות, אני מציע גם אפשרות לפגישות בבית הלקוח. בנוסף, אני עובד בשיתוף פעולה עם עו\"ד ירון פוקס, מה שמאפשר לנו להעניק שירות מקיף ואיכותי בכל מקום."
  }];
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return <section id="faq" className="section-padding bg-secondary-gray">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <AnimatedBox animation="slideInRight">
              <h2 className="section-title text-3xl md:text-5xl">שאלות נפוצות בעסקאות מכר דירות</h2>
              
              <div className="mt-8 relative hidden lg:block">
                <div className="relative z-10">
                  <HelpCircle size={120} className="text-primary-gold opacity-10" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-primary-gold">?</div>
                </div>
                <div className="absolute top-20 right-8 w-40 h-40 bg-primary-gold/10 rounded-full -z-10"></div>
              </div>
            </AnimatedBox>
          </div>
          
          <div className="lg:col-span-8">
            <AnimatedBox animation="slideInLeft" delay={200} className="space-y-4">
              {faqs.map((faq, index) => <div key={index} className={cn("border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all duration-300", openIndex === index ? "shadow-md" : "")}>
                  <button onClick={() => toggleAccordion(index)} className="w-full px-6 py-4 text-right flex justify-between items-center bg-primary-light hover:bg-gray-50 transition-colors duration-200">
                    <span className="text-xl text-primary-gold faq-question font-bold">
                      {faq.question}
                    </span>
                    <ChevronDown className={cn("text-primary-gold transition-transform duration-300", openIndex === index ? "transform rotate-180" : "")} size={20} />
                  </button>
                  <div className={cn("overflow-hidden transition-all duration-300 ease-in-out bg-gray-50", openIndex === index ? "max-h-96 py-4 px-6" : "max-h-0")}>
                    <p className="text-black text-lg faq-answer">{faq.answer}</p>
                  </div>
                </div>)}
            </AnimatedBox>
          </div>
        </div>
      </div>
    </section>;
};
export default FaqSection;