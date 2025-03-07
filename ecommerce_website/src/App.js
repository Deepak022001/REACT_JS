import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ProductCatalogue from './components/ProductCatalogue';
import CartPage from './components/CartPage';
import PaymentPage from './components/PaymentPage';
import './components/studies.css';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<LoginPage />}
        />
        <Route
          path='/products'
          element={
            <ProductCatalogue
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path='/cart'
          element={
            <CartPage
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path='/payment'
          element={<PaymentPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
