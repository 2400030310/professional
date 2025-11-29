import React, { useState } from "react";
import "../styles/Registration.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profession: "",
    qualification: "",
    experience: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
    // You can replace this with an actual POST request to backend.
    alert("Registration successful!");
    setFormData({
      name: "",
      email: "",
      profession: "",
      qualification: "",
      experience: "",
      password: "",
    });
  };

  return (
    <div className="registration-container">
      <h2>Professional Registration</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <select
          name="profession"
          value={formData.profession}
          onChange={handleChange}
          required
        >
          <option value="">Select Profession</option>
          <option value="Web Developer">Web Developer</option>
          <option value="Electrician">Electrician</option>
          <option value="Plumber">Plumber</option>
          <option value="Tutor">Tutor</option>
          <option value="Designer">Graphic Designer</option>
          <option value="Software Engineer">Software Engineer</option>
        </select>

        <input
          type="text"
          name="qualification"
          placeholder="Qualification"
          value={formData.qualification}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="experience"
          placeholder="Years of Experience"
          value={formData.experience}
          onChange={handleChange}
          required
          min="0"
        />

        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
