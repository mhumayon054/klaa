// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Checkout from './pages/Checkout'; // Adjusted import path
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Your home component */}
        <Route path="/checkout" element={<Checkout />} /> {/* Route for the checkout page */}
      </Routes>
    </>
  );
};

export default App;
