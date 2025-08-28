import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Storytelling variants
  const container = {
    hidden: { opacity: 1 }, // keep bg visible, only children animate
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.1 },
    },
  };

  const rise = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
  };

  const softRise = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const pop = {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <section className="pt-24 sm:pt-28 lg:pt-24 pb-8 px-0 bg-black relative overflow-hidden">
      {/* ====== BACKGROUND LAYERS ====== */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-black to-gray-900/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--primary)/0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--sky-blue-500)/0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_90%,hsl(var(--premium-blue-400)/0.08),transparent_70%)]" />

      {/* Subtle grid (animated via framer-motion for safe, no-keyframe usage) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
        className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:120px_120px]"
      />

      {/* Floating particles (gentle loop) */}
      <motion.span
        className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-primary/60"
        initial={{ opacity: 0, scale: 0.8, y: 0 }}
        animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.span
        className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-sky-blue-400/70"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, -4, 0] }}
        transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, delay: 0.6 }}
      />
      <motion.span
        className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-premium-blue-400/50"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, -5, 0] }}
        transition={{ duration: 3.4, ease: "easeInOut", repeat: Infinity, delay: 1 }}
      />
      <motion.span
        className="absolute top-1/2 right-1/6 w-1 h-1 rounded-full bg-primary/80"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, -3, 0] }}
        transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity, delay: 0.3 }}
      />

      {/* ====== INNER WRAPPER ====== */}
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden border border-gradient-to-r from-gray-800/40 via-primary/20 to-gray-800/40 shadow-2xl bg-black/40 backdrop-blur-md lg:min-h-[80vh]">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          >
            <source
              src="https://res.cloudinary.com/dufcnrcfe/video/upload/v1755354320/outsourcing_salesforce_3_nvc1rd.mp4"
              type="video/mp4"
            />
          </video>

          {/* Overlays */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/75" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/40" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

          {/* Premium floating elements */}
          <div className="absolute top-1/5 left-1/4 w-40 h-40 rounded-full filter blur-3xl bg-gradient-to-r from-primary/20 to-primary-glow/15 opacity-70" />
          <div className="absolute bottom-1/4 right-1/5 w-56 h-56 rounded-full filter blur-3xl bg-gradient-to-l from-primary-glow/18 to-primary/12 opacity-60" />
          <div className="absolute top-1/2 left-1/8 w-32 h-32 rounded-full filter blur-2xl bg-gradient-to-br from-primary/15 to-primary-glow/8 opacity-80" />
          <div className="absolute bottom-1/3 left-1/2 w-24 h-24 rounded-full filter blur-2xl bg-gradient-to-tr from-primary-glow/12 to-transparent opacity-70" />

          {/* Edge glow */}
          <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_120px_rgba(56,189,248,0.08),inset_0_0_200px_rgba(14,165,233,0.04)]" />
          <div className="absolute inset-0 rounded-3xl border border-gradient-to-r from-primary/30 via-sky-blue-500/20 to-primary/30 opacity-50" />

          {/* ====== CONTENT (storytelling animations) ====== */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="relative lg:absolute lg:inset-0 flex flex-col justify-center lg:justify-end p-4 sm:p-6 lg:p-12 pt-6 sm:pt-10 lg:pt-24 pb-10 sm:pb-12 lg:pb-12 z-20"
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-6 lg:gap-8">
              {/* LEFT: Copy */}
              <div className="flex-1 max-w-5xl">
                {/* Headline */}
                <motion.h1
                  variants={rise}
                  className="text-[4.8rem] sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-8 sm:mb-10 text-center lg:text-left"
                >
                  <span className="inline-block">
                    Il tuo reparto vendite e marketing{" "}
                  </span>
                  <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent inline-block relative">
                    on-demand
                    {/* underline sweep */}
                    <motion.span
                      initial={{ scaleX: 0, opacity: 0.7 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                      className="block absolute -bottom-2 left-0 h-[3px] w-full origin-left bg-gradient-to-r from-primary to-primary-glow"
                    />
                  </span>
                  <div className="text-2xl sm:text-5xl lg:text-5xl text-white/95 font-bold tracking-wide mt-4">
                    cresci senza pensieri
                  </div>
                </motion.h1>

                {/* Subcopy */}
                <motion.div variants={softRise} className="mb-6 lg:mb-10">
                  <div className="relative inline-block">
                    <p className="inline-block w-fit max-w-[60ch] text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed backdrop-blur-xl bg-gradient-to-r from-black/30 via-black/20 to-black/30 rounded-2xl px-4 lg:px-6 py-3 lg:py-4 border border-white/10 shadow-2xl">
                      Un'unica squadra dedicata che prende in mano i tuoi{" "}
                      <span className="text-primary font-semibold">funnel B2B</span>,<br />
                      ottimizza performance e libera il tuo tempo.
                    </p>
                    <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary-glow/20 to-primary/20 rounded-2xl blur-lg opacity-50" />
                  </div>
                </motion.div>

                {/* Proof line */}
                <motion.div variants={softRise} className="mb-6 lg:mb-8">
                  <p className="text-sm text-white/80 font-medium">
                    Audit 30 min • Nessun impegno • Risposta entro 2 ore • 500+ clienti
                  </p>
                </motion.div>

                {/* CTA */}
                <motion.div variants={pop} className="relative group mb-8 sm:mb-0 flex justify-center lg:justify-start">
                  <Button className="relative font-bold px-6 lg:px-10 py-3 lg:py-5 text-base lg:text-lg rounded-full shadow-2xl hover:shadow-[0_0_50px_hsl(var(--primary-glow)/0.4)] transition-all duration-700 transform lg:hover:scale-110 bg-gradient-to-r from-white via-gray-50 to-white text-black hover:from-primary hover:via-primary-glow hover:to-primary hover:text-white border-2 border-white/60 hover:border-primary/70 backdrop-blur-xl overflow-hidden group">
                    <div className="absolute inset-0 -top-2 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <span className="flex items-center space-x-2 lg:space-x-3 relative z-10">
                      <span className="relative">
                        Prenota consulenza
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                          className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary to-primary-glow"
                        />
                      </span>
                      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-3 transition-all duration-500 group-hover:text-white" />
                    </span>
                  </Button>
                </motion.div>
              </div>

              {/* RIGHT: Video card */}
              <motion.div variants={softRise} className="w-full sm:w-80 lg:w-80 lg:flex-shrink-0">
                <motion.div
                  initial={{ y: 0 }}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 120, damping: 12 }}
                  className="relative group"
                >
                  <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden shadow-2xl border border-white/40 backdrop-blur-xl bg-gradient-to-br from-black/30 via-black/20 to-black/30 lg:group-hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] transition-all duration-700 lg:group-hover:scale-110">
                    <iframe
                      src="https://www.youtube.com/embed/ZocHP6N9Aig"
                      title="Sales on Demand spiegata in 30 minuti"
                      className="w-full h-full rounded-2xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-sky-blue-500/5" />
                  </div>

                  {/* Floating borders */}
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary/40 via-primary-glow/40 to-primary/40 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 -z-10 filter blur-md" />
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 via-primary-glow/20 to-primary/20 opacity-0 lg:group-hover:opacity-70 transition-opacity duration-700 -z-20 filter blur-xl" />

                  {/* Label (mobile below, desktop floating) */}
                  <div
                    className="
                      static sm:absolute
                      top-auto sm:-top-12
                      left-auto sm:left-1/2
                      translate-x-0 sm:-translate-x-1/2
                      mt-1 sm:mt-0
                      w-full sm:w-auto
                      flex sm:block justify-center
                      z-10
                    "
                  >
                    <span
                      className="
                        inline-flex items-center
                        px-4 sm:px-6 py-1.5 sm:py-2
                        bg-gradient-to-r from-primary/90 via-primary-glow/90 to-primary/90
                        text-white text-xs sm:text-sm font-bold
                        rounded-full backdrop-blur-xl border border-white/40 shadow-xl
                        whitespace-nowrap
                      "
                    >
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white mr-2 animate-pulse" />
                      Sales on Demand spiegata in 30'
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          {/* ====== /CONTENT ====== */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
