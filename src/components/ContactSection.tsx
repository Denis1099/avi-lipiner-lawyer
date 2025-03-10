import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from './ContactForm';
import AnimatedBox from './AnimatedBox';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "טלפון",
      value: "050-2230066",
      href: "tel:0502230066",
      description: "זמין בימים א׳-ה׳, 9:00-19:00"
    },
    {
      icon: <Mail size={24} />,
      title: "דוא\"ל",
      value: "lipiner10@gmail.com",
      href: "mailto:lipiner10@gmail.com",
      description: "מענה תוך 24 שעות"
    },
    {
      icon: <MapPin size={24} />,
      title: "משרד",
      value: "ורדינון אליעזר 3, פתח תקווה",
      href: "https://maps.google.com/?q=ורדינון+אליעזר+3+פתח+תקווה",
      description: "פגישות בתיאום מראש"
    }
  ];
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary-gray">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto mb-16">
          <AnimatedBox animation="fadeIn">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
              <span className="text-primary-gold">נתחיל יחד</span> את הדרך לעסקה מוצלחת
            </h2>
            <p className="text-lg md:text-xl text-center text-gray-700 max-w-2xl mx-auto">
              השאירו פרטים ואחזור אליכם תוך 24 שעות לתיאום פגישת ייעוץ ראשונית ללא עלות
            </p>
          </AnimatedBox>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <AnimatedBox animation="fadeIn" className="w-full mb-12">
            <ContactForm className="w-full bg-white shadow-lg" />
          </AnimatedBox>
          
          {/* Contact Cards */}
          <AnimatedBox animation="slideInRight" className="w-full mt-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary-gold p-4 text-white">
                <h3 className="text-xl font-semibold text-center">דרכי התקשרות</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-100">
                {contactInfo.map((item, index) => (
                  <div key={index} className="p-5 hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-primary-gold bg-opacity-10 text-primary-gold p-3 rounded-full mb-3">
                        {item.icon}
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-primary-gold hover:text-primary-gold hover:underline transition-colors duration-200 block mb-1"
                          target={item.href.startsWith('https') ? "_blank" : undefined}
                          rel={item.href.startsWith('https') ? "noopener noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 mb-1">{item.value}</p>
                      )}
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <div className="flex items-center justify-center">
                  <Clock size={20} className="text-primary-gold ml-2" />
                  <p className="text-gray-700 text-center">
                    <span className="font-semibold">שעות פעילות:</span> ימים א׳-ה׳, 9:00-19:00
                  </p>
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