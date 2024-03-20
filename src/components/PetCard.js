import pawImg from '../assets/img/paw2.png'

const PetCard = ({ pet }) => {
  const firstName = pet.name.split(' ')[0];

  const imageUrl = pet.photos && pet.photos.length > 0 ? pet.photos[0]?.medium : 'path/to/default/image.jpg';

  return (
    <div className="pet-card">

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '0.5vw 0'}}>
        <img src={pawImg} alt="Paw" style={{ width: '3vw', height: '3vw' }} />
        <h2 style={{ margin: 0 }}>{firstName}</h2>
      </div>
      
      <img src={imageUrl} alt={pet.name} className="pet-card-image" />

      <div className="pet-info">
        <div style={{display: 'flex'}}>
          <p className="age">{`${pet.age}`}</p>
          <p className="size">{`${pet.size}`}</p>
          <p className="gender">{`${pet.gender}`}</p>
        </div>
        
        <div>
          <p className="breeds" style={{letterSpacing: '2px'}}>{`${pet.breeds.primary}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PetCard;