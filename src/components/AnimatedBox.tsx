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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
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
  }, []);

  // Fallback for visibility if intersection observer fails
  useEffect(() => {
    // Ensure components are visible when JS is disabled or observer fails
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const animationClass = isVisible ? `animate-${animation}` : '';

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0',
        isVisible && animationClass,
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedBox;