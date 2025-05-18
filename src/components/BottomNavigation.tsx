
import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, CircleDollarSign, ChartLine, History } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex flex-col items-center text-bank-blue">
          <Wallet className="h-6 w-6" />
          <span className="text-xs font-medium mt-1">Início</span>
        </Link>
        
        <Link to="/yield" className="flex flex-col items-center text-bank-text-secondary">
          <CircleDollarSign className="h-6 w-6" />
          <span className="text-xs font-medium mt-1">Rendimentos</span>
        </Link>
        
        <Link to="/goals" className="flex flex-col items-center text-bank-text-secondary">
          <ChartLine className="h-6 w-6" />
          <span className="text-xs font-medium mt-1">Metas</span>
        </Link>
        
        <Link to="/profile" className="flex flex-col items-center text-bank-text-secondary">
          <History className="h-6 w-6" />
          <span className="text-xs font-medium mt-1">Histórico</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
