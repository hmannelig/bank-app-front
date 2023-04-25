import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import About from "./pages/about/About";
import Bank from "./pages/bank/Bank";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import SignUp from "./pages/auth/SignUp";

function Main() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/home" className="custom-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="custom-link">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="custom-link">
              Sign-up
            </Link>
          </li>
          <li>
            <Link to="/bank" className="custom-link">
              Bank
            </Link>
          </li>
          <li>
            <Link to="/about" className="custom-link">
              About
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/bank" element={<Bank />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
