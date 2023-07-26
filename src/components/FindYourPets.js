import React, { useState } from 'react';
import Footer from './Footer';
import '../assets/css/FindYourPets.css';

const FindYourPets = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    living: "",
    time: "",
    allergies: "",
  });

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value
    });
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your own logic here to determine the best pet based on the answers
    console.log(answers);
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
          {step >= 3 && <input type="submit" value="Find My Pet" />}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default FindYourPets;
