
import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BottomNavigation from '@/components/BottomNavigation';
import { ChevronRightIcon } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-bank-off-white pb-20">
      <div className="max-w-md mx-auto">
        <div className="bg-bank-blue text-white py-10 px-4 text-center rounded-b-3xl">
          <Avatar className="h-20 w-20 mx-auto mb-3">
            <AvatarFallback className="bg-bank-blue-light text-white text-xl">JD</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold mb-1">João da Silva</h1>
          <p className="opacity-90">joao.silva@email.com</p>
        </div>
        
        <main className="px-4 -mt-5">
          <Card className="mb-5">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Dados da conta</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-bank-text-secondary">Total economizado</p>
                  <p className="text-xl font-bold text-bank-blue">R$ 1.254,65</p>
                </div>
                <div>
                  <p className="text-sm text-bank-text-secondary">Total de arredondamentos</p>
                  <p className="text-xl font-bold text-bank-text-primary">324</p>
                </div>
                <div>
                  <p className="text-sm text-bank-text-secondary">Tempo usando o app</p>
                  <p className="text-xl font-bold text-bank-text-primary">8 meses</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Configurações</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {[
                "Perfil",
                "Configurações de conta",
                "Notificações",
                "Segurança",
                "Ajuda e Suporte",
                "Termos e Políticas"
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center py-3 px-6 border-b last:border-b-0">
                  <span className="font-medium">{item}</span>
                  <ChevronRightIcon className="h-5 w-5 text-bank-text-secondary" />
                </div>
              ))}
            </CardContent>
          </Card>
        </main>
        
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Profile;
