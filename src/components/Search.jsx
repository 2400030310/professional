import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import "../styles/Search.css";

const SearchServicesPage = () => {
  const navigate = useNavigate(); // ✅ initialize navigate

  const professionals = [
    {
      name: "Priya Sharma",
      profession: "Web Developer",
      qualification: "B.Tech (CSE)",
      rating: 4.9,
      price: "₹1500/hr",
      image: "https://randomuser.me/api/portraits/women/18.jpg",
    },
    {
      name: "Ravi Kumar",
      profession: "Electrician",
      qualification: "ITI Certified",
      rating: 4.7,
      price: "₹700/visit",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: "Anjali Patel",
      profession: "Graphic Designer",
      qualification: "BFA",
      rating: 4.8,
      price: "₹1800/hr",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Neha Joshi",
      profession: "Math Tutor",
      qualification: "MSc Math",
      rating: 4.9,
      price: "₹1200/hr",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
    },
  ];

  const [query, setQuery] = useState("");

  const filteredProfessionals = professionals.filter(
    (pro) =>
      pro.profession.toLowerCase().includes(query.toLowerCase()) ||
      pro.name.toLowerCase().includes(query.toLowerCase())
  );

  // ✅ handle booking navigation
  const handleBooking = (pro) => {
    navigate(`/booking/${encodeURIComponent(pro.name)}`, {
      state: { professional: pro }, // pass full professional object
    });
  };

  return (
    <div className="search-page">
      <header className="search-header">
        <div className="logo">ProConnect</div>
        <nav className="nav">
          <a href="/" className="nav-link">Home</a>
          <a href="/search" className="nav-link active">Search</a>
          <a href="/professionals" className="nav-link">Professionals</a>
          <a href="/support" className="nav-link">Support</a>
        </nav>
        <div className="auth">
          <a href="/login" className="btn btn-outline">Log In</a>
          <a href="/signup" className="btn btn-primary">Sign Up</a>
        </div>
      </header>

      <section className="hero">
        <h1>Search for Services</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Type service you need..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button>Search</button>
        </div>
      </section>

      {query && (
        <section className="results">
          <h2>
            Results for <span className="highlight">“{query}”</span>
          </h2>
          <div className="results-grid">
            {filteredProfessionals.length > 0 ? (
              filteredProfessionals.map((pro) => (
                <div className="pro-card" key={pro.name}>
                  <img src={pro.image} alt={pro.name} className="avatar" />
                  <h3>{pro.name}</h3>
                  <p className="profession">{pro.profession}</p>
                  <p><b>Qualification:</b> {pro.qualification}</p>
                  <p><b>Rating:</b> {pro.rating} ★★★★★</p>
                  <p><b>Price:</b> {pro.price}</p>
                  {/* ✅ Book Now button navigates to booking page */}
                  <button className="book-btn" onClick={() => handleBooking(pro)}>
                    Book Now
                  </button>
                </div>
              ))
            ) : (
              <p className="no-results">No professionals found.</p>
            )}
          </div>
        </section>
      )}

      <footer className="footer">
        <p>© 2025 ProConnect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SearchServicesPage;

