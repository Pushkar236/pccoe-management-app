import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import EventForm from './components/EventForm';
import InventoryForm from './components/InventoryForm';
import EventList from './components/EventList';
import Register from './components/Register';
import './App.css'; // Global styles

const App = () => {
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: '#vanta-background',
          THREE,
          highlightColor: 0x7a7a7a,
          midtoneColor: 0x3c3c3c,
          lowlightColor: 0x0a0a0a,
          baseColor: 0x1a1a1a,
          speed: 1.5,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div id="vanta-background" className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/add-event" element={<EventForm />} />
          <Route path="/manage-inventory" element={<InventoryForm />} />
          <Route path="/events" element={<EventList />} />
          <Route path='/Register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
