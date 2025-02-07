import PropTypes from "prop-types";
import Heading from "../Heading";
import "./Intro.scss";

export default function Intro({ afterAnimation }) {
  return (
    <div className="intro">
      <Heading onAnimationEnd={afterAnimation} />
    </div>
  );
}

Intro.propTypes = {
  afterAnimation: PropTypes.func.isRequired,
};
