import classNames from "classnames";
import "./CharacterImage.scss";

export default function CharacterImage({ character, guess }) {
  const imagePath = character.replaceAll(" ", "_");
  const Content = guess ? <img src={`/assets/characters/${imagePath}.webp`} /> : "?";

  const cn = classNames(
    "character-image",
    { "character-image--no-guess": !guess },
    {
      "character-image--correct-guess": character === guess,
    },
    {
      "character-image--incorrect-guess": guess && character !== guess,
    }
  );

  return (
    <div className="character-image-wrapper">
      <div className={cn}>{Content}</div>
      <label>{guess && character}</label>
    </div>
  );
}
