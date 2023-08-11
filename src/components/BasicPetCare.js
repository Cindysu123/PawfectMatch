// Import required dependencies and styling
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/PetCarePages.css';

// Define the BasicPetCare component
const BasicPetCare = () => {
  // Use the useEffect hook to scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Return the JSX for rendering the component
  return (
    <div className='container'>
      {/* Link to go back to the main pet care guide */}
      <Link to="/pet-care-guide" className="back-button">Go Back to Pet Care Guide</Link>
      
      {/* Title of the page */}
      <h1>Basic Pet Care Essentials</h1>

      {/* Introduction paragraph */}
      <p>Adopting a pet is a joyful and exciting experience, but it also comes with the responsibility of providing proper care. Understanding the essentials of basic pet care is crucial for ensuring a happy, healthy life for your furry friend.</p>

      {/* Section on Nutrition */}
      <h3>Nutrition</h3>
      <p>The right nutrition plays a vital role in your pet's growth and development. Different pets have unique dietary requirements. It is essential to understand what type of food is suitable for your pet, considering factors such as age, breed, weight, and health conditions. Providing fresh water at all times is also vital for hydration.</p>

      {/* Section on Grooming */}
      <h3>Grooming</h3>
      <p>Grooming is more than just keeping your pet looking good. Regular grooming helps in spotting potential health problems before they become serious. It includes brushing to remove dead hair, dirt, and dandruff, regular baths with pet-friendly shampoo, nail trimming, and checking ears and teeth. A well-groomed pet is a healthy and happy pet.</p>

      {/* Section on Exercise */}
      <h3>Exercise</h3>
      <p>Physical activity is essential for keeping your pet healthy and fit. Regular exercise helps in controlling weight, improving digestion, and reducing behavioral issues. The type and amount of exercise depend on your pet's breed, age, and health. Activities can range from walks and playtime to more structured exercises like agility training.</p>

      {/* Section on Bonding */}
      <h3>Bonding</h3>
      <p>A strong bond between you and your pet is the foundation of a harmonious relationship. Spending quality time, understanding their needs, respecting their space, and consistent training are key to building trust and affection. The bond you share with your pet enhances their well-being and enriches your life in return.</p>

      {/* Conclusion */}
      <h3>Conclusion</h3>
      <p>Basic pet care involves understanding and catering to the fundamental needs of your pet. It's a continuous learning process filled with love, care, and joy. Embracing these essentials ensures a fulfilling and enriching life for both you and your beloved pet.</p>
    </div>
  );
};

// Export the component for use in other parts of the application
export default BasicPetCare;