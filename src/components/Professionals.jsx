import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Professionals.css";

const professionals = [
  { name: "Priya Sharma", profession: "Web Developer", qualification: "B.Tech (CSE)", price: "₹1500/hr", image: "https://randomuser.me/api/portraits/women/18.jpg" },
  { name: "Ravi Kumar", profession: "Electrician", qualification: "ITI Certified", price: "₹700/visit", image: "https://randomuser.me/api/portraits/men/22.jpg" },
  { name: "Anjali Patel", profession: "Graphic Designer", qualification: "BFA", price: "₹1800/hr", image: "https://randomuser.me/api/portraits/women/45.jpg" },
  { name: "Neha Joshi", profession: "Math Tutor", qualification: "MSc Math", price: "₹1200/hr", image: "https://randomuser.me/api/portraits/women/33.jpg" },
  { name: "Rahul Mehta", profession: "Plumber", qualification: "Certified Technician", price: "₹600/visit", image: "https://randomuser.me/api/portraits/men/31.jpg" },
  { name: "Sneha Reddy", profession: "Content Writer", qualification: "MA English", price: "₹900/article", image: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Amit Verma", profession: "Photographer", qualification: "Diploma in Photography", price: "₹2500/session", image: "https://randomuser.me/api/portraits/men/42.jpg" },
  { name: "Divya Kapoor", profession: "Makeup Artist", qualification: "Certified Beautician", price: "₹2000/event", image: "https://randomuser.me/api/portraits/women/19.jpg" },
  { name: "Karan Singh", profession: "Fitness Trainer", qualification: "B.Sc (Sports Science)", price: "₹1000/session", image: "https://randomuser.me/api/portraits/men/55.jpg" },
  { name: "Meera Iyer", profession: "Psychologist", qualification: "M.A. Psychology", price: "₹1500/session", image: "https://randomuser.me/api/portraits/women/44.jpg" },
];

const Professionals = () => {
  const navigate = useNavigate();

  const handleBooking = (professional) => {
    localStorage.setItem('bookingProfessional', JSON.stringify(professional));
    navigate(`/booking/${encodeURIComponent(professional.name)}`, {
      state: { professional },
    });
  };

  return (
    <div>
      <header className="header">
        <div className="logo">ProConnect</div>
        <nav className="nav">
          <button className="nav-btn" onClick={() => navigate('/')}>Home</button>
          <button className="nav-btn" onClick={() => navigate('/search')}>Search</button>
          <button className="nav-btn" onClick={() => navigate('/professionals')}>Professionals</button>
          <button className="nav-btn" onClick={() => navigate('/login')}>Login</button>
          <button className="nav-btn" onClick={() => navigate('/signup')}>Signup</button>
        </nav>
      </header>

      <main className="prof-main">
        <h2>Our Top Professionals</h2>
        <div className="prof-grid">
          {professionals.map((pro) => (
            <div className="prof-card" key={pro.name}>
              <div className="prof-img-container">
                <img src={pro.image} alt={pro.name} className="prof-avatar" />
              </div>
              <div className="prof-info">
                <h3>{pro.name}</h3>
                <p><strong>Profession:</strong> {pro.profession}</p>
                <p><strong>Qualification:</strong> {pro.qualification}</p>
                <p><strong>Price:</strong> {pro.price}</p>
              </div>
              <button className="book-btn" onClick={() => handleBooking(pro)}>
                Book Now
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="prof-footer">
        <p>© 2025 ProConnect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Professionals;
