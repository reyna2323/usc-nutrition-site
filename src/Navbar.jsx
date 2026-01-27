import logo from "./assets/logo.jpg";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <img src={logo} alt="USC Nutrition Club logo" className="logo" />
      </div>

      <nav className="nav-links">
        <a href="#">Home</a>
        <span className="divider"></span>
        <a href="#">About Us</a>
        <span className="divider"></span>
        <a href="#">Events</a>
        <span className="divider"></span>
        <a href="#">Blog</a>
        <span className="divider"></span>
        <a href="#">Contact Us</a>
      </nav>

      <div className="nav-search">
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
}