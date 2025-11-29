import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

import ProConnectPage from './components/ProConnectPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Search from './components/Search';
import Professionals from './components/Professionals';
import Booking from './components/Booking';
import Registration from './components/Registration';
import ProfessionalDashboard from './components/ProfessionalDashboard';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import CustomerSupportDashboard from './components/CustomerSupportDashboard'; // ✅ Added


function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<ProConnectPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/booking/:professionalName" element={<Booking />} />
        <Route path="/professional-dashboard" element={<ProfessionalDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/customer-support-dashboard" element={<CustomerSupportDashboard />} /> {/* ✅ */}
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
