
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
    // Force visibility after a maximum timeout
    const forceVisibilityTimeout = setTimeout(() => {
      if (!isVisible) {
        console.log('Forcing visibility due to timeout');
        setIsVisible(true);
        setHasAnimated(true);
      }
    }, 2000); // 2 second maximum wait

    let observer: IntersectionObserver | null = null;

    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            console.log('Element intersecting, triggering animation');
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
      console.warn('IntersectionObserver failed, forcing visibility:', error);
      setIsVisible(true);
      setHasAnimated(true);
    }

    // Initial visibility check
    if (ref.current && window.getComputedStyle(ref.current).opacity === '0') {
      console.log('Initial opacity is 0, scheduling visibility check');
      setTimeout(() => {
        if (!isVisible) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      }, 100);
    }

    return () => {
      clearTimeout(forceVisibilityTimeout);
      if (ref.current && observer) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-500',
        {
          'opacity-0': !isVisible,
          'opacity-100': isVisible,
          [`animate-${animation}`]: isVisible && animation,
        },
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
