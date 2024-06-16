import React, { useState } from 'react';
import './login.css';
import LogoEntrada from '../../imagens/logo.PNG';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@admin.com' && password === 'admin') {
      navigate('/menu');
      setError('');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="containerLogin">
      <div className="imagemLogin">
        <img src={LogoEntrada} className="imagem" alt="Logo da empresa" />
      </div>
      <div className="login-container">
        <div className="login-informacoes">
          <h2 className="textoLogin">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p role="alert" className="error-message">{error}</p>}
            <button type="submit" className="botaoLogin">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;