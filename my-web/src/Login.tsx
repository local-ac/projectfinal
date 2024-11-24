// src/Login.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Import ไฟล์ CSS

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      navigate('/homepokemon');
    } else {
      const { message } = await response.json();
      setError(message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>User Login</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="login-button">Login</button>
        <button type="button" onClick={() => navigate('/signup')} className="signup-button">
          Sign Up
        </button>
        <button type="button" onClick={() => navigate('/loginadmin')} className="signup-button">
          For Admin
        </button>
      </form>
    </div>
  );
}

export default Login;
