// React
import React, { Fragment, useContext } from "react";
// Contexts
import { AppContext } from "../contexts/AppContext";
// Components
import Header from "../components/Header";
import Filters from "../components/Filters";
import Footer from "../components/Footer";
import Pokemon from "../components/card/Pokemon";
import Navbar from "../components/Navbar";

const Home = () => {
  const { filterTypeVisibility, data } = useContext(AppContext);

  return (
    <Fragment>
      <Header />
      <Navbar />
      {filterTypeVisibility && <Filters />}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {data &&
          data.map((pokemon) => (
            <Pokemon name={pokemon.name} url={pokemon.url} key={pokemon.name} />
          ))}
      </div>
      <Footer />
    </Fragment>
  );
};

// Home.propTypes = {}

export default Home;
