
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, change, changeType, color }) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-md border-l-4 border-dashboard-${color} hover:shadow-xl transition-all duration-300 animate-fade-in group overflow-hidden relative`}>
      <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-dashboard-blue/5 group-hover:bg-dashboard-blue/10 transition-all duration-500"></div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:translate-x-1 transition-transform duration-300">{value}</h3>
        </div>
        <div className={`p-3 rounded-full bg-dashboard-${color}/10 shadow-inner group-hover:bg-dashboard-${color}/20 transition-all duration-300`}>
          <Icon size={24} className={`text-dashboard-${color}`} />
        </div>
      </div>
      <div className="mt-2 flex items-center">
        <span className={`text-xs font-medium flex items-center ${changeType === 'increase' ? 'text-dashboard-green' : 'text-dashboard-red'}`}>
          {changeType === 'increase' ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />} 
          {change}
        </span>
        <span className="text-xs text-gray-500 ml-1">from last month</span>
      </div>
      <div className={`w-full h-1 bg-gray-100 mt-3 rounded-full overflow-hidden`}>
        <div className={`h-full bg-dashboard-${color} rounded-full`} style={{ width: changeType === 'increase' ? '70%' : '30%' }}></div>
      </div>
    </div>
  );
};

export default StatCard;
