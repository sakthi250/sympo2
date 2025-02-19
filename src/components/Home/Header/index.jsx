import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-header sticky-top">
      <div className="nav-content">
        <img
          className="website-logo"
          src="logo.svg"
          alt="website logo"
          onClick={() => {
            navigate("/");
          }}
        />

        {/* Hamburger Menu */}
        <div className="menu-toggle me-3" onClick={toggleMenu}>
          {isOpen ? "X" : "☰"}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li
            className="nav-link"
            onClick={() => {
              toggleMenu();
              navigate("/");
              window.scrollTo(0, 0); 
            }}
          >
            Home
          </li>
          <li
            className="nav-link"
            onClick={() => {
              toggleMenu();
              navigate("/events");
              window.scrollTo(0, 0); 
            }}
          >
            Events
          </li>
          <li
            className="nav-link"
            onClick={() => {
              toggleMenu();
              navigate("/contact");
              window.scrollTo(0, 0); 
            }}
          >
            Contact Us
          </li>
          <li
            className="nav-link"
            onClick={() => {
              toggleMenu();
              navigate("/about");
              window.scrollTo(0, 0); 
            }}
          >
            About Us
          </li>
          <li className="nav-link">
            <a
              href="https://forms.gle/VSGMukPKj6oRudyP8"
              className="nav-link m-0 p-0"
            >
              Register Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
