import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user'); // default
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setLoginSuccess(true);

      if (role === 'user') navigate('/user-dashboard');
      else if (role === 'professional') navigate('/professional-dashboard');
      else if (role === 'admin') navigate('/admin-dashboard');
      else if (role === 'customer-support') navigate('/customer-support-dashboard'); // ✅
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="user">User</option>
          <option value="professional">Professional</option>
          <option value="admin">Admin</option>
          <option value="customer-support">Customer Support</option> {/* ✅ */}
        </select>

        <input type="email" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="btn btn-primary">Log In</button>
        {loginSuccess && <p className="success-msg">✅ Login successful!</p>}
      </form>
    </div>
  );
};

export default Login;
