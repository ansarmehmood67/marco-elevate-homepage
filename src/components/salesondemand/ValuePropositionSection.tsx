import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ValuePropositionSectionProps {
  isDark: boolean;
}

const ValuePropositionSection = ({ isDark }: ValuePropositionSectionProps) => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <div className="relative z-10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 bg-primary/10 shadow-2xl shadow-primary/10">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4 leading-snug">
            Tired of searching, training, and managing salespeople with uncertain results?
          </h2>
          <p className="text-lg font-semibold text-black max-w-3xl mx-auto leading-relaxed mb-6">
            With Sales On Demand, you rent a ready-to-go sales team — experienced, trained, and focused on results from day one.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
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

          <div className="bg-white/70 rounded-2xl p-6 border border-white/30 shadow-inner">
            <p className="text-base text-black mb-4 font-medium">
              <strong>No fixed costs. No long hiring cycles.</strong><br />
              Just instant activation, flexibility, and performance you can measure.
            </p>
            <h3 className="text-xl font-bold text-primary mb-4">
              Why hire, when you can rent proven sales results?
            </h3>
            <Button className="btn-premium h-12 px-6 text-base">
              <span>Start Now</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>

        {/* Decorative Blur Circles */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-glow/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
