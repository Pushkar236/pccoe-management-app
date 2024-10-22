import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Include the login CSS file

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulated authentication logic
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-type": "application/json" },
    });

    const data = await response.json();
    
    if (response.ok) {
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      navigate("/event-list"); // Navigate to the event list after login
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
