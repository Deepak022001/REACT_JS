import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cart.css';

export default function CartPage({ cart, setCart }) {
  const navigate = useNavigate();

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product.id !== productToRemove.id));
  };

  return (
    <div className='cart-container'>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className='empty-cart'>Cart is empty</p>
      ) : (
        <div className='cart-list'>
          {cart.map((product, index) => (
            <div
              key={index}
              className='cart-item'
            >
              <img
                src={product.image}
                alt={product.name}
                className='cart-image'
              />
              <div className='cart-details'>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button
                  className='remove-btn'
                  onClick={() => removeFromCart(product)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <button
          className='checkout-btn'
          onClick={() => navigate('/payment')}
        >
          Proceed to Payment
        </button>
      )}
    </div>
  );
}
