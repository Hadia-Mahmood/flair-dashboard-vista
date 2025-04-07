
import React from 'react';

const ChartCard = ({ title, children, className }) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fade-in ${className}`}>
      <h3 className="text-lg font-medium text-gray-800 border-b pb-3 mb-3 flex items-center">
        <span className="inline-block w-2 h-8 bg-dashboard-indigo rounded-full mr-3"></span>
        {title}
      </h3>
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;
