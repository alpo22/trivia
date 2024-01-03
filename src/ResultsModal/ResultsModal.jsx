import Modal from "react-bootstrap/Modal";
import Button from "../Button";
import "./ResultsModal.scss";

export default function ResultsModal({ isVisible, onClose, score }) {
  let title;
  let path;

  switch (score) {
    case 0:
      title = "Worst score ever!";
      path = "https://static.wikia.nocookie.net/simpsons/images/9/9d/Comic_Book_Guy.png";
      break;
    case 1:
      title = "That's un-possible";
      path = "https://static.wikia.nocookie.net/simpsons/images/1/14/Ralph_Wiggum.png";
      break;
    case 2:
      title = "Ha-ha! You're a failure.";
      path = "https://static.wikia.nocookie.net/simpsons/images/e/e0/Nelson_Muntz-795440.png";
      break;
    case 3:
      title = "D'oh!";
      path = "https://theapiarist.org/wp-content/uploads/2022/01/Homer-DOh.png";
      break;
    case 4:
      title = "Excellent";
      path = "https://static.wikia.nocookie.net/simpsons/images/a/a7/Montgomery_Burns.png";
      break;
    case 5:
      title = "Woo Hoo!";
      path = "https://i.pinimg.com/originals/77/1a/f1/771af10c859e644c939a0df3685836d8.png";
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
