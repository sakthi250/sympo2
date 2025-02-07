import { useNavigate } from "react-router-dom";
import "./index.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <img className="website-logo" src="logo.png" alt="website logo" />

        <ul className="nav-menu">
          <li className="nav-link" onClick={() => navigate("/")}>
            Home
          </li>
          <li className="nav-link" onClick={() => navigate("/events")}>
            Events
          </li>
          <li className="nav-link">Contact Us</li>
          <li className="nav-link">About Us</li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
