
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AreaChartComponent = () => {
  const data = [
    { name: 'Jan', sales: 4000, returns: 2400 },
    { name: 'Feb', sales: 3000, returns: 1398 },
    { name: 'Mar', sales: 2000, returns: 9800 },
    { name: 'Apr', sales: 2780, returns: 3908 },
    { name: 'May', sales: 1890, returns: 4800 },
    { name: 'Jun', sales: 2390, returns: 3800 },
    { name: 'Jul', sales: 3490, returns: 4300 },
    { name: 'Aug', sales: 4000, returns: 2400 },
    { name: 'Sep', sales: 3000, returns: 1398 },
    { name: 'Oct', sales: 2000, returns: 9800 },
    { name: 'Nov', sales: 2780, returns: 3908 },
    { name: 'Dec', sales: 3890, returns: 4800 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorReturns" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#EC4899" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#EC4899" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip />
        <Area 
          type="monotone" 
          dataKey="sales" 
          stroke="#4F46E5" 
          fillOpacity={1} 
          fill="url(#colorSales)" 
          strokeWidth={2}
        />
        <Area 
          type="monotone" 
          dataKey="returns" 
          stroke="#EC4899" 
          fillOpacity={1} 
          fill="url(#colorReturns)" 
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
