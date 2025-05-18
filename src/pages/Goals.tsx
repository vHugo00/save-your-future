
import React from 'react';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';

interface Goal {
  id: number;
  name: string;
  target: string;
  current: string;
  progress: number;
}

const Goals: React.FC = () => {
  const goals: Goal[] = [
    {
      id: 1,
      name: "Viagem para Floripa",
      target: "R$ 2.500,00",
      current: "R$ 950,00",
      progress: 38,
    },
    {
      id: 2,
      name: "Novo celular",
      target: "R$ 1.800,00",
      current: "R$ 765,00",
      progress: 42,
    },
    {
      id: 3,
      name: "Reserva de emergência",
      target: "R$ 5.000,00",
      current: "R$ 1.250,00",
      progress: 25,
    }
  ];

  return (
    <div className="min-h-screen bg-bank-off-white pb-20">
      <div className="max-w-md mx-auto">
        <Header />
        
        <main className="px-4">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold text-bank-text-primary">Minhas metas</h2>
            <Button className="bg-bank-blue hover:bg-bank-blue-light">
              <PlusIcon className="h-5 w-5 mr-2" /> Nova meta
            </Button>
          </div>
          
          <div className="space-y-4">
            {goals.map((goal) => (
              <Card key={goal.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-medium">{goal.name}</CardTitle>
                    <span className="text-sm font-medium text-bank-green">{goal.progress}%</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Progress value={goal.progress} className="h-2 mb-3" />
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-bank-text-secondary">Acumulado: <span className="font-medium text-bank-text-primary">{goal.current}</span></p>
                    <p className="text-sm text-bank-text-secondary">Meta: <span className="font-medium text-bank-text-primary">{goal.target}</span></p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
        
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Goals;
