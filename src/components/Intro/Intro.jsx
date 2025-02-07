import PropTypes from "prop-types";
import Heading from "../Heading";
import "./Intro.scss";
import "./Clouds.scss";
import { useEffect } from "react";

export default function Intro({ afterAnimation }) {
  let audio = new Audio("/assets/angels.mp3");

  useEffect(() => {
    audio.play(); // it will only play if they interact first; i.e. click a "Play" button splash screen
  }, []);

  return (
    <div className="intro">
      <div className="intro-heading-wrapper">
        <Heading onAnimationEnd={afterAnimation} />
      </div>
      <div className="cloud cloud1" />
      <div className="cloud cloud2" />
      <div className="cloud cloud3" />
    </div>
  );
}

Intro.propTypes = {
  afterAnimation: PropTypes.func.isRequired,
};
