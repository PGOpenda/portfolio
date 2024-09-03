import React, { useRef, useEffect, useState } from 'react';
import '../styles/EntranceAnimation.css';

const animationTypes = {
  fadeIn: 'fadeIn',
  slideUp: 'slideUp',
  slideLeft: 'slideLeft',
  slideRight: 'slideRight',
  scale: 'scale'
};

const AnimatedChild = ({ children, type = 'fadeIn', delay = 0, duration = 0.5 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px' // Trigger slightly before the element comes into view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const className = `animated-child ${type} ${isVisible ? 'is-visible' : ''}`;

  const style = {
    '--animation-delay': `${delay}s`,
    '--animation-duration': `${duration}s`
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};

const EntranceAnimation = ({ children, duration = 0.5 }) => {
  return (
    <div className="entrance-container">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return (
            <AnimatedChild
              key={index}
              type={child.props.animationType || 'fadeIn'}
              delay={index * 0.1}
              duration={child.props.duration || duration}
            >
              {child}
            </AnimatedChild>
          );
        }
        return child;
      })}
    </div>
  );
};

export default EntranceAnimation;