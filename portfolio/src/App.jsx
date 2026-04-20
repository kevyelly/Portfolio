import { useState, useEffect } from "react";
import TopNavBar from "./components/TopNavBar";
import HeroSection from "./components/HeroSection";
import ProjectsGrid from "./components/ProjectsGrid";
import EducationSection from "./components/EducationSection";
import TechStackSection from "./components/TechStackSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isLightMode]);

  const toggleTheme = () => setIsLightMode(prev => !prev);

  return (
    <div className="min-h-screen bg-surface selection:bg-primary selection:text-surface transition-colors duration-300">
      <TopNavBar isLightMode={isLightMode} toggleTheme={toggleTheme} />
      <main className="pt-24">
        <HeroSection />
        <ProjectsGrid />
        <EducationSection />
        <TechStackSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}