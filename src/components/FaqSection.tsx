
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedBox from './AnimatedBox';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "איך אדע שאני מקבל את השירות המשפטי הטוב ביותר?",
      answer: "עו״ד אבי ליפינר, בעל 15 שנות ניסיון בתחום המקרקעין, יעניק לכם ליווי אישי ומקצועי. אנו מקפידים על תקשורת שוטפת, זמינות גבוהה, והסברים בשפה ברורה ללא מונחים משפטיים מורכבים. שביעות הרצון של לקוחותינו, שרבים מהם חוזרים אלינו לעסקאות נוספות, מעידה על איכות השירות שאנו מעניקים."
    },
    {
      question: "מה כוללים שירותי הליווי המשפטי בעסקת מכר דירה?",
      answer: "השירות שלנו מקיף את כל שלבי העסקה: בדיקת הנכס, איתור מגבלות משפטיות, ניסוח וסקירת חוזה, ייעוץ פיננסי והשגת תנאי משכנתא אופטימליים, ליווי בהעברת התשלומים, טיפול בדיווחים לרשויות המס, וסיוע ברישום הזכויות על שמכם בטאבו. אנו נמצאים לצדכם בכל שלב, מהייעוץ הראשוני ועד למסירת המפתח."
    },
    {
      question: "כמה עולה ליווי משפטי לעסקת מכר דירה?",
      answer: "עלות הליווי המשפטי משתנה בהתאם למורכבות העסקה וסוג השירותים הנדרשים. אנו מציעים פגישת ייעוץ ראשונית ללא עלות, במהלכה נברר את צרכיכם המדויקים ונוכל לתת הצעת מחיר מפורטת ושקופה. אנו מאמינים שהליווי המשפטי הנכון אינו הוצאה אלא השקעה שחוסכת כסף רב בטווח הארוך, ומבטיחה עסקה בטוחה וחלקה."
    },
    {
      question: "האם אתם מלווים גם עסקאות מורכבות או מיוחדות?",
      answer: "בהחלט. עו״ד אבי ליפינר מתמחה גם בעסקאות מורכבות כגון קבוצות רכישה, דירות יד שנייה עם היסטוריה בעייתית, עסקאות קומבינציה, ועסקאות הכוללות נכסים עם בעיות רישום. הניסיון הרב שצברנו מאפשר לנו להתמודד בהצלחה עם אתגרים משפטיים מגוונים, ולהציע פתרונות יצירתיים שמבטיחים את האינטרסים שלכם."
    },
    {
      question: "כמה זמן נמשך תהליך ליווי עסקת מכר דירה?",
      answer: "משך הליווי המשפטי בעסקת מכר דירה משתנה בהתאם לנסיבות הספציפיות. בממוצע, התהליך נמשך בין חודשיים לארבעה חודשים. חלק מהגורמים המשפיעים על משך הטיפול כוללים: זמינות מסמכים, מהירות הטיפול בבנקים, וסיבוכים משפטיים בלתי צפויים. בכל מקרה, אנו פועלים בשבילכם ליצירת תהליך מהיר ככל האפשר, תוך שמירה על יסודיות ומקצועיות."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-primary-light">
      <div className="container mx-auto">
        <AnimatedBox animation="fadeIn">
          <h2 className="section-title text-center mx-auto text-3xl md:text-5xl">שאלות נפוצות</h2>
          <p className="section-subtitle text-center">
            כאן תוכלו למצוא תשובות לשאלות שנשאלות בתדירות גבוהה על ידי לקוחותינו
          </p>
        </AnimatedBox>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <AnimatedBox animation="slideUp">
            <div className="bg-primary-light rounded-xl overflow-hidden shadow-lg divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 text-right flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-medium text-xl text-primary-gold faq-question">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-6 w-6 text-primary-gold transition-transform duration-200",
                        {
                          "transform rotate-180": openIndex === index,
                        }
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 bg-white",
                      openIndex === index ? "max-h-96 py-4 px-6" : "max-h-0"
                    )}
                  >
                    <p className="text-black text-lg faq-answer">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedBox>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
