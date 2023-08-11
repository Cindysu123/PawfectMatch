// Import required dependencies, styling, and assets
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../assets/css/Header.css';
import icon from '../assets/img/icon.png';

// Define the Header component
const Header = () => {
  // State to determine if the user has scrolled down the page
  const [isScrolled, setIsScrolled] = useState(false);

  // State to keep track of the active navigation link
  const [activeLink, setActiveLink] = useState('');

  // Get the current location from react-router
  const location = useLocation();

  // Function to check if the page is scrolled
  const checkScroll = () => {
    setIsScrolled(window.scrollY >= 100);
  };

  // Use the useEffect hook to add and remove scroll listener, and update the active link
  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', checkScroll);

    // Update the active link if the location changes
    if (location.pathname !== activeLink) {
      setActiveLink(location.pathname);
    }

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [activeLink, location.pathname]);

  // Return the JSX for rendering the header
  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <nav>
        <NavLink to="/">
          <div className="logo">
            {/* Logo image that changes size on scroll */}
            <img src={icon} alt="Logo" className={isScrolled ? "logo-small" : "logo-big"} />
          </div>
        </NavLink>
        <ul className="nav-links">
          {/* Navigation links with dynamic classes based on scroll and active state */}
          <li className={isScrolled ? "logo-small" : "logo-big"}>
            <NavLink to="/" className={activeLink === "/" ? "active-link" : ""}>Home</NavLink>
          </li>
          <li className={isScrolled ? "logo-small" : "logo-big"}>
            <NavLink to="/pets" className={location.pathname.startsWith("/pets") ? "active-link" : ""}>Pets</NavLink>
          </li>
          <li className={isScrolled ? "logo-small" : "logo-big"}>
            <NavLink to="/pet-care-guide" className={activeLink === "/pet-care-guide" ? "active-link" : ""}>Pet Care Guide</NavLink>
          </li>
          <li className={isScrolled ? "logo-small" : "logo-big"}>
            <NavLink to="/find-your-pets" className={activeLink === "/find-your-pets" ? "active-link" : ""}>Find Your Pets</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Export the component for use in other parts of the application
export default Header;
