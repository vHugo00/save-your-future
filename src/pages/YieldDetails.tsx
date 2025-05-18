
import React from 'react';
import { ChartBar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';

const YieldDetails: React.FC = () => {
  const monthlyYields = [
    { month: 'Jan', amount: 'R$ 2,35' },
    { month: 'Fev', amount: 'R$ 2,70' },
    { month: 'Mar', amount: 'R$ 3,15' },
    { month: 'Abr', amount: 'R$ 3,40' },
    { month: 'Mai', amount: 'R$ 3,80' },
    { month: 'Jun', amount: 'R$ 4,20' },
    { month: 'Jul', amount: 'R$ 4,35' },
    { month: 'Ago', amount: 'R$ 4,50' }
  ];

  return (
    <div className="min-h-screen bg-bank-off-white pb-20">
      <div className="max-w-md mx-auto">
        <Header />
        
        <main className="px-4">
          <div className="yield-card mb-5">
            <div className="mb-3">
              <h2 className="text-lg font-medium opacity-90">Total rendido</h2>
              <p className="text-3xl font-bold">R$ 28,45</p>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-sm opacity-90">Este mês</p>
                <p className="text-lg font-medium">R$ 4,50</p>
              </div>
              <div>
                <p className="text-sm opacity-90">Taxa atual</p>
                <p className="text-lg font-medium">4,2% a.a.</p>
              </div>
            </div>
          </div>
          
          <Card className="mb-5">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Rendimentos mensais</CardTitle>
              <ChartBar className="h-5 w-5 text-bank-text-secondary" />
            </CardHeader>
            <CardContent>
              {monthlyYields.map((item, index) => (
                <div key={index} className="transaction">
                  <p className="font-medium">{item.month}</p>
                  <p className="font-medium text-bank-green">{item.amount}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </main>
        
        <BottomNavigation />
      </div>
    </div>
  );
};

export default YieldDetails;
