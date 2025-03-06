import { useState } from 'react';
import './studies.css'; //

export default function ControlledForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [showText, setShowText] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='container'>
      <h2 className='title'>Controlled Form</h2>

      <div className='form-group'>
        <label>Name:</label>
        <input
          type={showText ? 'text' : 'password'} // Toggle input type
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter your name'
        />
      </div>

      <div className='form-group'>
        <label>Email:</label>
        <input
          type={showText ? 'text' : 'password'} // Toggle input type
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email'
        />
      </div>

      <div className='preview'>
        <h3>Live Preview:</h3>
        <p>
          <strong>Name:</strong> {showText ? formData.name || 'N/A' : '••••••'}
        </p>
        <p>
          <strong>Email:</strong>{' '}
          {showText ? formData.email || 'N/A' : '••••••'}
        </p>
      </div>

      <button
        className='toggle-btn'
        onClick={() => setShowText(!showText)}
      >
        {showText ? 'Hide Text' : 'Show Text'}
      </button>
    </div>
  );
}
