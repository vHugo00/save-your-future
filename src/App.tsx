
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import Login from "./pages/Login";
import Index from "./pages/Index";
import YieldDetails from "./pages/YieldDetails";
import Statement from "./pages/Statement";
import Withdraw from "./pages/Withdraw";
import Goals from "./pages/Goals";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <AuthRoute>
                <Index />
              </AuthRoute>
            }
          />
          <Route
            path="/yield"
            element={
              <AuthRoute>
                <YieldDetails />
              </AuthRoute>
            }
          />
          <Route
            path="/statement"
            element={
              <AuthRoute>
                <Statement />
              </AuthRoute>
            }
          />
          <Route
            path="/withdraw"
            element={
              <AuthRoute>
                <Withdraw />
              </AuthRoute>
            }
          />
          <Route
            path="/goals"
            element={
              <AuthRoute>
                <Goals />
              </AuthRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <AuthRoute>
                <Profile />
              </AuthRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
