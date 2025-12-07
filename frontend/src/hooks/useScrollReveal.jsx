import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * @param {Object} options - Animation options
 * @param {number} options.threshold - Percentage of element visible before triggering (0-1)
 * @param {string} options.rootMargin - Margin around the viewport
 * @param {boolean} options.triggerOnce - Whether animation should trigger only once
 * @returns {Object} - ref and isVisible state
 */
const useScrollReveal = (options = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

export default useScrollReveal;
