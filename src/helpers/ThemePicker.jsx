export const ThemePicker = (type) => {
  switch (type) {
    case "bug":
    case "flying":
    case "grass":
      return "green-gradient";

    case "electric":
    case "fighting":
      return "yellow-gradient";

    case "fire":
    case "dragon":
      return "red-gradient";

    case "ice":
    case "normal":
    case "steel":
    case "water":
      return "blue-gradient";

    case "poison":
    case "dark":
    case "ghost":
      return "purple-gradient";

    case "psychic":
    case "fairy":
      return "pink-gradient";

    case "ground":
    case "rock":
      return "brown-gradient";

    default:
      return "grey-gradient";
  }
};
