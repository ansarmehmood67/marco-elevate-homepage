import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import salesImage from "@/assets/sales-on-demand.jpg";
import consultingImage from "@/assets/strategic-consulting.jpg";
import aiImage from "@/assets/instant-avatar.jpg";

const ServicesWeOfferSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const services = [
    {
      title: "Lead Generation",
      subtitle: "Database Profiling & Qualification",
      description: "Database profiling and contact qualification with advanced tools.",
      image: salesImage,
      color: "from-blue-500 to-blue-600",
      icon: "🎯"
    },
    {
      title: "Telemarketing", 
      subtitle: "Proactive Outbound Strategy",
      description: "Proactive outbound calling to engage and convert prospects.",
      image: consultingImage,
      color: "from-purple-500 to-purple-600",
      icon: "📞"
    },
    {
      title: "Pipeline Management",
      subtitle: "CRM & Automation Systems",
      description: "Appointment setting, CRM tracking, and follow-up automation.",
      image: aiImage,
      color: "from-emerald-500 to-emerald-600",
      icon: "📋"
    },
    {
      title: "Field Sales",
      subtitle: "Direct Contract Closures",
      description: "In-person sales meetings and direct contract closures.",
      image: salesImage,
      color: "from-blue-500 to-blue-600",
      icon: "🤝"
    },
    {
      title: "Sales Direction On Demand",
      subtitle: "Strategic KPI Oversight",
      description: "External sales manager for KPI tracking and strategic oversight.",
      image: consultingImage,
      color: "from-purple-500 to-purple-600",
      icon: "📊"
    },
    {
      title: "On-Demand Flexibility",
      subtitle: "Scalable & Instant Activation",
      description: "Instant activation, scalable teams, and no long-term contracts.",
      image: aiImage,
      color: "from-emerald-500 to-emerald-600",
      icon: "🔁"
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % services.length;
      visible.push({ ...services[index], originalIndex: index });
    }
    return visible;
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section with Navigation */}
        <div className="mb-16 px-4 relative">
          {/* Navigation Buttons - Upper Right */}
          <div className="absolute top-0 right-4 flex space-x-2 z-20">
            <button
              onClick={prevSlide}
              className="group flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 backdrop-blur-sm bg-white/80 hover:bg-white/90 border border-slate-200/50 hover:border-slate-300/60 text-slate-700 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={nextSlide}
              className="group flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 backdrop-blur-sm bg-white/80 hover:bg-white/90 border border-slate-200/50 hover:border-slate-300/60 text-slate-700 shadow-lg"
            >
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="inline-block mb-6">
            <span className="text-sm font-semibold tracking-wider uppercase px-6 py-3 rounded-full bg-primary/10 text-primary border border-primary/20">
              Services We Offer
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Heading */}
            <div>
              <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tight text-slate-900 mb-8">
                Complete{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Sales Cycle
                </span>
              </h2>
            </div>

            {/* Right Side - Text */}
            <div className="space-y-8">
              <p className="text-xl lg:text-2xl leading-relaxed text-slate-600 max-w-3xl">
                From lead generation to deal closure, we handle every aspect of your sales process with precision and expertise.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-105"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative mb-6 w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <span className="text-2xl">{service.icon}</span>
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 font-medium">
                  {service.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Floating Badge */}
              <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${service.color} rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50">
            <p className="text-lg text-slate-700 mb-6 max-w-2xl">
              Ready to transform your sales process? Choose the perfect solution for you
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
              Start Your Journey
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWeOfferSection;