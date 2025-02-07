import PropTypes from "prop-types";
import "./Heading.scss";

export default function Heading({ onAnimationEnd }) {
  return (
    <div className="heading">
      <h1 onAnimationEnd={onAnimationEnd}>
        Anec<span>DOH!</span>tes
      </h1>
    </div>
  );
}

Heading.propTypes = {
  onAnimationEnd: PropTypes.func,
};

Heading.defaultProps = {
  onAnimationEnd: () => {},
};
