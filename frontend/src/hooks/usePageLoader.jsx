import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageLoader = (minDuration = 400) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);

    setIsLoading(true);
    const startTime = Date.now();

    const hideLoader = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(minDuration - elapsed, 0);

      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    // Wait for document to be ready
    if (document.readyState === 'complete') {
      // Add small delay to ensure smooth transition
      setTimeout(hideLoader, 100);
    } else {
      window.addEventListener('load', hideLoader);

      // Fallback timeout to ensure loader doesn't hang
      const maxTimeout = setTimeout(hideLoader, 2000);

      return () => {
        window.removeEventListener('load', hideLoader);
        clearTimeout(maxTimeout);
      };
    }
  }, [location.pathname, minDuration]);

  return isLoading;
};
