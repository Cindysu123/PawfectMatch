// Import required dependencies, styling, and assets
import React, { useState, useEffect, useRef } from 'react';
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

  // Ref to keep track of the active navigation link
  const activeLinkRef = useRef(null);

  // Function to handle link click
  const handleLinkClick = (e) => {
    // Reset the 'active-link-style' class for the previous active link
    if (activeLinkRef.current) {
      activeLinkRef.current.classList.remove('active-link-style');
    }

    // Set the 'active-link-style' class for the clicked link
    e.currentTarget.classList.add('active-link-style');

    // Update the ref to point to the clicked link
    activeLinkRef.current = e.currentTarget;
  };

  // Use the useEffect hook to add and remove scroll listener
  useEffect(() => {
    window.addEventListener('scroll', checkScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

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
          <li className={isScrolled ? "logo-small" : "logo-big"}>
            <NavLink to="/" onClick={handleLinkClick} className={location.pathname === "/" ? "active-link-style" : ""}>Home</NavLink>
          </li>
          <li className={isScrolled ? "logo-small" : "logo-big"}>
            <NavLink to="/pets" onClick={handleLinkClick} className={location.pathname === "/pets" ? "active-link-style" : ""}>Pets</NavLink>
          </li>
          <li className={isScrolled ? "logo-small" : "logo-big"}>
            <NavLink to="/pet-care-guide" onClick={handleLinkClick} className={location.pathname === "/pet-care-guide" ? "active-link-style" : ""}>Pet Care Guide</NavLink>
          </li>
          <li className={isScrolled ? "logo-small" : "logo-big"}>
            <NavLink to="/find-your-pets" onClick={handleLinkClick} className={location.pathname === "/find-your-pets" ? "active-link-style" : ""}>Find Your Pets</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Export the component for use in other parts of the application
export default Header;
