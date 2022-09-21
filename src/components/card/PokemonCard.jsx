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

const PokemonCard = ({ pokemon, className, closeModal }) => {
  {
    console.log(pokemon);
  }
  const typeArray = pokemon.types.map((item) => item.type.name);

  return (
    <div className={`max-w-xl rounded-3xl ${className}`}>
      <div className="relative h-80 bg-pokeball bg-50% bg-custom bg-no-repeat">
        <div className="flex items-center justify-between px-5 py-5 text-2xl text-white">
          <button
            className="opacity-70 transition-all hover:scale-125 hover:opacity-100"
            onClick={closeModal}
          >
            <MdArrowBack />
          </button>
          <button className="transition-all hover:scale-125">
            <MdFavoriteBorder />
          </button>
        </div>
        <div className="px-5">
          <h2 className="mb-2 text-5xl font-semibold capitalize tracking-tight text-white">
            {pokemon.name}
          </h2>
          <div className="flex flex-row items-start">
            {typeArray.map((type, idx) => {
              return (
                <div
                  key={idx}
                  className="mr-2 inline-block rounded-full bg-white bg-opacity-40 py-1 px-3 text-sm capitalize tracking-wide text-white"
                >
                  {type}
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative h-64">
          <img
            className="absolute -top-16 left-1/2 w-80 -translate-x-1/2"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
