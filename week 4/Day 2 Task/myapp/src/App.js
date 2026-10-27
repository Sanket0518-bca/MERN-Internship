
import { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app ${theme}`}>
        <Navbar />

        <main className="main-content">
          <p className="tag">WEEK 4 · DAY 2 TASK</p>
          <h1>React Theme Switcher</h1>

          <p className="description">
            Welcome to my React application! Use the button above
            to switch between Light Mode and Dark Mode.
          </p>

          <div className="content-card">
            <div className="icon-circle">
              {theme === "light" ? "☀️" : "🌙"}
            </div>

            <h2>
              {theme === "light"
                ? "Light Theme Active"
                : "Dark Theme Active"}
            </h2>

            <p>
              Current theme: <strong>{theme}</strong>
            </p>

            <p>
              {theme === "light"
                ? "Enjoy the clean and bright appearance."
                : "Enjoy the comfortable dark appearance."}
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature">
              <span>⚛️</span>
              <h3>React Context</h3>
              <p>Share theme across components.</p>
            </div>

            <div className="feature">
              <span>🎨</span>
              <h3>Global Styling</h3>
              <p>Change the whole page theme.</p>
            </div>

            <div className="feature">
              <span>💾</span>
              <h3>Saved Preference</h3>
              <p>Your theme stays after refresh.</p>
            </div>
          </div>
        </main>

        <footer className="footer">
          Made with React Context API | Week 4 - Day 2
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
