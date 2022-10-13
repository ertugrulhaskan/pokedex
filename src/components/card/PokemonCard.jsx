import React, { useContext } from "react";
import {
  MdFavoriteBorder,
  MdFavorite,
  MdArrowBack,
  MdSensors,
  MdOutlineTune,
  // MdOutlineAutoAwesome,
  // MdTableRows,
} from "react-icons/md";

import TabContent from "../TabContent";
import PokemonAbout from "./PokemonAbout";
import PokemanStats from "./PokemanStats";
import { AppContext } from "../../contexts/AppContext";
// import PokemonEvolution from "./PokemonEvolution";
// import PokemonMoves from "./PokemonMoves";

const PokemonCard = ({
  className,
  closeModal,
  index,
  name,
  imageUrl,
  description,
  types,
  experience,
  height,
  weight,
  abilities,
  stats,
}) => {
  const { isExist, addFavorites, removeFavorites } = useContext(AppContext);

  // const [favorites, setFavorites] = useState([]);

  return (
    <div className={`w-full max-w-md rounded-3xl ${className}`}>
      <div className="relative h-80 bg-pokeball bg-50% bg-right-bottom bg-no-repeat">
        <div className="flex items-center justify-between px-5 py-5 text-2xl text-white">
          <button
            className="opacity-70 transition-all hover:scale-125 hover:opacity-100"
            onClick={closeModal}
          >
            <MdArrowBack />
          </button>
          {!isExist(index) ? (
            <button
              className="transition-all hover:scale-125"
              onClick={() => addFavorites(index)}
            >
              <MdFavoriteBorder />
            </button>
          ) : (
            <button
              className="transition-all hover:scale-125"
              onClick={() => removeFavorites(index)}
            >
              <MdFavorite className="fill-white" />
            </button>
          )}
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
        <div className="relative">
          <img
            className="absolute -top-10 right-2 w-64"
            src={imageUrl}
            alt={name}
          />
        </div>
      </div>
      <div className="rounded-3xl bg-white pl-5 pr-2 pt-14 pb-5">
        <TabContent
          tabs={[
            {
              title: "About",
              icon: <MdSensors className="mx-auto text-2xl md:hidden" />,
              content: (
                <PokemonAbout
                  description={description}
                  experience={experience}
                  height={height}
                  weight={weight}
                  abilities={abilities}
                />
              ),
            },
            {
              title: "Stats",
              icon: <MdOutlineTune className="mx-auto text-2xl md:hidden" />,
              content: <PokemanStats stats={stats} className={className} />,
            },
            // {
            //   title: "Evolution",
            //   icon: (
            //     <MdOutlineAutoAwesome className="mx-auto text-2xl md:hidden" />
            //   ),
            //   content: <PokemonEvolution />,
            // },
            // {
            //   title: "Moves",
            //   icon: <MdTableRows className="mx-auto text-2xl md:hidden" />,
            //   content: <PokemonMoves />,
            // },
          ]}
        />
      </div>
    </div>
  );
};

export default PokemonCard;
