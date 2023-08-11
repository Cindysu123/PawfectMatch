// Define the PetCard component, which receives a pet object as a prop
const PetCard = ({ pet }) => {
  // Extract the first name from the pet's name
  const firstName = pet.name.split(' ')[0];

  // Determine the image URL, defaulting to a placeholder if no photos are available
  const imageUrl = pet.photos && pet.photos.length > 0 ? pet.photos[0]?.medium : 'path/to/default/image.jpg';

  // Return the JSX for rendering the component
  return (
    <div className="pet-card"> {/* Main container for the pet card */}
      
      {/* Display the first name of the pet */}
      <h2>{firstName}</h2>
      
      {/* Display the pet's image */}
      <img src={imageUrl} alt={pet.name} className="pet-image" />

      {/* Container for additional pet information */}
      <div className="pet-info">
        
        {/* Display age, size, and gender in a flex layout */}
        <div style={{display: 'flex'}}>
          <p className="age">{`${pet.age}`}</p>
          <p className="size">{`${pet.size}`}</p>
          <p className="gender">{`${pet.gender}`}</p>
        </div>
        
        {/* Display the primary breed of the pet */}
        <div>
          <p className="breeds">{`${pet.breeds.primary}`}</p>
        </div>
      </div>
    </div>
  );
};

// Export the component for use in other parts of the application
export default PetCard;