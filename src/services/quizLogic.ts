import { BusinessNeed, TeamSize, Preference, ServiceRecommendation } from "@/types/quiz";

export const getServiceRecommendation = (
  businessNeed: BusinessNeed,
  teamSize: TeamSize,
  preference: Preference
): ServiceRecommendation => {
  // Service recommendations mapping
  const services: Record<string, ServiceRecommendation> = {
    "outsourcing-forza-vendita": {
      id: "outsourcing-forza-vendita",
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
      route: "/outsourcing-forza-vendita",
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
      detailedDescription: "Transform your customer service with our professional inbound contact center. We handle customer inquiries, support requests, and sales calls with the highest level of professionalism, ensuring your customers receive exceptional service 24/7.",
      features: [
        "24/7 professional customer support",
        "Multi-channel communication (phone, email, chat)",
        "Customer satisfaction focus with KPIs",
        "Seamless CRM integration",
        "Escalation procedures and quality assurance",
        "Real-time reporting and analytics"
      ],
      benefits: [
        "Improve customer satisfaction by 85%",
        "Reduce response time by 60%",
        "Scale support without hiring costs",
        "Professional brand representation"
      ],
      ctaText: "Improve Customer Support",
      route: "/contact-center-inbound",
      icon: "Headphones",
      videoUrl: "https://www.youtube.com/embed/ZocHP6N9Aig",
      testimonial: {
        text: "Customer satisfaction increased from 70% to 95% with their professional support team.",
        author: "Anna Bianchi, Operations Manager"
      }
    },
    "outsourcing-marketing": {
      id: "outsourcing-marketing",
      title: "Outsourcing Marketing",
      description: "Complete marketing team to build your brand presence",
      detailedDescription: "Get a full marketing department without the overhead. Our experienced marketing team handles everything from strategy to execution, building your brand presence across all channels and driving qualified leads to your business.",
      features: [
        "Complete marketing team (strategy, creative, digital)",
        "Multi-channel campaigns (social, PPC, content)",
        "Professional brand development",
        "ROI-focused marketing strategies",
        "Content creation and management",
        "Performance tracking and optimization"
      ],
      benefits: [
        "Get a full marketing team for 50% less cost",
        "Increase brand awareness by 200%",
        "Generate 5x more qualified leads",
        "Professional marketing execution"
      ],
      ctaText: "Build My Brand",
      route: "/outsourcing-marketing",
      icon: "Megaphone",
      videoUrl: "https://www.youtube.com/embed/ZocHP6N9Aig",
      testimonial: {
        text: "Our brand went from unknown to industry leader with their marketing expertise.",
        author: "Giuseppe Verdi, Founder"
      }
    },
    "audit-vendite": {
      id: "audit-vendite",
      title: "Audit Vendite",
      description: "Comprehensive sales performance analysis and optimization",
      detailedDescription: "Get a complete analysis of your sales process with actionable recommendations. Our sales audit identifies bottlenecks, inefficiencies, and missed opportunities in your sales funnel, providing you with a clear roadmap to improve performance.",
      features: [
        "Complete sales process analysis",
        "Performance bottleneck identification",
        "Sales team skill assessment",
        "CRM and tools evaluation",
        "Competitor analysis and benchmarking",
        "Detailed action plan with priorities"
      ],
      benefits: [
        "Identify revenue opportunities worth 30-50%",
        "Improve conversion rates by 40%",
        "Optimize sales cycle time",
        "Professional sales methodology"
      ],
      ctaText: "Analyze My Sales",
      route: "/audit-vendite",
      icon: "BarChart3",
      videoUrl: "https://www.youtube.com/embed/ZocHP6N9Aig",
      testimonial: {
        text: "The audit revealed $200K in missed opportunities and improved our sales by 45%.",
        author: "Roberto Martini, Sales Director"
      }
    },
    "consulenza-marketing": {
      id: "consulenza-marketing",
      title: "Consulenza Marketing",
      description: "Strategic marketing consulting to develop winning strategies",
      detailedDescription: "Transform your marketing approach with expert strategic guidance. Our marketing consultants help you develop comprehensive strategies that drive real results, from market analysis to campaign execution and performance optimization.",
      features: [
        "Complete marketing strategy development",
        "Market analysis and competitor research",
        "Custom marketing roadmap and timeline",
        "Campaign planning and optimization",
        "Brand positioning and messaging",
        "Implementation guidance and support"
      ],
      benefits: [
        "Increase marketing ROI by 150%",
        "Reduce wasted ad spend by 60%",
        "Build stronger brand positioning",
        "Expert strategic guidance"
      ],
      ctaText: "Get Marketing Strategy",
      route: "/consulenza-marketing",
      icon: "Target",
      videoUrl: "https://www.youtube.com/embed/ZocHP6N9Aig",
      testimonial: {
        text: "Their marketing strategy increased our qualified leads by 300% in 6 months.",
        author: "Elena Rossi, Marketing Manager"
      }
    },
    "monetizza-youtube": {
      id: "monetizza-youtube",
      title: "Monetizza YouTube",
      description: "Maximize your YouTube revenue with proven strategies",
      detailedDescription: "Transform your YouTube channel into a revenue-generating machine. We help businesses create, optimize, and monetize YouTube content that drives views, engagement, and most importantly - sales and leads for your business.",
      features: [
        "Channel optimization and branding",
        "Content strategy for business growth",
        "Monetization setup and optimization",
        "Audience growth tactics and SEO",
        "Video marketing funnel creation",
        "Analytics and performance tracking"
      ],
      benefits: [
        "Achieve YouTube monetization faster",
        "Generate qualified leads from videos",
        "Build authority in your industry",
        "Create passive income streams"
      ],
      ctaText: "Monetize My Channel",
      route: "/monetizza-youtube",
      icon: "Youtube",
      videoUrl: "https://www.youtube.com/embed/ZocHP6N9Aig",
      testimonial: {
        text: "We went from 0 to $5K monthly YouTube revenue and 50+ leads per month from our channel.",
        author: "Marco Ferrario, Business Coach"
      }
    },
    "instant-avatar": {
      id: "instant-avatar",
      title: "Instant Avatar",
      description: "AI-powered avatar for automated conversations and onboarding",
      detailedDescription: "Create your digital twin that works 24/7. Our AI avatars handle customer interactions, lead qualification, and onboarding processes with your personality and expertise, providing personalized experiences at scale.",
      features: [
        "Personalized AI avatar creation",
        "Natural conversation automation",
        "Lead qualification and scoring",
        "Customer onboarding automation",
        "24/7 availability and responses",
        "Multi-language support"
      ],
      benefits: [
        "Handle 10x more conversations simultaneously",
        "Never miss a lead or inquiry",
        "Consistent brand representation",
        "Reduce response time to seconds"
      ],
      ctaText: "Create My Avatar",
      route: "/instant-avatar",
      icon: "Bot",
      videoUrl: "https://www.youtube.com/embed/ZocHP6N9Aig",
      testimonial: {
        text: "Our AI avatar qualified 200+ leads while we slept and booked 30 sales calls automatically.",
        author: "Giulia Romano, Entrepreneur"
      }
    },
    "chatbot-ai": {
      id: "chatbot-ai",
      title: "Chatbot AI",
      description: "Enterprise chatbot solutions for larger teams",
      detailedDescription: "Scale your customer support and engagement with enterprise-grade chatbot solutions. Perfect for larger teams who need advanced AI capabilities, multi-user management, and seamless integration with existing business systems.",
      features: [
        "Advanced enterprise AI chatbot",
        "Multi-user team management",
        "Advanced analytics and reporting",
        "Custom AI training and fine-tuning",
        "Enterprise security and compliance",
        "Advanced integration capabilities"
      ],
      benefits: [
        "Scale support to handle 1000+ daily inquiries",
        "Reduce support costs by 70%",
        "24/7 enterprise-level support",
        "Advanced customization options"
      ],
      ctaText: "Get Enterprise Chatbot",
      route: "/chatbot-ai",
      icon: "MessageSquare",
      videoUrl: "https://www.youtube.com/embed/ZocHP6N9Aig",
      testimonial: {
        text: "The enterprise chatbot handles 80% of our support tickets and improved customer satisfaction to 95%.",
        author: "Francesco Bianchi, IT Director"
      }
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
      detailedDescription: "Build powerful web applications and mobile apps that drive your business forward. Our development team creates scalable, modern solutions using the latest technologies to give you a competitive edge in the digital marketplace.",
      features: [
        "Custom web and mobile app development",
        "Modern, responsive design",
        "Full-stack development capabilities",
        "API integration and backend services",
        "Performance optimization",
        "Ongoing maintenance and support"
      ],
      benefits: [
        "Launch your digital product in 60-90 days",
        "Scalable architecture for growth",
        "Mobile-first responsive design",
        "Professional development team"
      ],
      ctaText: "Build My App",
      route: "/web-app-development",
      icon: "Code",
      videoUrl: "https://www.youtube.com/embed/ZocHP6N9Aig",
      testimonial: {
        text: "They built our custom CRM in 8 weeks, which increased our productivity by 150%.",
        author: "Andrea Rossi, Tech Founder"
      }
    },
    "saas-platforms": {
      id: "saas-platforms",
      title: "SaaS Platforms",
      description: "Launch your SaaS product with our platform expertise",
      detailedDescription: "Turn your idea into a successful SaaS business. We handle the entire development process from concept to launch, building scalable platforms that can handle thousands of users and generate recurring revenue.",
      features: [
        "Complete SaaS platform development",
        "Scalable cloud architecture",
        "User management and billing integration",
        "API development and documentation",
        "Security and compliance features",
        "Launch strategy and go-to-market support"
      ],
      benefits: [
        "Launch your SaaS in 3-4 months",
        "Built for scale from day one",
        "Recurring revenue model",
        "Expert technical guidance"
      ],
      ctaText: "Launch My SaaS",
      route: "/saas-platforms",
      icon: "Cloud",
      videoUrl: "https://www.youtube.com/embed/ZocHP6N9Aig",
      testimonial: {
        text: "Our SaaS platform reached $50K MRR within 6 months of launch with their expert development.",
        author: "Simone Verde, SaaS Founder"
      }
    },
    "smart-ai-tools": {
      id: "smart-ai-tools",
      title: "Smart AI Tools",
      description: "Build intelligent internal tools for your business",
      detailedDescription: "Create custom AI-powered tools that solve your specific business challenges. From automated reporting dashboards to intelligent data analysis tools, we build solutions that make your team more productive and your business more efficient.",
      features: [
        "Custom AI tool development",
        "Intelligent data processing",
        "Automated reporting and dashboards",
        "Predictive analytics capabilities",
        "Integration with existing systems",
        "User-friendly interfaces"
      ],
      benefits: [
        "Increase team productivity by 300%",
        "Get insights from your data instantly",
        "Automate complex business processes",
        "Custom solutions for unique needs"
      ],
      ctaText: "Build Smart Tools",
      route: "/smart-ai-tools",
      icon: "Wrench",
      videoUrl: "https://www.youtube.com/embed/ZocHP6N9Aig",
      testimonial: {
        text: "Their custom AI tool processes our data 50x faster and provides insights we never had before.",
        author: "Marco Ferrari, Data Manager"
      }
    },
    "ai-integration": {
      id: "ai-integration",
      title: "AI Integration",
      description: "Integrate AI capabilities into your existing systems",
      detailedDescription: "Enhance your existing business systems with powerful AI capabilities. We seamlessly integrate artificial intelligence into your current workflows, databases, and applications without disrupting your operations.",
      features: [
        "Seamless system integration",
        "AI enhancement of existing tools",
        "Legacy system modernization",
        "API-based AI services",
        "Performance optimization",
        "Training and support"
      ],
      benefits: [
        "Enhance existing systems without replacement",
        "Improve efficiency by 200%",
        "Minimal business disruption",
        "Future-proof your technology"
      ],
      ctaText: "Integrate AI",
      route: "/ai-integration",
      icon: "Puzzle",
      videoUrl: "https://www.youtube.com/embed/ZocHP6N9Aig",
      testimonial: {
        text: "AI integration transformed our legacy CRM into an intelligent sales powerhouse.",
        author: "Francesca Neri, IT Director"
      }
    },
    "strategic-consulting": {
      id: "strategic-consulting",
      title: "Strategic Consulting",
      description: "Expert guidance to identify the best solution for your business",
      detailedDescription: "Get expert strategic guidance to transform your business. Our consultants bring 25+ years of experience helping companies identify opportunities, optimize processes, and implement winning strategies that drive sustainable growth.",
      features: [
        "Comprehensive business analysis",
        "Strategic planning and roadmapping",
        "Performance optimization strategies",
        "Implementation guidance",
        "Ongoing strategic support",
        "Results measurement and optimization"
      ],
      benefits: [
        "Get clarity on your growth strategy",
        "Identify revenue opportunities",
        "Expert guidance and mentorship",
        "Proven methodologies and frameworks"
      ],
      ctaText: "Book Free Consultation",
      route: "/consulenza-strategica",
      icon: "Lightbulb",
      videoUrl: "https://www.youtube.com/embed/ZocHP6N9Aig",
      testimonial: {
        text: "Strategic consulting helped us identify $500K in new revenue opportunities and scale 300%.",
        author: "Alessandro Bianchi, CEO"
      }
    }
  };

  // Logic mapping based on user answers
  
  // Direct matches based on business need and preference
  if (businessNeed === "Close more sales without hiring a team" && preference === "I want someone to do it for me") {
    return services["outsourcing-forza-vendita"];
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