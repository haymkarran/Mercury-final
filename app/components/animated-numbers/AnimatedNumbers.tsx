'use client'
import React, { useEffect, useState, useRef } from 'react';
import styles from './AnimatedNumbers.module.css';

interface AnimatedNumbersProps {
  targetNumber: number;
}

const AnimatedNumbers: React.FC<AnimatedNumbersProps> = ({ targetNumber }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [animatedNumber, setAnimatedNumber] = useState(0);
  const animationDuration = 2000; // milliseconds
  const observerRef = useRef(null);

  const startNumber = useRef(Math.floor(Math.random() * 100));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      const startTime = Date.now();

      const updateNumber = () => {
        const currentTime = Date.now();
        const progress = (currentTime - startTime) / animationDuration;

        if (progress < 1) {
          const newNumber = startNumber.current + Math.floor((targetNumber - startNumber.current) * progress);
          setAnimatedNumber(newNumber);
          requestAnimationFrame(updateNumber);
        } else {
          setAnimatedNumber(targetNumber);
        }
      };

      updateNumber();
    }
  }, [isIntersecting, targetNumber]);

  return (
    <div className={styles.animatedNumber} ref={observerRef}>
      {animatedNumber}
    </div>
  );
};

export default AnimatedNumbers;
