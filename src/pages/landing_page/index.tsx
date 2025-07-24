// ToorMeScreen.tsx
import React from "react";
import logo from "../../../public/logo_01.svg";
import banner from "../../../public/logo_banner.png";
import phone1 from "../../../public/phone1.png";
import phone2 from "../../../public/phone2.png";
//Componentes
import Navbar from "../../components/ui/navbar/navbar";
import DownloadButton from "../../components/ui/buttons/button";
// import FeedbackCarousel from "../../components/ui/feedbacks/FeedbackCarousel";

import "./style.scss";

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
            A maneira mais divertida
            <br />
            de viver a cidade!
          </h1>
          <button className="cta-button">Cadastre-se!</button>
        </div>
      </div>

      {/* Seção Sobre nós */}
      <div className="content-section">
        <h2 className="section-title">Sobre nós</h2>
        <p className="section-text">
          O ToorMe surgiu da necessidade de criar um canal direto entre turistas
          e os diversos atores do ecossistema turístico. Mais do que um
          aplicativo, somos uma ponte que une viajantes às verdadeiras
          experiências locais.
        </p>
      </div>

      {/* Seção Viaje conosco */}
      <div className="content-section">
        <h2 className="section-title">Viaje conosco</h2>
        <p className="section-subtitle">Com ToorMe app!</p>
        <img src={banner} alt="Logo da ToorMe" />
        {/* <div className="app-preview">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="app-logo">
                <span className="logo-main">toor</span>
                <span className="logo-accent">me</span>
              </div>
              <p className="app-tagline">A maneira mais divertida de viver a cidade</p>
            </div>
          </div>
        </div> */}

        <p className="section-text">
          Viaje com o ToorMe e viva o destino de verdade. Para aventureiros ou
          famílias, temos a experiência certa para cada perfil.
        </p>
        <p className="section-text">
          Explore destinos incríveis e descubra por que milhares já viajaram
          melhor com a gente
        </p>
      </div>
      {/* Sessão de download */}
      <div className="content-section">
        <h2 className="section-title">Baixe nosso aplicativo!</h2>
        <div className="phones-wrapper">
          <img src={phone1} alt="App tela inicial" className="phone-image" />
          <img
            src={phone2}
            alt="App tela de navegação"
            className="phone-image"
          />
        </div>

        <div className="buttons-wrapper">
          <DownloadButton
            label="Disponível no Google Play"
            variant="orange"
            onClick={() => window.open("https://play.google.com", "_blank")}
          />
          <DownloadButton
            label="Disponível na Apple Store"
            variant="blue"
            onClick={() =>
              window.open("https://www.apple.com/br/app-store/", "_blank")
            }
          />
        </div>
      </div>
      {/* Sessão de feedbacks */}
      {/* <FeedbackCarousel /> */}
      <Navbar />
    </div>
  );
};

export default LandingPage;
