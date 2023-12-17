import Modal from "react-bootstrap/Modal";
import "./InstructionsModal.scss";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function InstructionsModal({ isVisible, onClose }) {
  return (
    <Modal show={isVisible} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Instructions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>A game for Simpsons super-fans!</p>
        <p>Each day, five quotes from The Simpons are chosen and it is up to you to identify who sai each.</p>
        <p>See how many you can get, and compete with your friends.</p>
      </Modal.Body>
    </Modal>
  );
}
