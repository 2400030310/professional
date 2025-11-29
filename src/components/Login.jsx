import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';   // ✅ Import reCAPTCHA
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user'); // default
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false); // ✅ New state
  const navigate = useNavigate();

  const handleCaptcha = (value) => {
    if (value) {
      setCaptchaVerified(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && captchaVerified) {   // ✅ Check captcha before login
      setLoginSuccess(true);

      if (role === 'user') navigate('/user-dashboard');
      else if (role === 'professional') navigate('/professional-dashboard');
      else if (role === 'admin') navigate('/admin-dashboard');
      else if (role === 'customer-support') navigate('/customer-support-dashboard');
    } else {
      alert("Please complete the CAPTCHA before logging in.");
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
          <option value="customer-support">Customer Support</option>
        </select>

        <input type="email" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required />

        {/* ✅ Add reCAPTCHA widget */}
        <ReCAPTCHA
          sitekey="6LeaTRwsAAAAACQ0hpdX8UohMJ-Zx8ajk39AOUpZ"   // Replace with your actual site key
          onChange={handleCaptcha}
        />

        <button type="submit" className="btn btn-primary">Log In</button>
        {loginSuccess && <p className="success-msg">✅ Login successful!</p>}
      </form>
    </div>
  );
};

export default Login;