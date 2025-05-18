
import React, { useState } from 'react';
import { ArrowUp, Calendar, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const Withdraw: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [step, setStep] = useState<number>(1);
  const [pixKey, setPixKey] = useState<string>('');
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and a single decimal point
    const value = e.target.value.replace(/[^\d.]/g, '');
    const parts = value.split('.');
    if (parts.length > 2) {
      return; // Don't allow multiple dots
    }
    if (parts[1]?.length > 2) {
      return; // Limit to 2 decimal places
    }
    setAmount(value);
  };
  
  const handleNext = () => {
    if (parseFloat(amount) <= 0 || isNaN(parseFloat(amount))) {
      toast({
        title: "Valor inválido",
        description: "Por favor, insira um valor válido para resgate.",
        variant: "destructive"
      });
      return;
    }
    
    if (parseFloat(amount) > 1254.65) {
      toast({
        title: "Saldo insuficiente",
        description: "O valor solicitado é maior que seu saldo disponível.",
        variant: "destructive"
      });
      return;
    }
    
    setStep(2);
  };
  
  const handleWithdraw = () => {
    if (!pixKey.trim()) {
      toast({
        title: "Chave Pix inválida",
        description: "Por favor, insira uma chave Pix válida.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate a successful withdrawal
    setStep(3);
    toast({
      title: "Resgate solicitado!",
      description: `R$ ${amount} será transferido para sua conta em instantes.`,
    });
  };
  
  const handleReset = () => {
    setStep(1);
    setAmount('');
    setPixKey('');
  };

  return (
    <div className="min-h-screen bg-bank-off-white pb-20">
      <div className="max-w-md mx-auto">
        <Header />
        
        <main className="px-4">
          {/* Aviso sobre período de 30 dias */}
          <Card className="mb-4 border-l-4 border-amber-500">
            <CardContent className="pt-4">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-bank-text-secondary">
                  <span className="font-medium text-amber-600">Importante:</span> O resgate só é possível após 30 dias da data de depósito dos valores. Isso garante o melhor rendimento para o seu dinheiro.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-5">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Pegar meu dinheiro</CardTitle>
              <ArrowUp className="h-5 w-5 text-bank-text-secondary" />
            </CardHeader>
            <CardContent className="pt-0">
              {step === 1 && (
                <div>
                  <p className="text-sm text-bank-text-secondary mb-4">
                    Quanto você quer resgatar? Você tem <span className="font-medium">R$ 1.254,65</span> disponível.
                  </p>
                  
                  <div className="mb-6">
                    <label htmlFor="amount" className="block text-sm font-medium text-bank-text-secondary mb-1">
                      Valor para resgate
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bank-text-secondary">
                        R$
                      </span>
                      <Input
                        id="amount"
                        className="pl-8"
                        value={amount}
                        onChange={handleAmountChange}
                        placeholder="0,00"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-bank-blue hover:bg-bank-blue-light" 
                    onClick={handleNext}
                  >
                    Continuar
                  </Button>
                </div>
              )}
              
              {step === 2 && (
                <div>
                  <p className="text-sm text-bank-text-secondary mb-4">
                    Informe sua chave Pix para receber <span className="font-medium">R$ {amount}</span>
                  </p>
                  
                  <div className="mb-6">
                    <label htmlFor="pixKey" className="block text-sm font-medium text-bank-text-secondary mb-1">
                      Chave Pix
                    </label>
                    <Input
                      id="pixKey"
                      value={pixKey}
                      onChange={(e) => setPixKey(e.target.value)}
                      placeholder="CPF, e-mail, telefone ou chave aleatória"
                    />
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      className="flex-1" 
                      onClick={() => setStep(1)}
                    >
                      Voltar
                    </Button>
                    <Button 
                      className="flex-1 bg-bank-blue hover:bg-bank-blue-light" 
                      onClick={handleWithdraw}
                    >
                      Resgatar agora
                    </Button>
                  </div>
                </div>
              )}
              
              {step === 3 && (
                <div className="text-center py-4">
                  <div className="bg-bank-green/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <ArrowUp className="h-8 w-8 text-bank-green" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Resgate solicitado!</h3>
                  <p className="text-sm text-bank-text-secondary mb-6">
                    R$ {amount} será transferido para sua chave Pix em instantes.
                  </p>
                  <Button 
                    className="bg-bank-blue hover:bg-bank-blue-light" 
                    onClick={handleReset}
                  >
                    Fazer outro resgate
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </main>
        
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Withdraw;
