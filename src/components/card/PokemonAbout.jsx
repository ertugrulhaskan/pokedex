import React from "react";

const PokemonAbout = ({
  description,
  experience,
  height,
  weight,
  abilities,
}) => {
  return (
    <>
      <p className="pb-5">{description}</p>
      <div className="flex flex-col justify-start">
        <div className="mb-3 flex flex-row justify-start">
          <h3 className="w-5/12 shrink-0 text-zinc-600">Base Experience</h3>
          <div className="font-semibold">{`${experience}xp`}</div>
        </div>
        <div className="mb-3 flex flex-row justify-start">
          <h3 className="w-5/12 shrink-0 text-zinc-600">Height</h3>
          <div className="font-semibold">{`${height}cm`}</div>
        </div>
        <div className="mb-3 flex flex-row justify-start">
          <h3 className="w-5/12 shrink-0 text-zinc-600">Weight</h3>
          <div className="font-semibold">{`${weight}kg`}</div>
        </div>
        <div className="flex flex-row justify-start">
          <h3 className="w-5/12 shrink-0 text-zinc-600">Abilities</h3>
          <div className="font-semibold">{abilities}</div>
        </div>
      </div>
    </>
  );
};

export default PokemonAbout;
