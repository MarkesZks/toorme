import banner from "../../../logo_banner.png";

const TravelSection = () => (
  <div className="content-section">
    <h2 className="section-title">Viaje conosco</h2>
    <p className="section-subtitle">Com ToorMe app!</p>
    <img src={banner} alt="Logo da ToorMe" />
    <p className="section-text">
      Viaje com o ToorMe e viva o destino de verdade. Para aventureiros ou
      famílias, temos a experiência certa para cada perfil.
    </p>
    <p className="section-text">
      Explore destinos incríveis e descubra por que milhares já viajaram
      melhor com a gente
    </p>
  </div>
);

export default TravelSection;