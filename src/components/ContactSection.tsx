
import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import ContactForm from './ContactForm';
import AnimatedBox from './AnimatedBox';

const ContactSection = () => {
  const contactInfo = [{
    icon: <Phone size={20} />,
    title: "טלפון",
    value: "050-2230066",
    href: "tel:0502230066"
  }, {
    icon: <Mail size={20} />,
    title: "דוא\"ל",
    value: "lipiner10@gmail.com",
    href: "mailto:lipiner10@gmail.com"
  }, {
    icon: <MapPin size={20} />,
    title: "כתובת",
    value: "ורדינון אליעזר 3, פתח תקווה",
    href: "https://maps.google.com/?q=ורדינון+אליעזר+3+פתח+תקווה"
  }];
  
  return (
    <section id="contact" className="section-padding bg-secondary-gray">
      <div className="container mx-auto">
        <AnimatedBox animation="fadeIn">
          <h2 className="section-title text-center mx-auto text-3xl md:text-5xl">נתחיל יחד את הדרך לעסקה מוצלחת</h2>
          <p className="section-subtitle text-center text-lg font-assistant">
            השאירו פרטים ואחזור אליכם תוך 24 שעות לתיאום פגישת ייעוץ ראשונית ללא עלות
          </p>
        </AnimatedBox>

        <div className="flex flex-col items-center mt-12">
          <AnimatedBox animation="slideInRight" className="w-full max-w-2xl">
            <ContactForm className="mx-auto" />
          </AnimatedBox>
          
          <AnimatedBox animation="slideInLeft" delay={200} className="w-full max-w-2xl mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center">
                  <div className="bg-primary-gold text-white p-2 rounded-full mr-3">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-primary-gold hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.value}</p>
                    )}
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

export default ContactSection;
