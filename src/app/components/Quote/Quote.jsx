import classNames from "classnames";
import "./Quote.scss";

export default function Quote({ character, guess, text }) {
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

  return (
    <div className="quote">
      <blockquote>&quot;{text}&quot;</blockquote>
      <div className={cn}>{Content}</div>
    </div>
  );
}
