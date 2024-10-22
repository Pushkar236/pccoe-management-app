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
import Login from './components/login'; // Import Login component
import './App.css'; // Global styles

const App = () => {
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: '#vanta-background',
          THREE,
          highlightColor: 0x6eafe3,
          midtoneColor: 0x759be8,
          lowlightColor: 0xaaaae5,
          baseColor: 0xb9eced,
          blurFactor: 0.57,
          speed: 0.7
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
          <Route path="/events" element={<EventList />} /> {/* Event List Route */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> {/* Login Page Route */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
