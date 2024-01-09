import CharacterImage from "./CharacterImage";

const characters = [
  "Abraham_Simpson",
  "Agnes_Skinner",
  "Alice_Glick",
  "Apu_Nahasapeemapetilon",
  "Artie_Ziff",
  "Barney_Gumble",
  "Bart_Simpson",
  "Bleeding_Gums_Murphy",
  "Brandine_Spuckler",
  "Bumblebee_Man",
  "Carl_Carlson",
  "Chief_Clancy_Wiggum",
  "Cletus_Spuckler",
  "Comic_Book_Guy",
  "Cookie_Kwan",
  "Crazy_Cat_Lady",
  "Disco_Stu",
  "Dr_Julius_Hibbert",
  "Dr_Marvin_Monroe",
  "Dr_Nick_Riviera",
  "Drederick_Tatum",
  "Duffman",
  "Eddie",
  "Edna_Krabappel",
  "Elizabeth_Hoover",
  "Fat_Tony",
  "Gil_Gunderson",
  "Groundskeeper_Willie",
  "Hans_Moleman",
  "Helen_Lovejoy",
  "Herman_Hermann",
  "Homer_Simpson",
  "Jacqueline_Bouvier",
  "Louie_Walters",
  "Luann_Van_Houten",
  "Luigi_Risotto",
  "Lunchlady_Doris_Freedman",
  "Maggie_Simpson",
  "Manjula_Nahasapeemapetilon",
  "Marge_Simpson",
  "Martin_Prince",
  "Maude_Flanders",
  "Mayor_Joe_Quimby",
  "Milhouse_Van_Houten",
  "Moe_Szyslak",
  "Mona_Simpson",
  "Montgomery_Burns",
  "Mrs_Muntz",
  "Ned_Flanders",
  "Nelson_Muntz",
  "Otto_Mann",
  "Patty_Bouvier",
  "Professor_Frink",
  "Rainier_Wolfcastle",
  "Ralph_Wiggum",
  "Rod_Flanders",
  "Roy_Snyder",
  "Sea_Captain_Horatio_McCallister",
  "Selma_Bouvier",
  "Seymour_Skinner",
  "Sherri-and-terri",
  "Sideshow_Bob_Robert_Terwilliger",
  "Sideshow_Mel",
  "Snake_Jailbird",
  "Squeaky_Voiced_Teen",
  "Superintendent_Gary_Chalmers",
  "The_Rich_Texan",
  "Timothy_Lovejoy",
  "Todd_Flanders",
  "Troy_McClure",
  "Uter_Zorker",
  "Waylon_Smithers",
];

export default {
  title: "Example/Quote/CharacterImage",
  component: CharacterImage,
};

export const AllCharacters = {
  render: () => (
    <>
      <table>
        {characters.map((character) => (
          <tr>
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
