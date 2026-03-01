import styles from './GoldFrame.module.css';

interface GoldFrameProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'section' | 'card' | 'hero';
}

const GoldFrame = ({ children, className = '', variant = 'section' }: GoldFrameProps) => {
  return (
    <div className={`${styles.frame} ${styles[variant]} ${className}`}>
      {/* Top-left corner */}
      <svg className={`${styles.corner} ${styles.cornerTL}`} viewBox="0 0 80 80" fill="none">
        {/* Outer L-shape */}
        <path d="M0 0H80V6H6V80H0V0Z" fill="url(#goldGrad)" />
        {/* Inner decorative lines */}
        <path d="M10 10H70V14H14V70H10V10Z" fill="url(#goldGrad)" opacity="0.5" />
        {/* Corner flourish */}
        <path d="M6 6L24 6L24 10L10 10L10 24L6 24Z" fill="url(#goldGradLight)" />
        {/* Art Deco curves */}
        <path d="M28 6C28 6 28 16 18 16" stroke="url(#goldGradStroke)" strokeWidth="2" fill="none" />
        <path d="M6 28C16 28 16 18 16 18" stroke="url(#goldGradStroke)" strokeWidth="2" fill="none" opacity="0.7" />
        {/* Corner diamond */}
        <rect x="2" y="2" width="4" height="4" rx="0.5" fill="url(#goldGradLight)" />
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="80" y2="80">
            <stop offset="0%" stopColor="#F2E5A0" />
            <stop offset="30%" stopColor="#D4AF37" />
            <stop offset="60%" stopColor="#B8942E" />
            <stop offset="100%" stopColor="#C9A84C" />
          </linearGradient>
          <linearGradient id="goldGradLight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F2E5A0" />
            <stop offset="100%" stopColor="#E8D48B" />
          </linearGradient>
          <linearGradient id="goldGradStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8B6F22" />
          </linearGradient>
        </defs>
      </svg>

      {/* Top-right corner */}
      <svg className={`${styles.corner} ${styles.cornerTR}`} viewBox="0 0 80 80" fill="none">
        <path d="M80 0H0V6H74V80H80V0Z" fill="url(#goldGrad2)" />
        <path d="M70 10H10V14H66V70H70V10Z" fill="url(#goldGrad2)" opacity="0.5" />
        <path d="M74 6L56 6L56 10L70 10L70 24L74 24Z" fill="url(#goldGradLight2)" />
        <path d="M52 6C52 6 52 16 62 16" stroke="url(#goldGradStroke2)" strokeWidth="2" fill="none" />
        <path d="M74 28C64 28 64 18 64 18" stroke="url(#goldGradStroke2)" strokeWidth="2" fill="none" opacity="0.7" />
        <rect x="74" y="2" width="4" height="4" rx="0.5" fill="url(#goldGradLight2)" />
        <defs>
          <linearGradient id="goldGrad2" x1="80" y1="0" x2="0" y2="80">
            <stop offset="0%" stopColor="#F2E5A0" />
            <stop offset="30%" stopColor="#D4AF37" />
            <stop offset="60%" stopColor="#B8942E" />
            <stop offset="100%" stopColor="#C9A84C" />
          </linearGradient>
          <linearGradient id="goldGradLight2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F2E5A0" />
            <stop offset="100%" stopColor="#E8D48B" />
          </linearGradient>
          <linearGradient id="goldGradStroke2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8B6F22" />
          </linearGradient>
        </defs>
      </svg>

      {/* Bottom-left corner */}
      <svg className={`${styles.corner} ${styles.cornerBL}`} viewBox="0 0 80 80" fill="none">
        <path d="M0 80H80V74H6V0H0V80Z" fill="url(#goldGrad3)" />
        <path d="M10 70H70V66H14V10H10V70Z" fill="url(#goldGrad3)" opacity="0.5" />
        <path d="M6 74L24 74L24 70L10 70L10 56L6 56Z" fill="url(#goldGradLight3)" />
        <path d="M28 74C28 74 28 64 18 64" stroke="url(#goldGradStroke3)" strokeWidth="2" fill="none" />
        <rect x="2" y="74" width="4" height="4" rx="0.5" fill="url(#goldGradLight3)" />
        <defs>
          <linearGradient id="goldGrad3" x1="0" y1="80" x2="80" y2="0">
            <stop offset="0%" stopColor="#F2E5A0" />
            <stop offset="30%" stopColor="#D4AF37" />
            <stop offset="60%" stopColor="#B8942E" />
            <stop offset="100%" stopColor="#C9A84C" />
          </linearGradient>
          <linearGradient id="goldGradLight3" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#F2E5A0" />
            <stop offset="100%" stopColor="#E8D48B" />
          </linearGradient>
          <linearGradient id="goldGradStroke3" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8B6F22" />
          </linearGradient>
        </defs>
      </svg>

      {/* Bottom-right corner */}
      <svg className={`${styles.corner} ${styles.cornerBR}`} viewBox="0 0 80 80" fill="none">
        <path d="M80 80H0V74H74V0H80V80Z" fill="url(#goldGrad4)" />
        <path d="M70 70H10V66H66V10H70V70Z" fill="url(#goldGrad4)" opacity="0.5" />
        <path d="M74 74L56 74L56 70L70 70L70 56L74 56Z" fill="url(#goldGradLight4)" />
        <path d="M52 74C52 74 52 64 62 64" stroke="url(#goldGradStroke4)" strokeWidth="2" fill="none" />
        <rect x="74" y="74" width="4" height="4" rx="0.5" fill="url(#goldGradLight4)" />
        <defs>
          <linearGradient id="goldGrad4" x1="80" y1="80" x2="0" y2="0">
            <stop offset="0%" stopColor="#F2E5A0" />
            <stop offset="30%" stopColor="#D4AF37" />
            <stop offset="60%" stopColor="#B8942E" />
            <stop offset="100%" stopColor="#C9A84C" />
          </linearGradient>
          <linearGradient id="goldGradLight4" x1="1" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#F2E5A0" />
            <stop offset="100%" stopColor="#E8D48B" />
          </linearGradient>
          <linearGradient id="goldGradStroke4" x1="1" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8B6F22" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content */}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default GoldFrame;
