import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

const PokemonEvolution = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div>Before</div>
        <div>
          <MdArrowRightAlt className="text-2xl" />
        </div>
        <div>After</div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div>Before</div>
        <div>
          <MdArrowRightAlt className="text-2xl" />
        </div>
        <div>After</div>
      </div>
    </>
  );
};

export default PokemonEvolution;
