import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ProductCatalogue from './components/ProductCatalogue';
import './components/studies.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<LoginPage />}
        />
        <Route
          path='/products'
          element={<ProductCatalogue />}
        />
      </Routes>
    </Router>
  );
}

export default App;
