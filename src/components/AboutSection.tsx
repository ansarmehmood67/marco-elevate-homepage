import marcoPortrait from "@/assets/marco-portrait.jpg";
import { Users, TrendingUp, Award, Star, CheckCircle, Target } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Transformed Customers" },
    { icon: TrendingUp, number: "15+", label: "Years Experience" },
    { icon: Award, number: "95%", label: "Success Rate" }
  ];

  const achievements = [
    { icon: Star, text: "Top Sales Strategist 2023" },
    { icon: CheckCircle, text: "Certified AI Marketing Expert" },
    { icon: Target, text: "Business Growth Specialist" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#55ACEE] rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#2E8BC0] rounded-full filter blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Enhanced Image */}
          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#55ACEE] to-[#2E8BC0] rounded-2xl opacity-20 animate-float"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#87CEEB] to-[#55ACEE] rounded-full opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
            
            {/* Main Image Container */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#55ACEE]/30 to-[#2E8BC0]/30 rounded-3xl filter blur-2xl transform rotate-6" />
              
              {/* Image */}
              <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                <img
                  src={marcoPortrait}
                  alt="Marco - Business Expert"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-[#111827]">Available for consultation</span>
                  </div>
                </div>
              </div>
              
              {/* Achievement Badges */}
              <div className="absolute -right-4 top-1/4 space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl p-3 shadow-xl border border-[#55ACEE]/20 transform hover:scale-105 transition-all duration-300"
                    style={{animationDelay: `${index * 0.5}s`}}
                  >
                    <achievement.icon className="w-6 h-6 text-[#55ACEE]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side - Enhanced Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-block bg-gradient-to-r from-[#55ACEE]/10 to-[#2E8BC0]/10 rounded-full px-4 py-2 border border-[#55ACEE]/20">
                <span className="text-sm font-semibold text-[#55ACEE]">● Founder & CEO</span>
              </div>
              
              <h2 className="text-5xl font-black text-[#111827] leading-tight">
                Meet<br />
                <span className="bg-gradient-to-r from-[#55ACEE] to-[#2E8BC0] bg-clip-text text-transparent">Marco</span>
              </h2>
              
              <h3 className="text-2xl font-bold text-[#4B5563]">
                Sales and communication expert
              </h3>
              
              <div className="space-y-4">
                <p className="text-lg text-[#4B5563] leading-relaxed">
                  Con oltre <strong className="text-[#55ACEE]">25 anni di esperienza</strong> nel settore commerciale, Marco ha sviluppato metodologie innovative che combinano approcci tradizionali con le più moderne tecnologie AI.
                </p>
                <p className="text-lg text-[#4B5563] leading-relaxed">
                  La sua missione è trasformare il tuo business in una <strong className="text-[#55ACEE]">macchina di vendita efficiente e scalabile</strong>.
                </p>
              </div>
            </div>
            
            {/* Enhanced Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#55ACEE]/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#55ACEE] to-[#2E8BC0] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-black text-[#111827] mb-2">{stat.number}</div>
                  <div className="text-sm font-semibold text-[#4B5563]">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="pt-6">
              <button className="bg-gradient-to-r from-[#55ACEE] to-[#87CEEB] hover:from-[#2E8BC0] hover:to-[#55ACEE] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Parla con Marco
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;