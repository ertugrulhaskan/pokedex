import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const POKEMON_API = `https://pokeapi.co/api/v2`;

  const [filterTypeVisibility, setFilterTypeVisibility] = useState(false);
  const [data, setData] = useState(null);

  const fetchPokemon = async () => {
    try {
      const response = await fetch(`${POKEMON_API}/pokemon?limit=151`);
      const data = await response.json();
      setData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const toggleFilterType = (e) => {
    e.preventDefault();
    setFilterTypeVisibility(!filterTypeVisibility);
  };

  return (
    <AppContext.Provider
      value={{
        filterTypeVisibility,
        toggleFilterType,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
