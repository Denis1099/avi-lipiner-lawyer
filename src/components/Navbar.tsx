import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Toggle mobile menu with additional safeguards
  const toggleMenu = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle scrolling effects
  const handleScroll = useCallback(() => {
    // Check if page is scrolled for navbar background
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Determine active section
    const sections = ['hero', 'about', 'faq', 'contact'];
    const currentPosition = window.scrollY + 100;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          currentPosition >= offsetTop &&
          currentPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Initial check for the active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'ראשי', href: '#hero', section: 'hero' },
    { name: 'אודות', href: '#about', section: 'about' },
    { name: 'שאלות נפוצות', href: '#faq', section: 'faq' },
    { name: 'צור קשר', href: '#contact', section: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-primary-light shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className="block">
              <img 
                src="/lovable-uploads/logo.png" 
                alt="עו״ד אבי ליפינר לוגו" 
                className={`transition-all duration-300 ${scrolled ? 'h-14' : 'h-16'}`}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-2 space-x-reverse">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-md text-lg font-medium transition-all duration-200
                    ${activeSection === link.section 
                      ? 'text-primary-gold' 
                      : scrolled 
                        ? 'text-black hover:text-primary-gold' 
                        : 'text-white hover:text-primary-gold'
                    }
                  `}
                >
                  {link.name}
                  {activeSection === link.section && (
                    <span className="absolute bottom-0 right-0 left-0 mx-auto w-8 h-0.5 bg-primary-gold rounded-full" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:0502230066"
              className="bg-primary-gold hover:bg-primary-gold/90 text-white px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone size={18} className="ml-2" />
              התקשרו עכשיו
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="lg:hidden flex items-center z-50">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu();
              }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-md text-primary-gold hover:bg-primary-gold/10 focus:outline-none transition-all duration-300 touch-manipulation"
              aria-expanded={isMenuOpen}
              aria-label="תפריט ניווט"
            >
              <span className="sr-only">פתח תפריט</span>
              {isMenuOpen ? (
                <X size={28} className="pointer-events-none" />
              ) : (
                <Menu size={28} className="pointer-events-none" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden bg-white shadow-lg absolute top-full right-0 left-0 z-50 transition-all duration-300 transform overflow-hidden ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4'
        }`}
      >
        <div className="p-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 text-lg font-medium rounded-md transition-colors duration-200 ${
                activeSection === link.section 
                  ? 'bg-primary-gold/10 text-primary-gold' 
                  : 'text-black hover:text-primary-gold hover:bg-primary-gold/5'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="pt-2 mt-3 border-t border-gray-200">
            <a
              href="tel:0502230066"
              className="flex items-center justify-center w-full px-4 py-3 text-white bg-primary-gold hover:bg-primary-gold/90 rounded-md text-lg font-medium transition-all duration-200"
            >
              <Phone size={18} className="ml-2" />
              התקשרו עכשיו - 050-2230066
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;