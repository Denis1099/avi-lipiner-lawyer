
import React from 'react';
import { FileText, Calculator, HomeIcon } from 'lucide-react';
import AnimatedBox from './AnimatedBox';

const ServicesSection = () => {
  const services = [
    {
      icon: <FileText size={32} className="text-primary-navy" />,
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=3012",
      title: "בדיקות מקדימות וחוזה מכר",
      description: "ליווי מקצועי בשלב הבדיקות הראשוניות, ניסוח וסקירת חוזה המכר, זיהוי סיכונים פוטנציאליים והבטחת האינטרסים שלכם. בדיקת רישום הנכס, היעדר שעבודים, ותיאום מול ספרי המקרקעין.",
      statistic: "בדיקה מדוקדקת של למעלה מ-20 נקודות קריטיות בכל חוזה מכר"
    },
    {
      icon: <Calculator size={32} className="text-primary-navy" />,
      image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=3540",
      title: "ליווי פיננסי ומשכנתאות",
      description: "ייעוץ מקצועי בהיבטים הפיננסיים של העסקה, ליווי בתהליך המשכנתא, תיאום מול הבנק, הכנת המסמכים הנדרשים והבטחת העברות כספים בטוחות ויעילות.",
      statistic: "סיוע בהשגת תנאי מימון אופטימליים המותאמים ליכולות הפיננסיות שלכם"
    },
    {
      icon: <HomeIcon size={32} className="text-primary-navy" />,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=3546",
      title: "השלמת העסקה ורישום הזכויות",
      description: "ליווי צמוד בשלב ההתחשבנויות הסופיות, העברת הכספים, חתימה אצל נוטריון כשנדרש, טיפול בדיווחים למס שבח ומס רכישה, ורישום הזכויות על שמכם בטאבו.",
      statistic: "100% הצלחה ברישום זכויות תקין בטאבו ללא עיכובים מיותרים"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <AnimatedBox animation="fadeIn">
          <h2 className="section-title text-center mx-auto">הליווי המשפטי המקיף שלנו בעסקאות מכר דירות</h2>
        </AnimatedBox>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <AnimatedBox 
              key={index} 
              animation="slideUp" 
              delay={index * 200}
              className="group"
            >
              <div className="h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-md">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary-navy">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="p-4 bg-secondary-light rounded-lg">
                    <p className="text-sm font-medium text-primary-navy">
                      {service.statistic}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedBox>
          ))}
        </div>
        
        <AnimatedBox animation="fadeIn" delay={600} className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block py-3 px-8 bg-primary-navy text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            לפרטים נוספים צרו קשר
          </a>
        </AnimatedBox>
      </div>
    </section>
  );
};

export default ServicesSection;
