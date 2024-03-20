// FindYourPets.js
import React, { useState } from 'react';
import '../assets/css/FindYourPets.css';
import Modal from './Modal';

import Footer from './Footer';

const FindYourPets = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="find-pets-container fade-in-top-element">
      <div className="title">Find Your Perfect Pet</div>
      <div className="description">Answer a few questions to discover the ideal pet that suits your lifestyle and preferences.</div>
      <button onClick={openModal} className="start-link">Start Here</button>
      
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <iframe 
          src="https://cindysu123.github.io/Narrative-Visualization/" 
          title="External Content" 
          width="100%" 
          height="500px"
          style={{border: 'none'}}
        ></iframe>
      </Modal>
      <Footer />
    </div>
  );
};

export default FindYourPets;