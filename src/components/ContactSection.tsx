import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import ContactForm from './ContactForm';
import AnimatedBox from './AnimatedBox';
const ContactSection = () => {
  const contactInfo = [{
    icon: <Phone size={20} />,
    title: "טלפון",
    value: "050-0000000",
    href: "tel:0500000000"
  }, {
    icon: <Mail size={20} />,
    title: "דוא\"ל",
    value: "info@lawyer.com",
    href: "mailto:info@lawyer.com"
  }, {
    icon: <MapPin size={20} />,
    title: "כתובת",
    value: "אבן גבירול 30, תל אביב",
    href: "https://maps.google.com"
  }, {
    icon: <Clock size={20} />,
    title: "שעות פעילות",
    value: "א'-ה' 9:00-19:00",
    href: null
  }];
  return <section id="contact" className="section-padding bg-secondary-gray">
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
            
          </AnimatedBox>
        </div>
      </div>
    </section>;
};
export default ContactSection;