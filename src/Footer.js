import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Assuming you create a separate CSS file for the footer styles
import icon from './assets/icon.png'; // Make sure to provide the correct path to your icon

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={icon} alt="Logo" />
        </div>
        <nav className="footer-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pets">Pets</Link>
            </li>
            <li>
              <Link to="/pet-care-guide">Pet Care Guide</Link>
            </li>
            <li>
              <Link to="/find-your-pets">Find Your Pets</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
