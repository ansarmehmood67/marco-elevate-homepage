import { UserPlus, Scissors, Zap, TrendingUp } from "lucide-react";

const WhenToCallSection = () => {
  const cards = [
    {
      icon: UserPlus,
      title: "Do you need to hire a salesperson?",
      text: "You're looking for someone who can support your sales at every stage — without the risk of wasting time or resources."
    },
    {
      icon: Scissors,
      title: "Cut costs",
      text: "No more managing unnecessary fixed costs that hurt performance."
    },
    {
      icon: Zap,
      title: "Speed and flexibility on request",
      text: "Need to double capacity for the holidays or pause operations for summer? We're flexible."
    },
    {
      icon: TrendingUp,
      title: "Grow your business",
      text: "Focus on what matters — we take care of the entire sales process for you."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8">
            When to Call{" "}
            <span className="bg-gradient-to-r from-[#2E8BC0] via-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
              Sales On Demand
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div key={index} className="group">
                <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-[#2E8BC0]/20 hover:-translate-y-2 hover:scale-105 h-full">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2E8BC0]/5 to-[#87CEEB]/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  
                  {/* Icon */}
                  <div className="mb-6 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2E8BC0]/15 to-[#87CEEB]/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                      <IconComponent className="w-8 h-8 text-[#2E8BC0]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-[#2E8BC0] transition-colors duration-300">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{card.text}</p>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhenToCallSection;