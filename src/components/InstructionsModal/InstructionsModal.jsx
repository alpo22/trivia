import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "../Button";
import "./InstructionsModal.scss";

export default function InstructionsModal({ onClose }) {
  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Hi Everybody!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Welcome to AnecDOH!tes, a trivia game for Simpsons super-fans!</p>
        <p>Each day, five quotes from The Simpons are chosen and it is up to you to identify who said each.</p>
        <p>Compete with your friends and see how many you can get.</p>
        <img src="/assets/Dr_Nick_Riviera.webp" alt="Dr. Nick" className="instructions-modal-image" />

        <div className="play-button">
          <Button onClick={onClose}>Start the game!</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

InstructionsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
