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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🧩 In-house Sales Team vs. Sales On Demand
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 bg-muted/50">
              <div className="p-4 font-semibold text-muted-foreground border-b md:border-b-0 md:border-r border-border">
                
              </div>
              <div className="p-4 font-semibold text-center border-b md:border-b-0 md:border-r border-border">
                Traditional In-house Sales Team
              </div>
              <div className="p-4 font-semibold text-center">
                Sales On Demand by Marco Ferrario
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 md:grid-cols-3 ${
                  index < comparisonData.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <div className="p-4 font-medium bg-muted/30 border-b md:border-b-0 md:border-r border-border">
                  {row.category}
                </div>
                <div className="p-4 text-sm border-b md:border-b-0 md:border-r border-border">
                  {row.traditional}
                </div>
                <div className="p-4 text-sm font-medium text-primary">
                  {row.salesOnDemand}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6">
            Still thinking about building a team from scratch?<br />
            Let us plug in a full sales engine that performs from day one.
          </p>
          <Button size="lg" className="px-8">
            Start with Sales On Demand →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;