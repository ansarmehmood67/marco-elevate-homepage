import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ValuePropositionSection = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Glassmorphic Card */}
          <div className="backdrop-blur-xl rounded-3xl p-10 border border-white/20 bg-white/60 shadow-2xl shadow-primary/10">
            {/* Headline */}
            <p className="text-2xl lg:text-3xl leading-relaxed font-light mb-6 text-slate-800">
              Tired of searching, training, and managing salespeople with uncertain results?
              <br />
              <span className="font-semibold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Sales On Demand
              </span>{" "}
              is your turnkey solution.
            </p>

            {/* Process Icons */}
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

            
          </div>
        </div>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-glow/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default ValuePropositionSection;
