import React, { useState, type ReactNode,createContext } from 'react';

// Define the type for the context value
interface ThemeContextType {
  theme: string;

  handleToggleTheme: () => void;
}

// Create the context with default values (you can make the theme default 'light' or '')
const ThemeContext = createContext<ThemeContextType>({
  theme: '', 
  
  handleToggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {

  const [theme, setTheme] = useState<string>('light');

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
