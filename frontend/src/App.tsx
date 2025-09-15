import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing_page";
import LoginPage from "./pages/login"; // Crie esse depois

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;