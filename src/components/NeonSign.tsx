import { useState } from 'react';
import styles from './NeonSign.module.css';

interface NeonSignProps {
  text: string;
  color?: string;
  glowColor?: string;
  fontSize?: string;
}

const NeonSign = ({ text, color = '#D78FEE', glowColor = '#9B5DE0', fontSize = '2rem' }: NeonSignProps) => {
  const [isFlickering, setIsFlickering] = useState(false);

  return (
    <div
      className={styles.signContainer}
      onMouseEnter={() => setIsFlickering(true)}
      onMouseLeave={() => setIsFlickering(false)}
    >
      {/* Mounting bar */}
      <div className={styles.mountBar}>
        <div className={styles.chain} />
        <div className={styles.chain} />
      </div>

      {/* Sign background */}
      <div className={styles.signBoard}>
        <h2
          className={`${styles.neonText} ${isFlickering ? styles.flickering : ''}`}
          style={{
            color,
            fontSize,
            textShadow: `
              0 0 7px ${color},
              0 0 10px ${color},
              0 0 21px ${color},
              0 0 42px ${glowColor},
              0 0 82px ${glowColor},
              0 0 92px ${glowColor}
            `,
          }}
        >
          {text}
        </h2>
        {/* Light reflection on wall */}
        <div
          className={styles.wallGlow}
          style={{
            background: `radial-gradient(ellipse, ${glowColor}22 0%, transparent 70%)`,
          }}
        />
      </div>
    </div>
  );
};

export default NeonSign;
