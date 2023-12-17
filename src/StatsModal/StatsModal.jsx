import Modal from "react-bootstrap/Modal";
// import "./StatsModal.scss";

export default function StatsModal({ isVisible, onClose }) {
  return (
    <Modal show={isVisible} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Stats</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Coming soon</p>
      </Modal.Body>
    </Modal>
  );
}
