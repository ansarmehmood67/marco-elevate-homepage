
import { ArrowRight, CheckCircle, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ValuePropositionSectionProps {
  isDark: boolean;
}

const ValuePropositionSection = ({ isDark }: ValuePropositionSectionProps) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold mb-8 shadow-lg hover:scale-105 transition-transform duration-300">
            <Rocket className="w-5 h-5 mr-2 animate-bounce" />
            Sales On Demand
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">
            Tired of searching, training, and managing salespeople with uncertain results?
          </h2>
          <p className="text-xl lg:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            With Sales On Demand, you rent a ready-to-go sales team — experienced, trained, and focused on results from day one.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-3xl shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">We handle the full sales cycle:</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    📞
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Prospecting</div>
                    <div className="text-slate-600 text-sm">Finding qualified leads</div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-blue-500 animate-pulse" />
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    💬
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Telemarketing</div>
                    <div className="text-slate-600 text-sm">Engaging prospects</div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-blue-500 animate-pulse" />
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    🤝
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Deal Closing</div>
                    <div className="text-slate-600 text-sm">Converting to customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-lg border border-green-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Benefits:</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-lg text-slate-700"><strong>No fixed costs.</strong> Pay for performance.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-lg text-slate-700"><strong>No long hiring cycles.</strong> Start immediately.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-lg text-slate-700"><strong>Just instant activation.</strong> Ready from day one.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-lg text-slate-700"><strong>Flexibility and performance</strong> you can measure.</span>
                </div>
              </div>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-white shadow-xl">
              <h3 className="text-3xl font-bold mb-4">Why hire, when you can rent proven sales results?</h3>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                <span>Start Now</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
