
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SalesHeroSection from "@/components/sales/SalesHeroSection";

const SalesOnDemand = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark ? 'bg-black text-white' : 'bg-white text-slate-900'
    }`}>
      <Navigation />
      <SalesHeroSection isDark={isDark} setIsDark={setIsDark} />
      {/* Other sections will be added as separate components */}
      <Footer />
    </div>
  );
};

export default SalesOnDemand;
