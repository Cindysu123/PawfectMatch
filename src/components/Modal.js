import '../assets/css/Modal.css';
import React from 'react';
import '../assets/css/Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div onClick={onClose} className="modal-close-button">X</div>
        {children}
      </div>
    </div>
  );
};

export default Modal;