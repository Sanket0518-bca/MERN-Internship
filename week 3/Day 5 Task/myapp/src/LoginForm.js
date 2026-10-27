import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() !== "") {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="login-container">
      {!isLoggedIn ? (
        <form className="login-card" onSubmit={handleSubmit}>
          <div className="login-icon">👋</div>

          <h2>Login Form</h2>
          <p className="subtitle">
            Enter your username to continue
          </p>

          <label htmlFor="username">Username</label>

          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <button type="submit">Login</button>

          <p className="hint">Please enter your name to log in.</p>
        </form>
      ) : (
        <div className="welcome-card">
          <div className="success-icon">✓</div>
          <h2>Welcome, {username}!</h2>
          <p>You have successfully logged in.</p>

          <button onClick={() => {
            setIsLoggedIn(false);
            setUsername("");
          }}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
