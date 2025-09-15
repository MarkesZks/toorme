// pages/LandingPage/index.tsx
import React from "react";
import HeroSection from "../../components/sections/HeroSection";
import AboutSection from "../../components/sections/AboutSection";
import TravelSection from "../../components/sections/TravelSection";
import DownloadSection from "../../components/sections/DownloadSection";
import FeedbackCarousel from "../../components/sections/FeedbackCarousel";
import FAQSection from "../../components/sections/FAQSection";

import "./style.scss";

const LandingPage: React.FC = () => {
  return (
    <div className="toorme-screen">
      <HeroSection />
      <AboutSection />
      <TravelSection />
      <DownloadSection />
      <FeedbackCarousel /> 
      <FAQSection/>
    </div>
  );
};

export default LandingPage;
