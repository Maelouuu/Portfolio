import { useTheme } from '../context/ThemeContext';
import styles from './ZaunDecorations.module.css';

const ZaunDecorations = () => {
  const { isZaun } = useTheme();

  if (!isZaun) return null;

  return (
    <div className={styles.container}>
      {/* Film grain noise overlay */}
      <div className={styles.grain} />

      {/* Neon floating particles */}
      <div className={styles.particles}>
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className={styles.neonParticle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              background: ['#0ff', '#ff00ff', '#B6F500', '#ff3366'][i % 4],
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
            }}
          />
        ))}
      </div>

      {/* Graffiti SVG tags — positioned around the viewport */}
      {/* Jinx-inspired tag: spray paint drip on left side */}
      <svg className={`${styles.graffitiTag} ${styles.tagLeft}`} viewBox="0 0 120 200" fill="none">
        {/* "JINX" spray tag */}
        <text x="10" y="40" fill="#ff3366" fontFamily="'Press Start 2P'" fontSize="12" opacity="0.15" transform="rotate(-10, 60, 100)">
          JINX
        </text>
        {/* Paint drip */}
        <path d="M20 45 L20 90 Q20 100 22 110 L22 150" stroke="#ff3366" strokeWidth="3" opacity="0.1" strokeLinecap="round" />
        <path d="M45 42 L45 75 Q45 85 47 95 L47 120" stroke="#ff3366" strokeWidth="2" opacity="0.08" strokeLinecap="round" />
        {/* Spray splatter */}
        <circle cx="30" cy="50" r="2" fill="#ff3366" opacity="0.12" />
        <circle cx="55" cy="35" r="1.5" fill="#ff3366" opacity="0.1" />
        <circle cx="15" cy="55" r="1" fill="#ff3366" opacity="0.08" />
      </svg>

      {/* Star/anarchist spray on right */}
      <svg className={`${styles.graffitiTag} ${styles.tagRight}`} viewBox="0 0 100 100" fill="none">
        {/* Five-pointed star */}
        <path
          d="M50 10 L61 38 L92 38 L67 56 L77 85 L50 67 L23 85 L33 56 L8 38 L39 38 Z"
          stroke="#0ff"
          strokeWidth="2"
          fill="none"
          opacity="0.08"
        />
        {/* Inner circle */}
        <circle cx="50" cy="50" r="15" stroke="#0ff" strokeWidth="1" fill="none" opacity="0.06" />
      </svg>

      {/* "ZAUN" text tag bottom */}
      <svg className={`${styles.graffitiTag} ${styles.tagBottom}`} viewBox="0 0 200 60" fill="none">
        <text x="10" y="45" fill="#B6F500" fontFamily="'Press Start 2P'" fontSize="18" opacity="0.06" letterSpacing="8">
          ZAUN
        </text>
        {/* Underline scribble */}
        <path d="M10 52 Q50 58 100 50 Q150 42 190 52" stroke="#B6F500" strokeWidth="2" opacity="0.05" fill="none" />
      </svg>

      {/* Hextech symbol */}
      <svg className={`${styles.graffitiTag} ${styles.tagTopRight}`} viewBox="0 0 80 90" fill="none">
        {/* Hexagon outline */}
        <path
          d="M40 5 L72 22.5 L72 57.5 L40 75 L8 57.5 L8 22.5 Z"
          stroke="#ff00ff"
          strokeWidth="1.5"
          fill="none"
          opacity="0.06"
        />
        {/* Inner triangle */}
        <path
          d="M40 20 L58 50 L22 50 Z"
          stroke="#ff00ff"
          strokeWidth="1"
          fill="none"
          opacity="0.05"
        />
      </svg>
    </div>
  );
};

export default ZaunDecorations;
