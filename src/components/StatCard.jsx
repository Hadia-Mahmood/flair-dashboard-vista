
import React from 'react';

const StatCard = ({ title, value, icon: Icon, change, changeType, color }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-dashboard-blue hover:shadow-xl transition-all duration-300 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1 text-gray-800">{value}</h3>
        </div>
        <div className={`p-3 rounded-full bg-${color}-100 shadow-inner`}>
          <Icon size={24} className={`text-dashboard-${color}`} />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className={`text-xs font-medium flex items-center ${changeType === 'increase' ? 'text-dashboard-green' : 'text-dashboard-red'}`}>
          {changeType === 'increase' ? '↑' : '↓'} {change}
        </span>
        <span className="text-xs text-gray-500 ml-1">from last month</span>
      </div>
    </div>
  );
};

export default StatCard;
