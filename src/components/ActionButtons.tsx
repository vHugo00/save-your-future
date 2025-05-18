
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpIcon, Badge } from 'lucide-react';

const ActionButtons: React.FC = () => {
  return (
    <div className="flex gap-3 mb-6">
      <Button className="flex-1 bg-bank-blue hover:bg-bank-blue-light">
        <ArrowUpIcon className="mr-2 h-5 w-5" /> Resgatar valor
      </Button>
      <Button className="flex-1" variant="outline">
        <Badge className="mr-2 h-5 w-5" /> Metas
      </Button>
    </div>
  );
};

export default ActionButtons;
