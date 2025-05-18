
import React from 'react';
import { FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';

const Statement: React.FC = () => {
  const transactions = [
    { id: 1, source: "Mercado Livre", amount: "+R$ 0,35", date: "18/05/2025", time: "14:20" },
    { id: 2, source: "Farmácia São Paulo", amount: "+R$ 0,75", date: "18/05/2025", time: "11:45" },
    { id: 3, source: "Shopping Center Norte", amount: "+R$ 0,25", date: "17/05/2025", time: "19:30" },
    { id: 4, source: "Lojas Americanas", amount: "+R$ 0,60", date: "17/05/2025", time: "15:20" },
    { id: 5, source: "Supermercado Extra", amount: "+R$ 0,42", date: "16/05/2025", time: "18:05" },
    { id: 6, source: "Posto Ipiranga", amount: "+R$ 0,18", date: "15/05/2025", time: "10:12" },
    { id: 7, source: "McDonald's", amount: "+R$ 0,50", date: "14/05/2025", time: "20:30" },
    { id: 8, source: "Livraria Cultura", amount: "+R$ 0,95", date: "13/05/2025", time: "16:45" },
    { id: 9, source: "Cinema Shopping", amount: "+R$ 0,30", date: "12/05/2025", time: "21:10" },
    { id: 10, source: "Padaria Real", amount: "+R$ 0,22", date: "11/05/2025", time: "08:20" }
  ];

  return (
    <div className="min-h-screen bg-bank-off-white pb-20">
      <div className="max-w-md mx-auto">
        <Header />
        
        <main className="px-4">
          <Card className="mb-5">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Extrato completo</CardTitle>
              <FileText className="h-5 w-5 text-bank-text-secondary" />
            </CardHeader>
            <CardContent className="pt-0">
              <div className="mb-4">
                <p className="text-sm text-bank-text-secondary mb-2">Total guardado este mês</p>
                <p className="text-xl font-medium text-bank-text-primary">R$ 4,52</p>
              </div>
              
              {transactions.map((transaction) => (
                <div key={transaction.id} className="transaction">
                  <div>
                    <p className="font-medium">{transaction.source}</p>
                    <p className="text-sm text-bank-text-secondary">{transaction.date}, {transaction.time}</p>
                  </div>
                  <div>
                    <p className="font-medium text-bank-green">{transaction.amount}</p>
                  </div>
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

export default Statement;
