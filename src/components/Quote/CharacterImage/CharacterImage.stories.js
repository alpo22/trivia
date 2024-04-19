import CharacterImage from "./CharacterImage";
import characters from "../../../utils/characters";

export default {
  title: "Example/Quote/CharacterImage",
  component: CharacterImage,
};

export const AllCharacters = {
  render: () =>
    characters.map((character) => <CharacterImage character={character} guess={character} key={character} />),
};
