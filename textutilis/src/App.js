// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import AudioUploader from './components/AudioUploader';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Your custom styles

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 2500);
  };

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.body.style.background = newMode === 'light'
      ? 'linear-gradient(to right, #f8f9fa, #e0eafc)'
      : 'linear-gradient(to right, #141e30, #243b55)';
    showAlert(`Switched to ${newMode.charAt(0).toUpperCase() + newMode.slice(1)} Mode`, 'success');
  };

  return (
    <Router>
      <Navbar title="TextUtils 🔥" mode={mode} toggleMode={toggleMode} />
      <div className={`text-${mode === 'light' ? 'dark' : 'light'} min-vh-100 fade-in`}>
        <div className="container py-4">
          {alert && (
            <div className={`alert alert-${alert.type} alert-dismissible fade show shadow`} role="alert">
              {alert.msg}
            </div>
          )}

          <Routes>
            <Route path="/" element={<TextForm heading="✨ Try TextUtils - Smart Text Toolbox" showAlert={showAlert} mode={mode} />} />
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/audio" element={<AudioUploader showAlert={showAlert} mode={mode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
