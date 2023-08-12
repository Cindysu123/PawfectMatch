import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Pets from './components/Pets';
import PetCareGuide from './components/PetCareGuide';
import FindYourPets from './components/FindYourPets';
import PetDetails from './components/PetDetails';
import BasicPetCare from './components/BasicPetCare';
import HealthAndVetCare from './components/HealthAndVetCare';
import PositiveReinforcementTraining from './components/PositiveReinforcementTraining';
import UnderstandingPetBehavior from './components/UnderstandingPetBehavior';
import './App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const mouseDown = () => {
      setIsClicked(true);
    };

    const mouseUp = () => {
      setIsClicked(false);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, []);

  return (
    <div className="App">
      <div className={`cursor ${isClicked ? 'cursor-clicked' : ''}`} style={{ left: mousePosition.x, top: mousePosition.y }}/>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/pets/:type" element={<Pets />} />
          <Route path="/pets/:type/:id" element={<PetDetails />} />
          <Route path="/pet-care-guide" element={<PetCareGuide />} />
          <Route path="/pet-care-guide/basic-pet-care" element={<BasicPetCare />} />
          <Route path="/pet-care-guide/health-and-vet-care" element={<HealthAndVetCare />} />
          <Route path="/pet-care-guide/positive-reinforcement-training" element={<PositiveReinforcementTraining />} />
          <Route path="/pet-care-guide/understanding-pet-behavior" element={<UnderstandingPetBehavior />} />
          <Route path="/find-your-pets" element={<FindYourPets />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
