import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NewNavbar from '../components/new/NewNavbar';
import s from './NewPortfolioLayout.module.css';

/* Bottom blur — weakest at top, strongest at bottom */
const BLUR_LAYERS_BOTTOM = [0.5, 1, 2, 4, 6, 9, 13, 20];

const NewPortfolioLayout = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Scroll to top when navigating between pages
  useEffect(() => {
    frameRef.current?.scrollTo(0, 0);
  }, [location.pathname]);

  // Green orb — inverse mouse movement
  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      targetX = -nx * 120;
      targetY = -ny * 120;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.03;
      currentY += (targetY - currentY) * 0.03;

      if (orbRef.current) {
        orbRef.current.style.transform = `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px))`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className={s.viewport}>
      {/* Green orb — follows inverse mouse */}
      <div ref={orbRef} className={s.orb} />

      {/* Dot pattern on right side only */}
      <div className={s.dotPatternRight} />

      {/* Main content frame — fixed box, content scrolls inside */}
      <div ref={frameRef} className={s.frame}>
        <NewNavbar />
        <Outlet />
      </div>

      {/* Gradual blur — bottom edge only */}
      <div className={s.blurEdgeBottom} aria-hidden>
        {BLUR_LAYERS_BOTTOM.map((blur, i) => (
          <div
            key={i}
            className={s.blurEdgeLayer}
            style={{
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              maskImage: `linear-gradient(to top, black ${(i / BLUR_LAYERS_BOTTOM.length) * 100}%, black ${((i + 1) / BLUR_LAYERS_BOTTOM.length) * 100}%, transparent ${((i + 1) / BLUR_LAYERS_BOTTOM.length) * 100}%)`,
              WebkitMaskImage: `linear-gradient(to top, black ${(i / BLUR_LAYERS_BOTTOM.length) * 100}%, black ${((i + 1) / BLUR_LAYERS_BOTTOM.length) * 100}%, transparent ${((i + 1) / BLUR_LAYERS_BOTTOM.length) * 100}%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NewPortfolioLayout;
