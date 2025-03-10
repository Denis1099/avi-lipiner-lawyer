
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
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force visibility immediately for better user experience
    const immediateVisibilityTimeout = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true);
        setHasAnimated(true);
      }
    }, 800); // Much shorter timeout for better UX

    let observer: IntersectionObserver | null = null;

    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
            
            if (ref.current) {
              observer?.unobserve(ref.current);
            }
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
    } catch (error) {
      console.warn('IntersectionObserver failed, forcing visibility');
      setIsVisible(true);
      setHasAnimated(true);
    }

    // Initial visibility check
    if (ref.current && window.getComputedStyle(ref.current).opacity === '0') {
      setTimeout(() => {
        if (!isVisible) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      }, 100);
    }

    return () => {
      clearTimeout(immediateVisibilityTimeout);
      if (ref.current && observer) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated, isVisible]);

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
      default:
        return 'animate-fadeIn';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-500',
        {
          'opacity-0': !isVisible,
          'opacity-100': isVisible,
        },
        getAnimationClass(),
        className
      )}
      style={{ 
        animationDelay: isVisible ? `${delay}ms` : '0ms',
        willChange: 'opacity, transform',
        visibility: isVisible ? 'visible' : 'hidden'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedBox;
