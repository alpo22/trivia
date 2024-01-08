import ViewStatsButton from "../ViewStatsButton";
import "./AlreadyPlayedToday.scss";

export default function AlreadyPlayedToday({ onClickViewMyStats }) {
  return (
    <div className="already-played-today">
      <h1>You've already played today</h1>
      <p>Be sure to return tomorrow for a new set of quotes.</p>
      <p>Bye everybody!</p>
      <img src={`/assets/characters/Dr_Nick_Riviera.webp`} />
      <ViewStatsButton onClick={onClickViewMyStats} />
    </div>
  );
}
