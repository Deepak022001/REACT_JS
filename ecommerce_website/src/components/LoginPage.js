import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'deepak@gmail.com' && password === 'deepak') {
      navigate('/products');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='login-container'>
      <div className='login-card'>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className='error'>{error}</p>}
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}
