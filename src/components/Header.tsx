
import React from 'react';
import { BellIcon, Settings } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-6 px-4">
      <div className="flex items-center">
        <Avatar className="h-10 w-10">
          <AvatarFallback className="bg-bank-blue text-white">JD</AvatarFallback>
        </Avatar>
        <div className="ml-3">
          <h2 className="text-sm font-medium text-bank-text-secondary">Olá,</h2>
          <h1 className="text-lg font-semibold text-bank-text-primary">João</h1>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="text-bank-text-secondary rounded-full p-2 hover:bg-gray-100">
          <BellIcon className="h-6 w-6" />
        </button>
        <button className="text-bank-text-secondary rounded-full p-2 hover:bg-gray-100">
          <Settings className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
