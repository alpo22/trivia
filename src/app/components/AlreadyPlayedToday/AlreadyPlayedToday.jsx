import ViewStatsButton from "../ViewStatsButton";
import "./AlreadyPlayedToday.scss";

export default function AlreadyPlayedToday({ onClickViewMyStats }) {
  return (
    <div className="already-played-today">
      <h1>You&apos;ve already played today</h1>
      <img src={`/assets/characters/Bart_Simpson_Baby.webp`} />
      <p>Be sure to return tomorrow for a new set of quotes.</p>
      <ViewStatsButton onClick={onClickViewMyStats} />
    </div>
  );
}
