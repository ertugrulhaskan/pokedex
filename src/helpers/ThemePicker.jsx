export const ThemePicker = (type) => {
  switch (type) {
    case "bug":
    case "flying":
    case "grass":
      return "green";

    case "electric":
    case "fighting":
      return "yellow";

    case "fire":
    case "dragon":
      return "red";

    case "ice":
    case "normal":
    case "steel":
    case "water":
      return "blue";

    case "poison":
    case "dark":
    case "ghost":
      return "purple";

    case "psychic":
    case "fairy":
      return "pink";

    case "ground":
    case "rock":
      return "brown";

    default:
      return "grey";
  }
};
