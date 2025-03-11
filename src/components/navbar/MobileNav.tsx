
import React from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NavLink } from './types';

interface MobileNavProps {
  isMenuOpen: boolean;
  toggleMenu: (e?: React.MouseEvent) => void;
  activeSection: string;
  navLinks: NavLink[];
  setIsMenuOpen: (isOpen: boolean) => void;
  scrolled: boolean; // Add scrolled prop
}

const MobileNav: React.FC<MobileNavProps> = ({ 
  isMenuOpen, 
  toggleMenu, 
  activeSection, 
  navLinks,
  setIsMenuOpen,
  scrolled // Use scrolled prop
}) => {
  return (
    <>
      {/* Mobile Navigation Button */}
      <div className="lg:hidden flex items-center z-50">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
          className={`inline-flex items-center justify-center w-12 h-12 rounded-md focus:outline-none transition-all duration-300 touch-manipulation
            ${scrolled 
              ? 'text-primary-gold hover:bg-primary-gold/10' 
              : 'text-primary-light bg-primary-navy/80 hover:bg-primary-navy'}
          `}
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
    </>
  );
};

export default MobileNav;
