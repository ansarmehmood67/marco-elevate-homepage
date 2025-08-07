import { BusinessNeed, TeamSize, Preference, ServiceRecommendation } from "@/types/quiz";

export const getServiceRecommendation = (
  businessNeed: BusinessNeed,
  teamSize: TeamSize,
  preference: Preference
): ServiceRecommendation => {
  // Service recommendations mapping
  const services: Record<string, ServiceRecommendation> = {
    "outsourcing-salesforce": {
      id: "outsourcing-salesforce",
      title: "Outsourcing Salesforce",
      description: "Dedicated sales team to close more deals without hiring internal staff",
      detailedDescription: "Transform your sales performance with our dedicated team of sales professionals. We handle the entire sales process from lead qualification to deal closure, allowing you to focus on growing your business without the overhead of hiring and training an internal sales team.",
      features: [
        "Professional sales team ready to go",
        "Proven closing methodologies",
        "No hiring or training costs",
        "Performance-based results",
        "CRM integration and management",
        "Real-time reporting and analytics"
      ],
      benefits: [
        "Reduce hiring costs by up to 70%",
        "Increase conversion rates by 40-60%",
        "Scale your sales team instantly",
        "Access to experienced sales professionals"
      ],
      ctaText: "Get My Sales Team",
      route: "/outsourcing-salesforce",
      icon: "Users",
      videoUrl: "https://www.youtube.com/embed/ZocHP6N9Aig",
      testimonial: {
        text: "Our sales increased by 150% in just 3 months with their professional sales team.",
        author: "Marco Rossi, CEO TechCorp"
      }
    },
    "telemarketing-teleselling": {
      id: "telemarketing-teleselling",
      title: "Telemarketing & Teleselling",
      description: "Generate qualified leads through professional outbound campaigns",
      detailedDescription: "Boost your lead generation with our professional telemarketing services. Our experienced team combines proven scripts, targeted lists, and strategic calling to connect you with high-quality prospects that convert into paying customers.",
      features: [
        "Professional call center team with proven track record",
        "Custom scripting and targeting for your industry",
        "Real-time reporting and analytics dashboard",
        "Qualified lead generation with scoring system",
        "LinkedIn Sales Navigator integration",
        "Multi-channel follow-up campaigns"
      ],
      benefits: [
        "Generate 3-5x more qualified leads",
        "Reduce cost per lead by 50%",
        "Professional brand representation",
        "Scalable campaign management"
      ],
      ctaText: "Start Generating Leads",
      route: "/telemarketing-teleselling",
      icon: "Phone",
      videoUrl: "https://www.youtube.com/embed/ZocHP6N9Aig",
      testimonial: {
        text: "We went from 10 leads per month to 150 qualified leads with their telemarketing service.",
        author: "Sarah Johnson, Marketing Director"
      }
    },
    "contact-center-inbound": {
      id: "contact-center-inbound",
      title: "Contact Center Inbound",
      description: "Professional customer support and inbound call handling",
      features: [
        "24/7 professional support",
        "Multi-channel communication",
        "Customer satisfaction focus",
        "Seamless integration"
      ],
      ctaText: "Improve Customer Support",
      route: "/contact-center-inbound",
      icon: "Headphones"
    },
    "outsourcing-marketing": {
      id: "outsourcing-marketing",
      title: "Outsourcing Marketing",
      description: "Complete marketing team to build your brand presence",
      features: [
        "Full marketing team",
        "Multi-channel campaigns",
        "Brand development",
        "ROI-focused strategies"
      ],
      ctaText: "Build My Brand",
      route: "/outsourcing-marketing",
      icon: "Megaphone"
    },
    "audit-vendite": {
      id: "audit-vendite",
      title: "Audit Vendite",
      description: "Comprehensive sales performance analysis and optimization",
      features: [
        "Complete sales audit",
        "Performance optimization",
        "Process improvement",
        "Data-driven insights"
      ],
      ctaText: "Analyze My Sales",
      route: "/audit-vendite",
      icon: "BarChart3"
    },
    "consulenza-marketing": {
      id: "consulenza-marketing",
      title: "Consulenza Marketing",
      description: "Strategic marketing consulting to develop winning strategies",
      features: [
        "Marketing strategy development",
        "Expert consultation",
        "Custom roadmap",
        "Implementation guidance"
      ],
      ctaText: "Get Marketing Strategy",
      route: "/consulenza-marketing",
      icon: "Target"
    },
    "monetizza-youtube": {
      id: "monetizza-youtube",
      title: "Monetizza YouTube",
      description: "Maximize your YouTube revenue with proven strategies",
      features: [
        "Revenue optimization",
        "Content strategy",
        "Audience growth",
        "Monetization tactics"
      ],
      ctaText: "Monetize My Channel",
      route: "/monetizza-youtube",
      icon: "Youtube"
    },
    "instant-avatar": {
      id: "instant-avatar",
      title: "Instant Avatar",
      description: "AI-powered avatar for automated conversations and onboarding",
      features: [
        "AI conversation automation",
        "Personal avatar creation",
        "24/7 availability",
        "Easy integration"
      ],
      ctaText: "Create My Avatar",
      route: "/instant-avatar",
      icon: "Bot"
    },
    "chatbot-ai": {
      id: "chatbot-ai",
      title: "Chatbot AI",
      description: "Enterprise chatbot solutions for larger teams",
      features: [
        "Advanced AI chatbot",
        "Enterprise integration",
        "Multi-user support",
        "Custom training"
      ],
      ctaText: "Get Enterprise Chatbot",
      route: "/chatbot-ai",
      icon: "MessageSquare"
    },
    "automazione-ai": {
      id: "automazione-ai",
      title: "Automazione AI",
      description: "Automate your business processes with intelligent AI solutions",
      detailedDescription: "Transform your business efficiency with custom AI automations. We eliminate repetitive tasks, reduce errors, and accelerate your workflows using cutting-edge AI technology tailored to your specific business needs.",
      features: [
        "Custom AI process automation",
        "Intelligent workflow optimization",
        "Email and communication automation",
        "CRM and data management automation",
        "Report generation and analytics",
        "Integration with existing systems"
      ],
      benefits: [
        "Save 20-30 hours per week on manual tasks",
        "Reduce human errors by 95%",
        "Increase productivity by 200%",
        "ROI within 60 days"
      ],
      ctaText: "Automate My Business",
      route: "/automazione-ai",
      icon: "Zap",
      videoUrl: "https://www.youtube.com/embed/ZocHP6N9Aig",
      testimonial: {
        text: "AI automation saved us 25 hours weekly and eliminated 90% of manual errors.",
        author: "Laura Bianchi, Operations Manager"
      }
    },
    "web-app-development": {
      id: "web-app-development",
      title: "Web & App Development",
      description: "Custom website and mobile app development solutions",
      features: [
        "Custom development",
        "Modern technologies",
        "Mobile responsive",
        "Full-stack solutions"
      ],
      ctaText: "Build My App",
      route: "/web-app-development",
      icon: "Code"
    },
    "saas-platforms": {
      id: "saas-platforms",
      title: "SaaS Platforms",
      description: "Launch your SaaS product with our platform expertise",
      features: [
        "SaaS development",
        "Scalable architecture",
        "Platform optimization",
        "Launch support"
      ],
      ctaText: "Launch My SaaS",
      route: "/saas-platforms",
      icon: "Cloud"
    },
    "smart-ai-tools": {
      id: "smart-ai-tools",
      title: "Smart AI Tools",
      description: "Build intelligent internal tools for your business",
      features: [
        "Custom AI tools",
        "Internal solutions",
        "Smart automation",
        "Business optimization"
      ],
      ctaText: "Build Smart Tools",
      route: "/smart-ai-tools",
      icon: "Wrench"
    },
    "ai-integration": {
      id: "ai-integration",
      title: "AI Integration",
      description: "Integrate AI capabilities into your existing systems",
      features: [
        "System integration",
        "AI enhancement",
        "Seamless deployment",
        "Performance boost"
      ],
      ctaText: "Integrate AI",
      route: "/ai-integration",
      icon: "Puzzle"
    },
    "strategic-consulting": {
      id: "strategic-consulting",
      title: "Strategic Consulting",
      description: "Expert guidance to identify the best solution for your business",
      features: [
        "Expert consultation",
        "Business analysis",
        "Strategic guidance",
        "Custom recommendations"
      ],
      ctaText: "Book Free Consultation",
      route: "/consulenza-strategica",
      icon: "Lightbulb"
    }
  };

  // Logic mapping based on user answers
  
  // Direct matches based on business need and preference
  if (businessNeed === "Close more sales without hiring a team" && preference === "I want someone to do it for me") {
    return services["outsourcing-salesforce"];
  }
  
  if (businessNeed === "Generate more qualified leads" && preference === "I want someone to do it for me") {
    return services["telemarketing-teleselling"];
  }
  
  if (businessNeed === "Improve customer support or inbound call handling") {
    return services["contact-center-inbound"];
  }
  
  if (businessNeed === "Build stronger marketing presence") {
    return services["outsourcing-marketing"];
  }
  
  if (businessNeed === "Analyze and improve sales performance") {
    return services["audit-vendite"];
  }
  
  if (businessNeed === "Develop a winning marketing strategy") {
    return services["consulenza-marketing"];
  }
  
  if (businessNeed === "Monetize YouTube content") {
    return services["monetizza-youtube"];
  }
  
  // Team size based logic for conversation automation
  if (businessNeed === "Automate conversations or onboarding") {
    if (teamSize === "Solo / Freelancer" || teamSize === "Small team (2–5)") {
      return services["instant-avatar"];
    } else {
      return services["chatbot-ai"];
    }
  }
  
  if (businessNeed === "Automate business processes using AI") {
    return services["automazione-ai"];
  }
  
  if (businessNeed === "Build a website or mobile app") {
    return services["web-app-development"];
  }
  
  if (businessNeed === "Launch a SaaS product or platform") {
    return services["saas-platforms"];
  }
  
  if (businessNeed === "Build smart internal tools") {
    return services["smart-ai-tools"];
  }
  
  if (businessNeed === "Integrate AI into existing systems") {
    return services["ai-integration"];
  }
  
  // Fallback for "Not sure" or no clear match
  return services["strategic-consulting"];
};

export const generateResultUrl = (answers: any): string => {
  const params = new URLSearchParams({
    need: answers.businessNeed || '',
    size: answers.teamSize || '',
    pref: answers.preference || '',
    name: answers.name || '',
    email: answers.email || ''
  });
  
  return `/quiz-result?${params.toString()}`;
};