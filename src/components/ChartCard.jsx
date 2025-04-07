
import React from 'react';

const ChartCard = ({ title, children, className }) => {
  return (
    <div className={`bg-dashboard-dark-green p-6 rounded-xl shadow-lg border border-dashboard-green/30 hover:shadow-xl transition-all duration-300 animate-fade-in ${className}`}>
      <h3 className="text-lg font-medium text-dashboard-pale-yellow border-b border-dashboard-green/30 pb-3 mb-3 flex items-center">
        <span className="inline-block w-2 h-8 bg-dashboard-yellow rounded-full mr-3"></span>
        {title}
      </h3>
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;
