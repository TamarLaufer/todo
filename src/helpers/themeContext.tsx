import React, { createContext, ReactNode, useState } from 'react';
import { darkTheme, theme } from '../components/theme';

interface ThemeContextType {
  colors: {
    background: string;
    foreground: string;
    primary: string;
    success: string;
    danger: string;
    failure: string;
  };
  spacing: {
    s: number;
    m: number;
    l: number;
    xl: number;
  };
  textVariants: {
    header: {
      fontSize: number;
      fontWeight: string;
    };
    body: {
      fontSize: number;
    };
  };
}
interface ThemeProviderProps {
  children: ReactNode;  // Ensure proper typing for children
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const currentTheme = darkMode ? darkTheme : theme;

  return (
    <ThemeContext.Provider value={currentTheme}>
      <label>
        Dark Mode
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(prev => !prev)}
        />
      </label>
      {children}
    </ThemeContext.Provider>
  );
};
