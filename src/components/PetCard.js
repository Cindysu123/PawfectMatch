const PetCard = ({ pet }) => {
  const firstName = pet.name.split(' ')[0];

  const imageUrl = pet.photos && pet.photos.length > 0 ? pet.photos[0]?.medium : 'path/to/default/image.jpg';

  return (
    <div className="pet-card"> {/* Added the pet-card class here */}
      <h2>{firstName}</h2>
      <img src={imageUrl} alt={pet.name} className="pet-image" />
      <div className="pet-info">
        <div style={{display: 'flex'}}>
          <p className="age">{`${pet.age}`}</p>
          <p className="size">{`${pet.size}`}</p>
          <p className="gender">{`${pet.gender}`}</p>
        </div>
        <div>
          <p className="breeds">{`${pet.breeds.primary}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
