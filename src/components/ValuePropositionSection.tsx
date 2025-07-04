
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const ValuePropositionSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const valuePoints = [
    "Vendite esternalizzate",
    "Strategia su misura", 
    "CRM & funnel",
    "Automazione AI",
    "KPI e metodo",
    "Nessun commerciale da assumere",
    "Risultati concreti"
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-12">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Soluzioni per la Tua{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Crescita
              </span>
            </h2>

            <div className="space-y-6">
              {valuePoints.map((point, index) => (
                <div
                  key={index}
                  className="group relative flex items-center justify-between py-4 px-6 rounded-2xl transition-all duration-300 hover:bg-gray-50"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    <span className="text-xl font-semibold text-gray-800">
                      {point}
                    </span>
                  </div>

                  {/* Hover Button */}
                  <div
                    className={`transition-all duration-300 ease-out ${
                      hoveredIndex === index
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
                    }`}
                  >
                    <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-200">
                      <span>Scopri di più</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1226&q=80"
                alt="Business growth and innovation"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-20" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-2xl opacity-15" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
