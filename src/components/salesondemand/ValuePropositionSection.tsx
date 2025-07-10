import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ValuePropositionSectionProps {
  isDark: boolean;
}

const ValuePropositionSection = ({ isDark }: ValuePropositionSectionProps) => {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4 leading-snug">
            Tired of searching, training, and managing salespeople with uncertain results?
          </h2>
          <p className="text-lg font-semibold text-black max-w-3xl mx-auto leading-relaxed mb-6">
            With Sales On Demand, you rent a ready-to-go sales team — experienced, trained, and focused on results from day one.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
            <div className="flex items-center space-x-2 text-primary font-semibold">
              📞 <span>Prospecting</span>
            </div>
            <ArrowRight className="w-5 h-5 text-primary rotate-90 sm:rotate-0" />
            <div className="flex items-center space-x-2 text-primary font-semibold">
              💬 <span>Telemarketing</span>
            </div>
            <ArrowRight className="w-5 h-5 text-primary rotate-90 sm:rotate-0" />
            <div className="flex items-center space-x-2 text-primary font-semibold">
              🤝 <span>Deal Closing</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-elegant">
            <p className="text-base text-foreground mb-4 font-medium">
              <strong>No fixed costs. No long hiring cycles.</strong><br />
              Just instant activation, flexibility, and performance you can measure.
            </p>
            <h3 className="text-xl font-bold text-primary mb-3">
              Why hire, when you can rent proven sales results?
            </h3>
            <Button className="btn-premium h-12 px-6 text-base">
              <span>Start Now</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
