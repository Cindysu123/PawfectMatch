// Import required dependencies, components, styling, and assets
import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useParams } from 'react-router-dom';
import fetchAccessToken from './api';
import Footer from './Footer';
import '../assets/css/PetDetails.css';
import leftArrow from '../assets/img/arrowL.png';
import rightArrow from '../assets/img/arrowR.png';
import loading from '../assets/img/magnifying-glass.gif';
import paw2 from '../assets/img/paw2.png';

import check from '../assets/img/check.png'
import cross from '../assets/img/cross.png'

import email from '../assets/img/email.png'
import phone from '../assets/img/phone.png'
import address from '../assets/img/address.png'

const PetDetails = () => {
  const { id } = useParams();
  
  const [pet, setPet] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const handleNextMedia = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % getTotalMediaCount());
  };

  const handlePreviousMedia = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex - 1 + getTotalMediaCount()) % getTotalMediaCount());
  };

  const getTotalMediaCount = () => pet.photos.length + (pet.videos.length > 0 ? 1 : 0);

  const renderCurrentMedia = () => {
    if (currentMediaIndex < pet.photos.length) {
      return <img src={pet.photos[currentMediaIndex]?.medium} alt={pet.name} className="pet-image" />;
    }
    return <div dangerouslySetInnerHTML={{ __html: pet.videos[0]?.embed }}></div>;
  };

  const handlePageClick = (pageIndex) => {
    setCurrentMediaIndex(pageIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextMedia(),
    onSwipedRight: () => handlePreviousMedia(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const fetchPetDetails = async () => {
      setIsLoading(true);
      const accessToken = await fetchAccessToken();
      const response = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      setPet(data.animal);
      console.log(pet);
      setIsLoading(false);
    };

    fetchPetDetails();
  }, [id]);

  if (isLoading) {
    return (
      <div className='Loading' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div>Loading...</div>
        <img src={loading} alt="Loading..." width="100px" height="100px" />
      </div>
    );
  }

  if (!pet) {
    return <div>Pet not found</div>;
  }

  return (
    <div {...handlers} style={{background:'white'}}>
      <div className="pet-details-container">
        <div className="pet-main-info" style={{display:'flex'}}>
          <div className="pet-image-container">
            {renderCurrentMedia()}
            {getTotalMediaCount() > 0 && (
              <div className="media-controls">
                <button className="arrow-button Left" onClick={handlePreviousMedia} style={{ backgroundImage: `url(${leftArrow})` }}></button>
                {pet.photos.map((photo, index) => (
                  <button
                    key={index}
                    className={`media-button ${currentMediaIndex === index ? "active-page" : ""}`}
                    onClick={() => handlePageClick(index)}
                    style={{ backgroundImage: `url(${photo.small})` }}
                  />
                ))}
                {pet.videos && pet.videos.length > 0 && (
                  <button
                    className={`media-button ${currentMediaIndex === pet.photos.length ? "active-page" : ""}`}
                    onClick={() => handlePageClick(pet.photos.length)}
                    style={{ backgroundImage: 'url("path/to/your/video-thumbnail.jpg")' }}
                  />
                )}
                <button className="arrow-button Right" onClick={handleNextMedia} style={{ backgroundImage: `url(${rightArrow})` }}></button>
              </div>
            )}
          </div>
          <div className="pet-basic-info">
            <div style={{display:'flex', background:"#fdc072", padding:"2vw 1vw", borderRadius:"1vw 1vw 0 0"}}>
              <img src={paw2} style={{width:"3vw", height:"3vw"}}/>
              <div className="pet-name" style={{fontSize:'4vw', marginLeft:'1vw'}}>Meet {pet.name}!</div>
            </div>
            <div style={{margin:"2vw"}}>
              {pet.breeds.primary && <div style={{fontSize:'1.8vw', margin:'2vw 0', borderBottom: '2px solid #301A0D'}}>Breed: {pet.breeds.primary}</div>}
              {pet.colors.primary && <div style={{fontSize:'1.8vw', margin:'2vw 0', borderBottom: '2px solid #301A0D'}}>Colors: {pet.colors.primary}</div>}
              {pet.age && <div style={{fontSize:'1.8vw', margin:'2vw 0', borderBottom: '2px solid #301A0D'}}>Age: {pet.age}</div>}
              {pet.gender && <div style={{fontSize:'1.8vw', margin:'2vw 0', borderBottom: '2px solid #301A0D'}}>Gender: {pet.gender}</div>}
              {pet.size && <div style={{fontSize:'1.8vw', margin:'2vw 0', borderBottom: '2px solid #301A0D'}}>Size: {pet.size}</div>}
              {pet.status && <div style={{fontSize:'1.8vw', margin:'2vw 0', background:"#fdc072", padding:"1vw", textAlign:"center",borderRadius:"1vw"}} className="pet-status">{pet.status}</div>}
            </div>
          </div>
        </div>
        <div className="pet-attributes">
          <div className='pet-description' style={{background:"#fcf2dc", borderRadius:"1vw", border:"solid 1px #E4996D"}}>
            <div style={{display:'flex', alignItems:"center", backgroundColor:"#e4996d", padding:'1vw',borderRadius:"1vw 1vw 0 0", color: "#301A0D"}}>
              <img src={paw2}></img>
              <div style={{fontSize:'1.8vw', marginLeft:'1vw'}}>Description</div>
            </div>
            <div style={{textAlign:'left', color: "#301A0D", padding:"2vw", lineHeight:"2vw"}}>
              {pet.name} came to Hospice Hearts with his sibling Gypsy but since she likes to start fights with him, we feel they would do better seperated. {pet.name} is a sweet little boy who loves being a lap dog and will happily give kisses. He does will in a play pen and has been good about going outside once on a schedule. He is a bit of a barker as he will warn you about any person or dog who would dare to step into his domain or line of sight. Overall, he is a sweet 8year old boy looking for a calm home with a person who loves him. He can be a bit nervous at first but once he trusts you he will be your faithful companion following you around the house.
            </div>
          </div>
          <div style={{display:"flex", textAlign:"left"}}>
            <div className="pet-attributes-group-left" style={{background:"#c9cfdf", borderRadius:'1vw', border:"solid 1px #7888AF"}}>
              <div style={{display:'flex', alignItems:"center", backgroundColor:"#7888af", padding:'1vw',borderRadius:"1vw 1vw 0 0", color: "#301A0D"}}>
                <img src={paw2}/>
                <div style={{fontSize:'1.8vw', marginLeft:'1vw'}}>Condition</div>
              </div>
              <div style={{padding:"1vw"}}>
                {pet.attributes.spayed_neutered !== null && <div style={{display:"flex", alignItems:"center", width:"20vw", justifyContent:"space-between", margin:"0 auto"}}><p>Spayed/Neutered: {pet.attributes.spayed_neutered ? 'Yes' : 'No'}</p>{pet.attributes.spayed_neutered ? <img src={check}/> : <img src={cross}/>}</div>}
                {pet.attributes.house_trained !== null && <div style={{display:"flex", alignItems:"center", width:"20vw", justifyContent:"space-between", margin:"0 auto"}}><p>House Trained: {pet.attributes.house_trained ? 'Yes' : 'No'}</p>{pet.attributes.house_trained ? <img src={check}/> : <img src={cross}/>}</div>}
                {pet.attributes.special_needs !== null && <div style={{display:"flex", alignItems:"center", width:"20vw", justifyContent:"space-between", margin:"0 auto"}}><p>Special Needs: {pet.attributes.special_needs ? 'Yes' : 'No'}</p>{pet.attributes.special_needs ? <img src={check}/> : <img src={cross}/>}</div>}
                {pet.attributes.shots_current !== null && <div style={{display:"flex", alignItems:"center", width:"20vw", justifyContent:"space-between", margin:"0 auto"}}><p>Shots Current: {pet.attributes.shots_current ? 'Yes' : 'No'}</p>{pet.attributes.shots_current ? <img src={check}/> : <img src={cross}/>}</div>}
              </div>
            </div>
            <div className="pet-attributes-group-right">
              <div style={{display:'flex', alignItems:"center", padding:'1vw'}}>
                <img src={paw2}/>
                <div style={{fontSize:'1.8vw', marginLeft:'1vw'}}>Condition</div>
              </div>
              <div style={{padding:"1vw", fontSize:'1.8vw'}}>
                {pet.contact.email && <div style={{display:"flex", alignItems:"center"}}><img src={email} style={{marginRight:"1vw"}}/><p>Email: {pet.contact.email}</p></div>}
                {pet.contact.phone && <div style={{display:"flex", alignItems:"center"}}><img src={phone} style={{marginRight:"1vw"}}/><p>Phone: {pet.contact.phone}</p></div>}
                {pet.contact.address && (
                  <div style={{display:"flex", alignItems:"center"}}><img src={address} style={{marginRight:"1vw"}}/><p>Address: {`${pet.contact.address.city}, ${pet.contact.address.state} ${pet.contact.address.postcode}, ${pet.contact.address.country}`}</p></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default PetDetails;
