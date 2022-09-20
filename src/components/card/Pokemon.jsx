import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import CardSkeleton from "./CardSkeleton";

const Pokemon = ({ pokemon }) => {
  const { theme, getTheme } = useContext(ThemeContext);

  const urlSplit = pokemon.url.split("/");
  const id = urlSplit[urlSplit.length - 2];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  const cardRef = useRef();
  const [card, setCard] = useState(null);
  const [types, setTypes] = useState([]);

  const fetchPokemonDetails = async () => {
    try {
      const response = await fetch(`${pokemon.url}`);
      const pokemonDetails = await response.json();
      setCard(pokemonDetails);
      setTypes(pokemonDetails.types.map((item) => item.type.name));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!cardRef.current) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        setVisible(entry.isIntersecting);
      });
    });
    observer.observe(cardRef.current);
  }, [cardRef.current]);

  useEffect(() => {
    if (!visible) {
      return;
    }
    if (loading) {
      fetchPokemonDetails();
    }
  }, [visible]);

  return (
    <>
      {loading ? (
        <div ref={cardRef}>
          <CardSkeleton
            name={pokemon.name.toUpperCase()}
            id={`#${("000" + id).slice(-3)}`}
          />
        </div>
      ) : (
        <div
          className={`flex h-72 flex-col items-start overflow-hidden rounded-lg p-4 ${getTheme(
            types[0]
          )}`}
        >
          <div className="mb-5">
            <div className="text-2xl font-extrabold text-white">
              {card.name.toUpperCase()}
            </div>
            <div className="text-xl font-extrabold text-black opacity-50">{`#${(
              "000" + id
            ).slice(-3)}`}</div>
          </div>
          <div className="flex w-full flex-row justify-end">
            <div className="relative w-40">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 978.94">
                <path
                  className="fill-gray-100 opacity-70"
                  d="M509 978.94h-38c-1.49-1-3.21-.74-4.85-.82-43.27-1.91-85.66-9.09-126.64-23.08C188.36 903.47 84.72 802.6 28.39 653.46 13.49 613.98 5.23 572.81 1.76 530.7c-.55-6.76-.06-13.62-1.76-20.28v-43a58.81 58.81 0 0 0 .89-5.86 461 461 0 0 1 17.86-106.37q47-160.89 181.91-260.55c67.4-49.74 143.07-79.55 226.1-90.55a479.9 479.9 0 0 1 103.69-2.35c37.6 3.17 74.47 9.93 110.19 22q208.55 70.45 299 271.14c21.87 48.51 34.17 99.72 38.6 152.8.58 6.92.1 13.95 1.8 20.77v42c-.3 2.1-.78 4.2-.88 6.31a464.49 464.49 0 0 1-17.81 106.33q-43.32 149.69-164.66 247.69Q680 964.66 530.31 977.16c-7.1.6-14.31-.02-21.31 1.78ZM177.72 520.69h-96c-7.34 0-7.35 0-6.51 7.5a455.59 455.59 0 0 0 7.62 48.7q32.9 148.47 153 241.88c65.33 50.8 139.8 79.07 222.48 85.42 48.25 3.71 96 .07 142.34-13.67 136.22-40.33 229.87-127.25 281-259.63 12.92-33.47 19.88-68.48 23.33-104.17.33-3.46.83-6.17-4.62-6.16q-98 .3-196 0c-3.42 0-4.7 1.17-5.18 4.31-.71 4.59-1.53 9.17-2.63 13.68-27.08 111-135 180.24-247.43 158.68-85.94-16.48-153.58-85.58-168.15-171.85-.58-3.44-1.83-4.87-5.73-4.85-32.53.24-65.03.16-97.52.16Zm165.37-31.32c.04 80.64 66.17 146.72 146.91 146.72s146.87-66 146.94-146.66S570.91 342.82 490 342.78s-146.95 65.97-146.91 146.59Z"
                />
              </svg>
              <div className="absolute inset-0 h-auto w-52 -translate-x-12 -translate-y-6">
                <img src={imageUrl} alt={card.name} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Pokemon;
