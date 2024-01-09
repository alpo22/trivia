import CharacterImage from "./CharacterImage";
import characters from "../../../utils/characters";

export default {
  title: "Example/Quote/CharacterImage",
  component: CharacterImage,
};

export const AllCharacters = {
  render: () => (
    <>
      <table>
        {characters.map((character) => (
          <tr key={character}>
            <td>{character}</td>
            <td>
              <CharacterImage character={character} guess={character} />
            </td>
          </tr>
        ))}
      </table>
    </>
  ),
};
