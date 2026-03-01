import { useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (isAnimating) return;

    // Get button position for ripple origin
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setRipple({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }

    setIsAnimating(true);

    // Start transition animation
    setTimeout(() => {
      toggleTheme();
    }, 400);

    setTimeout(() => {
      setIsAnimating(false);
      setRipple(null);
    }, 1000);
  };

  const isPiltover = theme === 'piltover';

  return (
    <>
      {/* The crystal button */}
      <button
        ref={btnRef}
        className={`${styles.crystal} ${isPiltover ? styles.piltover : styles.zaun} ${isAnimating ? styles.active : ''}`}
        onClick={handleClick}
        aria-label={`Basculer vers le theme ${isPiltover ? 'Zaun' : 'Piltover'}`}
        title={isPiltover ? 'Entrer dans les ruelles de Zaun...' : 'Retourner a la surface de Piltover...'}
      >
        {/* Inner gem facets */}
        <div className={styles.gemCore}>
          <div className={styles.facet1} />
          <div className={styles.facet2} />
          <div className={styles.facet3} />
        </div>

        {/* Orbiting particles */}
        <div className={styles.orbit}>
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className={styles.particle} style={{ animationDelay: `${i * 1.2}s` }} />
          ))}
        </div>

        {/* Glow ring */}
        <div className={styles.glowRing} />
      </button>

      {/* Fullscreen transition ripple */}
      {ripple && (
        <div
          className={`${styles.transitionOverlay} ${isAnimating ? styles.expanding : ''}`}
          style={{
            '--ripple-x': `${ripple.x}px`,
            '--ripple-y': `${ripple.y}px`,
          } as React.CSSProperties}
        >
          <div className={styles.rippleWave} />
        </div>
      )}
    </>
  );
};

export default ThemeToggle;
