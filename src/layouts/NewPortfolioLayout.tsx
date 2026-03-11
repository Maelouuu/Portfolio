import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NewNavbar from '../components/new/NewNavbar';
import s from './NewPortfolioLayout.module.css';

const BLUR_LAYERS_BOTTOM = [0.5, 1, 2, 4, 6, 9, 13, 20];

const NewPortfolioLayout = () => {
  const frameRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    frameRef.current?.scrollTo(0, 0);
  }, [location.pathname]);

  const isAbout   = location.pathname === '/' || location.pathname === '/about';
  const isContact = location.pathname === '/contact';

  const viewportClass = isAbout ? s.viewportLight : isContact ? s.viewportNeutral : s.viewportDark;

  return (
    <div className={`${s.viewport} ${viewportClass}`}>

      {/* Dot patterns — identical on all pages: left + right */}
      <div className={s.dotPatternLeft}>
        <div className={s.dotLarge} />
        <div className={s.dotMedium} />
        <div className={s.dotSmall} />
      </div>
      <div className={s.dotPatternRight}>
        <div className={s.dotLarge} />
        <div className={s.dotMedium} />
        <div className={s.dotSmall} />
      </div>

      {/* Frame — centered (equal margins) on all pages */}
      <div ref={frameRef} className={s.frame}>
        <NewNavbar />
        <Outlet />
      </div>

      {/* Gradual blur — bottom edge */}
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
