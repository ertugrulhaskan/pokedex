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

const PokemonCard = ({
  name,
  imageUrl,
  description,
  types,
  experience,
  height,
  weight,
  abilities,
  className,
  closeModal,
}) => {
  return (
    <div className={`max-w-xl rounded-3xl ${className}`}>
      <div className="relative h-80 bg-pokeball bg-50% bg-right-bottom bg-no-repeat">
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
            {name}
          </h2>
          <div className="flex flex-row items-start">
            {types.map((type, idx) => {
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
            src={imageUrl}
            alt={name}
          />
        </div>
      </div>
      <div className="max-h-[50vh] rounded-3xl bg-white px-5 pt-20 pb-5 md:max-h-[100%]">
        <div className="flex flex-row items-start justify-center text-center font-semibold uppercase text-zinc-500">
          <div className="w-1/4 cursor-pointer border-b-2 border-zinc-500 p-2 hover:bg-zinc-100 md:w-28">
            <MdSensors className="mx-auto text-2xl md:hidden" />
            <div className="hidden md:block">About</div>
          </div>
          <div className="w-1/4 cursor-pointer p-2 hover:bg-zinc-100 md:w-28">
            <MdOutlineTune className="mx-auto text-2xl md:hidden" />
            <div className="hidden md:block">Stats</div>
          </div>
          <div className="w-1/4 cursor-pointer p-2 hover:bg-zinc-100 md:w-28">
            <MdOutlineAutoAwesome className="mx-auto text-2xl md:hidden" />
            <div className="hidden md:block">Evolution</div>
          </div>
          <div className="w-1/4 cursor-pointer p-2 hover:bg-zinc-100 md:w-28">
            <MdTableRows className="mx-auto text-2xl md:hidden" />
            <div className="hidden md:block">Moves</div>
          </div>
        </div>
        <div className="max-h-96 overflow-y-auto">
          <p className="py-5">{description}</p>
          <div className="flex flex-col justify-start">
            <div className="mb-3 flex flex-row justify-start">
              <h3 className="w-40 text-zinc-600">Base Experience</h3>
              <div className="font-semibold">{`${experience}xp`}</div>
            </div>
            <div className="mb-3 flex flex-row justify-start">
              <h3 className="w-40 text-zinc-600">Height</h3>
              <div className="font-semibold">{`${height}cm`}</div>
            </div>
            <div className="mb-3 flex flex-row justify-start">
              <h3 className="w-40 text-zinc-600">Weight</h3>
              <div className="font-semibold">{`${weight}kg`}</div>
            </div>
            <div className="flex flex-row justify-start">
              <h3 className="w-40 text-zinc-600">Abilities</h3>
              <div className="font-semibold">{abilities}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
