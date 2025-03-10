import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h2>Retail Store</h2>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
