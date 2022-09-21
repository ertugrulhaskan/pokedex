import React from "react";
import {
  MdFavoriteBorder,
  MdFavorite,
  MdArrowBack,
  MdSensors,
  MdOutlineTune,
  MdOutlineAutoAwesome,
  MdTableRows,
} from "react-icons/md";

const PokemonCard = ({ pokemon, className }) => {
  return (
    <div className={`max-w-xl rounded-3xl ${className}`}>
      <div className="relative h-80 bg-pokeball bg-50% bg-right-bottom bg-no-repeat">
        <div className="flex items-center justify-between px-5 py-5 text-2xl text-white">
          <button className="opacity-70 transition-all hover:scale-125 hover:opacity-100">
            <MdArrowBack />
          </button>
          <button className="transition-all hover:scale-125">
            <MdFavoriteBorder />
          </button>
        </div>
        <div className="px-5">
          <h2 className="mb-2 text-4xl font-semibold capitalize tracking-tight text-white">
            {pokemon.name}
          </h2>
          <div className="flex flex-row items-start">
            <div className="mr-1 inline-block rounded-full bg-white bg-opacity-40 py-1 px-3 text-sm tracking-wide text-white">
              Electric
            </div>
          </div>
        </div>
        <div className="relative h-64">
          <img
            className="absolute -top-7 left-1/2 w-72 -translate-x-1/2"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png"
            alt=""
          />
        </div>
      </div>
      <div className="max-h-[50vh] rounded-3xl bg-white px-5 pt-20 pb-5 md:max-h-[100%]">
        <div className="mb-5 flex flex-row items-center justify-center text-center font-semibold uppercase text-zinc-600">
          <div className="w-1/4 border-b-2 border-zinc-600 p-2">
            <MdSensors className="mx-auto text-2xl md:hidden" />
            <div className="hidden md:block">About</div>
          </div>
          <div className="w-1/4 p-2">
            <MdOutlineTune className="mx-auto text-2xl md:hidden" />
            <div className="hidden md:block">Base stats</div>
          </div>
          <div className="w-1/4 p-2">
            <MdOutlineAutoAwesome className="mx-auto text-2xl md:hidden" />
            <div className="hidden md:block">Evolution</div>
          </div>
          <div className="w-1/4 p-2">
            <MdTableRows className="mx-auto text-2xl md:hidden" />
            <div className="hidden md:block">Moves</div>
          </div>
        </div>
        <div className="max-h-96 overflow-y-auto">
          <p className="font-semibold">
            Its fangs easily puncture even thick animal hide. It loves to feast
            on the blood of people and POKéMON. It flits about in darkness and
            strikes from behind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
