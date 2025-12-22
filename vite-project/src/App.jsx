
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import UpsideDown from './pages/UpsideDown';
import './App.css';

function App() {
  return (
    <Router>
      {/* Navbar visible on all pages, unless you want to hide it on UpsideDown. 
          Let's keep it but maybe conditional logic if needed. 
          For now, simplistic approach: Always show. */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/upsidedown" element={<UpsideDown />} />
      </Routes>
    </Router>
  );
}

export default App;
