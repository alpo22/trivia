import Modal from "react-bootstrap/Modal";
import "./InstructionsModal.scss";

export default function InstructionsModal({ isVisible, onClose }) {
  return (
    <Modal show={isVisible} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Hi Everybody!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="instructions-modal">
        <p>Welcome to a trivia game for Simpsons super-fans!</p>
        <p>Each day, five quotes from The Simpons are chosen and it is up to you to identify who said each.</p>
        <p>Compete with your friends and see how many you can get.</p>
        <img src={`/assets/Dr_Nick_Riviera.webp`} />
      </Modal.Body>
    </Modal>
  );
}
