import Modal from "react-bootstrap/Modal";
import "./InstructionsModal.scss";

export default function InstructionsModal({ isVisible, onClose }) {
  return (
    <Modal show={isVisible} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Instructions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>A game for Simpsons super-fans!</p>
        <p>Each day, five quotes from The Simpons are chosen and it is up to you to identify who said each.</p>
        <p>See how many you can get, and compete with your friends.</p>
      </Modal.Body>
    </Modal>
  );
}
