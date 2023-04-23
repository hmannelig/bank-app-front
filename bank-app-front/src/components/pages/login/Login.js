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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    // Add login logic here
  };

  return (
    <div>
      <h1>Enter your details to login.</h1>
      <form onSubmit={handleFormSubmit} className="login-form">
        <label className="form-label">
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-input"
          />
        </label>
        <button type="submit" className="form-button">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
