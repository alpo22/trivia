import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import BannerMessage from "../BannerMessage";
import Nav from "../Nav";
import Heading from "../Heading";
import ViewStatsButton from "../ViewStatsButton";
import "./AlreadyPlayedToday.scss";

export default function AlreadyPlayedToday({ handleClickShowStats }) {
  const navigate = useNavigate();

  return (
    <>
      <BannerMessage />
      <Nav onClickShowStats={handleClickShowStats} />
      <Heading />

      <div className="already-played-today">
        <h1>You&apos;ve already played today</h1>
        <img src={`/assets/Bart_Simpson_Baby.webp`} />
        <p>Be sure to return tomorrow for a new set of quotes.</p>
        <ViewStatsButton
          onClick={() => {
            navigate("/stats");
          }}
        />
      </div>
    </>
  );
}

AlreadyPlayedToday.propTypes = {
  handleClickShowStats: PropTypes.func.isRequired,
};
