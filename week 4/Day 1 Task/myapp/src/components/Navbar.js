import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">React<span>Routes</span></div>

      <div className="nav-links">
        <NavLink to="/" end className="link">
          Home
        </NavLink>

        <NavLink to="/about" className="link">
          About
        </NavLink>

        <NavLink to="/contact" className="link">
          Contact
        </NavLink>

        <NavLink to="/dashboard" className="link">
          Dashboard
        </NavLink>

        <NavLink to="/post/101" className="link">
          Sample Post
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
