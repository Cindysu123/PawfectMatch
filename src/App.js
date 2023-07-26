import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Pets from './Pets';
import PetCareGuide from './PetCareGuide';
import FindYourPets from './FindYourPets';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pets" element={<Pets/>} />
        <Route path="/pet-care-guide" element={<PetCareGuide/>} />
        <Route path="/find-your-pets" element={<FindYourPets/>} />
      </Routes>
    </Router>
  );
};

export default App;
