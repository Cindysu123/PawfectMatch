import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Pets from './components/Pets';
import PetCareGuide from './components/PetCareGuide';
import FindYourPets from './components/FindYourPets';
import './App.css';
import paw from './assets/img/paw_small.png'


const App = () => {
  useEffect(() => {
    document.body.style.cursor = `url(${paw}), auto`;
  }, []);
  
  return (
    <div style={{cursor: `url(${paw}), auto`}}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pets" element={<Pets/>} />
          <Route path="/pet-care-guide" element={<PetCareGuide/>} />
          <Route path="/find-your-pets" element={<FindYourPets/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
