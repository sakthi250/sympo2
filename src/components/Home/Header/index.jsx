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
        <img className="website-logo" src="fin.png" alt="website logo" onClick={() => navigate("/")} />

        {/* Hamburger Menu */}
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-link" onClick={() => navigate("/")}>
            Home
          </li>
          <li className="nav-link" onClick={() => navigate("/events")}>
            Events
          </li>
          <li className="nav-link" onClick={() => navigate("/contact")}>
            Contact Us
          </li>
          <li className="nav-link" onClick={() => navigate("/about")}>
            About Us
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
