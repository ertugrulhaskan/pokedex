import React from "react";
import Filters from "../components/Filters";
import Header from "../components/Header";
import Search from "../components/Search";
// import PropTypes from 'prop-types'
import { MdFilterList, MdFavorite, MdFavoriteBorder } from "react-icons/md";
import IconButton from "../ui/IconButton";

function Home() {
  return (
    <div className="home">
      <Header />
      <nav className="flex flex-col items-start justify-between md:flex-row">
        <div className="mb-4 w-full grow md:mb-0 md:mr-8 md:w-auto">
          <Search />
        </div>
        <div className="flex flex-row items-start">
          <div className="mr-4">
            <IconButton text="My Favourites (0)" icon="left">
              <MdFavoriteBorder className="mr-1" />
            </IconButton>
          </div>
          <div>
            <IconButton text="Filters" icon="right">
              <MdFilterList className="ml-1" />
            </IconButton>
          </div>
        </div>
      </nav>
      <Filters />
    </div>
  );
}

// Home.propTypes = {}

export default Home;
