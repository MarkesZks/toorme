import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing_page";
import CadastroPage from "./pages/cadastro"; // Crie esse depois

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cadastro" element={<CadastroPage />} />
    </Routes>
  );
};

export default App;