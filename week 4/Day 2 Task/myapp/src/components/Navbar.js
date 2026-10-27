
import { useContext } from "react";
import ThemeContext from "../ThemeContext";
import "./Navbar.css";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <nav className="navbar">
      <div className="brand">
        Theme<span>Switch</span>
      </div>

      <div className="nav-right">
        <span className="current-theme">
          {theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </span>

        <button
          className="theme-button"
          onClick={toggleTheme}
        >
          {theme === "light" ? "🌙 Dark Theme" : "☀️ Light Theme"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
