import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Calendar } from "lucide-react";

interface MarcoScarcityTimerProps {
  category: 'sales' | 'marketing' | 'consultation';
}

const MarcoScarcityTimer: React.FC<MarcoScarcityTimerProps> = ({ category }) => {
  const [spotsLeft, setSpotsLeft] = useState(3);
  const [isActive, setIsActive] = useState(true);

  // Simulate spot reduction
  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft(prev => {
        const newSpots = Math.max(1, prev - Math.floor(Math.random() * 0.3));
        return newSpots;
      });
    }, 300000); // Every 5 minutes

    return () => clearInterval(interval);
  }, []);

  const getConfig = () => {
    const configs = {
      sales: {
        title: "Slot Consulenza Vendite Disponibili",
        subtitle: "Marco lavora con un numero limitato di clienti per garantire attenzione dedicata",
        icon: Users,
        color: "text-blue-400",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/20"
      },
      marketing: {
        title: "Slot Consulenza Marketing Disponibili", 
        subtitle: "Marco lavora con un numero limitato di clienti per garantire attenzione dedicata",
        icon: Calendar,
        color: "text-emerald-400",
        bgColor: "bg-emerald-500/10",
        borderColor: "border-emerald-500/20"
      },
      consultation: {
        title: "Slot Consulenza Strategica Disponibili",
        subtitle: "Marco lavora con un numero limitato di clienti per garantire attenzione dedicata", 
        icon: Clock,
        color: "text-purple-400",
        bgColor: "bg-purple-500/10",
        borderColor: "border-purple-500/20"
      }
    };

    return configs[category];
  };

  const config = getConfig();
  const IconComponent = config.icon;

  if (!isActive) return null;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className={`glass-card ${config.borderColor} relative overflow-hidden`}>
        <div className={`absolute inset-0 ${config.bgColor} opacity-50`} />
        
        <CardContent className="relative z-10 p-6">
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl ${config.bgColor} ${config.borderColor} border`}>
              <IconComponent className={`w-6 h-6 ${config.color}`} />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-bold text-white">
                  {config.title}
                </h3>
                <Badge className={`${config.bgColor} ${config.color} border-none text-xs px-2 py-1`}>
                  Settembre 2025
                </Badge>
              </div>
              
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                {config.subtitle}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${config.color}`}>
                      {spotsLeft}
                    </div>
                    <div className="text-xs text-white/60">
                      di 10 slot
                    </div>
                  </div>
                  
                  <div className="text-white/60 text-sm">
                    ancora disponibili questo mese
                  </div>
                </div>
                
                {spotsLeft <= 3 && (
                  <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/30 animate-pulse">
                    Ultimi slot!
                  </Badge>
                )}
              </div>
              
              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transition-all duration-1000`}
                    style={{ width: `${(spotsLeft / 10) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-white/50 mt-2 text-center">
                  Una volta esauriti, le iscrizioni riaprono il mese successivo
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarcoScarcityTimer;