import { useEffect, useState, useCallback } from 'react';
import styles from './KonamiEgg.module.css';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

const PIXEL_COLORS = [
  '#09637E', '#088395', '#7AB2B2',
  '#ABE7B2', '#CBF3BB',
  '#9B5DE0', '#D78FEE', '#FDCFFA',
  '#ffcc00', '#ff5555', '#55ff55',
];

interface Confetti {
  id: number;
  x: number;
  color: string;
  delay: number;
  size: number;
}

const KonamiEgg = () => {
  const [inputIndex, setInputIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState<Confetti[]>([]);

  const triggerConfetti = useCallback(() => {
    const pieces: Confetti[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: PIXEL_COLORS[Math.floor(Math.random() * PIXEL_COLORS.length)],
      delay: Math.random() * 2,
      size: Math.random() * 8 + 4,
    }));
    setConfettiPieces(pieces);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === KONAMI_CODE[inputIndex]) {
        const next = inputIndex + 1;
        if (next === KONAMI_CODE.length) {
          triggerConfetti();
          setInputIndex(0);
        } else {
          setInputIndex(next);
        }
      } else {
        setInputIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inputIndex, triggerConfetti]);

  if (!showConfetti) return null;

  return (
    <div className={styles.confettiContainer}>
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className={styles.confettiPiece}
          style={{
            left: `${piece.x}%`,
            backgroundColor: piece.color,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            animationDelay: `${piece.delay}s`,
            boxShadow: `0 0 ${piece.size}px ${piece.color}`,
          }}
        />
      ))}
      <div className={styles.easterEggMsg}>
        ★ KONAMI CODE ACTIVE ★
      </div>
    </div>
  );
};

export default KonamiEgg;
