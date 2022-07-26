import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';

function App() {
  
  const user = JSON.parse(localStorage.getItem("user"));
  
  return (
    <div className="App">
      {user ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;
