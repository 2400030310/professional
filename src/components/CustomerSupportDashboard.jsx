// CustomerSupportDashboard.jsx
import React, { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const ticketsData = [
  { id: 1, user: "Priya Sharma", issue: "Cannot login to account", status: "Pending" },
  { id: 2, user: "Ravi Kumar", issue: "Payment not reflecting", status: "Resolved" },
  { id: 3, user: "Anjali Patel", issue: "Booking confirmation not received", status: "Pending" },
  { id: 4, user: "Neha Joshi", issue: "Profile update error", status: "Pending" },
  { id: 5, user: "Karan Mehta", issue: "Subscription cancellation issue", status: "Resolved" },
  { id: 6, user: "Sneha Rao", issue: "Unable to upload documents", status: "Pending" },
];

const CustomerSupportDashboard = () => {
  const [tickets, setTickets] = useState(ticketsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleStatusChange = (e) => setStatusFilter(e.target.value);

  const handleResolve = (id) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id ? { ...ticket, status: "Resolved" } : ticket
      )
    );
  };

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.issue.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" ? true : ticket.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="support-dashboard">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Poppins', sans-serif; }

        .support-dashboard { padding: 30px; background: #f4f6f8; min-height: 100vh; }

        .support-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .support-header h1 {
          color: #0a66c2;
          font-size: 2rem;
          margin-bottom: 5px;
        }

        .support-header p {
          color: #555;
          font-size: 1rem;
        }

        .filters {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .filters input {
          padding: 10px 15px;
          border: 1px solid #93c5fd;
          border-radius: 8px;
          outline: none;
          width: 250px;
          font-size: 1rem;
        }

        .filters input:focus { border-color: #0a66c2; }

        .filters select {
          padding: 10px 15px;
          border-radius: 8px;
          border: 1px solid #93c5fd;
          outline: none;
          font-size: 1rem;
        }

        .tickets-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .ticket-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.08);
          transition: transform 0.2s ease, box-shadow 0.3s ease;
          position: relative;
        }

        .ticket-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.12);
        }

        .ticket-card h3 {
          color: #0a66c2;
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .ticket-card p {
          margin-bottom: 8px;
          color: #333;
        }

        .ticket-card button {
          background: #0a66c2;
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.2s ease;
          position: absolute;
          bottom: 15px;
          right: 15px;
        }

        .ticket-card button:hover { background: #074a9a; }

        .no-tickets {
          text-align: center;
          color: #555;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .filters { flex-direction: column; gap: 10px; }
        }
      `}</style>

      <header className="support-header">
        <h1>Customer Support Dashboard</h1>
        <p>Manage tickets and assist users efficiently</p>
      </header>

      <div className="filters">
        <input
          type="text"
          placeholder="Search tickets..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={statusFilter} onChange={handleStatusChange}>
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      <div className="tickets-grid">
        {filteredTickets.length > 0 ? (
          filteredTickets.map((ticket) => (
            <div className="ticket-card" key={ticket.id}>
              <h3>{ticket.user}</h3>
              <p><strong>Issue:</strong> {ticket.issue}</p>
              <p><strong>Status:</strong> {ticket.status}</p>
              {ticket.status === "Pending" && (
                <button onClick={() => handleResolve(ticket.id)}>Mark Resolved</button>
              )}
            </div>
          ))
        ) : (
          <p className="no-tickets">No tickets found.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerSupportDashboard;
