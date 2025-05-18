
import React from 'react';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Info, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UnderDevelopment: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bank-off-white pb-20">
      <div className="max-w-md mx-auto">
        <Header />
        
        <main className="px-4 pt-6">
          <Card className="border-t-4 border-t-yellow-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Info className="h-5 w-5 text-yellow-500" /> 
                Em Desenvolvimento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-bank-text-secondary">
                Esta funcionalidade está atualmente em desenvolvimento e estará disponível em breve. 
                Agradecemos sua paciência.
              </p>
              
              <Button 
                variant="outline" 
                onClick={() => navigate(-1)} 
                className="w-full"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
              </Button>
            </CardContent>
          </Card>
        </main>
        
        <BottomNavigation />
      </div>
    </div>
  );
};

export default UnderDevelopment;
