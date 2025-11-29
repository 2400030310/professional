import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const Booking = () => {
  const { professionalName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const professional = location.state?.professional;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    paymentMethod: '',
    notes: ''
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);

  const paymentOptions = [
    'Credit Card',
    'Debit Card',
    'UPI',
    'Net Banking',
    'Cash on Visit',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.paymentMethod) {
      alert('Please select a payment method.');
      return;
    }
    setBookingSuccess(true);
    console.log('Booking confirmed:', { professional, ...formData });
  };

  // ✅ Inline Styles (Blue, Professional Theme)
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '3rem auto',
      padding: '2.5rem',
      background: 'linear-gradient(180deg, #ffffff 0%, #f0f7ff 100%)',
      borderRadius: '16px',
      boxShadow: '0 8px 24px rgba(0, 68, 255, 0.08)',
      fontFamily: "'Poppins', 'Segoe UI', sans-serif",
      color: '#1e293b',
    },
    title: {
      textAlign: 'center',
      fontSize: '1.9rem',
      fontWeight: 600,
      color: '#1d4ed8',
      marginBottom: '1.8rem',
      letterSpacing: '0.3px',
    },
    card: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.3rem',
      backgroundColor: '#f0f7ff',
      border: '1px solid #dbeafe',
      borderRadius: '12px',
      padding: '1.2rem',
      marginBottom: '1.8rem',
      transition: 'all 0.3s ease',
    },
    cardImage: {
      width: '90px',
      height: '90px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2.5px solid #2563eb',
    },
    cardTitle: {
      margin: 0,
      fontSize: '1.2rem',
      color: '#1e3a8a',
    },
    cardText: {
      margin: '3px 0',
      fontSize: '0.95rem',
      color: '#334155',
    },
    label: {
      display: 'block',
      marginBottom: '0.6rem',
      fontWeight: 600,
      color: '#1e3a8a',
    },
    input: {
      width: '100%',
      padding: '11px 12px',
      border: '1px solid #cbd5e1',
      borderRadius: '8px',
      fontSize: '1rem',
      outline: 'none',
      backgroundColor: '#fff',
      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      marginBottom: '1.2rem',
    },
    textarea: {
      width: '100%',
      padding: '11px 12px',
      border: '1px solid #cbd5e1',
      borderRadius: '8px',
      fontSize: '1rem',
      outline: 'none',
      resize: 'vertical',
      minHeight: '90px',
      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      marginBottom: '1.2rem',
    },
    button: {
      width: '100%',
      background: 'linear-gradient(135deg, #2563eb, #1e40af)',
      color: 'white',
      padding: '12px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'background 0.3s ease, transform 0.1s ease',
    },
    buttonHover: {
      background: 'linear-gradient(135deg, #1d4ed8, #1e3a8a)',
    },
    successBox: {
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#f0f9ff',
      border: '1px solid #bfdbfe',
      borderRadius: '12px',
      color: '#1e3a8a',
      boxShadow: '0 4px 15px rgba(29, 78, 216, 0.15)',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Book Appointment with {decodeURIComponent(professionalName)}</h2>

      {professional && (
        <div style={styles.card}>
          <img src={professional.image} alt={professional.name} style={styles.cardImage} />
          <div>
            <h3 style={styles.cardTitle}>{professional.name}</h3>
            <p style={styles.cardText}><strong>Profession:</strong> {professional.profession}</p>
            <p style={styles.cardText}><strong>Qualification:</strong> {professional.qualification}</p>
            <p style={styles.cardText}><strong>Experience:</strong> {professional.experience}</p>
          </div>
        </div>
      )}

      {bookingSuccess ? (
        <div style={styles.successBox}>
          <h3>✅ Booking Successful!</h3>
          <p>Your appointment with {professional?.name} has been confirmed.</p>
          <p>
            <strong>Date:</strong> {formData.date} &nbsp;
            <strong>Time:</strong> {formData.time}
          </p>
          <button
            onClick={() => navigate('/user-dashboard')}
            style={styles.button}
            onMouseOver={(e) => (e.currentTarget.style.background = styles.buttonHover.background)}
            onMouseOut={(e) => (e.currentTarget.style.background = styles.button.background)}
          >
            Back to Dashboard
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Your Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label style={styles.label}>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label style={styles.label}>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label style={styles.label}>Payment Method:</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
            style={styles.input}
          >
            <option value="">-- Select Payment Method --</option>
            {paymentOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>

          <label style={styles.label}>Additional Notes (optional):</label>
          <textarea
            name="notes"
            rows="4"
            value={formData.notes}
            onChange={handleChange}
            style={styles.textarea}
          />

          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.currentTarget.style.background = styles.buttonHover.background)}
            onMouseOut={(e) => (e.currentTarget.style.background = styles.button.background)}
          >
            Confirm Booking
          </button>
        </form>
      )}
    </div>
  );
};

export default Booking;
