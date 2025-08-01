
import logo from "../../../logo_01.svg";

const HeroSection = () => (
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
);

export default HeroSection;