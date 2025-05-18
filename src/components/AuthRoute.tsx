
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  useEffect(() => {
    if (!isLoggedIn) {
      toast({
        title: "Acesso negado",
        description: "Por favor, faça login para continuar.",
        variant: "destructive"
      });
    }
  }, [isLoggedIn]);
  
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

export default AuthRoute;
