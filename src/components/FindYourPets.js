import React, { useState } from 'react';
import Footer from './Footer';
import '../assets/css/FindYourPets.css';

const FindYourPets = () => {
  const [step, setStep] = useState(0);
  const [pet, setPet] = useState("");
  const [answers, setAnswers] = useState({
    living: "",
    time: "",
    allergies: "",
    active: "",
    age: "",
    size: ""
  });

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value
    });
    if (e.target.value) {
      setStep(step + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let suitablePet = 'Dog';
    if (answers.living === 'apartment' && answers.time === 'fewhours' && answers.size === 'small') {
      suitablePet = 'Cat';
    }
    if (answers.allergies === 'yes') {
      suitablePet = 'Fish';
    }
    setPet(suitablePet);
    console.log(suitablePet);
  };

  return (
    <div>
      <div className="find-pet-section">
        <h2>Find Your Perfect Pet Match</h2>
        <p>Answer a few questions to discover the ideal pet that suits your lifestyle and preferences.</p>
        <form onSubmit={handleSubmit}>
          {step >= 0 && (
            <label>
              Living environment:
              <select name="living" value={answers.living} onChange={handleChange}>
                <option value="">--Please choose an option--</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
              </select>
            </label>
          )}
          {step >= 1 && (
            <label>
              Available time to spend with a pet:
              <select name="time" value={answers.time} onChange={handleChange}>
                <option value="">--Please choose an option--</option>
                <option value="allday">All Day</option>
                <option value="fewhours">A few hours</option>
              </select>
            </label>
          )}
          {step >= 2 && (
            <label>
              Any allergies to animals?:
              <select name="allergies" value={answers.allergies} onChange={handleChange}>
                <option value="">--Please choose an option--</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
          )}
          {step >= 3 && (
            <label>
              How active are you?:
              <select name="active" value={answers.active} onChange={handleChange}>
                <option value="">--Please choose an option--</option>
                <option value="active">Active</option>
                <option value="sedentary">Sedentary</option>
              </select>
            </label>
          )}
          {step >= 4 && (
            <label>
              Age preference for pet:
              <select name="age" value={answers.age} onChange={handleChange}>
                <option value="">--Please choose an option--</option>
                <option value="young">Young</option>
                <option value="adult">Adult</option>
              </select>
            </label>
          )}
          {step >= 5 && (
            <label>
              Preferred pet size:
              <select name="size" value={answers.size} onChange={handleChange}>
                <option value="">--Please choose an option--</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </label>
          )}
          {step >= 6 && <input type="submit" value="Find My Pet" />}
        </form>
        {pet && <p>Your ideal pet is a {pet}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default FindYourPets;
