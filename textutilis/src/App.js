// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import AudioUploader from './components/AudioUploader';
import About from './components/About';
import Alert from './components/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  // Show alert for a limited time
  const showAlert = (message, type = 'primary') => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 2500);
  };

  // Toggle light/dark theme
  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);

    document.body.style.background = newMode === 'light'
      ? 'linear-gradient(to right, #f8f9fa, #e0eafc)'
      : 'linear-gradient(to right, #141e30, #243b55)';

    showAlert(`Switched to ${newMode.charAt(0).toUpperCase() + newMode.slice(1)} Mode`, 'success');
  };

  // Optional: Persist mode using localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      setMode(savedMode);
      document.body.style.background = savedMode === 'dark'
        ? 'linear-gradient(to right, #141e30, #243b55)'
        : 'linear-gradient(to right, #f8f9fa, #e0eafc)';
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  return (
    <Router>
      <Navbar title="TextUtils 🔥" mode={mode} toggleMode={toggleMode} />

      <div className={`text-${mode === 'light' ? 'dark' : 'light'} min-vh-100`}>
        <div className="container py-4">

          {/* Alert Component */}
          {alert && (
            <Alert variant={alert.type} className="shadow-sm mb-3" onClose={() => setAlert(null)}>
              {alert.msg}
            </Alert>
          )}

          {/* Route Definitions */}
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="✨ Try TextUtils - Smart Text Toolbox"
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            />
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/audio" element={<AudioUploader showAlert={showAlert} mode={mode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
