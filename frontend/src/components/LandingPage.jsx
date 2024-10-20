import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"; // Custom styles for landing page

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero-section">
        <h1>PCCOE Inventory & Event Management</h1>
        <p>Streamlining event management, resource booking, and inventory control for all departments</p>
        <div className="landing-buttons">
          <Link to="/login"><button className="btn-primary">Login</button></Link>
          <Link to="/register"><button className="btn-secondary">Register</button></Link>
        </div>
      </header>

      <section className="features">
        <div className="feature-card">
          <h2>Manage Events</h2>
          <p>Request and manage events across all departments. Organize events with ease!</p>
        </div>
        <div className="feature-card">
          <h2>Track Inventory</h2>
          <p>Keep track of materials, stationeries, and other resources for smooth event operations.</p>
        </div>
        <div className="feature-card">
          <h2>Admin Dashboard</h2>
          <p>Manage and oversee all event and resource requests through the Admin Dashboard.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
