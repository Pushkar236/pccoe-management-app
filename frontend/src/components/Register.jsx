import { useState } from "react";

export default function Register() {
  const [userData, setUserData] = useState({
    email: "",
    userName: "",
    prnNum: "",
    password: "",
    designation:""
});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ userData }),
      headers: { "Content-type": "application/json" },
    });
  };

  return (
    <div className="register">
      <form action="/register" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />

        <label htmlFor="userName">Name</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={userData.userName}
          onChange={handleInputChange}
        />

        <label htmlFor="prnNum">PRN Number</label>
        <input
          type="text"
          id="prnNum"
          name="prnNum"
          value={userData.prnNum}
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.prnNum}
          onChange={handleInputChange}
        />


        <button>Register</button>
      </form>
    </div>
  );
}
