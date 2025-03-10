
import React from 'react';
import { PhoneCall, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = [{
    name: 'ראשי',
    href: '#hero'
  }, {
    name: 'אודות',
    href: '#about'
  }, {
    name: 'שאלות נפוצות',
    href: '#faq'
  }];

  return (
    <footer className="bg-primary-navy text-primary-light pt-16 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <img src="/lovable-uploads/logo.png" alt="עו״ד אבי ליפינר" className="h-16" />
            </div>
            <p className="text-primary-light mb-8 text-base">
              עו"ד אבי ליפינר - מומחה במקרקעין. מעניק ללקוחותיו ליווי משפטי מקצועי, אישי וזמין בעסקאות מכר דירות, תוך שילוב ייחודי של ידע משפטי ופיננסי.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="https://www.facebook.com/profile.php?id=61550740123868" className="bg-primary-light/10 hover:bg-primary-light/20 p-2 rounded-full transition-colors duration-300" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/avi_lipiner/" className="bg-primary-light/10 hover:bg-primary-light/20 p-2 rounded-full transition-colors duration-300" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-6 border-b border-primary-light/20 pb-2 text-primary-gold">ניווט מהיר</h3>
            <ul className="space-y-3 text-body">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-primary-light hover:text-primary-gold transition-colors duration-200 flex items-center">
                    <span className="ml-2">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-6 border-b border-primary-light/20 pb-2 text-primary-gold">צור קשר</h3>
            <div className="space-y-4 text-body">
              <div className="flex">
                <PhoneCall size={18} className="ml-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1 text-slate-50">טלפון</h4>
                  <a href="tel:0502230066" className="text-primary-light hover:text-primary-gold transition-colors duration-200">
                    050-2230066
                  </a>
                </div>
              </div>
              
              <div className="flex">
                <Mail size={18} className="ml-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">דוא"ל</h4>
                  <a href="mailto:lipiner10@gmail.com" className="text-primary-light hover:text-primary-gold transition-colors duration-200">
                    lipiner10@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex">
                <MapPin size={18} className="ml-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1 text-slate-50">כתובת</h4>
                  <address className="text-primary-light not-italic">
                    ורדינון אליעזר 3, פתח תקווה
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-light/10 mt-12 pt-6 text-center text-primary-light text-sm">
          <p>© {currentYear} כל הזכויות שמורות | עו"ד אבי ליפינר - מומחה במקרקעין</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
