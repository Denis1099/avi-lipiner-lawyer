
import React from 'react';

interface LogoProps {
  scrolled: boolean;
}

const Logo: React.FC<LogoProps> = ({ scrolled }) => {
  return (
    <div className="flex-shrink-0">
      <a href="#hero" className="block">
        <img 
          src="/lovable-uploads/logo.webp" 
          alt="עו״ד אבי ליפינר לוגו" 
          className={`transition-all duration-300 ${scrolled ? 'h-14' : 'h-16'}`}
        />
      </a>
    </div>
  );
};

export default Logo;
