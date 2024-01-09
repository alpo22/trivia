import classNames from "classnames";
import "./CharacterImage.scss";

export default function CharacterImage({ character, guess }) {
  const imagePath = character.replace(" ", "_");
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

  return <div className={cn}>{Content}</div>;
}
