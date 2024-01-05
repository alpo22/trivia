import Modal from "react-bootstrap/Modal";
import ShareButton from "../ShareButton";
import { NUMBER_OF_ROUNDS } from "../constants";
import "./ResultsModal.scss";
import Button from "../Button";

export default function ResultsModal({ isVisible, onClickViewMyStats, onClose, score }) {
  let title;
  let path;

  switch (score) {
    case 0:
      title = "Worst score ever!";
      path = "/assets/results/comic-book-guy.jpg";
      break;
    case 1:
      title = "We're special!";
      path = "/assets/results/ralph.jpg";
      break;
    case 2:
      title = "Ha-ha! You're a failure.";
      path = "/assets/results/nelson.jpg";
      break;
    case 3:
      title = "D'oh!";
      path = "/assets/results/homer-doh.jpg";
      break;
    case 4:
      title = "Excellent.";
      path = "/assets/results/burns.jpg";
      break;
    case 5:
      title = "Woo Hoo!";
      path = "/assets/results/homer-woohoo.jpg";
      break;
  }

  return (
    <Modal show={isVisible} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="results-modal-body">
        <div className="character-photo-wrapper">
          <img src={path} widht="360px" height="280px" />
        </div>
        <p />
        <p>
          You got {score} out of {NUMBER_OF_ROUNDS} correct.
          <br />
          Come back again tomorrow for more quotes.
        </p>
        <ShareButton copyText={`I got ${score}/${NUMBER_OF_ROUNDS} Simpsons Quotes correct`} />
        <Button onClick={onClickViewMyStats}>View my stats</Button>
      </Modal.Body>
    </Modal>
  );
}
