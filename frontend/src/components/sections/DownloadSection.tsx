import phone1 from "../../../phone1.png";
import phone2 from "../../../phone2.png";
import DownloadButton from "../../components/ui/buttons/button";


const DownloadSection = () => (
  <div className="content-section">
    <h2 className="section-title">Baixe nosso aplicativo!</h2>
    <div className="phones-wrapper">
      <img src={phone1} alt="App tela inicial" className="phone-image" />
      <img src={phone2} alt="App tela de navegação" className="phone-image" />
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
);

export default DownloadSection;