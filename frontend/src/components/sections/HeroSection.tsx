
import logo from "../../../public/logo_01.svg";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
const navigate = useNavigate();

  const handleClick = () => {
   navigate("/cadastro");
  };

  return (
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
        <button className="cta-button" onClick={handleClick}>
          Cadastre-se!
        </button>
      </div>
    </div>
  );
};

export default HeroSection;