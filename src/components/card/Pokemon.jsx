// React
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Fetcher } from "../../helpers/Fetcher";
// Helpers
import { ThemePicker } from "../../helpers/ThemePicker";
// Components
import Modal from "../Modal";
import PokemonCard from "./PokemonCard";
import PokemonPreview from "./PokemonPreview";
import PokemonSkeleton from "./PokemonSkeleton";

const Pokemon = ({ name, url }) => {
  const VERSION_GROUP_NAME = "lets-go-pikachu";
  const URLSplit = url.split("/");
  const ID = Number(URLSplit[URLSplit.length - 2]);
  const POKEMON_NUMBER = `000${ID}`.slice(-3);
  const IMAGE_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ID}.png`;
  const SPECIES_URL = `https://pokeapi.co/api/v2/pokemon-species/${ID}/`;

  const [theme, setTheme] = useState("grey");
  const [loading, setLoading] = useState(true);
  const [modalbox, setModalbox] = useState(false);
  const [visibleArea, setVisibleArea] = useState(false);

  const cardRef = useRef();

  const [types, setTypes] = useState([]);
  const [description, setDescription] = useState(null);
  const [experience, setExperince] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [abilities, setAbilities] = useState([]);
  const [stats, setStats] = useState([]);

  const [species, setSpecies] = useState(null);

  const [evolution, setEvolution] = useState(null);

  const getPokemon = (data) => {
    const types = data.types.map((item) => item.type.name);
    // getTheme(types[0]);
    setTheme(ThemePicker(types[0]));
    setTypes(types);
    setExperince(data.base_experience);
    const HEIGHT_CM = data.height * 10;
    setHeight(HEIGHT_CM);
    const ROUNDED_WEIGHT = parseFloat((data.weight * 0.1).toFixed(2));
    setWeight(ROUNDED_WEIGHT);

    const abilities = data.abilities
      .map((item) => item.ability.name)
      .join(", ");
    setAbilities(abilities);

    const stats = data.stats.map((stat) => {
      return {
        name: stat.stat.name,
        stat: stat.base_stat,
      };
    });
    setStats(stats);
  };

  const getSpecies = (data) => {
    const description = data.flavor_text_entries.find((text) => {
      return (
        text.language.name === "en" && text.version.name === VERSION_GROUP_NAME
      );
    });
    setDescription(description.flavor_text);
  };

  const getEvolution = (data) => {
    console.log(data);
    // console.log(data.chain.species.name);
    // console.log(data.chain.evolves_to[0].species.name);
    // console.log(data.chain.evolves_to[0].evolves_to[0].species.name);
    // console.log(data.chain);
  };

  const fetchPokemon = async () => {
    let data = await Fetcher({ url });
    return data;
  };

  const fetchSpecies = async () => {
    let data = await Fetcher({ url: SPECIES_URL });
    setSpecies(data);
    return data;
  };

  const fetchEvolution = async () => {
    const EVOLUTION_URL = species.evolution_chain.url;
    let data = await Fetcher({ url: EVOLUTION_URL });
    setEvolution(data);
    // return data;
  };

  const fetchAll = async () => {
    const promises = [fetchPokemon(), fetchSpecies()];
    try {
      await Promise.all(promises).then((results) => {
        getPokemon(results[0]);
        getSpecies(results[1]);
        // TODO: getEvolution(results[2]);
        // console.log(results);
      });
      setLoading(false);
    } catch (error) {
      console.log("All promises error", error);
    }
  };

  const closeModal = () => {
    setModalbox(false);
  };

  // Observing Content
  useEffect(() => {
    if (!cardRef.current) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        setVisibleArea(entry.isIntersecting);
      });
    });
    observer.observe(cardRef.current);
  }, [cardRef.current]);

  // Lazy loading pokemon
  useEffect(() => {
    if (!visibleArea) {
      return;
    }
    if (loading) {
      fetchAll();
    }
  }, [visibleArea]);

  useEffect(() => {
    const elmBody = document.querySelector("body");
    modalbox && elmBody.classList.add("overflow-hidden");

    // Cleanup
    return () => {
      elmBody.classList.remove("overflow-hidden");
    };
  }, [modalbox]);

  return (
    <Fragment>
      {loading ? (
        <div ref={cardRef}>
          <PokemonSkeleton name={name} id={POKEMON_NUMBER} />
        </div>
      ) : (
        <Fragment>
          <PokemonPreview
            className={theme}
            setModalbox={setModalbox}
            name={name}
            id={POKEMON_NUMBER}
            src={IMAGE_URL}
          />
          <Modal isOpen={modalbox}>
            <PokemonCard
              className={theme}
              closeModal={closeModal}
              index={ID - 1}
              name={name}
              imageUrl={IMAGE_URL}
              description={description}
              types={types}
              experience={experience}
              height={height}
              weight={weight}
              abilities={abilities}
              stats={stats}
            ></PokemonCard>
          </Modal>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Pokemon;
