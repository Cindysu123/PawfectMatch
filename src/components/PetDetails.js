import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchAccessToken from './api';
import PetCard from './PetCard';
import Footer from './Footer';
import '../assets/css/PetDetails.css';
import leftArrow from '../assets/img/arrowL.png';
import rightArrow from '../assets/img/arrowR.png';
import loading from '../assets/img/magnifying-glass.gif'
import { Background } from 'react-flow-renderer';

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNextPhoto = () => {
    setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % pet.photos.length);
  };
  
  const handlePreviousPhoto = () => {
    setCurrentPhotoIndex(prevIndex => (prevIndex - 1 + pet.photos.length) % pet.photos.length);
  };
  
  const handleNextVideo = () => {
    setCurrentVideoIndex(prevIndex => (prevIndex + 1) % pet.videos.length);
  };
  
  const handlePreviousVideo = () => {
    setCurrentVideoIndex(prevIndex => (prevIndex - 1 + pet.videos.length) % pet.videos.length);
  };
  
  const getTotalMediaCount = () => pet.photos.length + (pet.videos.length > 0 ? 1 : 0);

    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    const handleNextMedia = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % getTotalMediaCount());
    };

    const handlePreviousMedia = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex - 1 + getTotalMediaCount()) % getTotalMediaCount());
    };

    const renderCurrentMedia = () => {
        if (currentMediaIndex < pet.photos.length) {
            return <img src={pet.photos[currentMediaIndex]?.medium} alt={pet.name} className="pet-image" />;
        }
        return <div dangerouslySetInnerHTML={{ __html: pet.videos[0]?.embed }}></div>;
    };

    const handlePageClick = (pageIndex) => {
        setCurrentMediaIndex(pageIndex);
      };      

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
    <div>
      <div className="pet-details-container">
          <h2 className="pet-name">Meet {pet.name} - {pet.age} {pet.breeds.primary}</h2>
          <div className="pet-main-info">
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
                {pet.species && <p>Species: {pet.species}</p>}
                {pet.breeds.primary && <p>Breed: {pet.breeds.primary}</p>}
                {pet.age && <p>Age: {pet.age}</p>}
                {pet.gender && <p>Gender: {pet.gender}</p>}
                {pet.size && <p>Size: {pet.size}</p>}
                </div>
            </div>
            <div className="pet-attributes">
                <div className="pet-attributes-group-left">
                {pet.coat && <p>Coat: {pet.coat}</p>}
                {pet.colors.primary && <p>Colors: {pet.colors.primary}</p>}
                {pet.attributes.spayed_neutered !== null && <p>Spayed/Neutered: {pet.attributes.spayed_neutered ? 'Yes' : 'No'}</p>}
                {pet.attributes.house_trained !== null && <p>House Trained: {pet.attributes.house_trained ? 'Yes' : 'No'}</p>}
                {pet.attributes.special_needs !== null && <p>Special Needs: {pet.attributes.special_needs ? 'Yes' : 'No'}</p>}
                {pet.attributes.shots_current !== null && <p>Shots Current: {pet.attributes.shots_current ? 'Yes' : 'No'}</p>}
                </div>
                <div className="pet-attributes-group-right">
                    <div className="pet-environment-description-group">
                        {pet.environment && (
                            <div className="pet-environment">
                            <p className="environment-title">Environment:</p>
                            <div className="environment-attributes">
                                <p>Children: {pet.environment.children ? 'Yes' : 'No'}</p>
                                <p>Dogs: {pet.environment.dogs ? 'Yes' : 'No'}</p>
                                <p>Cats: {pet.environment.cats ? 'Yes' : 'No'}</p>
                            </div>
                            </div>
                        )}
                        {pet.description && (
                            <p className="pet-description">
                                Description: {pet.description.split(".")[0]}.
                            </p>
                            )}
                        {pet.status && <p className="pet-status">Status: {pet.status}</p>}
                    </div>
                    <div className="pet-contact-info-group">
                        {pet.contact.email && <p>Contact: {pet.contact.email}</p>}
                        {pet.contact.phone && <p>Phone: {pet.contact.phone}</p>}
                        {pet.contact.address && (
                            <p>Address: {`${pet.contact.address.address1}, ${pet.contact.address.city}, ${pet.contact.address.state} ${pet.contact.address.postcode}, ${pet.contact.address.country}`}</p>
                        )}
                    </div>
                </div>
            </div>
      </div>
      <Footer />
    </div>
  );
  
};

export default PetDetails;
