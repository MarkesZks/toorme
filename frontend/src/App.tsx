import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing_page";
import LoginPage from "./pages/login"; 
import HomeHero from "./pages/home_hero";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/homehero" element={<HomeHero />} />
    </Routes>
  );
};

export default App;