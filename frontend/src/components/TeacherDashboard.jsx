// src/components/TeacherDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
  return (
    <div className="teacher-dashboard">
      <h2>Teacher Dashboard</h2>
      <nav>
        <Link to="/add-event">Request Event</Link>
        <Link to="/manage-inventory">Manage Inventory</Link>
      </nav>
    </div>
  );
};

export default TeacherDashboard;
