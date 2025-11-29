import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProConnectPage.css";
import { FaRobot } from "react-icons/fa";

// Mock translation function (for demonstration)
const translate = (text, lang) => {
  const translations = {
    es: `ES: ${text}`, // Spanish mock
    fr: `FR: ${text}`, // French mock
    hi: `HI: ${text}`, // Hindi mock
    de: `DE: ${text}`, // German mock
  };
  return translations[lang] || text;
};

const ProConnectPage = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [language, setLanguage] = useState("en"); // default English

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { from: "user", text: input }]);

    // Bot response in selected language
    const botResponse = translate(`You said: "${input}". Our team will assist you shortly.`, language);
    setMessages((prev) => [...prev, { from: "bot", text: botResponse }]);

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="proconnect-container">
      {/* Header / Hero Section */}
      <header className="proconnect-header">
        <div className="hero-text">
          <h1>Welcome to ProConnect</h1>
          <p>Find and hire top professionals instantly for any service you need.</p>
          <div className="navigation-buttons">
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/signup" className="btn btn-primary">Signup</Link>
            <Link to="/search" className="btn btn-primary">Search</Link>
            <Link to="/professionals" className="btn btn-primary">Professionals</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="intro">
          <h2>Why Choose ProConnect?</h2>
          <p>
            We connect you with verified professionals, ensure easy booking, and provide secure payments for a seamless experience.
          </p>
        </section>
      </main>

      <footer>
        <p>© 2025 ProConnect. All rights reserved.</p>
      </footer>

      {/* Floating AI Chat Button */}
      <div 
        className="chatbot-toggle" 
        onClick={() => setChatOpen((prev) => !prev)}
        title="Chat with AI Assistant"
      >
        <FaRobot />
      </div>

      {/* AI Chatbox */}
      <div className={`chatbox ${chatOpen ? "active" : ""}`}>
        <div className="chatbox-header">
          AI Assistant
          <select
            className="language-selector"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="hi">हिन्दी</option>
            <option value="de">Deutsch</option>
          </select>
          <button onClick={() => setChatOpen(false)}>×</button>
        </div>
        <div className="chatbox-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.from === "user" ? "user" : "bot"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chatbox-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ProConnectPage;
