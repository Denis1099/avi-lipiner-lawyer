
import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import ContactForm from './ContactForm';
import AnimatedBox from './AnimatedBox';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone size={20} />,
      title: "טלפון",
      value: "050-0000000",
      href: "tel:0500000000"
    },
    {
      icon: <Mail size={20} />,
      title: "דוא\"ל",
      value: "info@lawyer.com",
      href: "mailto:info@lawyer.com"
    },
    {
      icon: <MapPin size={20} />,
      title: "כתובת",
      value: "אבן גבירול 30, תל אביב",
      href: "https://maps.google.com"
    },
    {
      icon: <Clock size={20} />,
      title: "שעות פעילות",
      value: "א'-ה' 9:00-19:00",
      href: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary-gray">
      <div className="container mx-auto">
        <AnimatedBox animation="fadeIn">
          <h2 className="section-title text-center mx-auto text-3xl md:text-5xl">נתחיל יחד את הדרך לעסקה מוצלחת</h2>
          <p className="section-subtitle text-center text-lg">
            השאירו פרטים ואחזור אליכם תוך 24 שעות לתיאום פגישת ייעוץ ראשונית ללא עלות
          </p>
        </AnimatedBox>

        <div className="flex flex-col items-center mt-12">
          <AnimatedBox animation="slideInRight" className="w-full max-w-2xl">
            <ContactForm className="mx-auto" />
          </AnimatedBox>
          
          <AnimatedBox animation="slideInLeft" delay={200} className="w-full max-w-2xl mt-8">
            <div className="bg-primary-light rounded-lg shadow-lg h-full p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary-gold">פרטי התקשרות</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-secondary-gray rounded-full p-2 ml-4 flex-shrink-0 text-primary-gold">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-black mb-1 text-lg">{item.title}</h4>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-primary-gold hover:text-primary-gold/80 transition-colors duration-200 flex items-center group text-lg"
                          target={item.href.startsWith('http') ? "_blank" : undefined}
                          rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        >
                          {item.value}
                          <ArrowRight size={14} className="mr-1 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </a>
                      ) : (
                        <p className="text-black text-lg">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-4 text-primary-gold">בואו נישאר בקשר</h3>
                <div className="flex space-x-4 space-x-reverse">
                  <a 
                    href="#" 
                    className="bg-primary-gold text-primary-light p-3 rounded-full hover:bg-opacity-90 transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-primary-gold text-primary-light p-3 rounded-full hover:bg-opacity-90 transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedBox>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
