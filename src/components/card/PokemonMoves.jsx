import React from "react";

const PokemonMoves = () => {
  return (
    <>
      <div className="flex flex-col justify-start">
        <div className="mb-3 flex flex-row justify-start">
          <h3 className="w-40 text-zinc-600">Level 0</h3>
          {/* <div className="font-semibold">{`${experience}xp`}</div> */}
        </div>
        <div className="mb-3 flex flex-row justify-start">
          <h3 className="w-40 text-zinc-600">Level 4</h3>
          {/* <div className="font-semibold">{`${height}cm`}</div> */}
        </div>
        <div className="mb-3 flex flex-row justify-start">
          <h3 className="w-40 text-zinc-600">Level 13</h3>
          {/* <div className="font-semibold">{`${weight}kg`}</div> */}
        </div>
        <div className="flex flex-row justify-start">
          <h3 className="w-40 text-zinc-600">Level 21</h3>
          {/* <div className="font-semibold">{abilities}</div> */}
        </div>
        <div className="flex flex-row justify-start">
          <h3 className="w-40 text-zinc-600">Level 31</h3>
          {/* <div className="font-semibold">{abilities}</div> */}
        </div>
        <div className="flex flex-row justify-start">
          <h3 className="w-40 text-zinc-600">Level 69</h3>
          {/* <div className="font-semibold">{abilities}</div> */}
        </div>
      </div>
    </>
  );
};

export default PokemonMoves;
