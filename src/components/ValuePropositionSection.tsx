import { useState } from "react";
import { ArrowRight, Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const ValuePropositionSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const valuePoints = [
    "Vendite esternalizzate",
    "Strategia su misura", 
    "CRM & funnel",
    "Automazione AI",
    "KPI e metodo",
    "Nessun commerciale da assumere",
    "Risultati concreti"
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <section className={`py-24 lg:py-40 transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800' 
        : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'
    }`}>
      <div className="container mx-auto px-6 relative">
        {/* Theme Toggle */}
        <div className="absolute top-0 right-6 flex items-center space-x-3 z-10">
          <Sun className={`w-5 h-5 transition-colors ${isDarkMode ? 'text-gray-400' : 'text-yellow-500'}`} />
          <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
          <Moon className={`w-5 h-5 transition-colors ${isDarkMode ? 'text-blue-400' : 'text-gray-400'}`} />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Enhanced Text Content */}
          <div className="space-y-16">
            <div className="space-y-6">
              <div className="inline-block">
                <span className={`text-sm font-semibold tracking-wider uppercase px-4 py-2 rounded-full ${
                  isDarkMode 
                    ? 'bg-[#55ACEE]/20 text-[#55ACEE] border border-[#55ACEE]/30' 
                    : 'bg-[#55ACEE]/10 text-[#55ACEE] border border-[#55ACEE]/20'
                }`}>
                  Premium Solutions
                </span>
              </div>
              
              <h2 className={`text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Soluzioni per la Tua{" "}
                <span className="bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] bg-clip-text text-transparent">
                  Crescita
                </span>
              </h2>
              
              <p className={`text-xl leading-relaxed max-w-lg ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Trasforma il tuo business con soluzioni innovative e risultati misurabili
              </p>
            </div>

            <div className="space-y-4">
              {valuePoints.map((point, index) => (
                <div
                  key={index}
                  className={`group relative flex items-center justify-between py-6 px-8 rounded-2xl transition-all duration-500 cursor-pointer backdrop-blur-sm border ${
                    isDarkMode 
                      ? 'hover:bg-white/5 border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10' 
                      : 'hover:bg-white/80 border-white/50 hover:border-white/80 hover:shadow-2xl hover:shadow-blue-500/20'
                  } ${hoveredIndex === index ? 'scale-105 transform' : ''}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex items-center space-x-6">
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      hoveredIndex === index 
                        ? 'bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] shadow-lg shadow-[#55ACEE]/50 scale-125' 
                        : 'bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0]'
                    }`} />
                    <span className={`text-xl font-bold transition-colors ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    } ${hoveredIndex === index ? 'text-[#55ACEE]' : ''}`}>
                      {point}
                    </span>
                  </div>

                  {/* Enhanced Hover Button */}
                  <div
                    className={`transition-all duration-500 ease-out transform ${
                      hoveredIndex === index
                        ? "opacity-100 translate-x-0 scale-100"
                        : "opacity-0 translate-x-8 scale-95"
                    }`}
                  >
                    <button className="group/btn flex items-center space-x-3 bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl hover:shadow-2xl hover:shadow-[#55ACEE]/30 hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/20">
                      <span>Scopri di più</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Premium Image with Enhanced Effects */}
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#55ACEE]/20 to-[#2E8BC0]/20 rounded-[3rem] blur-3xl transform rotate-6 scale-110" />
            
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Premium business innovation and growth"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-110 hover:rotate-2"
              />
              
              {/* Premium overlay with gradient */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${
                isDarkMode 
                  ? 'bg-gradient-to-t from-gray-900/60 via-transparent to-blue-900/30' 
                  : 'bg-gradient-to-t from-black/30 via-transparent to-blue-600/20'
              }`} />
              
              {/* Floating elements */}
              <div className="absolute top-6 left-6 backdrop-blur-sm bg-white/20 rounded-2xl p-4 border border-white/30">
                <div className="w-8 h-8 bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] rounded-xl" />
              </div>
              
              <div className="absolute bottom-6 right-6 backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/30">
                <div className="text-white font-bold text-lg">+250%</div>
                <div className="text-white/80 text-sm">Growth Rate</div>
              </div>
            </div>

            {/* Enhanced decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-r from-[#2E8BC0] to-[#55ACEE] rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
            
            {/* Floating particles */}
            <div className="absolute top-1/4 -left-4 w-2 h-2 bg-[#55ACEE] rounded-full animate-bounce opacity-60" />
            <div className="absolute top-3/4 -right-2 w-3 h-3 bg-[#2E8BC0] rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;