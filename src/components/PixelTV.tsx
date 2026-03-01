import { useState } from 'react';
import styles from './PixelTV.module.css';

interface PixelTVProps {
  children: React.ReactNode;
  onContent?: React.ReactNode;
  width?: string;
}

const PixelTV = ({ children, onContent, width = '360px' }: PixelTVProps) => {
  const [isOn, setIsOn] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    if (isOn) {
      setShowContent(false);
      setTimeout(() => setIsOn(false), 200);
    } else {
      setIsOn(true);
      setTimeout(() => setShowContent(true), 600);
    }
  };

  return (
    <div className={styles.tvContainer} style={{ width }}>
      {/* Film reel decoration on top */}
      <div className={styles.filmReelTop}>
        <svg width="52" height="52" viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
          <circle cx="8" cy="8" r="7" fill="#1a1a1a" stroke="var(--cinema-magenta)" strokeWidth="1" />
          <circle cx="8" cy="8" r="5.5" fill="none" stroke="var(--cinema-red)" strokeWidth="0.5" opacity="0.5" />
          <circle cx="8" cy="8" r="2.5" fill="var(--cinema-magenta)" />
          <circle cx="8" cy="8" r="1" fill="#1a1a1a" />
          <circle cx="8" cy="4" r="1.2" fill="var(--cinema-red)" />
          <circle cx="8" cy="12" r="1.2" fill="var(--cinema-red)" />
          <circle cx="4" cy="8" r="1.2" fill="var(--cinema-red)" />
          <circle cx="12" cy="8" r="1.2" fill="var(--cinema-red)" />
          <circle cx="5" cy="5" r="0.9" fill="var(--cinema-orange)" />
          <circle cx="11" cy="5" r="0.9" fill="var(--cinema-orange)" />
          <circle cx="5" cy="11" r="0.9" fill="var(--cinema-orange)" />
          <circle cx="11" cy="11" r="0.9" fill="var(--cinema-orange)" />
        </svg>
      </div>

      {/* TV body */}
      <div className={styles.tvBody} onClick={handleClick}>
        {/* Marquee header with lights */}
        <div className={styles.marqueeHeader}>
          <div className={styles.marqueeLight} />
          <div className={styles.marqueeLight} style={{ animationDelay: '0.3s' }} />
          <span className={styles.brandLabel}>CINEMAX</span>
          <div className={styles.marqueeLight} style={{ animationDelay: '0.6s' }} />
          <div className={styles.marqueeLight} style={{ animationDelay: '0.9s' }} />
        </div>

        {/* Side film strips */}
        <div className={styles.mainSection}>
          <div className={styles.sideStrip}>
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className={styles.stripHole} />
            ))}
          </div>

          {/* Screen with rounded corners */}
          <div className={styles.screenFrame}>
            <div className={styles.screenBevel}>
              <div className={`${styles.screen} ${isOn ? styles.screenOn : ''}`}>
                {isOn && showContent ? (
                  <div className={styles.screenContent}>
                    {onContent || children}
                  </div>
                ) : isOn ? (
                  <div className={styles.staticNoise}>
                    <div className={styles.staticOverlay} />
                  </div>
                ) : (
                  <div className={styles.screenOff}>
                    {children}
                  </div>
                )}
                {isOn && <div className={styles.scanline} />}
                {isOn && <div className={styles.screenGlare} />}
                {/* CRT curvature overlay */}
                <div className={styles.crtCurve} />
              </div>
            </div>
          </div>

          <div className={styles.sideStrip}>
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className={styles.stripHole} />
            ))}
          </div>
        </div>

        {/* Bottom control panel */}
        <div className={styles.controlPanel}>
          <div className={styles.controlLeft}>
            <div className={styles.channelDial}>
              <div className={styles.dialMarker} />
            </div>
            <span className={styles.dialLabel}>CH</span>
          </div>

          <div className={styles.controlCenter}>
            <button
              className={`${styles.powerBtn} ${isOn ? styles.powerOn : ''}`}
              onClick={(e) => { e.stopPropagation(); handleClick(); }}
              title="Power"
            >
              <div className={styles.powerSymbol}>
                <div className={styles.powerRing} />
                <div className={styles.powerLine} />
              </div>
            </button>
            <div className={`${styles.powerLed} ${isOn ? styles.ledOn : ''}`} />
          </div>

          <div className={styles.controlRight}>
            <div className={styles.volumeDial}>
              <div className={styles.dialMarker} />
            </div>
            <span className={styles.dialLabel}>VOL</span>
          </div>
        </div>

        {/* Bottom trim / feet */}
        <div className={styles.bottomTrim}>
          <div className={styles.tvFoot} />
          <div className={styles.modelLabel}>MODEL CX-1984</div>
          <div className={styles.tvFoot} />
        </div>
      </div>

      {/* TV stand */}
      <div className={styles.tvStand}>
        <div className={styles.standNeck} />
        <div className={styles.standBase} />
      </div>

      <p className={styles.hint}>
        {isOn ? '[ clic pour eteindre ]' : '[ clic pour allumer ]'}
      </p>
    </div>
  );
};

export default PixelTV;
