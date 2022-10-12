import React, { createContext, useEffect, useState } from "react";
import { Fetcher } from "../helpers/Fetcher";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const POKEMON_API = `https://pokeapi.co/api/v2`;

  const [filterTypeVisibility, setFilterTypeVisibility] = useState(true);
  const [data, setData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [filteringFavorites, setFilteringFavorites] = useState(false);
  const [filteringTypes, setFilteringTypes] = useState([]);

  const fetchPokemon = async () => {
    let data = await Fetcher({ url: `${POKEMON_API}/pokemon?limit=150` });
    setData(data.results);
  };

  const fetchPokemonType = async (url) => {
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data.types[0].type.name;
  };

  const fetchPokemonTypes = async () => {
    if (data) {
      let promises = [];
      const typesRequestURL = data.map((item) => item.url);
      typesRequestURL.forEach((url) => {
        promises = [...promises, fetchPokemonType(url)];
      });
      await Promise.all(promises).then((results) => {
        const idxList = results
          .map((item, idx) => filteringTypes.indexOf(item) !== -1 && idx)
          .filter((item) => item !== false);
        const newListFiltering = idxList.map((item) => data[item]);
        setData(newListFiltering);
      });
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

  const filterType = (category) => {
    if (!filteringTypes.includes(category)) {
      setFilteringTypes((prevState) => {
        return [...prevState, category];
      });
    }
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

  useEffect(() => {
    fetchPokemon();
    fetchPokemonTypes();
  }, [filteringTypes]);

  // useEffect(() => {
  //   fetchPokemonTypes();
  // }, [data]);

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
        favorites,
        filterType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
