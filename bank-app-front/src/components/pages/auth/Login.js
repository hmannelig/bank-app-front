import "./auth.css";
import { handleLogin } from "../../../services/loginServiceApi";

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

    // Add login logic here
    handleLogin(`${username}`, `${password}`)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Enter your details to login</h2>
      <div className="auth-container">
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-input">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="auth-input">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="auth-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
