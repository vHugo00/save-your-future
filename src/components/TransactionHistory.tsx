
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from 'lucide-react';

interface Transaction {
  id: number;
  source: string;
  amount: string;
  date: string;
}

const TransactionHistory: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: 1,
      source: "Mercado Livre",
      amount: "+R$ 0,35",
      date: "Hoje, 14:20"
    },
    {
      id: 2,
      source: "Farmácia São Paulo",
      amount: "+R$ 0,75",
      date: "Hoje, 11:45"
    },
    {
      id: 3,
      source: "Shopping Center Norte",
      amount: "+R$ 0,25",
      date: "Ontem, 19:30"
    },
    {
      id: 4,
      source: "Lojas Americanas",
      amount: "+R$ 0,60",
      date: "Ontem, 15:20"
    },
    {
      id: 5,
      source: "Supermercado Extra",
      amount: "+R$ 0,42",
      date: "25/05/2025"
    }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Histórico de trocos guardados</CardTitle>
        <FileText className="h-5 w-5 text-bank-text-secondary" />
      </CardHeader>
      <CardContent className="pt-0">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="transaction">
            <div>
              <p className="font-medium">{transaction.source}</p>
              <p className="text-sm text-bank-text-secondary">{transaction.date}</p>
            </div>
            <div>
              <p className="font-medium text-bank-green">{transaction.amount}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;
