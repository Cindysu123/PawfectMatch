import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../assets/css/Pets.css';
import Footer from './Footer';
import PetCard from './PetCard';
import fetchAccessToken from './api';

import paw from '../assets/img/paw_small.png';
import leftArrow from '../assets/img/arrowL.png';
import rightArrow from '../assets/img/arrowR.png';
import loading from '../assets/img/magnifying-glass.gif';

const Pets = () => {
  const [pets, setPets] = useState([]);
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [breedOptions, setBreedOptions] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedBreedFinal, setSelectedBreedFinal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [petTypes, setPetTypes] = useState([]);

  const { type } = useParams();
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    setSelectedType(type || '');
  }, [type]);

  useEffect(() => {
    const fetchPets = async () => {
      setIsLoading(true);
      const accessToken = await fetchAccessToken();
      let petImagesLoaded = 0;
      let page = 1;
      let petsWithImages = [];
      let maxPets = 27;

      while (petsWithImages.length < maxPets) {
        const params = new URLSearchParams({
          page: page,
          type: selectedType,
          age: selectedAge,
          size: selectedSize,
          gender: selectedGender,
          breed: selectedBreed,
        });

        const response = await fetch(`https://api.petfinder.com/v2/animals?${params.toString()}`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });

        const data = await response.json();
        console.log(data);

        const pets = data.animals.filter(pet => pet.photos && pet.photos.length > 0);

        for (const pet of pets) {
          const petExists = petsWithImages.find(existingPet => existingPet.id === pet.id);
          if (!petExists && petsWithImages.length < maxPets) {
            petsWithImages.push(pet);
            petImagesLoaded += 1;
          }
        }

        page += 1;
      }

      setPets(petsWithImages);
      setIsLoading(false);
    };

    fetchPets();
  }, [currentPage, selectedType, selectedAge, selectedSize, selectedGender, selectedBreedFinal]);
    
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedType, selectedAge, selectedSize, selectedGender, selectedBreed]);

  useEffect(() => {
    const breeds = Array.from(new Set(pets.map(pet => pet.breeds.primary)));
    setBreedOptions(breeds);
  }, [pets]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const filteredPets = pets.filter(pet => {
    return (
      (selectedType === '' || pet.type === selectedType) &&
      (selectedAge === '' || pet.age === selectedAge) &&
      (selectedSize === '' || pet.size === selectedSize) &&
      (selectedGender === '' || pet.gender === selectedGender) &&
      (selectedBreed === '' || pet.breeds.primary === selectedBreed)
    );
  });

  const nextPage = () => { if (currentPage < 5) setCurrentPage(currentPage + 1); };
  const prevPage = () => { if (currentPage > 1) setCurrentPage(currentPage - 1); };

  const buttonStyle = {
    backgroundImage: `url(${paw})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: 'black',
    border: 'none',
    padding: '1.2vw',
    backgroundColor: 'transparent',
    width: '5vw',
    height: '5vw'
  };
  const inactiveButtonStyle = { ...buttonStyle, opacity: 0.5, width: '4vw', height: '4vw' };
  const displayedPets = filteredPets.slice((currentPage - 1) * 9, currentPage * 9);
  const pages = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];

  return (
    <div className='top-container'>
      <div className="selection-section">
        <div className='selection1'>
          <label>Type:</label>
          <select name="type" value={selectedType} onChange={e => setSelectedType(e.target.value)}>
            <option value="">All</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Small & Furry">Small & Furry</option>
            <option value="Horse">Horse</option>
            <option value="Bird">Bird</option>
            <option value="Scales, Fins & Other">Scales, Fins & Other</option>
            <option value="Barnyard">Barnyard</option>
          </select>
          <label>Breed:</label>
          <input type="text" list="breeds" id="breed" name="breed" value={selectedBreed} onChange={e => setSelectedBreed(e.target.value)} onBlur={e => setSelectedBreedFinal(e.target.value)} />
          <datalist id="breeds">
            {breedOptions.map((breed, index) => (
              <option key={index} value={breed} />
            ))}
          </datalist>
        </div>
        <div className='selection2'>
          <label>Age:</label>
          <select name="age" onChange={e => setSelectedAge(e.target.value)}>
            <option value="">All</option>
            <option value="Baby">Baby</option>
            <option value="Young">Young</option>
            <option value="Adult">Adult</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
        <div className='selection3'>
          <label>Size:</label>
          <select name="size" onChange={e => setSelectedSize(e.target.value)}>
            <option value="">All</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Extra Large">Extra Large</option>
          </select>
        </div>
        <div className='selection4'>
          <label>Gender:</label>
          <label>
            <input type="radio" name="gender" value="Male" onChange={e => setSelectedGender(e.target.value)} /> M
          </label>
          <label>
            <input type="radio" name="gender" value="Female" onChange={e => setSelectedGender(e.target.value)} /> F
          </label>
          <label>
            <input type="radio" name="gender" value="" onChange={e => setSelectedGender(e.target.value)} /> Doesn't Matter
          </label>
        </div>
      </div>
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignItems: 'center' }}>
          <div>Loading...</div>
          <img src={loading} alt="Loading..." width="100px" height="100px" />
        </div>
      ) : (
        <div className='select-container'>
          <div className='pets'>
            {displayedPets.map((pet, index) => (
              <div
                key={pet.id}
                className='pet'
                style={{animationDelay: `${index * 0.3}s`}}
              >
                <Link to={`/pets/${pet.type}/${pet.id}`}>
                  <PetCard pet={pet} />
                </Link>
              </div>
            ))}
          </div>
          <div className="pagination">
            <button className='LRB' onClick={prevPage}>
              <img src={leftArrow} alt="previous page" style={{ height: '60%', width: '60%' }} />
            </button>
            {pages.map((page, index) => {
              if (page < 1 || page > 5) return null;
              return (
                <button className='pawb'
                  key={index}
                  onClick={() => setCurrentPage(page)}
                  style={page === currentPage ? buttonStyle : inactiveButtonStyle}
                >
                  {page}
                </button>
              );
            })}
            <button className='LRB' onClick={nextPage}>
              <img src={rightArrow} alt="next page" style={{ height: '60%', width: '60%' }} />
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Pets;
