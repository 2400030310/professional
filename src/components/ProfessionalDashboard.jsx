import React, { useState } from "react";

const ProfessionalDashboard = () => {
  const [profile] = useState({
    name: "Priya Sharma",
    profession: "Web Developer",
    qualification: "B.Tech (CSE)",
    experience: "3 years",
    email: "priya@example.com",
    phone: "+91 9876543210",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
  });

  const [bookings, setBookings] = useState([
    { id: 1, user: "Neha Joshi", date: "2025-10-10", time: "10:00 AM", notes: "Urgent task", status: "Pending" },
    { id: 2, user: "Ravi Kumar", date: "2025-10-12", time: "2:00 PM", notes: "Project discussion", status: "Confirmed" },
  ]);

  const [portfolio] = useState([
    { 
      id: 1, 
      title: "Website Project", 
      description: "Developed a responsive e-commerce website with a modern UI and animations.", 
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: 2, 
      title: "App Design", 
      description: "Designed a sleek and intuitive mobile app for user engagement.", 
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
    },
  ]);

  const handleStatusChange = (id, status) => {
    setBookings(bookings.map(b => (b.id === id ? { ...b, status } : b)));
  };

  return (
    <div style={styles.dashboard}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Welcome, {profile.name}</h1>
        <p style={styles.headerSubtitle}>{profile.profession}</p>
      </header>

      {/* Profile Section */}
      <section style={styles.profileSection}>
        <div style={styles.profileCard}>
          <img src={profile.image} alt={profile.name} style={styles.profileImg} />
          <div style={styles.profileDetails}>
            <p><strong>Qualification:</strong> {profile.qualification}</p>
            <p><strong>Experience:</strong> {profile.experience}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Phone:</strong> {profile.phone}</p>
          </div>
        </div>
      </section>

      {/* Bookings Section */}
      <section style={styles.bookingsSection}>
        <h2 style={styles.sectionTitle}>Upcoming Bookings</h2>
        {bookings.length === 0 ? (
          <p>No bookings yet</p>
        ) : (
          bookings.map(b => (
            <div key={b.id} style={styles.bookingCard}>
              <p><strong>User:</strong> {b.user}</p>
              <p><strong>Date:</strong> {b.date}</p>
              <p><strong>Time:</strong> {b.time}</p>
              <p><strong>Notes:</strong> {b.notes}</p>
              <p><strong>Status:</strong> 
                <span style={{
                  color: b.status === "Confirmed" ? "#0077b6" : b.status === "Completed" ? "green" : "#ffb703",
                  marginLeft: 8,
                  fontWeight: "500"
                }}>{b.status}</span>
              </p>
              <div style={styles.statusButtons}>
                {b.status !== "Confirmed" && (
                  <button style={{ ...styles.button, backgroundColor: "#0077b6" }}
                    onClick={() => handleStatusChange(b.id, "Confirmed")}>
                    Confirm
                  </button>
                )}
                {b.status !== "Completed" && (
                  <button style={{ ...styles.button, backgroundColor: "#023e8a" }}
                    onClick={() => handleStatusChange(b.id, "Completed")}>
                    Complete
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </section>

      {/* Portfolio Section */}
      <section style={styles.portfolioSection}>
        <h2 style={styles.sectionTitle}>Portfolio</h2>
        <div style={styles.portfolioGrid}>
          {portfolio.map(item => (
            <div key={item.id} style={styles.portfolioCard}>
              <img src={item.image} alt={item.title} style={styles.portfolioImg} />
              <div style={styles.portfolioText}>
                <h3 style={styles.portfolioTitle}>{item.title}</h3>
                <p style={styles.portfolioDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// 🌈 Enhanced Blue-Themed Styles
const styles = {
  dashboard: {
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(135deg, #dceeff 0%, #f8fbff 100%)",
    minHeight: "100vh",
    padding: "30px",
    color: "#1a1a1a",
  },
  header: {
    background: "linear-gradient(90deg, #0077b6, #0096c7)",
    color: "white",
    padding: "40px 25px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    marginBottom: "50px",
  },
  headerTitle: {
    margin: 0,
    fontSize: "2.2rem",
    fontWeight: "600",
  },
  headerSubtitle: {
    marginTop: "5px",
    fontSize: "1.1rem",
    opacity: 0.95,
  },
  profileSection: {
    marginBottom: "40px",
  },
  profileCard: {
    background: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(10px)",
    borderRadius: "15px",
    padding: "25px",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  profileCardHover: {
    transform: "scale(1.02)",
    boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
  },
  profileImg: {
    borderRadius: "50%",
    width: "130px",
    height: "130px",
    marginRight: "25px",
    border: "4px solid #0077b6",
  },
  profileDetails: {
    lineHeight: "1.8",
  },
  bookingsSection: {
    marginBottom: "50px",
  },
  sectionTitle: {
    fontSize: "1.6rem",
    color: "#023e8a",
    fontWeight: "600",
    marginBottom: "20px",
  },
  bookingCard: {
    background: "white",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
    borderLeft: "5px solid #0077b6",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  statusButtons: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  button: {
    border: "none",
    color: "white",
    padding: "8px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
    transition: "background 0.3s ease, transform 0.2s ease",
  },
  portfolioSection: {
    marginBottom: "40px",
  },
  portfolioGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "25px",
  },
  portfolioCard: {
    background: "white",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  portfolioImg: {
    width: "100%",
    height: "170px",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  portfolioText: {
    padding: "15px",
  },
  portfolioTitle: {
    color: "#0077b6",
    marginBottom: "8px",
    fontSize: "1.1rem",
    fontWeight: "600",
  },
  portfolioDesc: {
    fontSize: "0.95rem",
    color: "#555",
  },
};

export default ProfessionalDashboard;
