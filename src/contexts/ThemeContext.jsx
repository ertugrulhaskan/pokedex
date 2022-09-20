import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("grey-gradient");

  const getTheme = (pokemonType) => {
    switch (pokemonType) {
      case "bug":
      case "flying":
      case "grass":
        setTheme("green-gradient");
        return theme;

      case "electric":
      case "fighting":
        setTheme("yellow-gradient");
        return theme;

      case "fire":
      case "dragon":
        setTheme("red-gradient");
        return theme;

      case "ice":
      case "normal":
      case "steel":
      case "water":
        setTheme("blue-gradient");
        return theme;

      case "poison":
      case "dark":
      case "ghost":
        setTheme("purple-gradient");
        return theme;

      case "psychic":
      case "fairy":
        setTheme("pink-gradient");
        return theme;

      case "ground":
      case "rock":
        setTheme("brown-gradient");
        return theme;

      default:
        return theme;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, getTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
