import "./App.css";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/pages/about/About";
import Bank from "./components/pages/bank/Bank";
import Login from "./components/pages/login/Login";
import Home from "./components/pages/home/Home";
import SignUp from "./components/pages/signup/SignUp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      {/* <Main /> */}
    </div>
  );
}

export default App;
