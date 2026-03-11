import { NavLink, useLocation } from 'react-router-dom';
import s from './NewNavbar.module.css';

const sections = [
  { to: '/', label: 'A propos' },
  { to: '/projects', label: 'Projets' },
  { to: '/contact', label: 'Contact' },
];

const NewNavbar = () => {
  const location = useLocation();
  const isAbout = location.pathname === '/' || location.pathname === '/about';

  return (
    <nav className={`${s.navbar} ${isAbout ? s.navbarLight : ''}`}>
      <NavLink to="/" className={s.logo}>
        <span className={s.logoAccent}>M</span>
        <span className={s.logoText}>ael Girardin</span>
      </NavLink>
      <div className={s.navLinks}>
        {sections.map((sec) => (
          <NavLink
            key={sec.to}
            to={sec.to}
            end={sec.to === '/'}
            className={({ isActive }) => `${s.navLink} ${isActive ? s.active : ''}`}
          >
            {sec.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NewNavbar;
