import "./Login.css";

import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    // Add login logic here
  };

  return (
    <div>
      <h2>Enter your details to login</h2>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-input">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="login-input">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="form-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
