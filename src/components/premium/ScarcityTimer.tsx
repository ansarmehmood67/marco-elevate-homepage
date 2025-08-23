import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Calendar, Zap } from "lucide-react";

interface ScarcityTimerProps {
  type: 'limited_spots' | 'early_bird' | 'flash_sale' | 'consultation_slots';
  category: 'sales' | 'marketing' | 'consultation';
}

const ScarcityTimer: React.FC<ScarcityTimerProps> = ({ type, category }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [spotsLeft, setSpotsLeft] = useState(3);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // Set end time based on type
    let endTime: Date;
    switch (type) {
      case 'limited_spots':
        endTime = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
        break;
      case 'early_bird':
        endTime = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // 3 days
        break;
      case 'flash_sale':
        endTime = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
        break;
      case 'consultation_slots':
        endTime = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000); // 2 days
        break;
      default:
        endTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      if (distance < 0) {
        setIsActive(false);
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [type]);

  useEffect(() => {
    // Simulate spots decreasing
    const spotsTimer = setInterval(() => {
      if (Math.random() < 0.1 && spotsLeft > 1) { // 10% chance every interval
        setSpotsLeft(prev => prev - 1);
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(spotsTimer);
  }, [spotsLeft]);

  const getConfig = () => {
    switch (type) {
      case 'limited_spots':
        return {
          title: 'Posti Limitati Disponibili',
          subtitle: `Solo ${spotsLeft} posti rimasti per questo mese`,
          urgencyColor: 'from-red-500 to-pink-600',
          icon: <Users className="w-5 h-5" />,
          badge: 'POSTI LIMITATI'
        };
      case 'early_bird':
        return {
          title: 'Offerta Early Bird',
          subtitle: 'Sconto del 25% sui servizi premium',
          urgencyColor: 'from-yellow-500 to-orange-600',
          icon: <Zap className="w-5 h-5" />,
          badge: 'EARLY BIRD'
        };
      case 'flash_sale':
        return {
          title: 'Flash Sale Attivo',
          subtitle: 'Sconto speciale del 30% - Solo per oggi!',
          urgencyColor: 'from-purple-500 to-indigo-600',
          icon: <Zap className="w-5 h-5" />,
          badge: 'FLASH SALE'
        };
      case 'consultation_slots':
        return {
          title: 'Slot Consulenza Disponibili',
          subtitle: `${spotsLeft} consulenze disponibili questa settimana`,
          urgencyColor: 'from-blue-500 to-cyan-600',
          icon: <Calendar className="w-5 h-5" />,
          badge: 'CONSULENZA'
        };
      default:
        return {
          title: 'Offerta Limitata',
          subtitle: 'Affrettati prima che scada!',
          urgencyColor: 'from-red-500 to-pink-600',
          icon: <Clock className="w-5 h-5" />,
          badge: 'LIMITATO'
        };
    }
  };

  if (!isActive) return null;

  const config = getConfig();

  return (
    <Card className="border-2 border-red-200 bg-gradient-to-r from-red-50 to-pink-50 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full bg-gradient-to-r ${config.urgencyColor} text-white`}>
              {config.icon}
            </div>
            <div>
              <h3 className="font-bold text-gray-900">{config.title}</h3>
              <p className="text-sm text-gray-600">{config.subtitle}</p>
            </div>
          </div>
          <Badge className={`bg-gradient-to-r ${config.urgencyColor} text-white animate-pulse`}>
            {config.badge}
          </Badge>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 bg-white rounded-lg p-3 shadow-sm border">
              {timeLeft.days.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-600 mt-1">Giorni</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 bg-white rounded-lg p-3 shadow-sm border">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-600 mt-1">Ore</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 bg-white rounded-lg p-3 shadow-sm border">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-600 mt-1">Min</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 bg-white rounded-lg p-3 shadow-sm border">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-600 mt-1">Sec</div>
          </div>
        </div>

        {/* Progress Bar for Spots */}
        {(type === 'limited_spots' || type === 'consultation_slots') && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Disponibilità</span>
              <span className="text-sm text-gray-600">{spotsLeft}/10 rimasti</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`bg-gradient-to-r ${config.urgencyColor} h-2 rounded-full transition-all duration-500`}
                style={{ width: `${(spotsLeft / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Urgency Messages */}
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Clock className="w-4 h-4 text-red-500" />
          {spotsLeft <= 2 ? (
            <span className="font-medium text-red-600">⚠️ Ultimi posti disponibili!</span>
          ) : timeLeft.hours < 12 ? (
            <span className="font-medium text-orange-600">🔥 Meno di 12 ore rimaste!</span>
          ) : (
            <span>✨ Non perdere questa opportunità unica</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ScarcityTimer;