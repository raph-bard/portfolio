import { useEffect } from 'react';

const SpotlightEffect = () => {
  useEffect(() => {
    const spotlight = document.getElementById('spotlight');
    
    const handleMouseMove = (event: MouseEvent) => {
      if (spotlight) {
        const { clientX: mouseX, clientY: mouseY } = event;
        spotlight.style.background = `radial-gradient(circle closest-side, rgba(29, 78, 216, 0.15), transparent 80%)`;
        spotlight.style.backgroundPosition = `${mouseX}px ${mouseY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default SpotlightEffect;
