import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import CRTOverlay from '../components/CRTOverlay';
import KonamiEgg from '../components/KonamiEgg';
import ThemeToggle from '../components/ThemeToggle';
import ZaunDecorations from '../components/ZaunDecorations';

const LegacyInner = () => {
  useEffect(() => {
    return () => {
      // Clean up data-theme when leaving legacy routes
      document.documentElement.removeAttribute('data-theme');
    };
  }, []);

  return (
    <>
      <CRTOverlay />
      <KonamiEgg />
      <Navbar />
      <ThemeToggle />
      <ZaunDecorations />
      <Outlet />
    </>
  );
};

const LegacyLayout = () => {
  return (
    <ThemeProvider>
      <LegacyInner />
    </ThemeProvider>
  );
};

export default LegacyLayout;
