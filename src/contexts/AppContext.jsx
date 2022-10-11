import React, { createContext, useEffect, useState } from "react";
import { useMemo } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const POKEMON_API = `https://pokeapi.co/api/v2`;

  const [filterTypeVisibility, setFilterTypeVisibility] = useState(false);
  const [data, setData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [filteringFavorites, setFilteringFavorites] = useState(false);

  const fetchPokemon = async () => {
    try {
      const response = await fetch(`${POKEMON_API}/pokemon?limit=150`);
      const data = await response.json();
      setData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const showFavorites = () => {
    setFilteringFavorites(!filteringFavorites);
  };

  const getFavorites = () => {
    let favoritesList = JSON.parse(localStorage.getItem("pokemon"));
    favoritesList === null
      ? localStorage.setItem("pokemon", JSON.stringify(favorites))
      : setFavorites(favoritesList);
  };

  const isExist = (id) => {
    return favorites.some((item) => item === id);
  };

  const addFavorites = (id) => {
    setFavorites((prevState) => {
      return [...prevState, id];
    });
  };

  const removeFavorites = (id) => {
    let removeFavorites = favorites.filter((item) => item !== id);
    setFavorites(removeFavorites);
  };

  const toggleFilterType = (e) => {
    e.preventDefault();
    setFilterTypeVisibility(!filterTypeVisibility);
  };

  useEffect(() => {
    fetchPokemon();
    getFavorites();
  }, []);

  useEffect(() => {
    favorites.sort((a, b) => a - b);
    localStorage.setItem("pokemon", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (filteringFavorites) {
      let filterFavoritePokemon = data.filter(
        (item, idx) => favorites.includes(idx) && item
      );
      setData(filterFavoritePokemon);
    } else {
      fetchPokemon();
    }
  }, [filteringFavorites]);

  return (
    <AppContext.Provider
      value={{
        filterTypeVisibility,
        toggleFilterType,
        data,
        isExist,
        addFavorites,
        removeFavorites,
        showFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
