
import React from 'react';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { QrCode, Check } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const PaymentQR: React.FC = () => {
  const { amount } = useParams<{ amount: string }>();
  const navigate = useNavigate();
  
  const handleConfirmPayment = () => {
    toast({
      title: "Sucesso!",
      description: `R$ ${amount} guardado com sucesso.`,
    });
    
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-bank-off-white pb-20">
      <div className="max-w-md mx-auto">
        <Header />
        
        <main className="px-4">
          <h2 className="text-2xl font-bold text-bank-text-primary mb-5">Pagamento</h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-center">Escaneie o QR Code para guardar R$ {amount}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
                <QrCode size={200} className="text-bank-text-primary" />
              </div>
              
              <p className="text-sm text-bank-text-secondary mb-6 text-center">
                Utilize o aplicativo do seu banco ou uma carteira digital para escanear o QR Code acima
              </p>
            </CardContent>
            <CardFooter>
              <Button onClick={handleConfirmPayment} className="w-full bg-bank-green hover:bg-bank-green-light">
                <Check className="mr-2 h-5 w-5" /> Confirmar Pagamento
              </Button>
            </CardFooter>
          </Card>
        </main>
        
        <BottomNavigation />
      </div>
    </div>
  );
};

export default PaymentQR;
