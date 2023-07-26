import React from 'react';
import './PetCard.css'; // This CSS file should style the PetCard

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <img src={pet.image} alt={pet.name} className="pet-image" />
      <div className="pet-info">
        <h2>{pet.name}</h2>
        <p>{`Age: ${pet.age}`}</p>
        <p>{`Size: ${pet.size}`}</p>
        <p>{`Gender: ${pet.gender}`}</p>
      </div>
    </div>
  );
};

export default PetCard;
