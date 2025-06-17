// src/components/GlobalAlert.js
import React, { createContext, useContext, useState } from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// ✅ Context Setup
const AlertContext = createContext();

export const useAlert = () => useContext(AlertContext);

// ✅ Provider + Alert Display Component
const GlobalAlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type = 'primary') => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 2500);
  };

  const closeAlert = () => setAlert(null);

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {/* 🔔 Alert Display */}
      {alert && (
        <div className="container mt-3">
          <BootstrapAlert
            variant={alert.type}
            onClose={closeAlert}
            dismissible
            className="shadow-sm fade show"
          >
            {alert.msg}
          </BootstrapAlert>
        </div>
      )}
      {children}
    </AlertContext.Provider>
  );
};

export default GlobalAlertProvider;
