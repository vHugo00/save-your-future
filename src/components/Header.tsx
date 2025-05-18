
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Header: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    toast({
      title: "Logout realizado",
      description: "Você saiu da sua conta.",
    });
    navigate('/login');
  };
  
  return (
    <header className="py-5 px-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="h-10 w-10 bg-bank-green rounded-full flex items-center justify-center mr-3">
          <img 
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop" 
            alt="Logo" 
            className="h-8 w-8 rounded-full object-cover"
          />
        </div>
        <div>
          <h1 className="font-bold text-md text-bank-text-primary">SAVE YOUR FUTURE</h1>
          <p className="text-xs text-bank-text-secondary">Economize para o amanhã</p>
        </div>
      </div>
      <Button variant="ghost" size="icon" onClick={handleLogout}>
        <LogOut className="h-5 w-5 text-bank-text-secondary" />
      </Button>
    </header>
  );
};

export default Header;
