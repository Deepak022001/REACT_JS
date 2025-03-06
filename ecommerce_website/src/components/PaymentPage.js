import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './payment.css';

export default function PaymentPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [lastName, setLastName] = useState('');
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    if (!fullName || !lastName || (!upiId && (!cardNumber || !cvv))) {
      alert('Please fill in all required fields.');
      return;
    }
    alert('Payment Successful!');
    navigate('/products');
  };

  return (
    <div className='payment-container'>
      <h2>Payment Page</h2>
      <p>Enter your payment details and confirm the purchase.</p>
      <form onSubmit={handlePayment}>
        <input
          type='text'
          placeholder='Full Name'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type='text'
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type='text'
          placeholder='UPI ID (optional)'
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
        />
        <input
          type='text'
          placeholder='Card Number'
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required={!upiId}
        />
        <input
          type='password'
          placeholder='CVV'
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required={!upiId}
        />
        <button
          type='submit'
          className='pay-btn'
        >
          Confirm Payment
        </button>
      </form>
    </div>
  );
}
