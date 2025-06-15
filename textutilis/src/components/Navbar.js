import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ title, mode, toggleMode }) {
  const location = useLocation();

  return (
    <nav className={`navbar navbar-expand-lg ${mode === "light" ? "navbar-light bg-light" : "navbar-dark bg-dark"} shadow`}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">{title || "TextUtils"}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-pills">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/audio" ? "active" : ""}`} to="/audio">Audio</Link>
            </li>
          </ul>
          {/* Theme Switch */}
          <div className="form-check form-switch text-nowrap">
            <input
              className="form-check-input"
              type="checkbox"
              id="modeToggle"
              onChange={toggleMode}
              checked={mode === "dark"}
            />
            <label className={`form-check-label text-${mode === "light" ? "dark" : "light"}`} htmlFor="modeToggle">
              {mode === "light" ? "Light Mode" : "Dark Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
