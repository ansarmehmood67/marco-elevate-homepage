import marcoPortrait from "@/assets/marco-portrait.jpg";
import { Users, TrendingUp, Award } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Transformed Customers" },
    { icon: TrendingUp, number: "15+", label: "Years Experience" },
    { icon: Award, number: "95%", label: "Success Rate" }
  ];

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#55ACEE]/20 rounded-2xl filter blur-3xl" />
              <img
                src={marcoPortrait}
                alt="Marco - Business Expert"
                className="relative w-80 h-96 lg:w-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl shadow-slate-300/50"
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#111827] leading-tight">
                Meet Marco
              </h2>
              
              <h3 className="text-xl font-semibold text-[#55ACEE]">
                Sales and communication expert
              </h3>
              
              <p className="text-lg text-[#4B5563] leading-relaxed">
                Con oltre 25 anni di esperienza nel settore commerciale, Marco ha sviluppato metodologie 
                innovative che combinano approcci tradizionali con le più moderne tecnologie AI. 
                La sua missione è trasformare il tuo business in una macchina di vendita efficiente e scalabile.
              </p>
            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-[#55ACEE]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-[#55ACEE]" />
                  </div>
                  <div className="text-2xl font-bold text-[#111827] mb-2">{stat.number}</div>
                  <div className="text-sm text-[#4B5563]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;