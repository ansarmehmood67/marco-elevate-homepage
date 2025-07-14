
import { BarChart, TrendingUp, Users, Target } from "lucide-react";

const PerformanceSection = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Enhanced ROI Quote */}
        <div className="max-w-5xl mx-auto p-12 rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl border border-white/50 relative overflow-hidden">
          
          {/* Quote icon */}
          <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-3xl font-black text-white">
            "
          </div>
          
          <p className="text-3xl lg:text-4xl font-black leading-relaxed text-slate-900 text-center">
            Ogni <span className="text-yellow-600">€1</span> investito in un Direttore Vendite On-Demand può generare{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              €5–10
            </span>{' '}
            di fatturato.
          </p>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-500/30 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
