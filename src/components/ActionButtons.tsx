
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpIcon, PiggyBank, FileText } from 'lucide-react';

const ActionButtons: React.FC = () => {
  const getActiveClass = (path: string) => {
    return location.pathname === path ? "text-bank-blue" : "text-bank-text-secondary";
  };
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <Button className="flex-1 bg-bank-green hover:bg-bank-green-light">
        <PiggyBank className="mr-2 h-5 w-5" /> Guardar Troco
      </Button>
      <Button className={`flex-1 bg-bank-blue hover:bg-bank-blue-light ${getActiveClass('/withdraw')}`}>
        <ArrowUpIcon className="mr-2 h-5 w-5" /> Resgatar
      </Button>
      <Button className="flex-1" variant="outline">
        <FileText className="mr-2 h-5 w-5" /> Ver Extrato
      </Button>
    </div>
  );
};

export default ActionButtons;
