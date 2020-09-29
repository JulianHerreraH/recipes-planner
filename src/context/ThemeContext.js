import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const initialState = {
  isLightTheme: true,
  light: "has-background-grey-lighter has-text-grey-dark",
  dark: "has-background-black has-text-white",
  navLight: "is-white",
  navDark: "is-dark",
  cardLight: "has-background-white has-text-grey-dark",
  cardDark: "has-background-dark has-text-white",
};

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(() => {
    const item = localStorage.getItem('lightTheme') 
    const localTheme = item ? (item === 'true') : true;
    return { ...initialState, isLightTheme: localTheme };
  });
  
  useEffect(() => {
    localStorage.setItem('lightTheme', theme.isLightTheme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevState => ({...prevState, isLightTheme: !prevState.isLightTheme}))
  };

  return (
    <ThemeContext.Provider
      value={{ ...theme, toggleTheme: toggleTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
