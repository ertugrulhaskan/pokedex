import React, { useState } from "react";
import {
  MdFavoriteBorder,
  MdArrowBack,
  MdSensors,
  MdOutlineTune,
  MdOutlineAutoAwesome,
  MdTableRows,
} from "react-icons/md";
import TabContent from "../TabContent";

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
  const IconAbout = <MdSensors className="mx-auto text-2xl md:hidden" />;
  const About = (
    <>
      <p className="pb-5">{description}</p>
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
    </>
  );

  const IconStats = <MdOutlineTune className="mx-auto text-2xl md:hidden" />;
  const Stats = <>Content Stats</>;

  const IconEvolution = (
    <MdOutlineAutoAwesome className="mx-auto text-2xl md:hidden" />
  );
  const Evolution = <>Content Evolution</>;

  const IconMoves = <MdTableRows className="mx-auto text-2xl md:hidden" />;
  const Moves = <>Content Moves</>;

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
      <div className="rounded-3xl bg-white px-5 pt-20 pb-10">
        <TabContent
          tabs={[
            {
              title: "About",
              icon: IconAbout,
              content: About,
            },
            { title: "Stats", icon: IconStats, content: Stats },
            { title: "Evolution", icon: IconEvolution, content: Evolution },
            { title: "Moves", icon: IconMoves, content: Moves },
          ]}
        />
      </div>
    </div>
  );
};

export default PokemonCard;
