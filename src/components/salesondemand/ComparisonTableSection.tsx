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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            🧩 In-house Sales Team vs. Sales On Demand
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Comparison Container */}
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Traditional Team Side */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-red-50 px-6 py-3 rounded-full">
                  <span className="text-2xl">❌</span>
                  <h3 className="text-xl font-bold text-foreground">Traditional In-house Sales Team</h3>
                </div>
              </div>
              
              <div className="space-y-4">
                {comparisonData.map((row, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{row.category}</h4>
                        <p className="text-muted-foreground">{row.traditional}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sales On Demand Side */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full">
                  <span className="text-2xl">✨</span>
                  <h3 className="text-xl font-bold text-primary">Sales On Demand by Marco Ferrario</h3>
                </div>
              </div>
              
              <div className="space-y-4">
                {comparisonData.map((row, index) => (
                  <div key={index} className="bg-primary/5 border border-primary/20 rounded-lg p-6 hover:bg-primary/10 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{row.category}</h4>
                        <p className="text-primary font-medium">{row.salesOnDemand}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VS Indicator */}
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10">
            <div className="bg-white border-4 border-primary rounded-full w-16 h-16 flex items-center justify-center font-bold text-primary text-xl shadow-lg">
              VS
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-12 shadow-lg">
            <p className="text-2xl text-foreground mb-8 leading-relaxed">
              Still thinking about building a team from scratch?<br />
              <span className="font-semibold text-primary">Let us plug in a full sales engine that performs from day one.</span>
            </p>
            <button className="btn-premium text-lg px-12 py-4 rounded-xl font-semibold hover:scale-105 transition-transform">
              Start with Sales On Demand →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;