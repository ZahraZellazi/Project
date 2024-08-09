import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header /> {/* Independent Header */}
      <div className="main-content">
        <div className="Sidebar">
          <Sidebar />
        </div>
        <div className="Dashboard">
          <Dashboard />
        </div>
      </div>
      <Footer /> {/* Footer */}
    </div>
  );
}

export default App;
