import React, { useState } from 'react';
import './login.css';
import LogoEntrada from '../../imagens/logo.PNG';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navegacao = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica de autenticação
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="containerLogin">
        <div className="imagemLogin">
          <img src={LogoEntrada} className="imagem" alt="voltar" />
      </div>
        <div className="login-container">
        <div className="login-informacaoes">
          <h2 className="textoLogin">Login</h2>
          <form onSubmit={handleSubmit}>
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
            <button type="submit"  onClick={() => navegacao('./menu')} className = "botaoLogin">Login</button>
          </form>
        </div>
    </div>
    </div>
  );
}

export default Login;