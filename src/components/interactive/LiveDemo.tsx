import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, Bot, User, Code, Play, Calculator, TrendingUp } from "lucide-react";

interface LiveDemoProps {
  serviceType: "chatbot" | "development" | "youtube" | "roi" | "integration" | "automation" | "support" | "saas" | "tools" | "marketing" | "sales";
}

const ChatbotDemo = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Ciao! Sono il tuo assistente virtuale. Come posso aiutarti oggi?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const predefinedResponses = [
    "Perfetto! Ti metto in contatto con un nostro esperto che ti contatterà entro 24 ore.",
    "Abbiamo diverse soluzioni. Dimmi di più sul tuo budget e obiettivi.",
    "Ottima domanda! I nostri chatbot possono integrarsi con qualsiasi piattaforma.",
    "Ti invio subito il nostro case study più recente via email."
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setMessages(prev => [...prev, { type: "user", text: userMessage }]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const randomResponse = predefinedResponses[Math.floor(Math.random() * predefinedResponses.length)];
      setMessages(prev => [...prev, { type: "bot", text: randomResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-lg max-w-md mx-auto">
      <div className="bg-gradient-to-r from-[#2E8BC0] to-[#87CEEB] p-4 text-white">
        <div className="flex items-center gap-3">
          <Bot className="w-6 h-6" />
          <div>
            <h3 className="font-semibold">Assistente AI</h3>
            <p className="text-sm opacity-90">Online ora</p>
          </div>
        </div>
      </div>
      
      <div className="h-80 p-4 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-xs p-3 rounded-lg ${
              message.type === "user" 
                ? "bg-[#2E8BC0] text-white" 
                : "bg-slate-100 text-slate-900"
            }`}>
              <div className="flex items-start gap-2">
                {message.type === "bot" && <Bot className="w-4 h-4 mt-0.5 text-[#2E8BC0]" />}
                {message.type === "user" && <User className="w-4 h-4 mt-0.5" />}
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-100 p-3 rounded-lg">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-[#2E8BC0]" />
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 border-t border-slate-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Scrivi un messaggio..."
            className="flex-1 p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8BC0]"
          />
          <Button 
            onClick={handleSendMessage}
            size="sm"
            className="bg-[#2E8BC0] hover:bg-[#87CEEB]"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const CodePreview = () => {
  const [activeTab, setActiveTab] = useState("react");
  
  const codeExamples = {
    react: `// Componente React Performance-Optimized
import { memo, useCallback } from 'react';

const ProductCard = memo(({ product, onAddToCart }) => {
  const handleAddToCart = useCallback(() => {
    onAddToCart(product.id);
  }, [product.id, onAddToCart]);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">€{product.price}</p>
      <button onClick={handleAddToCart}>
        Aggiungi al carrello
      </button>
    </div>
  );
});

export default ProductCard;`,
    api: `// API Route Ottimizzata
export async function GET(request) {
  try {
    // Cache con Redis per performance
    const cached = await redis.get(\`products:\${params.id}\`);
    if (cached) return Response.json(cached);
    
    // Query database ottimizzata
    const product = await db.product.findUnique({
      where: { id: params.id },
      include: { 
        images: true,
        reviews: { take: 10, orderBy: { date: 'desc' } }
      }
    });
    
    // Cache per 1 ora
    await redis.setex(\`products:\${params.id}\`, 3600, product);
    
    return Response.json(product);
  } catch (error) {
    return Response.json({ error: 'Product not found' }, { status: 404 });
  }
}`,
    css: `/* CSS Ottimizzato per Performance */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  contain: layout style;
}

.product-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  contain: layout;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
}

.product-card img {
  aspect-ratio: 16/9;
  object-fit: cover;
  width: 100%;
  border-radius: 12px 12px 0 0;
}`
  };

  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg max-w-2xl mx-auto">
      <div className="flex items-center justify-between p-4 bg-slate-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex gap-2">
          {Object.keys(codeExamples).map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveTab(lang)}
              className={`px-3 py-1 text-xs rounded ${
                activeTab === lang
                  ? "bg-[#2E8BC0] text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <div className="p-4 h-80 overflow-y-auto">
        <pre className="text-sm text-slate-300">
          <code>{codeExamples[activeTab as keyof typeof codeExamples]}</code>
        </pre>
      </div>
    </div>
  );
};

const ROICalculator = () => {
  const [monthlyLeads, setMonthlyLeads] = useState(100);
  const [conversionRate, setConversionRate] = useState(2);
  const [averageOrderValue, setAverageOrderValue] = useState(150);
  
  const monthlyRevenue = monthlyLeads * (conversionRate / 100) * averageOrderValue;
  const yearlyRevenue = monthlyRevenue * 12;
  const investmentCost = 5000; // Costo medio progetto
  const roi = ((yearlyRevenue - investmentCost) / investmentCost) * 100;

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg max-w-lg mx-auto border border-slate-200">
      <div className="text-center mb-6">
        <Calculator className="w-8 h-8 text-[#2E8BC0] mx-auto mb-2" />
        <h3 className="text-xl font-bold text-slate-900">Calcolatore ROI</h3>
        <p className="text-sm text-slate-600">Scopri il potenziale del tuo investimento</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Lead mensili: {monthlyLeads}
          </label>
          <input
            type="range"
            min="50"
            max="1000"
            value={monthlyLeads}
            onChange={(e) => setMonthlyLeads(Number(e.target.value))}
            className="w-full accent-[#2E8BC0]"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Tasso di conversione: {conversionRate}%
          </label>
          <input
            type="range"
            min="1"
            max="10"
            step="0.5"
            value={conversionRate}
            onChange={(e) => setConversionRate(Number(e.target.value))}
            className="w-full accent-[#2E8BC0]"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Valore ordine medio: €{averageOrderValue}
          </label>
          <input
            type="range"
            min="50"
            max="500"
            value={averageOrderValue}
            onChange={(e) => setAverageOrderValue(Number(e.target.value))}
            className="w-full accent-[#2E8BC0]"
          />
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-br from-[#2E8BC0]/10 to-[#87CEEB]/10 rounded-lg">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-sm text-slate-600">Revenue Annuale</p>
            <p className="text-xl font-bold text-[#2E8BC0]">€{yearlyRevenue.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-slate-600">ROI</p>
            <p className="text-xl font-bold text-green-600">{roi.toFixed(0)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const LiveDemo = ({ serviceType }: LiveDemoProps) => {
  const getDemoTitle = () => {
    switch (serviceType) {
      case "chatbot":
        return "Prova il Chatbot AI";
      case "development":
        return "Codice in Azione";
      case "youtube":
        return "YouTube Analytics";
      case "roi":
        return "Calcola il ROI";
      default:
        return "Demo Interattiva";
    }
  };

  const getDemoDescription = () => {
    switch (serviceType) {
      case "chatbot":
        return "Interagisci con un chatbot AI reale per vedere come può trasformare il customer service";
      case "development":
        return "Esplora esempi di codice ottimizzato che usiamo nei nostri progetti";
      case "youtube":
        return "Visualizza metriche reali di crescita e monetizzazione YouTube";
      case "roi":
        return "Calcola il ritorno sull'investimento per il tuo progetto digitale";
      default:
        return "Scopri come funzionano le nostre soluzioni";
    }
  };

  const renderDemo = () => {
    switch (serviceType) {
      case "chatbot":
        return <ChatbotDemo />;
      case "development":
        return <CodePreview />;
      case "roi":
        return <ROICalculator />;
      default:
        return <ChatbotDemo />;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2E8BC0]/10 rounded-full border border-[#2E8BC0]/20 mb-6">
            <Play className="w-4 h-4 text-[#2E8BC0]" />
            <span className="text-[#2E8BC0] font-medium text-sm">Demo Interattiva</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {getDemoTitle()}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {getDemoDescription()}
          </p>
        </div>

        <div className="flex justify-center">
          {renderDemo()}
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;