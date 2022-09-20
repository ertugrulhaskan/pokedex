import React from "react";
import Filters from "../components/Filters";
import Header from "../components/Header";
import Search from "../components/Search";
// import PropTypes from 'prop-types'
import { MdFilterList, MdFavorite } from "react-icons/md";
import IconButton from "../ui/IconButton";
import CardSkeleton from "../components/card/CardSkeleton";
import Footer from "../components/Footer";
import Container from "../components/Container";

function Home() {
  return (
    <div className="home">
      <Container>
        <Header />
      </Container>
      <Container>
        <nav className="flex flex-col items-start justify-between md:flex-row">
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
                <MdFavorite className="mr-1" />
              </IconButton>
            </div>
            <div>
              <IconButton
                text="Filters"
                icon="right"
                className="hover:bg-sky-400 hover:text-white"
              >
                <MdFilterList className="ml-1" />
              </IconButton>
            </div>
          </div>
        </nav>
      </Container>

      <div className="my-4 border-t border-b border-zinc-200 border-opacity-50 bg-zinc-100 py-4 shadow-inner">
        <Container>
          <Filters />
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </Container>

      <Footer />
    </div>
  );
}

// Home.propTypes = {}

export default Home;
