import React from 'react';
import './Navbar.scss'; // você pode criar esse SCSS separado

const Navbar: React.FC = () => {
  return (
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
  );
};

export default Navbar;
