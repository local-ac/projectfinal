import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // นำเข้าไฟล์ CSS

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, email, phone }),
    });

    if (response.ok) {
      navigate('/');
    } else {
      const { error } = await response.json();
      setError(error || 'Sign-up failed');
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignUp} className="signup-form">
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input-field"
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
