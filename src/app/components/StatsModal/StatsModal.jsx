import Modal from "react-bootstrap/Modal";
import Bar from "./Bar";
import ShareButton from "../ShareButton";
import "./StatsModal.scss";

export default function StatsModal({ isVisible, onClose, score0, score1, score2, score3, score4, score5 }) {
  const max = Math.max(score0, score1, score2, score3, score4, score5);

  const timesPlayed = score0 + score1 + score2 + score3 + score4 + score5;
  const questionsCorrect = score1 + score2 * 2 + score3 * 3 + score4 * 4 + score5 * 5;
  const totalQuestions = 5 * timesPlayed;
  const overallScore = Math.round((questionsCorrect / totalQuestions) * 100);

  return (
    <Modal show={isVisible} onHide={onClose} centered>
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
            <header>Overall score:</header>
            <div>{overallScore}%</div>
          </section>
        </div>
        <h6>Score distribution:</h6>
        <Bar label="0" score={score0} max={max} />
        <Bar label="1" score={score1} max={max} />
        <Bar label="2" score={score2} max={max} />
        <Bar label="3" score={score3} max={max} />
        <Bar label="4" score={score4} max={max} />
        <Bar label="5" score={score5} max={max} />
        <ShareButton copyText={`I've identified ${overallScore}% of Simpsons Quotes`} />
      </Modal.Body>
    </Modal>
  );
}
