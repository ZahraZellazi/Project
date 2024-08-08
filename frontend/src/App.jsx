import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Sidebar">
        <Sidebar />
      </div>
      <div className="Dashboard">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
