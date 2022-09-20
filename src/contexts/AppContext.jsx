import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const POKEMON_API = `https://pokeapi.co/api/v2`;

const AppContextProvider = ({ children }) => {
  const [filterTypeVisibility, setFilterTypeVisibility] = useState(false);
  const [pokemonList, setPokemonList] = useState(null);

  const toggleFilterType = (e) => {
    e.preventDefault();
    setFilterTypeVisibility(!filterTypeVisibility);
  };

  const fetchPokemon = async () => {
    try {
      const response = await fetch(`${POKEMON_API}/pokemon?limit=151`);
      const data = await response.json();
      setPokemonList(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <AppContext.Provider value={{ filterTypeVisibility, toggleFilterType }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
