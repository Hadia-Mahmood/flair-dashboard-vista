
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, change, changeType, color }) => {
  // Map colors to our new theme
  const colorMap = {
    blue: 'green',
    indigo: 'green',
    purple: 'yellow',
    pink: 'yellow'
  };
  
  const mappedColor = colorMap[color] || color;
  
  return (
    <div className={`bg-dashboard-dark-green p-6 rounded-xl shadow-lg border-l-4 ${mappedColor === 'yellow' ? 'border-dashboard-yellow' : 'border-dashboard-green'} hover:shadow-xl transition-all duration-300 animate-fade-in group overflow-hidden relative`}>
      <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-dashboard-green/5 group-hover:bg-dashboard-green/10 transition-all duration-500"></div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-dashboard-pale-yellow mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-dashboard-off-white mb-3 group-hover:translate-x-1 transition-transform duration-300">{value}</h3>
        </div>
        <div className={`p-3 rounded-full ${mappedColor === 'yellow' ? 'bg-dashboard-yellow/10' : 'bg-dashboard-green/10'} shadow-inner group-hover:${mappedColor === 'yellow' ? 'bg-dashboard-yellow/20' : 'bg-dashboard-green/20'} transition-all duration-300`}>
          <Icon size={24} className={`${mappedColor === 'yellow' ? 'text-dashboard-yellow' : 'text-dashboard-green'}`} />
        </div>
      </div>
      <div className="mt-2 flex items-center">
        <span className={`text-xs font-medium flex items-center ${changeType === 'increase' ? 'text-dashboard-green' : 'text-dashboard-red'}`}>
          {changeType === 'increase' ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />} 
          {change}
        </span>
        <span className="text-xs text-dashboard-pale-yellow ml-1">from last month</span>
      </div>
      <div className={`w-full h-1 bg-dashboard-green/10 mt-3 rounded-full overflow-hidden`}>
        <div className={`h-full ${mappedColor === 'yellow' ? 'bg-dashboard-yellow' : 'bg-dashboard-green'} rounded-full`} style={{ width: changeType === 'increase' ? '70%' : '30%' }}></div>
      </div>
    </div>
  );
};

export default StatCard;
