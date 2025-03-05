import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Add your own styles

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && password === 'password') {
      navigate('/dashboard'); // React Router navigation
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
