
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpIcon, PiggyBank, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const ActionButtons: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 mb-6">
      <div className="flex flex-row gap-3">
        <Link to="/save-change" className="flex-1">
          <Button className="w-full bg-bank-green hover:bg-bank-green-light">
            <PiggyBank className="mr-2 h-5 w-5" /> Guardar Troco
          </Button>
        </Link>

        <Link to="/withdraw" className="flex-1">
          <Button className="w-full bg-bank-blue hover:bg-bank-blue-light">
            <ArrowUpIcon className="mr-2 h-5 w-5" /> Resgatar
          </Button>
        </Link>
      </div>

      <Link to="/statement" className="w-full">
        <Button className="w-full" variant="outline">
          <FileText className="mr-2 h-5 w-5" /> Ver Extrato
        </Button>
      </Link>
    </div>
  );
};

export default ActionButtons;
