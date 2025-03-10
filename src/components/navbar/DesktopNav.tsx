
import React from 'react';
import { NavLink } from './types';
import { Phone } from 'lucide-react';

interface DesktopNavProps {
  activeSection: string;
  scrolled: boolean;
  navLinks: NavLink[];
}

const DesktopNav: React.FC<DesktopNavProps> = ({ activeSection, scrolled, navLinks }) => {
  return (
    <>
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
    </>
  );
};

export default DesktopNav;
