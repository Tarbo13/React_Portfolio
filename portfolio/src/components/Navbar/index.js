import React from "react";
import { Link } from "react-router-dom";
import "./styleN.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Ben Robinson
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/contact" || window.location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;

