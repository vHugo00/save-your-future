
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { Eye, EyeOff, LogIn, Mail } from 'lucide-react';
import logo from "../images/logo-1.jpeg";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('admin@gmail.com');
  const [password, setPassword] = useState<string>('124qweqwe123');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Check fixed credentials
    if (email === 'admin@gmail.com' && password === '124qweqwe123') {
      // Set logged in status in localStorage
      localStorage.setItem('isLoggedIn', 'true');

      toast({
        title: "Login bem-sucedido",
        description: "Bem-vindo de volta!",
      });

      navigate('/');
    } else {
      toast({
        title: "Erro de login",
        description: "Email ou senha inválidos.",
        variant: "destructive"
      });
    }
  };

  const handleGoogleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    toast({
      title: "Login com Google",
      description: "Login bem-sucedido com Google!",
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-bank-off-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="items-center pt-10 pb-8">
          <div className="w-full flex flex-col items-center mb-8">
            <div className="h-20 w-20  flex items-center justify-center mb-4">
              <img
                src={logo}
                alt="Logo"
                className="h-16 w-16  object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-center text-bank-text-primary">
              SAVE YOUR FUTURE
            </h1>
            <p className="text-sm text-bank-text-secondary mt-1">
              Economize centavos, construa seu futuro
            </p>
          </div>
          <h2 className="text-xl font-medium text-center">Acesse sua conta</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Senha
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-bank-text-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full bg-bank-green hover:bg-bank-green-light mt-6">
              <LogIn className="mr-2 h-5 w-5" /> Entrar
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="relative w-full my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-bank-text-secondary">ou</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full"
          >
            <Mail className="mr-2 h-5 w-5" /> Entrar com Google
          </Button>

          <p className="text-sm text-bank-text-secondary text-center mt-6">
            Guarde seus centavos automaticamente e veja seu dinheiro crescer.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
