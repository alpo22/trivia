import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Bar from "./Bar";
import ShareButton from "../ShareButton";
import { NUMBER_OF_ROUNDS } from "../../utils/constants";
import "./StatsModal.scss";

export default function StatsModal({ scores }) {
  const navigate = useNavigate();
  let numberTimesScored0 = 0;
  let numberTimesScored1 = 0;
  let numberTimesScored2 = 0;
  let numberTimesScored3 = 0;
  let numberTimesScored4 = 0;
  let numberTimesScored5 = 0;

  scores.forEach((scoreData) => {
    switch (scoreData.score) {
      case 0:
        numberTimesScored0++;
        break;
      case 1:
        numberTimesScored1++;
        break;
      case 2:
        numberTimesScored2++;
        break;
      case 3:
        numberTimesScored3++;
        break;
      case 4:
        numberTimesScored4++;
        break;
      case 5:
        numberTimesScored5++;
        break;
    }
  });

  const max = Math.max(
    numberTimesScored0,
    numberTimesScored1,
    numberTimesScored2,
    numberTimesScored3,
    numberTimesScored4,
    numberTimesScored5
  );

  const timesPlayed =
    numberTimesScored0 +
    numberTimesScored1 +
    numberTimesScored2 +
    numberTimesScored3 +
    numberTimesScored4 +
    numberTimesScored5;

  const questionsCorrect =
    numberTimesScored1 +
    numberTimesScored2 * 2 +
    numberTimesScored3 * 3 +
    numberTimesScored4 * 4 +
    numberTimesScored5 * 5;

  const totalQuestions = NUMBER_OF_ROUNDS * timesPlayed;
  const overallScore = Math.round((questionsCorrect / totalQuestions) * 100);

  return (
    <Modal show onHide={() => navigate("/")} centered>
      <Modal.Header closeButton>
        <Modal.Title>Stats</Modal.Title>
      </Modal.Header>
      <Modal.Body className="stats-modal-body">
        <div className="top-stats">
          <section>
            <header>Times played:</header>
            <div>{timesPlayed}</div>
          </section>
          <section>
            <header>Accuracy:</header>
            <div>{overallScore}%</div>
          </section>
        </div>
        <h6>Score distribution:</h6>
        <Bar label="0" score={numberTimesScored0} max={max} />
        <Bar label="1" score={numberTimesScored1} max={max} />
        <Bar label="2" score={numberTimesScored2} max={max} />
        <Bar label="3" score={numberTimesScored3} max={max} />
        <Bar label="4" score={numberTimesScored4} max={max} />
        <Bar label="5" score={numberTimesScored5} max={max} />
        <ShareButton copyText={`I've identified ${overallScore}% of Simpsons Quotes`} />
      </Modal.Body>
    </Modal>
  );
}

StatsModal.propTypes = {
  scores: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
  ).isRequired,
};
