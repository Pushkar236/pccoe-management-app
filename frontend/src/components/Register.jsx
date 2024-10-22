import React, { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Register.css'; // Add the register styles

export default function Register() {
  const [userData, setUserData] = useState({
    email: "",
    userName: "",
    prnNum: "",
    password: "",
    designation: "Student",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify(userData), // Directly send userData
      headers: { "Content-type": "application/json" },
    });

    const data = await response.json();

    if (response.ok) {
      // Store the token in localStorage
      localStorage.setItem("token", data.token);
      console.log("Token stored in localStorage:", data.token);
      alert(data.message);
      navigate("/create-event");
    } else {
      // Handle errors
      alert(data.message);
    }
  };

  return (
    // <div className="register">
    //   <form onSubmit={handleSubmit}> {/* Removed action attribute */}
    //     <label htmlFor="email">Email</label>
    //     <input
    //       type="email"
    //       id="email"
    //       name="email"
    //       value={userData.email}
    //       onChange={handleInputChange}
    //       required
    //     />

    //     <label htmlFor="userName">Name</label>
    //     <input
    //       type="text"
    //       id="userName"
    //       name="userName"
    //       value={userData.userName}
    //       onChange={handleInputChange}
    //       required
    //     />

    //     <label htmlFor="prnNum">PRN Number</label>
    //     <input
    //       type="text"
    //       id="prnNum"
    //       name="prnNum"
    //       value={userData.prnNum}
    //       onChange={handleInputChange}
    //       required
    //     />

    //     <label htmlFor="password">Password</label>
    //     <input
    //       type="password"
    //       id="password"
    //       name="password"
    //       value={userData.password}
    //       onChange={handleInputChange}
    //       required
    //     />

    //     <label htmlFor="designation">Designation</label>
    //     <select
    //       id="designation"
    //       name="designation"
    //       value={userData.designation}
    //       onChange={handleInputChange}
    //       required
    //     >
    //       <option value="Student">Student</option>
    //       <option value="Staff">Staff</option>
    //     </select>

    //     <button type="submit">Register</button> {/* Added type="submit" */}
    //   </form>
    // </div>

    
    <div className="register">
  <form onSubmit={handleSubmit}> {/* Removed action attribute */}
    
    {/* Email Input */}
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

    {/* Name Input */}
    <div className="form-group">
      <label htmlFor="userName">Name</label>
      <input
        type="text"
        id="userName"
        name="userName"
        value={userData.userName}
        onChange={handleInputChange}
        required
      />
    </div>

    {/* PRN Number Input */}
    <div className="form-group">
      <label htmlFor="prnNum">PRN Number</label>
      <input
        type="text"
        id="prnNum"
        name="prnNum"
        value={userData.prnNum}
        onChange={handleInputChange}
        required
      />
    </div>

    {/* Password Input */}
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

    {/* Designation Select */}
    <div className="form-group">
      <label htmlFor="designation">Designation</label>
      <select
        id="designation"
        name="designation"
        
        value={userData.designation}
        onChange={handleInputChange}
        required
        
        
      >
        <option value="Student">Student</option>
        <option value="Staff">Staff</option>
      </select>
    </div>

    {/* Submit Button */}
    <button type="submit" className="submit-btn">Register</button> {/* Added type="submit" */}
  </form>
</div>

  );
}
