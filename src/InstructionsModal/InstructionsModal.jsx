import Modal from "react-bootstrap/Modal";
import "./InstructionsModal.scss";
import ShareButton from "../ShareButton";

export default function InstructionsModal({ isVisible, onClose }) {
  return (
    <Modal show={isVisible} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Hi Everybody!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Welcome to a game for Simpsons super-fans!</p>
        <p>Each day, five quotes from The Simpons are chosen and it is up to you to identify who said each.</p>
        <p>Compete with your friends and see how many you can get.</p>
        <p>Bye Everybody!</p>
        <ShareButton copyText="Guess which Simpsons character sait it," />
      </Modal.Body>
    </Modal>
  );
}
