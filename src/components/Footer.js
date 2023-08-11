// Import required dependencies and styling
import React from 'react'; // Import React for creating components
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../assets/css/Footer.css'; // Import the specific styling for this component
import icon from '../assets/img/icon.png'; // Import the logo image

// Define the Footer component
const Footer = () => {
  return (
    <footer> {/* Main footer tag for semantic HTML */}
      <div className="footer-content"> {/* Container for the footer content */}
        
        {/* Logo section of the footer */}
        <div className="footer-logo">
          <img src={icon} alt="Logo" /> {/* Logo image */}
        </div>

        {/* Navigation links for the footer */}
        <nav className="footer-nav">
          <ul>
            <li>
              <Link to="/">Home</Link> {/* Link to Home page */}
            </li>
            <li>
              <Link to="/pets">Pets</Link> {/* Link to Pets page */}
            </li>
            <li>
              <Link to="/pet-care-guide">Pet Care Guide</Link> {/* Link to Pet Care Guide page */}
            </li>
            <li>
              <Link to="/find-your-pets">Find Your Pets</Link> {/* Link to Find Your Pets page */}
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

// Export the component for use in other parts of the application
export default Footer;
