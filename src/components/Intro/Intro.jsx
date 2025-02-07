import PropTypes from "prop-types";
import Heading from "../Heading";
import "./Intro.scss";
import "./Clouds.scss";
import { useEffect } from "react";

export default function Intro({ afterAnimation }) {
  const audio = new Audio("/assets/angels.mp3");

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <div className="intro" onAnimationEnd={afterAnimation}>
      <div className="intro-heading-wrapper">
        <Heading />
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
