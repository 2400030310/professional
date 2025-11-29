import React, { useState } from "react";
import { FaHome, FaUserTie, FaUsers, FaCalendarCheck, FaBell, FaUserCircle, FaTrash } from "react-icons/fa";

const initialProfessionals = [
  { id: 1, name: "Priya Sharma", profession: "Web Developer", qualification: "B.Tech (CSE)", experience: "3 years" },
  { id: 2, name: "Ravi Kumar", profession: "Electrician", qualification: "ITI Certified", experience: "5 years" },
];

const initialUsers = [
  { id: 1, name: "Neha Joshi", email: "neha@example.com" },
  { id: 2, name: "Amit Singh", email: "amit@example.com" },
];

const initialBookings = [
  { id: 1, user: "Neha Joshi", professional: "Priya Sharma", date: "2025-10-09", time: "10:00 AM" },
  { id: 2, user: "Amit Singh", professional: "Ravi Kumar", date: "2025-10-10", time: "11:00 AM" },
];

const AdminDashboard = () => {
  const [professionals, setProfessionals] = useState(initialProfessionals);
  const [users, setUsers] = useState(initialUsers);
  const [bookings, setBookings] = useState(initialBookings);
  const [newPro, setNewPro] = useState({ name: "", profession: "", qualification: "", experience: "" });

  const [showNotifications, setShowNotifications] = useState(false);
  const [activePage, setActivePage] = useState("home"); // track which page is active

  const handleProChange = (e) => {
    const { name, value } = e.target;
    setNewPro((prev) => ({ ...prev, [name]: value }));
  };

  const addProfessional = () => {
    if (!newPro.name || !newPro.profession) return alert("Fill all required fields!");
    setProfessionals([...professionals, { ...newPro, id: Date.now() }]);
    setNewPro({ name: "", profession: "", qualification: "", experience: "" });
  };

  const removeProfessional = (id) => setProfessionals(professionals.filter((pro) => pro.id !== id));
  const removeUser = (id) => setUsers(users.filter((user) => user.id !== id));

  // function to render the main content based on active page
  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <h2>Welcome to Admin Dashboard!</h2>;

      case "professionals":
        return (
          <section className="admin-section">
            <h2>Professionals</h2>
            <div className="add-professional">
              <input type="text" placeholder="Name" name="name" value={newPro.name} onChange={handleProChange} />
              <input type="text" placeholder="Profession" name="profession" value={newPro.profession} onChange={handleProChange} />
              <input type="text" placeholder="Qualification" name="qualification" value={newPro.qualification} onChange={handleProChange} />
              <input type="text" placeholder="Experience" name="experience" value={newPro.experience} onChange={handleProChange} />
              <button onClick={addProfessional}>Add</button>
            </div>

            <div className="card-list">
              {professionals.map((pro) => (
                <div className="card" key={pro.id}>
                  <p><strong>{pro.name}</strong></p>
                  <p>{pro.profession}</p>
                  <p>Qualification: {pro.qualification}</p>
                  <p>Experience: {pro.experience}</p>
                  <button onClick={() => removeProfessional(pro.id)}><FaTrash /></button>
                </div>
              ))}
            </div>
          </section>
        );

      case "users":
        return (
          <section className="admin-section">
            <h2>Users</h2>
            <div className="card-list">
              {users.map((user) => (
                <div className="card" key={user.id}>
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                  <button onClick={() => removeUser(user.id)}><FaTrash /></button>
                </div>
              ))}
            </div>
          </section>
        );

      case "bookings":
        return (
          <section className="admin-section">
            <h2>Bookings</h2>
            <div className="card-list">
              {bookings.map((b) => (
                <div className="card" key={b.id}>
                  <p><strong>User:</strong> {b.user}</p>
                  <p><strong>Professional:</strong> {b.professional}</p>
                  <p><strong>Date:</strong> {b.date}</p>
                  <p><strong>Time:</strong> {b.time}</p>
                </div>
              ))}
            </div>
          </section>
        );

      default:
        return <h2>Page Not Found</h2>;
    }
  };

  return (
    <div className="admin-dashboard">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Poppins', sans-serif; }
        .admin-dashboard { display: flex; min-height: 100vh; background: #f4f6f8; }

        /* Sidebar */
        .sidebar { width: 220px; background: #0a66c2; color: white; display: flex; flex-direction: column; padding: 30px 0; }
        .sidebar h2 { text-align: center; margin-bottom: 40px; font-size: 1.8rem; }
        .sidebar-item { display: flex; align-items: center; padding: 12px 20px; cursor: pointer; font-size: 1.05rem; transition: background 0.2s ease; }
        .sidebar-item:hover { background: #074a9a; }
        .sidebar-item svg { margin-right: 12px; font-size: 1.3rem; }
        .active-item { background: #074a9a; }

        /* Main content */
        .main-content { flex: 1; padding: 30px; }

        /* Top header */
        .top-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
        .top-header h1 { color: #0a66c2; }
        .top-icons { display: flex; align-items: center; gap: 20px; font-size: 1.4rem; color: #0a66c2; cursor: pointer; position: relative; }

        .notification-badge {
          position: absolute;
          top: -5px;
          right: -10px;
          background: #ef4444;
          color: white;
          border-radius: 50%;
          padding: 2px 6px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .notifications-dropdown {
          position: absolute;
          top: 30px;
          right: 0;
          background: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          width: 250px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          z-index: 10;
        }

        .notifications-dropdown p {
          padding: 10px;
          border-bottom: 1px solid #eee;
          font-size: 0.9rem;
        }

        .notifications-dropdown p:last-child { border-bottom: none; }

        /* Sections */
        .admin-section { background: white; border-radius: 12px; padding: 20px; margin-bottom: 30px; box-shadow: 0 3px 12px rgba(0,0,0,0.08); }
        .admin-section h2 { margin-bottom: 20px; color: #0a66c2; font-size: 1.4rem; border-bottom: 2px solid #0a66c2; padding-bottom: 6px; }

        .add-professional { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px; }
        .add-professional input { padding: 10px; border: 1px solid #93c5fd; border-radius: 6px; flex: 1; min-width: 150px; outline: none; }
        .add-professional input:focus { border-color: #0a66c2; }
        .add-professional button { background: #0a66c2; color: white; border: none; border-radius: 6px; padding: 10px 15px; cursor: pointer; font-weight: 600; transition: background 0.2s ease; }
        .add-professional button:hover { background: #074a9a; }

        .card-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
        .card { background: #f0f4ff; padding: 15px; border-radius: 12px; position: relative; transition: transform 0.2s ease, box-shadow 0.3s ease; }
        .card:hover { transform: translateY(-4px); box-shadow: 0 6px 18px rgba(0,0,0,0.12); }
        .card p { margin: 6px 0; color: #0a66c2; }
        .card button { position: absolute; top: 10px; right: 10px; background: #ef4444; border: none; color: white; border-radius: 6px; padding: 5px 8px; cursor: pointer; transition: background 0.2s ease; }
        .card button:hover { background: #b91c1c; }

        @media (max-width: 768px) { .admin-dashboard { flex-direction: column; } .sidebar { width: 100%; flex-direction: row; overflow-x: auto; } .sidebar-item { flex: 1; justify-content: center; } }
      `}</style>

      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <div className={`sidebar-item ${activePage === "home" ? "active-item" : ""}`} onClick={() => setActivePage("home")}><FaHome /> Home</div>
        <div className={`sidebar-item ${activePage === "professionals" ? "active-item" : ""}`} onClick={() => setActivePage("professionals")}><FaUserTie /> Professionals</div>
        <div className={`sidebar-item ${activePage === "users" ? "active-item" : ""}`} onClick={() => setActivePage("users")}><FaUsers /> Users</div>
        <div className={`sidebar-item ${activePage === "bookings" ? "active-item" : ""}`} onClick={() => setActivePage("bookings")}><FaCalendarCheck /> Bookings</div>
      </div>

      {/* Main content */}
      <div className="main-content">
        <div className="top-header">
          <h1>Dashboard</h1>
          <div className="top-icons">
            <div style={{ position: "relative" }} onClick={() => setShowNotifications(!showNotifications)}>
              <FaBell />
              {bookings.length > 0 && <span className="notification-badge">{bookings.length}</span>}
              {showNotifications && (
                <div className="notifications-dropdown">
                  {bookings.map((b) => (
                    <p key={b.id}>{b.user} booked {b.professional} on {b.date}</p>
                  ))}
                </div>
              )}
            </div>
            <FaUserCircle />
          </div>
        </div>

        {/* Render page content */}
        {renderPage()}
      </div>
    </div>
  );
};

export default AdminDashboard;
