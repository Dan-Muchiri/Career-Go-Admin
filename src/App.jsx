import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar"
import Dashboard from "./components/Dashboard"
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div id="main">
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/dashboard/*" element={<Dashboard />} /> 
        </Routes>
      </div>
    </Router>
  )
}

export default App
