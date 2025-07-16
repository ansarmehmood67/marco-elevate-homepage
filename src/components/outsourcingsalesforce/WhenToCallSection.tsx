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
                <div className="relative bg-white p-8 rounded-3xl border border-gray-200 hover:border-[#2E8BC0]/40 transition-all duration-500 hover:shadow-2xl group-hover:shadow-[#2E8BC0]/20 h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2E8BC0]/15 to-[#87CEEB]/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                      <IconComponent className="w-8 h-8 text-[#2E8BC0]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{card.text}</p>
                  </div>
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