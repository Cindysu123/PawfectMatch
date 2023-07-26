import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 200; // Change the value based on when you want the animation to start
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrolled]);

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
              <p>Dog</p>
              <p>Cat</p>
              <p>Rodent</p>
              <p>Others</p>
            </div>
            <Link to="/pets/rodents">
              <div className={`image img2 ${scrolled ? 'scrolled' : ''}`}>
                <img src={v2} alt="Vector 2"/>
              </div>
            </Link>
            <Link to="/pets/dogs">
              <div className={`image img3 ${scrolled ? 'scrolled' : ''}`}>
                <img src={v3} alt="Vector 3"/>
              </div>
            </Link>
            <Link to="/pets/others">
              <div className={`image img4 ${scrolled ? 'scrolled' : ''}`}>
                <img src={v4} alt="Vector 4"/>
              </div>
            </Link>
            <Link to="/pets/cats">
              <div className={`image img5 ${scrolled ? 'scrolled' : ''}`}>
                <img src={v5} alt="Vector 5"/>
              </div>
            </Link>
          </div>

          <div className="learn-more-section">
            <div className='section-left'>
              <img src={img2} alt="img2"/>
            </div>
            <div className='section-right'>
            <h2 className='h3'>Learn More About Pet Adoption</h2>
              <p className='p3'>
                Adopting a pet is a wonderful experience that comes with great responsibilities. Explore our collection of articles and guides, curated to provide you with valuable insights and tips for a rewarding pet-parent journey.
              </p>
              <Link to="/adoption-guide">
                <button className='b2'>Adoption Guide</button>
              </Link>
              <Link to="/adoption-faqs">
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