
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
    { name: 'שאלות נפוצות', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-primary-light shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
      style={{ backgroundColor: scrolled ? '#fbfbfb' : 'transparent' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src="/lovable-uploads/logo.png" alt="עו״ד אבי ליפינר לוגו" className="h-16" />
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1 space-x-reverse">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-assistant text-black hover:text-primary-gold hover:bg-secondary-gray px-3 py-2 rounded-md text-xl font-medium transition-all duration-200"
                  style={{ color: scrolled ? '#000000' : '#fbfbfb' }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button - Right aligned */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+1234567890"
              className="font-assistant bg-primary-gold text-primary-light hover:bg-opacity-90 px-4 py-2 rounded-md text-xl font-medium transition-all duration-300 flex items-center"
              style={{ backgroundColor: '#b08d57', color: '#fbfbfb' }}
            >
              <Phone size={16} className="ml-2" />
              התקשרו עכשיו
            </a>
          </div>

          {/* Mobile Navigation Button - Always golden */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-gold hover:text-primary-gold/80 focus:outline-none transition-all duration-300"
              style={{ color: '#b08d57' }}
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
        <div className="lg:hidden bg-primary-light shadow-lg p-4 absolute top-16 right-0 left-0 z-50 animate-slideInRight" style={{ backgroundColor: '#fbfbfb' }}>
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-assistant block px-3 py-2 text-xl font-medium text-black hover:text-primary-gold hover:bg-secondary-gray rounded-md"
                style={{ color: '#000000' }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+1234567890"
              className="font-assistant block px-3 py-2 text-xl font-medium text-primary-light bg-primary-gold hover:bg-opacity-90 rounded-md mt-3 text-center"
              style={{ backgroundColor: '#b08d57', color: '#fbfbfb' }}
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
