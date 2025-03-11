
import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBoxProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  animation?: 'fadeIn' | 'slideInRight' | 'slideInLeft' | 'slideUp' | 'scaleIn' | 'bounce';
  duration?: number;
  threshold?: number;
  once?: boolean;
  easing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'cubic-bezier';
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({
  children,
  delay = 0,
  className,
  animation = 'fadeIn',
  duration = 800, // Increased from 500 for smoother animations
  threshold = 0.1,
  once = true,
  easing = 'cubic-bezier(0.25, 0.1, 0.25, 1.0)' // Using a smoother cubic-bezier curve
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize visible state for elements that are in view on page load
    if (ref.current) {
      try {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && (!hasAnimated || !once)) {
              setTimeout(() => {
                setIsVisible(true);
                setHasAnimated(true);
              }, 50); // Small delay to allow for smoother batch rendering
              
              if (ref.current && once) {
                observer.unobserve(ref.current);
              }
            } else if (!entry.isIntersecting && !once && hasAnimated) {
              setIsVisible(false);
            }
          },
          {
            rootMargin: '0px',
            threshold
          }
        );

        observer.observe(ref.current);

        return () => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        };
      } catch (error) {
        console.warn('IntersectionObserver failed, forcing visibility');
        setIsVisible(true);
        setHasAnimated(true);
      }
    }

    // Fallback for browsers without IntersectionObserver
    const fallbackTimeout = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true);
        setHasAnimated(true);
      }
    }, 1000);

    return () => clearTimeout(fallbackTimeout);
  }, [hasAnimated, isVisible, once, threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return '';
    
    switch (animation) {
      case 'fadeIn':
        return 'animate-fadeIn';
      case 'slideInRight':
        return 'animate-slideInRight';
      case 'slideInLeft':
        return 'animate-slideInLeft';
      case 'slideUp':
        return 'animate-slideUp';
      case 'scaleIn':
        return 'animate-scaleIn';
      case 'bounce':
        return 'animate-bounce';
      default:
        return 'animate-fadeIn';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-opacity',
        {
          'opacity-0': !isVisible,
          'opacity-100': isVisible,
        },
        getAnimationClass(),
        className
      )}
      style={{ 
        animationDelay: isVisible ? `${delay}ms` : '0ms',
        animationDuration: `${duration}ms`,
        animationTimingFunction: easing,
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: easing,
        willChange: isVisible ? 'opacity, transform' : 'auto',
        visibility: isVisible ? 'visible' : 'hidden'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedBox;
