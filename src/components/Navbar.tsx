import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import zaunStyles from './Navbar.module.css';
import piltoverStyles from './piltover/NavbarPiltover.module.css';

const Navbar = () => {
  const location = useLocation();
  const { isZaun } = useTheme();

  const s = isZaun ? zaunStyles : piltoverStyles;

  const getZaunTheme = () => {
    if (location.pathname === '/legacy/projects') return 'green';
    if (location.pathname === '/legacy/contact') return 'purple';
    return 'violet';
  };

  const handleNavClick = () => {
    window.dispatchEvent(new Event('page-transition'));
  };

  if (isZaun) {
    return (
      <nav className={`${zaunStyles.navbar} ${zaunStyles[getZaunTheme()]}`}>
        <div className={zaunStyles.logo}>
          <span className={zaunStyles.logoPixel}>{'<'}</span>
          <span className={zaunStyles.logoText}>PORTFOLIO</span>
          <span className={zaunStyles.logoPixel}>{'/>'}</span>
        </div>
        <ul className={zaunStyles.navLinks}>
          <li>
            <NavLink to="/legacy" end className={({ isActive }) => `${zaunStyles.navLink} ${isActive ? zaunStyles.active : ''}`} onClick={handleNavClick}>
              <span className={zaunStyles.navIcon}>&#9786;</span>
              A PROPOS
            </NavLink>
          </li>
          <li>
            <NavLink to="/legacy/projects" className={({ isActive }) => `${zaunStyles.navLink} ${isActive ? zaunStyles.active : ''}`} onClick={handleNavClick}>
              <span className={zaunStyles.navIcon}>&#9733;</span>
              PROJETS
            </NavLink>
          </li>
          <li>
            <NavLink to="/legacy/contact" className={({ isActive }) => `${zaunStyles.navLink} ${isActive ? zaunStyles.active : ''}`} onClick={handleNavClick}>
              <span className={zaunStyles.navIcon}>&#9993;</span>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }

  // Piltover navbar
  return (
    <nav className={s.navbar}>
      <div className={s.logo}>
        <span className={s.logoAccent}>M</span>
        <span className={s.logoText}>ael Girardin</span>
      </div>
      <ul className={s.navLinks}>
        <li>
          <NavLink to="/legacy" end className={({ isActive }) => `${s.navLink} ${isActive ? s.active : ''}`}>
            <span className={s.navIcon}>&#9675;</span>
            A propos
          </NavLink>
        </li>
        <li>
          <NavLink to="/legacy/projects" className={({ isActive }) => `${s.navLink} ${isActive ? s.active : ''}`}>
            <span className={s.navIcon}>&#9674;</span>
            Projets
          </NavLink>
        </li>
        <li>
          <NavLink to="/legacy/contact" className={({ isActive }) => `${s.navLink} ${isActive ? s.active : ''}`}>
            <span className={s.navIcon}>&#9826;</span>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
