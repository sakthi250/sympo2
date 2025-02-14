import React from "react";
import "./Ticket.css"; // Import the separate CSS file

const Ticket = () => {
  return (
      
        <div className="ticket col-4 vis">
            <a  href="https://forms.gle/VSGMukPKj6oRudyP8">
          <div className="ticket-border">
            <div className="ticket-content">
              <h2 className="ticket-title">Retro Movie Ticket</h2>
              <p className="ticket-text">REGISTER NOW</p>
              <p className="ticket-date">Admit One | 2025</p>
            </div>
          </div>
          </a>
        </div>

  );
};

export default Ticket;
