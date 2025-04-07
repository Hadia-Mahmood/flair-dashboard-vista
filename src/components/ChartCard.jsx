
import React from 'react';

const ChartCard = ({ title, children, className }) => {
  return (
    <div className={`enhanced-chart-card pulse-on-hover ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-800 flex items-center">
          <span className="inline-block w-2 h-8 bg-dashboard-accent rounded-full mr-3"></span>
          {title}
        </h3>
      </div>
      <div className="mt-4 rounded-lg overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;
