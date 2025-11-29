import React, { useState } from "react";
import "../styles/Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"  // default role
  });
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, role } = formData;
    if (name && email && password && role) {
      setSignupSuccess(true);
      console.log("Signed up as:", role);
      // Handle signup logic with role info here
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
          style={{ marginBottom: '1rem', padding: '0.5rem' }}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="professional">Professional</option>
        </select>

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
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Account</button>
        {signupSuccess && <p className="success-msg">✅ Signup successful!</p>}
      </form>
    </div>
  );
};

export default Signup;
