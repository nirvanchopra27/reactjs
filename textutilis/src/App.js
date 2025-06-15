import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      {/* Stylish Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">TextUtils</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

// 🏠 Home Page Component
function Home() {
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Enter your text below</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="textBox"
          rows="8"
          placeholder="Type or paste your text here..."
        ></textarea>
      </div>

      <button className="btn btn-success me-2" onClick={() => alert('Uppercase feature coming soon')}>
        Convert to UPPERCASE
      </button>
      <button className="btn btn-warning me-2" onClick={() => alert('Lowercase feature coming soon')}>
        Convert to lowercase
      </button>

      <div className="mt-4">
        <h4>Your Text Summary</h4>
        <p>Words: 0 | Characters: 0</p>
        <p>Estimated Reading Time: 0 minutes</p>
      </div>
    </div>
  );
}

// ℹ️ About Page Component
function About() {
  return (
    <div className="container mt-5">
      <h2>About TextUtils</h2>
      <p className="lead">
        TextUtils is a utility web app built using React and Bootstrap. It allows users to perform basic text transformations like converting to uppercase or lowercase, and provides real-time word and character counts.
      </p>
      <p>Created by Nirvan. 🚀</p>
    </div>
  );
}

export default App;
