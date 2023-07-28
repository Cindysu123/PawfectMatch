// PetCard.js
import React from 'react';
import '../assets/css/PetCard.css';

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <h2>{pet.name}</h2>
      <img src={pet.photos[0]?.medium} alt={pet.name} className="pet-image" />
      <div className="pet-info">
        <div style={{display: 'flex'}}>
          <p>{`${pet.age}`}</p>
          <p>{`${pet.size}`}</p>
          <p>{`${pet.gender}`}</p>
        </div>
        <div>
          <p>{`${pet.breeds.primary}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
