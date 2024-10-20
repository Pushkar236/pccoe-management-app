import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>PCCOE Management</h1>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-event">Add Event</Link></li>
        <li><Link to="/manage-inventory">Manage Inventory</Link></li>
        <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
