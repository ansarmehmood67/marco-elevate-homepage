import { Button } from "@/components/ui/button";

const ComparisonTableSection = () => {
  const comparisonData = [
    {
      category: "Hiring Time",
      traditional: "1–3 months to recruit & train",
      salesOnDemand: "🚀 Instant activation (ready-to-go team)"
    },
    {
      category: "Fixed Costs",
      traditional: "High monthly salaries & benefits",
      salesOnDemand: "💸 Pay only for what you use"
    },
    {
      category: "Scalability",
      traditional: "Difficult to scale quickly",
      salesOnDemand: "📈 Easily scale up or down anytime"
    },
    {
      category: "Experience Level",
      traditional: "Mixed skills, needs supervision",
      salesOnDemand: "🧠 Senior-level experts + sales director"
    },
    {
      category: "Sales Strategy",
      traditional: "Usually missing or unclear",
      salesOnDemand: "🧭 Full sales method + pitch strategy"
    },
    {
      category: "Tech & Tools",
      traditional: "You must buy and manage CRM/tools",
      salesOnDemand: "⚙️ All tools included (CRM, scripts, dashboards)"
    },
    {
      category: "Risk",
      traditional: "High — bad hires cost time & money",
      salesOnDemand: "✅ Low risk — proven, accountable team"
    },
    {
      category: "Results",
      traditional: "Slow ramp-up",
      salesOnDemand: "🏁 Results in days, not months"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6">
            🧩 In-house Sales Team vs. Sales On Demand
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-white/20 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-slate-50 to-blue-50/50">
              <div className="p-6 font-semibold text-slate-600 border-b md:border-b-0 md:border-r border-slate-200/50">
                
              </div>
              <div className="p-6 font-bold text-center border-b md:border-b-0 md:border-r border-slate-200/50 text-slate-700">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-red-500">❌</span>
                  Traditional In-house Sales Team
                </div>
              </div>
              <div className="p-6 font-bold text-center text-slate-700">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-500">✨</span>
                  Sales On Demand by Marco Ferrario
                </div>
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 md:grid-cols-3 hover:bg-blue-50/30 transition-colors duration-300 ${
                  index < comparisonData.length - 1 ? 'border-b border-slate-200/50' : ''
                }`}
              >
                <div className="p-6 font-semibold bg-gradient-to-r from-slate-100/50 to-transparent border-b md:border-b-0 md:border-r border-slate-200/50 text-slate-800">
                  {row.category}
                </div>
                <div className="p-6 text-slate-600 border-b md:border-b-0 md:border-r border-slate-200/50 leading-relaxed">
                  {row.traditional}
                </div>
                <div className="p-6 font-medium text-slate-800 bg-gradient-to-r from-green-50/30 to-blue-50/30 leading-relaxed">
                  {row.salesOnDemand}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-white/20">
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              Still thinking about building a team from scratch?<br />
              <span className="font-semibold text-blue-900">Let us plug in a full sales engine that performs from day one.</span>
            </p>
            <Button 
              size="lg" 
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start with Sales On Demand →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;