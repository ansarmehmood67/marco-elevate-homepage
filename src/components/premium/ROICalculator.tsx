import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Calculator, Target, ArrowRight, Sparkles } from "lucide-react";

interface ROICalculatorProps {
  category: 'sales' | 'marketing' | 'consultation';
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ category }) => {
  const [inputs, setInputs] = useState({
    monthlyRevenue: 50000,
    conversionRate: 2,
    avgDealSize: 5000,
    salesCycle: 90,
    teamSize: 5
  });

  const [results, setResults] = useState({
    currentRevenue: 0,
    projectedRevenue: 0,
    monthlyGain: 0,
    yearlyGain: 0,
    roi: 0,
    paybackPeriod: 0
  });

  const [isCalculating, setIsCalculating] = useState(false);

  const improvements = {
    sales: {
      conversionIncrease: 0.45, // 45% improvement
      cycleReduction: 0.25, // 25% faster
      dealSizeIncrease: 0.20, // 20% larger deals
      serviceCost: 3500
    },
    marketing: {
      conversionIncrease: 0.60, // 60% more leads
      cycleReduction: 0.15, // 15% faster
      dealSizeIncrease: 0.10, // 10% better quality
      serviceCost: 4200
    },
    consultation: {
      conversionIncrease: 0.35, // 35% strategic improvement
      cycleReduction: 0.30, // 30% faster decisions
      dealSizeIncrease: 0.25, // 25% better positioning
      serviceCost: 2800
    }
  };

  useEffect(() => {
    calculateROI();
  }, [inputs, category]);

  const calculateROI = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const improvement = improvements[category];
      const { monthlyRevenue, conversionRate, avgDealSize, salesCycle, teamSize } = inputs;
      
      // Current state
      const monthlyDeals = (monthlyRevenue / avgDealSize);
      const currentRevenue = monthlyRevenue * 12;
      
      // Improved state
      const newConversionRate = conversionRate * (1 + improvement.conversionIncrease);
      const newAvgDealSize = avgDealSize * (1 + improvement.dealSizeIncrease);
      const newSalesCycle = salesCycle * (1 - improvement.cycleReduction);
      
      // Calculate new revenue
      const improvedMonthlyDeals = monthlyDeals * (1 + improvement.conversionIncrease);
      const improvedMonthlyRevenue = improvedMonthlyDeals * newAvgDealSize;
      const projectedRevenue = improvedMonthlyRevenue * 12;
      
      const monthlyGain = improvedMonthlyRevenue - monthlyRevenue;
      const yearlyGain = projectedRevenue - currentRevenue;
      const roi = ((yearlyGain - improvement.serviceCost) / improvement.serviceCost) * 100;
      const paybackPeriod = improvement.serviceCost / monthlyGain;
      
      setResults({
        currentRevenue,
        projectedRevenue,
        monthlyGain,
        yearlyGain,
        roi,
        paybackPeriod
      });
      
      setIsCalculating(false);
    }, 1000);
  };

  const handleInputChange = (field: string, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const getCategoryTitle = () => {
    switch (category) {
      case 'sales': return 'Sales Performance ROI';
      case 'marketing': return 'Marketing Investment ROI';  
      case 'consultation': return 'Strategic Consultation ROI';
      default: return 'ROI Calculator';
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case 'sales': return 'from-blue-600 to-blue-700';
      case 'marketing': return 'from-green-600 to-green-700';
      case 'consultation': return 'from-purple-600 to-purple-700';
      default: return 'from-blue-600 to-blue-700';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Panel */}
        <Card className="bg-white border border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <Target className="w-5 h-5 text-gray-700" />
              I tuoi dati attuali
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="revenue" className="text-gray-700 font-medium">Fatturato mensile (€)</Label>
              <Input
                id="revenue"
                type="number"
                value={inputs.monthlyRevenue}
                onChange={(e) => handleInputChange('monthlyRevenue', Number(e.target.value))}
                className="mt-2 bg-white text-gray-900 border-gray-300"
              />
            </div>

            <div>
              <Label className="text-gray-700 font-medium">Tasso di conversione attuale (%): {inputs.conversionRate}%</Label>
              <Slider
                value={[inputs.conversionRate]}
                onValueChange={([value]) => handleInputChange('conversionRate', value)}
                max={10}
                min={0.5}
                step={0.1}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="dealSize" className="text-gray-700 font-medium">Valore medio contratto (€)</Label>
              <Input
                id="dealSize"
                type="number"
                value={inputs.avgDealSize}
                onChange={(e) => handleInputChange('avgDealSize', Number(e.target.value))}
                className="mt-2 bg-white text-gray-900 border-gray-300"
              />
            </div>

            <div>
              <Label className="text-gray-700 font-medium">Ciclo di vendita (giorni): {inputs.salesCycle}</Label>
              <Slider
                value={[inputs.salesCycle]}
                onValueChange={([value]) => handleInputChange('salesCycle', value)}
                max={365}
                min={7}
                step={7}
                className="mt-2"
              />
            </div>

            <div>
              <Label className="text-gray-700 font-medium">Dimensione team: {inputs.teamSize}</Label>
              <Slider
                value={[inputs.teamSize]}
                onValueChange={([value]) => handleInputChange('teamSize', value)}
                max={50}
                min={1}
                step={1}
                className="mt-2"
              />
            </div>
          </CardContent>
        </Card>

        {/* Results Panel */}
        <Card className="bg-gradient-to-br from-gray-50 to-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Proiezioni con i nostri servizi
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isCalculating ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-3 text-gray-600">Calcolando...</span>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-gray-900">
                      +€{Math.round(results.monthlyGain).toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Guadagno Mensile</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-gray-900">
                      +€{Math.round(results.yearlyGain).toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Guadagno Annuale</div>
                  </div>
                </div>

                {/* ROI Highlight */}
                <div className="text-center p-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white">
                  <div className="text-4xl font-bold mb-2">
                    {Math.round(results.roi)}%
                  </div>
                  <div className="text-lg opacity-90">ROI Annuale</div>
                  <div className="text-sm opacity-75 mt-2">
                    Payback in {Math.round(results.paybackPeriod)} mesi
                  </div>
                </div>

                {/* Improvement Breakdown */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Miglioramenti previsti:</h4>
                  
                  {category === 'sales' && (
                    <>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Tasso di chiusura</span>
                        <Badge variant="secondary">+45%</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Velocità vendita</span>
                        <Badge variant="secondary">+25%</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Valore medio deal</span>
                        <Badge variant="secondary">+20%</Badge>
                      </div>
                    </>
                  )}
                  
                  {category === 'marketing' && (
                    <>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Lead qualificati</span>
                        <Badge variant="secondary">+60%</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Conversione lead-opp</span>
                        <Badge variant="secondary">+15%</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Qualità prospect</span>
                        <Badge variant="secondary">+10%</Badge>
                      </div>
                    </>
                  )}
                  
                  {category === 'consultation' && (
                    <>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Efficacia strategica</span>
                        <Badge variant="secondary">+35%</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Velocità decisionale</span>
                        <Badge variant="secondary">+30%</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Posizionamento</span>
                        <Badge variant="secondary">+25%</Badge>
                      </div>
                    </>
                  )}
                </div>

                {/* CTA */}
                <Button 
                  className={`w-full bg-gradient-to-r ${getCategoryColor()} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  size="lg"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Inizia a Ottenere Questi Risultati
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ROICalculator;