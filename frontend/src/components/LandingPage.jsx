import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './LandingPage.css'; // Custom styles for landing page
import * as THREE from 'three'; // Ensure you import THREE
import FOG from 'vanta/dist/vanta.fog.min'; // Import Vanta Fog

const LandingPage = () => {
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    // Initialize Vanta.js on component mount
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: '#vanta-background', // Target the div element by its ID
          THREE, // Pass the THREE.js library
          highlightColor: 0x6eafe3,
          midtoneColor: 0x759be8,
          lowlightColor: 0xaaaae5,
          baseColor: 0xb9eced,
          blurFactor: 0.57,
          speed:0.7
        })
      );
    }

    // Cleanup on component unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div id="vanta-background" className="landing-page">
      {/* Hero Section */}
      <header className="hero-section">
        <h1>PCCOE Inventory & Event Management</h1>
        <p>
          Streamlining event management, resource booking, and inventory control
          for all departments.
        </p>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card" data-aos="fade-up">
          <i className="fas fa-boxes feature-icon"></i>
          <h2>Manage Inventory</h2>
          <p>
            Track and manage all inventory such as event materials and
            stationeries.
          </p>
        </div>
        <div className="feature-card" data-aos="fade-up">
          <i className="fas fa-calendar-alt feature-icon"></i>
          <h2>Event Booking</h2>
          <p>
            Book and manage venues for events across all departments with ease.
          </p>
        </div>
        <div className="feature-card" data-aos="fade-up">
          <i className="fas fa-file-alt feature-icon"></i>
          <h2>Permission Requests</h2>
          <p>Automate the process of obtaining permissions for organizing events.</p>
        </div>
        {/* Add more event cards here if needed */}
      </section>
    </div>
  );
};

export default LandingPage;
