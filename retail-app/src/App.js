import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import SignUpForm from './components/SignUpForm';
const App = () => (
  <Router>
    <Routes>
      <Route
        path='/signup'
        element={<SignUpForm />}
      />
      <Route
        path='/login'
        element={<LoginForm />}
      />
      <Route
        path='/dashboard'
        element={<Dashboard />}
      />
    </Routes>
  </Router>
);

export default App;
