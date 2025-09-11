import { Badge } from "@/components/ui/badge";

const OfficeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <Badge className="bg-primary/10 text-primary border-primary/20 mb-8 px-6 py-3 text-base">
          I nostri uffici
        </Badge>
        
        <h2 className="text-5xl lg:text-6xl font-black leading-[0.85] tracking-tight text-slate-900 mb-8">
          Dove strategia ed esecuzione
          <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            lavorano fianco a fianco
          </span>
        </h2>
        
        <p className="text-2xl text-primary font-medium mb-8">
          Vendite, Marketing e AI sotto un'unica regia: la nostra.
        </p>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Nel nostro HQ coordiniamo il lavoro. Un metodo unico, processi chiari, KPI e SLA che trasformano piani in risultati misurabili.
        </p>
      </div>
    </section>
  );
};

export default OfficeSection;