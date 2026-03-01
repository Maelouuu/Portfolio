import { useTheme } from '../context/ThemeContext';
import zaunStyles from './ArcadeCard.module.css';
import piltoverStyles from './piltover/ArcadeCardPiltover.module.css';

import borne1 from '../assets/pixels/borne1.png';
import borne2 from '../assets/pixels/borne2.png';
import borne3 from '../assets/pixels/borne3.png';
import borne4 from '../assets/pixels/borne4.png';
import borne5 from '../assets/pixels/borne5.png';
import borne6 from '../assets/pixels/borne6.png';

const cabinetImages = [borne1, borne2, borne3, borne4, borne5, borne6];

interface ArcadeCardProps {
  title: string;
  icon: string;
  index: number;
}

const ArcadeCard = ({ title, icon, index }: ArcadeCardProps) => {
  const { isZaun } = useTheme();
  const s = isZaun ? zaunStyles : piltoverStyles;

  const isFlipped = index < 3;
  const cabinetSrc = cabinetImages[index % 6];

  return (
    <div
      className={s.cabinetWrapper}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Cabinet image (Zaun only) */}
      <img
        src={cabinetSrc}
        alt="Arcade cabinet"
        className={`${s.cabinetImg} ${isFlipped ? s.cabinetFlipped : ''}`}
      />

      {/* Title */}
      <div className={`${s.cabinetTitle} ${isFlipped ? s.titleFlipped : ''}`}>{title}</div>

      {/* Screen overlay */}
      <div className={`${s.screenOverlay} ${isFlipped ? s.screenFlipped : ''}`}>
        <div className={s.screenContent}>
          <div className={s.screenDisplay}>
            <span className={s.screenIcon}>{icon}</span>
            <span className={s.insertCoin}>{isZaun ? 'INSERT COIN' : 'Voir le projet'}</span>
          </div>
          {isZaun && <div className={s.scanlines} />}
        </div>
      </div>
    </div>
  );
};

export default ArcadeCard;
