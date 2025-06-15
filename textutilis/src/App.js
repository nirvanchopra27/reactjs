// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/Textform'; // ✅ import TextForm

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TextForm />} /> {/* ✅ use TextForm */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
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
