import logo from "./logo.svg";
import "./App.css";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Main from "./components/Main";
import About from "./components/pages/about/About";
import Bank from "./components/pages/bank/Bank";
import Login from "./components/pages/login/Login";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Select option</h2>
        <BrowserRouter>
          <nav>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/bank">Bank</Link>
            </li>
          </nav>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bank" element={<Bank />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </header>
      {/* <Main /> */}
    </div>
  );
}

export default App;
