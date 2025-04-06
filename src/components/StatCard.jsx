
import React from 'react';

const StatCard = ({ title, value, icon: Icon, change, changeType, color }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1 text-gray-800">{value}</h3>
        </div>
        <div className={`p-3 rounded-lg bg-${color}-100`}>
          <Icon size={24} className={`text-dashboard-${color}`} />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className={`text-xs font-medium ${changeType === 'increase' ? 'text-dashboard-green' : 'text-dashboard-red'}`}>
          {changeType === 'increase' ? '↑' : '↓'} {change}
        </span>
        <span className="text-xs text-gray-500 ml-1">from last month</span>
      </div>
    </div>
  );
};

export default StatCard;
