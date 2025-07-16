const IntroSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8">
            Looking for vendors?{" "}
            <span className="bg-gradient-to-r from-[#2E8BC0] via-[#87CEEB] to-[#2E8BC0] bg-clip-text text-transparent">
              RENT THEM!
            </span>
          </h2>
        </div>
        
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
      </div>
    </section>
  );
};

export default IntroSection;