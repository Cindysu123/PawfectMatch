import React from 'react';
import '../assets/css/Pets.css';
import Footer from './Footer';
import PetCard from './PetCard';

const Pets = () => {
  return (
    <div>
      <div className='select-container'>
        <div className="selection-section">
          <div className='selection1'>
            <label>Category:</label>
            <select name="category">
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="rodent">Rodent</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className='selection2'>
            <label>Age:</label>
            <input type="number" name="age" />
          </div>
          <div className='selection3'>
            <label>Size:</label>
            <input type="number" name="size" />
          </div>
          <div className='selection4'>
            <label>Gender:</label>
            <label>
              <input type="radio" name="gender" value="male" /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>
          </div>
        </div>
        <div className='pets'>
          <PetCard key={1} pet={2} />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Pets;
