import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const IntroSection = () => {
  return (
    <>
      {/* White Background Section */}
      <div className="bg-white py-24 lg:py-32 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="space-y-12">
            {/* Main Headlines with Modern Typography */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Looking for vendors?{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#2E8BC0] via-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                    RENT THEM!
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full opacity-60"></div>
                </span>
              </h1>
            </div>

            {/* Two Column Content */}
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-6">
                <p className="text-xl text-slate-600 leading-relaxed">
                  Save time and money on unnecessary research. Eliminate the stress of employing untrained salespeople and increase your profits by outsourcing your sales force.
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-xl text-slate-600 leading-relaxed">
                  Many of our clients were skeptical at first, but now they're with us for a reason… and the best part is, you don't need to expand your team. We understand the importance of having a team of experienced and motivated salespeople to help you reach your business's full potential.
                </p>
                
                <p className="text-xl text-slate-600 leading-relaxed font-semibold">
                  Our salespeople are carefully selected to ensure they are highly qualified and ready to deliver tangible results quickly!
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center pt-8">
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
                <Button 
                  size="xl" 
                  className="relative bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] hover:from-[#87CEEB] hover:to-[#2E8BC0] text-white font-bold px-12 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    Inizia adesso
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Background Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2E8BC0]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#87CEEB]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-8">
            <blockquote className="space-y-6">
              <div className="relative">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Ready to scale{" "}
                  <span className="bg-gradient-to-r from-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
                    without hiring?
                  </span>
                </h3>
              </div>

              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Get instant access to qualified sales professionals who deliver results from day one
              </p>

              <div className="pt-6">
                <Button 
                  size="lg"
                  className="bg-white/10 text-white hover:bg-white/20 font-semibold px-10 py-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-sm"
                >
                  <span className="flex items-center gap-2">
                    Scopri come
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;