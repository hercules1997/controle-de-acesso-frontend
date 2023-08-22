import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css'; // Importe seus estilos
import App from './App';
import AdminPage from './components/AdminPage';
import SecurityPage from './components/SecurityPage';
import ObserverPage from './components/ObserverPage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/security" element={<SecurityPage />} />
      <Route path="/observer" element={<ObserverPage />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
