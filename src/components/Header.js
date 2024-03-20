import React, { useState, useEffect, useRef } from 'react';
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
    if (location.pathname !== activeLink) {
      setActiveLink(location.pathname);
    }
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [activeLink, location.pathname]);
  const activeLinkRef = useRef(null);

  const handleLinkClick = (e) => {
    if (activeLinkRef.current) {
      activeLinkRef.current.classList.remove('active-link-style');
    }
    e.currentTarget.classList.add('active-link-style');
    activeLinkRef.current = e.currentTarget;
  };
  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);
  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <nav className='fade-in-top-element'>
        <NavLink to="/">
          <div className="logo">
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

export default Header;
