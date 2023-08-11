// Import required dependencies, styling, and images
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../assets/css/PetCareGuide.css';
import img1 from '../assets/img/image 21.png';
import img2 from '../assets/img/image 22.png';
import img3 from '../assets/img/image 23.png';
import img4 from '../assets/img/image 24.png';
import bg from '../assets/img/footprint.png';

// Define the PetCareGuide component
const PetCareGuide = () => {
  // Use the useEffect hook to scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Return the JSX for rendering the component
  return (
    <div>
      <div className="PetCareGuidecontainer">
        <div className="guide-content">
          {/* Title and introduction to pet care */}
          <h1 className='h1'>Learn More About Responsible Pet Ownership</h1>
          <p>Adopting a pet is not just a momentous decision but also a lifelong commitment filled with love and care. Here, you'll find a collection of informative guides that cover various aspects of pet care, training, and understanding the needs of different pet breeds. Our goal is to help you provide the best possible care for your furry companion, ensuring a happy and healthy life together.</p>
        </div>

        {/* Container for pet care guides */}
        <div className='container11'>
          <h2>Caring for Your Pet</h2>
          <div className="card-container">
            {/* Basic Pet Care Essentials Link */}
            <Link to="/pet-care-guide/basic-pet-care">
              <div className="card">
                <h3>Basic Pet Care Essentials</h3>
                <img className="card-img" src={img1} alt="Card img1" />
                <p>Discover tips on proper nutrition, grooming, exercise routines, and building a loving bond with your pet.</p>
              </div>
            </Link>

            {/* Health and Veterinary Care Link */}
            <Link to="/pet-care-guide/health-and-vet-care">
              <div className="card">
                <h3>Health and Veterinary Care</h3>
                <img className="card-img" src={img2} alt="Card img2" />
                <p>Learn how to be proactive in keeping your pet healthy and providing the best medical care possible.</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Container for pet training guides */}
        <div className='container22'>
          <h2>Training and Behavior</h2>
          <div className="card-container">
            {/* Positive Reinforcement Training Link */}
            <Link to="/pet-care-guide/positive-reinforcement-training">
              <div className="card">
                <h3>Positive Reinforcement Training</h3>
                <img className="card-img" src={img3} alt="Card img3" />
                <p>Discover helpful training techniques for basic commands, leash manners, and addressing behavioral challenges.</p>
              </div>
            </Link>

            {/* Understanding Pet Behavior Link */}
            <Link to="/pet-care-guide/understanding-pet-behavior">
              <div className="card">
                <h3>Understanding Pet Behavior</h3>
                <img className="card-img" src={img4} alt="Card img4" />
                <p>Understanding your pet's needs and emotions can significantly strengthen your bond and create a harmonious living environment.</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer image */}
        <img src={bg} alt='footprint' className='footprint'/>
      </div>

      {/* Footer component */}
      <Footer/>
    </div>
  );
};

// Export the component for use in other parts of the application
export default PetCareGuide;
