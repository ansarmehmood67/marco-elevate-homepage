const BookVideoSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-black to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-gradient-to-br from-primary-glow/15 to-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight text-white mb-6">
            Guarda il video di{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              presentazione
            </span>
          </h2>
          <p className="text-xl lg:text-2xl leading-relaxed text-white/80 max-w-3xl mx-auto">
            Scopri come Sales as a Service può trasformare il tuo business in questo video esclusivo
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-2xl border border-white/10">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID"
              title="Sales as a Service - Video Presentazione"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookVideoSection;