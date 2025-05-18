
import React, { useState } from 'react';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PiggyBank } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const SaveChange: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const navigate = useNavigate();

  const handleSaveChange = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Erro",
        description: "Insira um valor válido.",
        variant: "destructive",
      });
      return;
    }

    // Navigate to the QR code payment page with the amount
    navigate(`/payment-qr/${amount}`);
  };

  return (
    <div className="min-h-screen bg-bank-off-white pb-20">
      <div className="max-w-md mx-auto">
        <Header />
        
        <main className="px-4">
          <h2 className="text-2xl font-bold text-bank-text-primary mb-5">Guardar Troco</h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Economize para o futuro</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveChange} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="amount">Valor a guardar</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-bank-text-secondary">R$</span>
                    <Input
                      id="amount"
                      className="pl-10"
                      type="number"
                      step="0.01"
                      placeholder="0,00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-bank-green hover:bg-bank-green-light">
                  <PiggyBank className="mr-2 h-5 w-5" /> Prosseguir para Pagamento
                </Button>
              </form>
            </CardContent>
          </Card>
        </main>
        
        <BottomNavigation />
      </div>
    </div>
  );
};

export default SaveChange;
