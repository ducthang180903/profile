import React from "react";
import Modal from "react-modal";
import "../pagescss/ProjectModal.css";

const ProjectModal = ({ isOpen, onClose, project, ContentComponent }) => {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="custom-modal"
      overlayClassName="custom-overlay"
    >
      
      <div className="modal">
  <button className="btn-close" onClick={onClose}>✖</button> {/* Đặt ngoài modal-content */}
  <div className="modal-content">
  <div className="modalblok1">
          <h2>{project.title} :</h2>
          <p>{project.description}</p>
        </div>
    <div className="modal-details">
      <ContentComponent />
    </div>
  </div>
</div>
    </Modal>
  );
};

export default ProjectModal;
