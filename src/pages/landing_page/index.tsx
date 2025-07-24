// ToorMeScreen.tsx
import React from 'react';

import logo  from '../../../public/logo_01.svg';

import './style.scss';

const LandingPage: React.FC = () => {
  return (
    <div className="toorme-screen">
      {/* Header com logo e call-to-action */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="logo">
           <img src={logo} alt="Logo da ToorMe" />
          </div>
          <h1 className="hero-title">
            A maneira mais divertida<br />
            de viver a cidade!
          </h1>
          <button className="cta-button">Cadastre-se!</button>
        </div>
      </div>

      {/* Seção Sobre nós */}
      <div className="content-section">
        <h2 className="section-title">Sobre nós</h2>
        <p className="section-text">
          O ToorMe surgiu da necessidade de criar um canal 
          direto entre turistas e os diversos atores do 
          ecossistema turístico. Mais do que um aplicativo, 
          somos uma ponte que une viajantes às verdadeiras 
          experiências locais.
        </p>
      </div>

      {/* Seção Viaje conosco */}
      <div className="content-section">
        <h2 className="section-title">Viaje conosco</h2>
        <p className="section-subtitle">Com ToorMe app!</p>
        
        <div className="app-preview">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="app-logo">
                <span className="logo-main">toor</span>
                <span className="logo-accent">me</span>
              </div>
              <p className="app-tagline">A maneira mais divertida de viver a cidade</p>
            </div>
          </div>
        </div>

        <p className="section-text">
          Viaje com o ToorMe e viva o destino de verdade. 
          Para aventureiros ou famílias, temos a experiência 
          certa para cada perfil.
        </p>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-item active">
          <div className="nav-icon home-icon"></div>
          <span className="nav-label">Home</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon search-icon"></div>
          <span className="nav-label">Procurar</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon notification-icon"></div>
          <span className="nav-label">Notificações</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon profile-icon"></div>
          <span className="nav-label">Perfil</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
