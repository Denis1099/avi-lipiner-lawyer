
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'ראשי', href: '#hero' },
    { name: 'אודות', href: '#about' },
    { name: 'יתרונות', href: '#advantages' },
    { name: 'שירותים', href: '#services' },
    { name: 'המלצות', href: '#testimonials' },
    { name: 'שאלות נפוצות', href: '#faq' },
    { name: 'צור קשר', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="h-10 w-10 bg-primary-navy rounded-lg flex items-center justify-center text-white font-bold text-lg">
                עו״ד
              </div>
              <div className="mr-3 text-lg font-bold text-primary-navy">
                אבי ליפינר
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary-navy hover:bg-secondary-light px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+1234567890"
              className="bg-primary-navy text-white hover:bg-primary-navy/90 mr-4 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center"
            >
              <Phone size={16} className="ml-2" />
              התקשרו עכשיו
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-navy hover:text-primary-navy/80 focus:outline-none transition-all duration-300"
            >
              {isMenuOpen ? (
                <X size={24} className="block h-6 w-6" />
              ) : (
                <Menu size={24} className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg p-4 absolute top-16 right-0 left-0 z-50 animate-slideInRight">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-navy hover:bg-secondary-light rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+1234567890"
              className="block px-3 py-2 text-base font-medium text-white bg-primary-navy hover:bg-primary-navy/90 rounded-md mt-3 text-center"
            >
              התקשרו עכשיו
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
