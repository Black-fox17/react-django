// App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle sign-in or sign-up logic
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="App">
      <div className="form-container">
        <h1>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
        </form>
        <p>
          {isSignIn
            ? "Don't have an account? "
            : 'Already have an account? '}
          <button onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;
