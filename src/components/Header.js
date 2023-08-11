import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../assets/css/Header.css';
import icon from '../assets/img/icon.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  const checkScroll = () => {
    setIsScrolled(window.scrollY >= 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);

    // Check the initial path once
    if (location.pathname !== activeLink) {
      setActiveLink(location.pathname);
    }

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [activeLink, location.pathname]);

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <nav>
        <NavLink to="/">
          <div className="logo">
            <img src={icon} alt="Logo" className={isScrolled ? "logo-small" : "logo-big"} />
          </div>
        </NavLink>
        <ul className="nav-links">
          <li className={isScrolled ? "logo-small" : "logo-big"}>
            <NavLink to="/" exact="true" className={activeLink === "/" ? "active-link" : ""}>Home</NavLink>
          </li>
          <li className={isScrolled ? "logo-small" : "logo-big"}>
            <NavLink to="/pets" className={location.pathname.startsWith("/pets") ? "active-link" : ""}>Pets</NavLink>
          </li >
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

export default Header;
