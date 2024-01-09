import CharacterImage from "./CharacterImage";
import "./Quote.scss";

export default function Quote({ character, guess, text }) {
  return (
    <div className="quote">
      <blockquote>&quot;{text}&quot;</blockquote>
      <CharacterImage guess={guess} character={character} />
    </div>
  );
}
