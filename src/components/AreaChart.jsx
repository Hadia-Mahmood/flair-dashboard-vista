
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts';
import { ChartContainer, ChartTooltip } from './ui/chart';

const AreaChartComponent = () => {
  const data = [
    { name: 'Jan', incoming: 48, answered: 38 },
    { name: 'Feb', incoming: 32, answered: 22 },
    { name: 'Mar', incoming: 55, answered: 5 },
    { name: 'Apr', incoming: 25, answered: 40 },
    { name: 'May', incoming: 40, answered: 30 },
    { name: 'Jun', incoming: 20, answered: 48 },
    { name: 'Jul', incoming: 80, answered: 40 }, // Peak with tooltip
    { name: 'Aug', incoming: 45, answered: 62 },
    { name: 'Sep', incoming: 60, answered: 20 },
    { name: 'Oct', incoming: 35, answered: 10 },
    { name: 'Nov', incoming: 55, answered: 42 },
    { name: 'Dec', incoming: 15, answered: 35 },
  ];

  const config = {
    incoming: { color: '#2563EB', label: 'Incoming Calls' }, // Blue
    answered: { color: '#A855F7', label: 'Answered Calls' }, // Purple
  };

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      // Only show special tooltip for July peak
      if (label === 'Jul' && payload[0].value > 70) {
        return (
          <div className="bg-gray-900 text-white p-3 rounded-lg shadow-lg">
            <p className="font-semibold">Incoming Calls</p>
            <p className="text-xl font-bold">256k</p>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="w-full relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Overall Calls Volume</h3>
        <div className="flex items-center">
          <span className="text-gray-500 mr-2">In This Year</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </div>
      
      <div className="flex justify-end mb-2">
        <div className="flex gap-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
            <span className="text-sm">Incoming Calls</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
            <span className="text-sm">Answered Calls</span>
          </div>
        </div>
      </div>

      <ChartContainer className="h-[300px]" config={config}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#888' }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#888' }}
            domain={[0, 100]}
          />
          <ChartTooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="incoming"
            stroke="#2563EB"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 5, stroke: '#FFF', strokeWidth: 2, fill: '#2563EB' }}
          />
          <Line
            type="monotone"
            dataKey="answered"
            stroke="#A855F7"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 5, stroke: '#FFF', strokeWidth: 2, fill: '#A855F7' }}
          />
          <ReferenceDot x="Jul" y={80} r={8} fill="#2563EB" stroke="#FFF" strokeWidth={2} />
        </LineChart>
      </ChartContainer>
    </div>
  );
};

export default AreaChartComponent;
