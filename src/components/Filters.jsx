import React from "react";
import Chip from "./Chip";
// import PropTypes from 'prop-types'
import { PokemonTypes } from "../helpers/PokemonTypes";

const Filters = () => {
  return (
    <div className="mb-4 grid grid-cols-3 gap-2 border-b border-zinc-100 pb-4 md:grid-cols-6 xl:grid-cols-9">
      {Object.values(PokemonTypes).map((type) => {
        return (
          <Chip text={type.name} key={type.name}>
            <svg
              className="fill-zinc-900"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" clipRule="evenodd" d={type.icon} />
            </svg>
          </Chip>
        );
      })}
    </div>
  );
};

// Filters.propTypes = {}

export default Filters;
