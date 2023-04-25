import React, { useState } from "react";
import "./auth.css";
import { signUpUser } from "../../../services/signUpServiceApi";

function SignUp() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Name:", name);
    // console.log("Surname:", surname);
    // console.log("Email:", email);
    // console.log("Password:", password);

    // add logic to handle the sign-up process here
    signUpUser(name, surname, email, password)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <div className="auth-container">
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-input">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="auth-input">
            <label htmlFor="surname">Surname:</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={surname}
              onChange={handleSurnameChange}
            />
          </div>
          <div className="auth-input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="auth-input">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="auth-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
