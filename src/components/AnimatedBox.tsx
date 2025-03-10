
import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBoxProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  animation?: 'fadeIn' | 'slideInRight' | 'slideInLeft' | 'slideUp' | 'scaleIn';
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({
  children,
  delay = 0,
  className,
  animation = 'fadeIn'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial visibility to true for SSR and accessibility
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay to ensure DOM has updated
          setTimeout(() => {
            setIsVisible(true);
          }, delay < 300 ? delay : 300); // Cap delay at 300ms
          
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  // Immediate visibility for critical elements
  useEffect(() => {
    // Force visibility after 1 second as fallback
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        // Start with opacity-70 instead of opacity-0 to ensure initial visibility
        'opacity-70 transition-all duration-500',
        isVisible && `animate-${animation} opacity-100`,
        className
      )}
      style={{ 
        animationDelay: `${Math.min(delay, 500)}ms`, // Cap delay at 500ms
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedBox;
