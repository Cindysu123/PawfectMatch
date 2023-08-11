// 1. Import statements
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 2. Asset Imports
import '../assets/css/Home.css';
import Footer from './Footer';
import v1 from '../assets/img/paws/Vector 1.png';
import v2 from '../assets/img/paws/Vector 2.png';
import v3 from '../assets/img/paws/Vector 3.png';
import v4 from '../assets/img/paws/Vector 4.png';
import v5 from '../assets/img/paws/Vector 5.png';
import img2 from '../assets/img/image2.png';
import img3 from '../assets/img/image3.png';
import bg1 from '../assets/img/bg1.png';
import bg2 from '../assets/img/bg2.png';

// 3. Component Function
const Home = () => {
  // 4. State Variables
  const [scrolled, setScrolled] = useState(false);
  const [sectionScrolled, setSectionScrolled] = useState(false);

  const [scrolled2, setScrolled2] = useState(false);
  const [sectionScrolled2, setSectionScrolled2] = useState(false);

  // 5. UseEffect Hooks
  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 200;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrolled]);

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 600;
      if (isScrolled !== sectionScrolled) {
        setSectionScrolled(!sectionScrolled);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionScrolled]);

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled2) {
        setScrolled2(!scrolled2);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrolled2]);
  
  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 300;
      if (isScrolled !== sectionScrolled2) {
        setSectionScrolled2(!sectionScrolled2);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionScrolled2]);

  // 6. Render
  return (
    <div className='home'>
      <div className="home-container">
        <div className='head'>
          <h1 className='h1'>Meet Your New Furry Friend!</h1>
          <p className='p1'>Welcome to PawfectMatch, where you can find a loving companion for life! Browse through our featured pets and discover their unique personalities and stories. Begin your journey by exploring these adorable faces!</p>
          <div className={`image img1`}>
              <img src={v1} alt="Vector 1"/>
          </div>
          <Link to="/pets">
              <button className='b1'>Start Explore</button>
          </Link>
        </div>

        <div className='container2'>
          <div className='pet-selection'>
            <p className='p2'>What type of pet are you looking for?</p>
            <div className='pet-type'>
              <p className="pet-item">Dog</p>
              <p className="pet-item">Cat</p>
              <p className="pet-item">Rabbit</p>
              <p className="pet-item">Bird</p>
            </div>
            <Link to="/pets/Rabbit">
              <div className={`image img2 ${scrolled ? 'scrolled' : ''} ${scrolled2 ? 'scrolled2' : ''}`}>
                <img src={v2} alt="Vector 2"/>
              </div>
            </Link>
            <Link to="/pets/Dog">
                <div className={`image img3 ${scrolled ? 'scrolled' : ''} ${scrolled2 ? 'scrolled2' : ''}`}>
                    <img src={v3} alt="Vector 3"/>
                </div>
            </Link>
            <Link to="/pets/Bird">
              <div className={`image img4 ${scrolled ? 'scrolled' : ''} ${scrolled2 ? 'scrolled2' : ''}`}>
                <img src={v4} alt="Vector 4"/>
              </div>
            </Link>
            <Link to="/pets/Cat">
              <div className={`image img5 ${scrolled ? 'scrolled' : ''} ${scrolled2 ? 'scrolled2' : ''}`}>
                <img src={v5} alt="Vector 5"/>
              </div>
            </Link>
          </div>

          <div className="learn-more-about-section">
            <div className={`section-left ${sectionScrolled ? 'active' : ''}`}>
              <img src={img2} alt="img2"/>
            </div>
            <div className={`section-right ${sectionScrolled ? 'active' : ''}`}>
              <h2 className='h3'>Learn More About Pet Adoption</h2>
              <p className='p3'>
                Adopting a pet is a wonderful experience that comes with great responsibilities. Explore our collection of articles and guides, curated to provide you with valuable insights and tips for a rewarding pet-parent journey.
              </p>
              <Link to="/pet-care-guide">
                <button className='b2'>Adoption Guide</button>
              </Link>
              <Link to="/pet-care-guide">
                <button className='b3'>Adoption FAQs</button>
              </Link>
            </div>
          </div>

          <div className="find-pet-section">
            <div className='section2-left'>
              <h2 className='h4'>Find Your Perfect Pet Match</h2>
              <p className='p4'>Answer a few questions to discover the ideal pet that suits your lifestyle and preferences.</p>
              <Link to="/find-your-pets">
                <button className='b4'>Try Now!</button>
              </Link>
            </div>
            <div className='section2-right'>
              <img src={img3} className='img3' alt='img3'/>
            </div>
          </div>
        </div>

        <img src={bg1} className='bg1' alt='bg1'/>
        <img src={bg2} className='bg2' alt='bg2'/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
