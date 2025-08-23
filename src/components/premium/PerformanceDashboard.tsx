import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, BarChart, Users, Target, Clock, ArrowRight, RefreshCw } from "lucide-react";

interface Metric {
  id: string;
  label: string;
  value: string;
  previousValue: string;
  change: number;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
  trend: number[];
}

interface PerformanceDashboardProps {
  category: 'sales' | 'marketing' | 'consultation';
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ category }) => {
  const [isLive, setIsLive] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [metrics, setMetrics] = useState<Metric[]>([]);

  const getMetricsForCategory = (cat: string): Metric[] => {
    switch (cat) {
      case 'sales':
        return [
          {
            id: 'conversion_rate',
            label: 'Tasso di Conversione',
            value: '24.3%',
            previousValue: '18.7%',
            change: 30,
            changeType: 'positive',
            icon: <Target className="w-5 h-5" />,
            trend: [18.7, 19.2, 20.1, 21.5, 22.8, 24.3]
          },
          {
            id: 'avg_deal_size',
            label: 'Valore Medio Contratto',
            value: '€8,450',
            previousValue: '€6,200',
            change: 36,
            changeType: 'positive',
            icon: <BarChart className="w-5 h-5" />,
            trend: [6200, 6450, 6890, 7320, 7890, 8450]
          },
          {
            id: 'sales_cycle',
            label: 'Ciclo di Vendita',
            value: '42 giorni',
            previousValue: '67 giorni',
            change: -37,
            changeType: 'positive',
            icon: <Clock className="w-5 h-5" />,
            trend: [67, 62, 58, 52, 47, 42]
          },
          {
            id: 'team_performance',
            label: 'Performance Team',
            value: '89%',
            previousValue: '71%',
            change: 25,
            changeType: 'positive',
            icon: <Users className="w-5 h-5" />,
            trend: [71, 74, 78, 82, 86, 89]
          }
        ];
      case 'marketing':
        return [
          {
            id: 'lead_quality',
            label: 'Qualità Lead',
            value: '76%',
            previousValue: '52%', 
            change: 46,
            changeType: 'positive',
            icon: <Target className="w-5 h-5" />,
            trend: [52, 57, 62, 68, 72, 76]
          },
          {
            id: 'cost_per_lead',
            label: 'Costo per Lead',
            value: '€23',
            previousValue: '€41',
            change: -44,
            changeType: 'positive',
            icon: <TrendingDown className="w-5 h-5" />,
            trend: [41, 38, 34, 29, 26, 23]
          },
          {
            id: 'roi_campaigns',
            label: 'ROI Campagne',
            value: '340%',
            previousValue: '180%',
            change: 89,
            changeType: 'positive',
            icon: <TrendingUp className="w-5 h-5" />,
            trend: [180, 210, 245, 280, 310, 340]
          },
          {
            id: 'mql_growth',
            label: 'Crescita MQL',
            value: '+127%',
            previousValue: '+45%',
            change: 182,
            changeType: 'positive',
            icon: <BarChart className="w-5 h-5" />,
            trend: [45, 62, 78, 95, 111, 127]
          }
        ];
      case 'consultation':
        return [
          {
            id: 'strategic_clarity',
            label: 'Chiarezza Strategica',
            value: '94%',
            previousValue: '67%',
            change: 40,
            changeType: 'positive',
            icon: <Target className="w-5 h-5" />,
            trend: [67, 72, 78, 84, 89, 94]
          },
          {
            id: 'decision_speed',
            label: 'Velocità Decisionale',
            value: '+65%',
            previousValue: '+12%',
            change: 442,
            changeType: 'positive',
            icon: <Clock className="w-5 h-5" />,
            trend: [12, 23, 34, 46, 55, 65]
          },
          {
            id: 'implementation',
            label: 'Tasso Implementazione',
            value: '87%',
            previousValue: '61%',
            change: 43,
            changeType: 'positive',
            icon: <Users className="w-5 h-5" />,
            trend: [61, 66, 71, 77, 82, 87]
          },
          {
            id: 'business_impact',
            label: 'Impatto Business',
            value: '+156%',
            previousValue: '+89%',
            change: 75,
            changeType: 'positive',
            icon: <TrendingUp className="w-5 h-5" />,
            trend: [89, 102, 118, 132, 144, 156]
          }
        ];
      default:
        return [];
    }
  };

  useEffect(() => {
    setMetrics(getMetricsForCategory(category));
  }, [category]);

  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setLastUpdate(new Date());
      
      // Simulate small metric updates
      setMetrics(prev => prev.map(metric => {
        const randomChange = (Math.random() - 0.5) * 0.02; // ±1% change
        const currentNumericValue = parseFloat(metric.value.replace(/[^\d.-]/g, ''));
        const newValue = Math.max(0, currentNumericValue * (1 + randomChange));
        
        return {
          ...metric,
          value: metric.value.includes('%') 
            ? `${newValue.toFixed(1)}%`
            : metric.value.includes('€')
            ? `€${Math.round(newValue).toLocaleString()}`
            : metric.value.includes('+')
            ? `+${Math.round(newValue)}%`
            : `${Math.round(newValue)} giorni`
        };
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, [isLive]);

  const getCategoryTitle = () => {
    switch (category) {
      case 'sales': return 'Performance Vendite';
      case 'marketing': return 'Performance Marketing';
      case 'consultation': return 'Impact Consulenza';
      default: return 'Performance Dashboard';
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case 'sales': return 'from-blue-600 to-cyan-600';
      case 'marketing': return 'from-green-600 to-emerald-600';
      case 'consultation': return 'from-purple-600 to-pink-600';
      default: return 'from-blue-600 to-purple-600';
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            {getCategoryTitle()} in Tempo Reale
          </h3>
          <p className="text-gray-600">
            Metriche aggiornate dai nostri clienti - Ultimo aggiornamento: {lastUpdate.toLocaleTimeString()}
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
            <span className="text-sm text-gray-600">
              {isLive ? 'Live' : 'Paused'}
            </span>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsLive(!isLive)}
            className="flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${isLive ? 'animate-spin' : ''}`} />
            {isLive ? 'Pausa' : 'Riprendi'}
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric) => (
          <Card key={metric.id} className="relative overflow-hidden">
            <CardContent className="p-6">
              {/* Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor()} text-white`}>
                  {metric.icon}
                </div>
                <Badge 
                  variant={metric.changeType === 'positive' ? 'default' : 'destructive'}
                  className="text-xs"
                >
                  {metric.changeType === 'positive' ? '+' : ''}{metric.change}%
                </Badge>
              </div>

              {/* Value */}
              <div className="mb-2">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-500">
                  da {metric.previousValue}
                </div>
              </div>

              {/* Label */}
              <div className="text-sm font-medium text-gray-700 mb-4">
                {metric.label}
              </div>

              {/* Mini Trend Chart */}
              <div className="h-8 relative">
                <svg className="w-full h-full" viewBox="0 0 100 20">
                  <polyline
                    fill="none"
                    stroke={metric.changeType === 'positive' ? '#10b981' : '#ef4444'}
                    strokeWidth="2"
                    points={metric.trend.map((value, index) => {
                      const x = (index / (metric.trend.length - 1)) * 100;
                      const minVal = Math.min(...metric.trend);
                      const maxVal = Math.max(...metric.trend);
                      const y = maxVal === minVal ? 10 : 20 - ((value - minVal) / (maxVal - minVal)) * 20;
                      return `${x},${y}`;
                    }).join(' ')}
                  />
                </svg>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Insights */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Performance Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="w-5 h-5" />
              Analisi Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {metrics.slice(0, 2).map((metric) => (
                <div key={metric.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor()} text-white`}>
                      {metric.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{metric.label}</div>
                      <div className="text-sm text-gray-600">
                        Miglioramento del {metric.change}%
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                    <div className="text-sm text-gray-500">attuale</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Success Stories */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Prossimi Traguardi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-semibold text-green-800">
                    Obiettivo Q1 2024
                  </span>
                </div>
                <p className="text-sm text-green-700 mb-3">
                  {category === 'sales' && 'Raggiungere il 30% di conversion rate'}
                  {category === 'marketing' && 'Ottenere ROI superiore al 400%'}
                  {category === 'consultation' && 'Mantenere 95%+ di client satisfaction'}
                </p>
                <div className="w-full bg-green-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <div className="text-xs text-green-600 mt-1">78% completato</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div>
                  <div className="font-semibold text-blue-900 mb-1">
                    Vuoi risultati simili?
                  </div>
                  <div className="text-sm text-blue-700">
                    Inizia il tuo percorso oggi stesso
                  </div>
                </div>
                <Button 
                  size="sm"
                  className={`bg-gradient-to-r ${getCategoryColor()} text-white`}
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PerformanceDashboard;