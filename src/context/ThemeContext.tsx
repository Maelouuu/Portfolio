import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

type Theme = 'piltover' | 'zaun';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isPiltover: boolean;
  isZaun: boolean;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return (saved === 'zaun' ? 'zaun' : 'piltover') as Theme;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'piltover' ? 'zaun' : 'piltover');
  }, []);

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme,
      isPiltover: theme === 'piltover',
      isZaun: theme === 'zaun',
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
