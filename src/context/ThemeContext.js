import React, {useState, useContext} from 'react';

const ThemeContext = React.createContext();

export function GetThemeContext () {
  return useContext(ThemeContext).theme;
}

export function ToggleTheme () {
  return useContext(ThemeContext).toggleTheme;
}

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  );
}