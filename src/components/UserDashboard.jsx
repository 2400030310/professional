import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UserDashboard.css";

const professionalsData = [
  { name: "Priya Sharma", profession: "Web Developer", qualification: "B.Tech (CSE)", experience: "3 years", image: "https://randomuser.me/api/portraits/women/18.jpg" },
  { name: "Ravi Kumar", profession: "Electrician", qualification: "ITI Certified", experience: "5 years", image: "https://randomuser.me/api/portraits/men/22.jpg" },
  { name: "Anjali Patel", profession: "Graphic Designer", qualification: "BFA", experience: "4 years", image: "https://randomuser.me/api/portraits/women/45.jpg" },
  { name: "Neha Joshi", profession: "Math Tutor", qualification: "MSc Math", experience: "6 years", image: "https://randomuser.me/api/portraits/women/33.jpg" },
  { name: "Rahul Mehta", profession: "Plumber", qualification: "Certified Technician", experience: "7 years", image: "https://randomuser.me/api/portraits/men/31.jpg" },
  { name: "Sneha Reddy", profession: "Content Writer", qualification: "MA English", experience: "5 years", image: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Amit Verma", profession: "Photographer", qualification: "Diploma in Photography", experience: "8 years", image: "https://randomuser.me/api/portraits/men/42.jpg" },
  { name: "Divya Kapoor", profession: "Makeup Artist", qualification: "Certified Beautician", experience: "6 years", image: "https://randomuser.me/api/portraits/women/19.jpg" },
  { name: "Karan Singh", profession: "Fitness Trainer", qualification: "B.Sc (Sports Science)", experience: "4 years", image: "https://randomuser.me/api/portraits/men/55.jpg" },
  { name: "Meera Iyer", profession: "Psychologist", qualification: "M.A. Psychology", experience: "5 years", image: "https://randomuser.me/api/portraits/women/44.jpg" },
];

const UserDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredProfessionals = professionalsData.filter(
    (pro) =>
      pro.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pro.profession.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBooking = (pro) => {
    navigate(`/booking/${encodeURIComponent(pro.name)}`, { state: { professional: pro } });
  };

  return (
    <div className="user-dashboard">
      <header className="user-header">
        <h1>Welcome, User 👋</h1>
        <p>Find and connect with trusted professionals easily</p>
      </header>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search for professionals (e.g., Web Developer)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="professional-list">
        {filteredProfessionals.length > 0 ? (
          filteredProfessionals.map((pro) => (
            <div className="professional-card" key={pro.name}>
              <img src={pro.image} alt={pro.name} className="pro-img" />
              <div className="pro-details">
                <h3>{pro.name}</h3>
                <p><strong>Profession:</strong> {pro.profession}</p>
                <p><strong>Qualification:</strong> {pro.qualification}</p>
                <p><strong>Experience:</strong> {pro.experience}</p>
                <button className="book-btn" onClick={() => handleBooking(pro)}>Book Now</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No professionals found for "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
