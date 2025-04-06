
import React from 'react';

const ChartCard = ({ title, children, className }) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 ${className}`}>
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;
