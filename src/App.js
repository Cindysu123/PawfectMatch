import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Pets from './components/Pets';
import PetCareGuide from './components/PetCareGuide';
import FindYourPets from './components/FindYourPets';
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
