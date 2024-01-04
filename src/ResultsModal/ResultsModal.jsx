import Modal from "react-bootstrap/Modal";
import Button from "../Button";
import "./ResultsModal.scss";

export default function ResultsModal({ isVisible, onClose, score }) {
  let title;
  let path;

  switch (score) {
    case 0:
      title = "Worst score ever!";
      path = "/assets/results/comic-book-guy.webp";
      break;
    case 1:
      title = "That's un-possible";
      path = "/assets/results/ralph.png";
      break;
    case 2:
      title = "Ha-ha! You're a failure.";
      path = "/assets/results/nelson.png";
      break;
    case 3:
      title = "D'oh!";
      path = "/assets/results/homer-doh.png";
      break;
    case 4:
      title = "Excellent";
      path = "/assets/results/burns.png";
      break;
    case 5:
      title = "Woo Hoo!";
      path = "/assets/results/homer-woohoo.png";
      break;
  }

  async function copyResultsToClipboard() {
    let text = `I got ${score}/5 Simpsons Quotes correct at https://trivia-five-nu.vercel.app/`;

    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }

  return (
    <Modal show={isVisible} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="results-modal-body">
        <p>You got {score} correct.</p>
        <div className="character-photo-wrapper">
          <img src={path} />
        </div>

        <p />
        <Button
          onClick={async () => {
            await copyResultsToClipboard();
            alert("Results copied to clipboard");
          }}
        >
          Share
        </Button>
      </Modal.Body>
    </Modal>
  );
}
