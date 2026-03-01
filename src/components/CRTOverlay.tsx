import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const CRTOverlay = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { isZaun } = useTheme();

  useEffect(() => {
    const handleTransition = () => {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 600);
    };

    window.addEventListener('page-transition', handleTransition);
    return () => window.removeEventListener('page-transition', handleTransition);
  }, []);

  // Only show CRT effects in Zaun mode
  if (!isZaun) return null;

  return (
    <>
      {/* Scanlines overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9999,
          background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 3px)',
          opacity: 0.4,
        }}
      />
      {/* CRT vignette */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9998,
          background: 'radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.3) 100%)',
        }}
      />
      {/* Channel switch transition */}
      {isTransitioning && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 99999,
            background: '#000',
            animation: 'channel-switch 0.6s ease-out forwards',
          }}
        />
      )}
    </>
  );
};

export default CRTOverlay;
