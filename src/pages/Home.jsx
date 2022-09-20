import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
// import PropTypes from 'prop-types'

import Header from "../components/Header";
import Search from "../components/Search";
import Filters from "../components/Filters";
import IconButton from "../ui/IconButton";
import { MdFilterList, MdFavorite } from "react-icons/md";
import CardSkeleton from "../components/card/CardSkeleton";
import Footer from "../components/Footer";

const Home = () => {
  const { filterTypeVisibility, toggleFilterType } = useContext(AppContext);

  return (
    <div className="home">
      <Header />
      <nav className="flex flex-col items-start justify-between pb-4 md:flex-row">
        <div className="mb-4 w-full grow md:mb-0 md:mr-8 md:w-auto">
          <Search />
        </div>
        <div className="flex flex-row items-start">
          <div className="mr-4">
            <IconButton
              text="My Favourites (0)"
              icon="left"
              className="hover:bg-rose-400 hover:text-white"
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

      {filterTypeVisibility && <Filters />}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>

      <Footer />
    </div>
  );
};

// Home.propTypes = {}

export default Home;
