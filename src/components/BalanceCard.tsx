
import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

const BalanceCard: React.FC = () => {
  const [showBalance, setShowBalance] = React.useState(true);

  return (
    <div className="balance-card mb-5">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-medium opacity-90">Você já guardou</h2>
        <button
          onClick={() => setShowBalance(!showBalance)}
          className="text-white opacity-90 hover:opacity-100"
        >
          {showBalance ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>
      <div className="mb-2">
        <p className="text-3xl font-bold">
          {showBalance ? "R$ 1.500,90" : "R$ •••••••"}
        </p>
      </div>
      <p className="text-sm opacity-90">Boa! Você está cada vez mais perto do seu sonho.</p>
    </div>
  );
};

export default BalanceCard;
