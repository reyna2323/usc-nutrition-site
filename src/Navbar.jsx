import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";
import "./style.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <img src={logo} alt="USC Nutrition Club logo" className="logo" />
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <span className="divider"></span>
        <Link to="/about">About Us</Link>
        <span className="divider"></span>
        <Link to="#">Events</Link>
        <span className="divider"></span>
        <Link to="#">Blog</Link>
        <span className="divider"></span>
        <Link to="#">Contact Us</Link>
      </nav>

      <div className="nav-search">
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
}