import PropTypes from "prop-types";
import ViewStatsButton from "../ViewStatsButton";
import "./AlreadyPlayedToday.scss";

export default function AlreadyPlayedToday({ handleClickShowStats }) {
  return (
    <div className="inner-content">
      <div className="already-played-today">
        <h1>You&apos;ve already played today</h1>
        <img src={`/assets/Bart_Simpson_Baby.webp`} />
        <p>Be sure to return tomorrow for a new set of quotes.</p>
        <footer>
          <div className="continue-button-wrapper">
            <ViewStatsButton onClick={handleClickShowStats} />
          </div>
        </footer>
      </div>
    </div>
  );
}

AlreadyPlayedToday.propTypes = {
  handleClickShowStats: PropTypes.func.isRequired,
};
