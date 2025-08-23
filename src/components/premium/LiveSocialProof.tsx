import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Clock, Star, Zap } from "lucide-react";

interface Notification {
  id: string;
  type: 'purchase' | 'signup' | 'consultation' | 'success';
  name: string;
  location: string;
  service?: string;
  amount?: number;
  timeAgo: string;
  verified?: boolean;
}

const LiveSocialProof: React.FC = () => {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    activeUsers: 247,
    totalPurchases: 2847,
    avgRating: 4.9,
    companiesHelped: 523
  });

  // Mock notifications data
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'purchase',
      name: 'Marco R.',
      location: 'Milano',
      service: 'Sales System Accelerator',
      amount: 2500,
      timeAgo: '2 minuti fa',
      verified: true
    },
    {
      id: '2', 
      type: 'consultation',
      name: 'Laura S.',
      location: 'Roma',
      service: 'Marketing Audit',
      timeAgo: '5 minuti fa',
      verified: true
    },
    {
      id: '3',
      type: 'success',
      name: 'Alessandro T.',
      location: 'Torino',
      service: 'ha aumentato le vendite del 180%',
      timeAgo: '8 minuti fa',
      verified: true
    },
    {
      id: '4',
      type: 'signup',
      name: 'Francesca M.',
      location: 'Napoli',
      service: 'Lead Gen Campaign',
      timeAgo: '12 minuti fa',
      verified: true
    },
    {
      id: '5',
      type: 'purchase',
      name: 'Roberto C.',
      location: 'Bologna',
      service: 'YouTube Consultant',
      amount: 1200,
      timeAgo: '15 minuti fa',
      verified: true
    }
  ];

  useEffect(() => {
    // Animate stats
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 3) - 1,
        totalPurchases: prev.totalPurchases + (Math.random() > 0.7 ? 1 : 0)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    
    const showNextNotification = () => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentNotification(notifications[currentIndex]);
        setIsVisible(true);
        currentIndex = (currentIndex + 1) % notifications.length;
      }, 500);
    };

    // Show first notification immediately
    showNextNotification();

    // Then show new notifications every 8 seconds
    const interval = setInterval(showNextNotification, 8000);

    return () => clearInterval(interval);
  }, []);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'purchase': return <Zap className="w-4 h-4 text-green-500" />;
      case 'consultation': return <Users className="w-4 h-4 text-blue-500" />;
      case 'success': return <Star className="w-4 h-4 text-yellow-500" />;
      case 'signup': return <Clock className="w-4 h-4 text-purple-500" />;
      default: return <Users className="w-4 h-4 text-gray-500" />;
    }
  };

  const getNotificationMessage = (notification: Notification) => {
    switch (notification.type) {
      case 'purchase':
        return `ha acquistato ${notification.service}${notification.amount ? ` per €${notification.amount.toLocaleString()}` : ''}`;
      case 'consultation':
        return `ha prenotato una consulenza: ${notification.service}`;
      case 'success':
        return notification.service;
      case 'signup':
        return `si è iscritto per ${notification.service}`;
      default:
        return `ha interagito con ${notification.service}`;
    }
  };

  return (
    <div className="space-y-6">
      {/* Live Stats Bar */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-xl p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.activeUsers}</div>
            <div className="text-sm text-gray-600">Utenti Online</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.totalPurchases.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Progetti Completati</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.avgRating}</div>
            <div className="text-sm text-gray-600">Rating Medio</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.companiesHelped}+</div>
            <div className="text-sm text-gray-600">Aziende Aiutate</div>
          </div>
        </div>
      </div>

      {/* Live Notification */}
      {currentNotification && (
        <div className={`fixed bottom-6 left-6 z-50 transition-all duration-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <Card className="w-80 shadow-2xl border-l-4 border-l-blue-500 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  {getNotificationIcon(currentNotification.type)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900 text-sm">
                      {currentNotification.name}
                    </span>
                    {currentNotification.verified && (
                      <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                        ✓ Verificato
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-xs text-gray-600 mb-1">
                    {getNotificationMessage(currentNotification)}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <MapPin className="w-3 h-3" />
                    <span>{currentNotification.location}</span>
                    <span>•</span>
                    <Clock className="w-3 h-3" />
                    <span>{currentNotification.timeAgo}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default LiveSocialProof;