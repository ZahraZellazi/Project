import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
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
      <ToastContainer /> {/* Add ToastContainer for Toastify notifications */}
    </div>
  );
}

export default App;
