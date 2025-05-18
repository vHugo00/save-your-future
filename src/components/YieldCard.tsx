
import React from 'react';

const YieldCard: React.FC = () => {
  return (
    <div className="yield-card mb-5">
      <div className="mb-2">
        <h2 className="text-lg font-medium opacity-90">Seus rendimentos</h2>
        <p className="text-2xl font-bold">R$ 28,45</p>
      </div>
      <p className="text-sm opacity-90">+R$ 0,17 hoje</p>
    </div>
  );
};

export default YieldCard;
