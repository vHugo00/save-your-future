
import React from 'react';
import Header from '@/components/Header';
import BalanceCard from '@/components/BalanceCard';
import YieldCard from '@/components/YieldCard';
import ActionButtons from '@/components/ActionButtons';
import TransactionHistory from '@/components/TransactionHistory';
import BottomNavigation from '@/components/BottomNavigation';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-bank-off-white pb-20">
      <div className="max-w-md mx-auto">
        <Header />
        
        <main className="px-4">
          <BalanceCard />
          <YieldCard />
          <ActionButtons />
          <TransactionHistory />
        </main>
        
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Index;
