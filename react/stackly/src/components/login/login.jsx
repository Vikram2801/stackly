import { useState } from "react";
import "./login.css";
function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Empty field validation
    if (!username || !password) {
      setError("Please enter username and password.");
      return;
    }

    // Check static credentials
    const loginSuccess = onLogin(username, password);
    if (!loginSuccess) {
      setError("Invalid username or password.");
      return;
    }
    // Clear error after successful login
    setError("");
  };
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-icon">🔐</div>
        <div className="login-heading">
          <p>AUTHENTICATION</p>
          <h2>Welcome Back</h2>
          <span>Login to access your home dashboard</span>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          {/* Password */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          {/* Error */}
          {error && <p className="login-error">⚠ {error}</p>}
          {/* Login Button */}
          <button type="submit" className="login-button">
            Login
            <span>→</span>
          </button>
        </form>
        {/* Static Login Details */}
        <div className="demo-credentials">
          <p>Demo Credentials</p>
          <div>
            <span>Username</span>
            <strong>vikram</strong>
          </div>
          <div>
            <span>Password</span>
            <strong>12345</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
