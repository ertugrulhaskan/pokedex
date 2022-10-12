// React
import React from "react";
import { useContext } from "react";
import { MdFilterList, MdFavorite } from "react-icons/md";
// Components
import Search from "../components/Search";
import { AppContext } from "../contexts/AppContext";
// UI Elements
import IconButton from "../ui/IconButton";

const Navbar = () => {
  const { favorites, showFavorites, toggleFilterType } = useContext(AppContext);
  return (
    <nav className="flex flex-col items-start justify-between pb-4 md:flex-row">
      <div className="mb-4 w-full grow md:mb-0 md:mr-8 md:w-auto">
        <Search />
      </div>
      <div className="flex flex-row items-start">
        <div className="mr-4">
          <IconButton
            text={`My favorites (${favorites.length})`}
            icon="left"
            className="hover:bg-rose-200 hover:text-pink-700"
            onClick={showFavorites}
          >
            <MdFavorite className="mr-2" />
          </IconButton>
        </div>
        <div>
          <IconButton
            text="Filters"
            icon="right"
            className="hover:bg-sky-400 hover:text-white"
            onClick={toggleFilterType}
          >
            <MdFilterList className="ml-2" />
          </IconButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
