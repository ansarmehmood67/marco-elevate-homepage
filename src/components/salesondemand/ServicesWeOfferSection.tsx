import salesImage from "@/assets/sales-on-demand.jpg";
import consultingImage from "@/assets/strategic-consulting.jpg";
import aiImage from "@/assets/instant-avatar.jpg";

const ServicesWeOfferSection = ({ isDark }: { isDark: boolean }) => {
  const services = [
    {
      title: "Lead Generation",
      subtitle: "Database Profiling & Qualification",
      description: "Database profiling and contact qualification with advanced tools.",
      image: salesImage,
      accentColor: "blue",
      icon: "🎯"
    },
    {
      title: "Telemarketing", 
      subtitle: "Proactive Outbound Strategy",
      description: "Proactive outbound calling to engage and convert prospects.",
      image: consultingImage,
      accentColor: "purple",
      icon: "📞"
    },
    {
      title: "Pipeline Management",
      subtitle: "CRM & Automation Systems",
      description: "Appointment setting, CRM tracking, and follow-up automation.",
      image: aiImage,
      accentColor: "emerald",
      icon: "📋"
    },
    {
      title: "Field Sales",
      subtitle: "Direct Contract Closures",
      description: "In-person sales meetings and direct contract closures.",
      image: salesImage,
      accentColor: "blue",
      icon: "🤝"
    },
    {
      title: "Sales Direction On Demand",
      subtitle: "Strategic KPI Oversight",
      description: "External sales manager for KPI tracking and strategic oversight.",
      image: consultingImage,
      accentColor: "purple",
      icon: "📊"
    },
    {
      title: "On-Demand Flexibility",
      subtitle: "Scalable & Instant Activation",
      description: "Instant activation, scalable teams, and no long-term contracts.",
      image: aiImage,
      accentColor: "emerald",
      icon: "🔁"
    }
  ];

  return (
    <section className={`relative overflow-hidden transition-all duration-500 ${
      isDark ? 'bg-black' : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'
    }`}>
      {/* Background Pattern */}
      <div className={`absolute inset-0 opacity-30 ${
        isDark 
          ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]' 
          : 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]'
      }`} />

      <div className="container mx-auto px-6 py-20 lg:py-32 relative z-10">
        {/* Header Section */}
        <div className="mb-16 px-4">
          <div className={`text-sm uppercase tracking-wider mb-6 font-semibold transition-colors duration-500 ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`}>
            / Services We Offer
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Heading */}
            <div>
              <h2 className={`text-5xl lg:text-7xl font-bold leading-tight transition-colors duration-500 ${
                isDark 
                  ? 'text-white' 
                  : 'text-slate-900'
              }`}>
                Complete 
                <br />
                <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                  isDark 
                    ? 'from-blue-400 via-purple-400 to-emerald-400' 
                    : 'from-blue-600 via-purple-600 to-emerald-600'
                }`}>
                  Sales Cycle
                </span>
              </h2>
            </div>

            {/* Right Side - Text */}
            <div className="space-y-8">
              <p className={`text-lg lg:text-xl leading-relaxed transition-colors duration-500 ${
                isDark ? 'text-slate-200' : 'text-slate-700'
              }`}>
                From lead generation to deal closure, we handle every aspect of your sales process with precision and expertise.
              </p>
            </div>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`relative overflow-hidden rounded-3xl h-[700px] transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 ${
                isDark 
                  ? 'shadow-2xl shadow-black/50 hover:shadow-3xl hover:shadow-black/70' 
                  : 'shadow-xl shadow-slate-900/15 hover:shadow-2xl hover:shadow-slate-900/25'
              }`}>
                
                {/* Full Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-[8s] ease-out group-hover:scale-110"
                  />
                  {/* Dark overlay for text readability */}
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    isDark 
                      ? 'bg-gradient-to-t from-black/95 via-black/70 to-black/40' 
                      : 'bg-gradient-to-t from-white/95 via-white/70 to-white/40'
                  }`} />
                  
                  {/* Accent Color Overlay */}
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    service.accentColor === 'blue' 
                      ? (isDark ? 'bg-gradient-to-br from-blue-900/40 to-transparent' : 'bg-gradient-to-br from-blue-100/50 to-transparent')
                      : service.accentColor === 'purple'
                      ? (isDark ? 'bg-gradient-to-br from-purple-900/40 to-transparent' : 'bg-gradient-to-br from-purple-100/50 to-transparent')
                      : (isDark ? 'bg-gradient-to-br from-emerald-900/40 to-transparent' : 'bg-gradient-to-br from-emerald-100/50 to-transparent')
                  }`} />
                </div>

                {/* Content Container */}
                <div className="relative z-20 h-full flex flex-col justify-between p-12">
                  {/* Top Section - Icon with Accent Line */}
                  <div className="flex flex-col space-y-6">
                    <div className={`w-20 h-1.5 rounded-full transition-all duration-500 ${
                      service.accentColor === 'blue' 
                        ? (isDark ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 'bg-gradient-to-r from-blue-500 to-blue-700')
                        : service.accentColor === 'purple'
                        ? (isDark ? 'bg-gradient-to-r from-purple-400 to-purple-600' : 'bg-gradient-to-r from-purple-500 to-purple-700')
                        : (isDark ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'bg-gradient-to-r from-emerald-500 to-emerald-700')
                    } group-hover:w-24`} />
                    
                    {/* Large Icon */}
                    <div className={`text-6xl transition-all duration-500 ${
                      isDark ? 'drop-shadow-2xl' : 'drop-shadow-lg'
                    }`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Middle Section - Number Display */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className={`text-9xl font-black transition-all duration-500 ${
                      isDark ? 'text-white/10 group-hover:text-white/20' : 'text-slate-900/10 group-hover:text-slate-900/20'
                    }`}>
                      0{index + 1}
                    </div>
                  </div>

                  {/* Bottom Section - Content */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className={`text-3xl lg:text-4xl font-bold leading-tight transition-colors duration-500 ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {service.title}
                      </h3>
                      
                      <p className={`text-lg font-semibold transition-colors duration-500 ${
                        service.accentColor === 'blue' 
                          ? (isDark ? 'text-blue-300' : 'text-blue-700')
                          : service.accentColor === 'purple'
                          ? (isDark ? 'text-purple-300' : 'text-purple-700')
                          : (isDark ? 'text-emerald-300' : 'text-emerald-700')
                      }`}>
                        {service.subtitle}
                      </p>
                      
                      <p className={`text-base leading-relaxed transition-colors duration-500 ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Accent Bar */}
                    <div className={`h-1 w-full rounded-full transition-all duration-500 ${
                      service.accentColor === 'blue' 
                        ? (isDark ? 'bg-gradient-to-r from-blue-400/50 to-blue-600/50 group-hover:from-blue-400 group-hover:to-blue-600' : 'bg-gradient-to-r from-blue-500/50 to-blue-700/50 group-hover:from-blue-500 group-hover:to-blue-700')
                        : service.accentColor === 'purple'
                        ? (isDark ? 'bg-gradient-to-r from-purple-400/50 to-purple-600/50 group-hover:from-purple-400 group-hover:to-purple-600' : 'bg-gradient-to-r from-purple-500/50 to-purple-700/50 group-hover:from-purple-500 group-hover:to-purple-700')
                        : (isDark ? 'bg-gradient-to-r from-emerald-400/50 to-emerald-600/50 group-hover:from-emerald-400 group-hover:to-emerald-600' : 'bg-gradient-to-r from-emerald-500/50 to-emerald-700/50 group-hover:from-emerald-500 group-hover:to-emerald-700')
                    }`} />
                  </div>
                </div>

                {/* Premium Glow Border Effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  service.accentColor === 'blue' 
                    ? 'shadow-[inset_0_0_0_2px_rgba(59,130,246,0.3)]'
                    : service.accentColor === 'purple'
                    ? 'shadow-[inset_0_0_0_2px_rgba(147,51,234,0.3)]'
                    : 'shadow-[inset_0_0_0_2px_rgba(16,185,129,0.3)]'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesWeOfferSection;