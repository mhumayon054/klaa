// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <CartProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Your home component */}
        <Route path="/checkout" element={<Checkout />} /> {/* Route for the checkout page */}
      </Routes>
    </CartProvider>
  );
};

export default App;
