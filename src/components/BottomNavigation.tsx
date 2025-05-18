
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wallet, CircleDollarSign, FileText, ArrowUp, User } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  
  const getActiveClass = (path: string) => {
    return location.pathname === path ? "text-bank-blue" : "text-bank-text-secondary";
  };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-4">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <Link to="/" className={`flex flex-col items-center ${getActiveClass('/')}`}>
          <Wallet className="h-6 w-6" />
          <span className="text-xs font-medium mt-1">Início</span>
        </Link>
        
        <Link to="/yield" className={`flex flex-col items-center ${getActiveClass('/yield')}`}>
          <CircleDollarSign className="h-6 w-6" />
          <span className="text-xs font-medium mt-1">Rendimento</span>
        </Link>
        
        <Link to="/statement" className={`flex flex-col items-center ${getActiveClass('/statement')}`}>
          <FileText className="h-6 w-6" />
          <span className="text-xs font-medium mt-1">Extrato</span>
        </Link>
        
        <Link to="/withdraw" className={`flex flex-col items-center ${getActiveClass('/withdraw')}`}>
          <ArrowUp className="h-6 w-6" />
          <span className="text-xs font-medium mt-1">Resgatar</span>
        </Link>
        
        <Link to="/profile" className={`flex flex-col items-center ${getActiveClass('/profile')}`}>
          <User className="h-6 w-6" />
          <span className="text-xs font-medium mt-1">Perfil</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
