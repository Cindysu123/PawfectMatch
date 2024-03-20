
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../assets/css/PetCareGuide.css';
import img1 from '../assets/img/image 21.png';
import img2 from '../assets/img/image 22.png';
import img3 from '../assets/img/image 23.png';
import img4 from '../assets/img/image 24.png';
import bg from '../assets/img/footprint.png';

const PetCareGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{background:"white"}}>
      <div className="PetCareGuidecontainer fade-in-top-element">
        <div className="guide-content">
          <h1 className='h1'>Learn More About Responsible Pet Ownership</h1>
          <p>Adopting a pet is not just a momentous decision but also a lifelong commitment filled with love and care. Here, you'll find a collection of informative guides that cover various aspects of pet care, training, and understanding the needs of different pet breeds. Our goal is to help you provide the best possible care for your furry companion, ensuring a happy and healthy life together.</p>
        </div>
        <div style={{zIndex:"10", position:"absolute", background:"white", top:"26vw", width:"80vw", margin:"0 10vw", borderRadius:"1vw", border:"solid black 1px"}}>
            <div className="card" style={{display:"flex", padding:"2vw", justifyContent:"center", alignItems:"center"}}>
              <div style={{width:"30vw"}}>
                <div style={{fontSize:"3vw", lineHeight:"3vw"}}>Basic Pet Care Essentials</div>
                <p>Discover tips on proper nutrition, grooming, exercise routines, and building a loving bond with your pet.</p>
                <Link to="/pet-care-guide/basic-pet-care"><div className="read-more-btn" style={{textAlign:"center", width:"16vw", padding:"1vw 2vw", borderRadius:"1vw"}}>Read More</div></Link>
              </div>
              <img src={img1} alt="Card img1" style={{width:"40vw"}}/>
            </div>
        </div>
        <div style={{margin:"10vw", display:"flex", marginTop:"20vw", justifyContent:"space-between"}}>
          <div style={{background:"white", borderRadius:"1vw", border:"solid black 1px", width:"44vw"}}>
            <div className="card">
              <div style={{fontSize:"2vw", lineHeight:"3vw", margin:"1vw"}}>Health and Veterinary Care</div>
              <img src={img2} alt="Card img2" style={{width:"44vw"}}/>
              <p style={{margin:"2vw"}}>Learn how to be proactive in keeping your pet healthy and providing the best medical care possible.</p>
              <Link to="/pet-care-guide/health-and-vet-care"><div className="read-more-btn" style={{textAlign:"center", width:"16vw", padding:"0.6vw 2vw", borderRadius:"1vw", margin:"2vw 1vw"}}>Read More</div></Link>
            </div>
          </div>
          <div className="card-container">
            <Link to="/pet-care-guide/positive-reinforcement-training" style={{marginBottom:"3vw"}}>
              <div className="card">
                <h3>Positive Reinforcement Training</h3>
                <img className="card-img" src={img3} alt="Card img3" />
                <p>Discover helpful training techniques for basic commands, leash manners, and addressing behavioral challenges.</p>
              </div>
            </Link>
            <Link to="/pet-care-guide/understanding-pet-behavior" style={{marginTop:"3vw"}}>
              <div className="card">
                <h3>Understanding Pet Behavior</h3>
                <img className="card-img" src={img4} alt="Card img4" />
                <p>Understanding your pet's needs and emotions can significantly strengthen your bond and create a harmonious living environment.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default PetCareGuide;
