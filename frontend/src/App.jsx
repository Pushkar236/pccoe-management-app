import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import EventForm from "./components/EventForm";
import InventoryForm from "./components/InventoryForm";
import AdminDashboard from "./components/AdminDashboard";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add-event" element={<EventForm />} />
        <Route path="/manage-inventory" element={<InventoryForm />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
