import React, { useState } from "react";
import "./style.scss";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <h1>
        Bem-vindo ao <span className="highlight">ToorMe</span>
      </h1>
      <p className="subtitle">Vamos embarcar nessa viagem!</p>

      <form className="login-form">
        <div className="input-group">
          <span className="icon">📧</span>
          <input type="email" placeholder="Digite seu e-mail..." />
        </div>

        <div className="input-group">
          <span className="icon">🔒</span>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Digite sua senha..."
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <a className="forgot-password" href="#">Esqueceu a senha?</a>

        <div className="divider">
          <hr />
          <span>ou</span>
          <hr />
        </div>

        <button className="social-button google">
          <span className="icon">🌐</span>
          Continuar com Google
        </button>
        <button className="social-button apple">
          <span className="icon">🍎</span>
          Continuar com Apple
        </button>
        <button className="social-button phone">
          <span className="icon">📱</span>
          Continuar com telefone
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
