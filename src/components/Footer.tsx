
import React from 'react';
import { PhoneCall, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'ראשי', href: '#hero' },
    { name: 'אודות', href: '#about' },
    { name: 'יתרונות', href: '#advantages' },
    { name: 'שירותים', href: '#services' },
    { name: 'המלצות', href: '#testimonials' },
    { name: 'שאלות נפוצות', href: '#faq' },
    { name: 'צור קשר', href: '#contact' },
  ];

  return (
    <footer className="bg-primary-navy text-white pt-16 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="md:col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center text-primary-navy font-bold text-lg">
                עו״ד
              </div>
              <div className="mr-3 text-xl font-bold">
                אבי ליפינר
              </div>
            </div>
            <p className="text-gray-300 mb-8">
              עו"ד אבי ליפינר - מומחה במקרקעין. מעניק ללקוחותיו ליווי משפטי מקצועי, אישי וזמין בעסקאות מכר דירות, תוך שילוב ייחודי של ידע משפטי ופיננסי.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">ניווט מהיר</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <span className="ml-2">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">שעות פעילות</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between">
                <span>ראשון - חמישי</span>
                <span>9:00 - 19:00</span>
              </div>
              <div className="flex justify-between">
                <span>שישי</span>
                <span>9:00 - 13:00</span>
              </div>
              <div className="flex justify-between">
                <span>שבת</span>
                <span>סגור</span>
              </div>
              <div className="pt-4 text-white">
                ניתן לתאם פגישות גם מחוץ לשעות הפעילות
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">צור קשר</h3>
            <div className="space-y-4">
              <div className="flex">
                <PhoneCall size={18} className="ml-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">טלפון</h4>
                  <a href="tel:0500000000" className="text-gray-300 hover:text-white transition-colors duration-200">
                    050-0000000
                  </a>
                </div>
              </div>
              
              <div className="flex">
                <Mail size={18} className="ml-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">דוא"ל</h4>
                  <a href="mailto:info@lawyer.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                    info@lawyer.com
                  </a>
                </div>
              </div>
              
              <div className="flex">
                <MapPin size={18} className="ml-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">כתובת</h4>
                  <address className="text-gray-300 not-italic">
                    אבן גבירול 30, תל אביב
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>© {currentYear} כל הזכויות שמורות | עו"ד אבי ליפינר - מומחה במקרקעין</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
