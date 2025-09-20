import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Biosecurity from './components/Biosecurity';
import Health from './components/Health';
import Alerts from './components/Alerts';
import Guidelines from './components/Guidelines';
import Monitoring from './components/Monitoring';

function App(){
  return (
    <div>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/biosecurity" element={<Biosecurity />} />
          <Route path="/health" element={<Health />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/monitoring" element={<Monitoring />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
