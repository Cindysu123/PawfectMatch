// Import required dependencies and styling
import React from 'react'; // Import React for creating components
import '../assets/css/FindYourPets.css'; // Import the specific styling for this component

// Define the FindYourPets component
const FindYourPets = () => {
  return (
    <div className="find-pets-container"> {/* Main container for the FindYourPets component */}
      
      {/* Title of the page */}
      <h1 className="title">Find Your Perfect Pet</h1>

      {/* Description providing context for the user */}
      <p className="description">Answer a few questions to discover the ideal pet that suits your lifestyle and preferences.</p>

      {/* External link to start the pet finding process */}
      <div className="external-link">
        <a href="https://cindysu123.github.io/Narrative-Visualization/" target="_blank" rel="noopener noreferrer" className="start-link">
          Start Here
        </a>
      </div>
    </div>
  );
};

// Export the component for use in other parts of the application
export default FindYourPets;
