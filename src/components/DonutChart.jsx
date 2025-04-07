
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const DonutChart = () => {
  const data = [
    { name: 'Electronics', value: 35, color: '#15803d' }, // dark green
    { name: 'Clothing', value: 25, color: '#16a34a' }, // medium green
    { name: 'Home & Kitchen', value: 20, color: '#eab308' }, // yellow
    { name: 'Books', value: 15, color: '#facc15' }, // light yellow
    { name: 'Other', value: 5, color: '#f8fafc' }, // off-white
  ];

  const COLORS = data.map(item => item.color);

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="#f8fafc" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize={12} fontWeight="bold">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-dashboard-dark-green p-3 border border-dashboard-yellow rounded-md shadow-lg">
          <p className="text-dashboard-pale-yellow font-medium">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = (props) => {
    const { payload } = props;
    return (
      <ul className="flex flex-wrap justify-center gap-4 mt-4">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} className="flex items-center">
            <div className="w-3 h-3 mr-2 rounded-sm" style={{ backgroundColor: entry.color }}></div>
            <span className="text-dashboard-off-white text-sm">{entry.value}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          innerRadius={60}
          fill="#8884d8"
          dataKey="value"
          stroke="#064e3b"
          strokeWidth={2}
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={COLORS[index % COLORS.length]} 
              className="hover:opacity-80 transition-opacity duration-300"
            />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend content={<CustomLegend />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChart;
