import React, { useState } from 'react';
import Footer from './Footer';
import '../assets/css/FindYourPets.css';

const FindYourPets = () => {
  return (
    <div className="find-pets-container">
      <h1 className="title">Find Your Perfect Pet</h1>
      <p className="description">Answer a few questions to discover the ideal pet that suits your lifestyle and preferences.</p>
      <div className="external-link">
        <a href="https://cindysu123.github.io/Narrative-Visualization/" target="_blank" rel="noopener noreferrer" className="start-link">
          Start Here
        </a>
      </div>
    </div>
  );
};

export default FindYourPets;
