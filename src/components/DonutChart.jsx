
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { ChartContainer } from './ui/chart';

const DonutChart = () => {
  const data = [
    { name: 'Team Performance', value: 55, color: '#2563EB' },  // Blue
    { name: 'Recurring Calls', value: 25, color: '#A855F7' },   // Purple
    { name: 'Tickets Raised', value: 10, color: '#FBBF24' },    // Yellow
    { name: 'Total Calls', value: 10, color: '#F97316' },       // Orange
  ];

  const COLORS = data.map(item => item.color);
  
  const renderCenterText = ({ viewBox }) => {
    const { cx, cy } = viewBox;
    return (
      <g>
        <text x={cx} y={cy} className="font-bold text-3xl" textAnchor="middle" dominantBaseline="central">
          55%
        </text>
        <text x={cx} y={cy + 25} className="text-sm text-gray-500" textAnchor="middle" dominantBaseline="central">
          Team Performance
        </text>
      </g>
    );
  };

  const renderPercentageLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
    const RADIAN = Math.PI / 180;
    // Position label outside the pie chart
    const radius = outerRadius * 1.15;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
    return (
      <g>
        {/* Draw arrow pointing to the segment */}
        <path
          d={`M${cx + outerRadius * 0.95 * Math.cos(-midAngle * RADIAN)},${cy + outerRadius * 0.95 * Math.sin(-midAngle * RADIAN)}L${x},${y}`}
          stroke="#888"
          fill="none"
        />
        <text
          x={x}
          y={y}
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
          className="text-sm font-medium"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      </g>
    );
  };

  const config = {
    'Team Performance': { color: '#2563EB' },
    'Recurring Calls': { color: '#A855F7' },
    'Tickets Raised': { color: '#FBBF24' },
    'Total Calls': { color: '#F97316' },
  };

  return (
    <ChartContainer className="h-[300px] w-full" config={config}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderPercentageLabel}
          outerRadius={110}
          innerRadius={75}
          fill="#8884d8"
          dataKey="value"
          startAngle={90}
          endAngle={-270}
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={COLORS[index % COLORS.length]}
              stroke="white"
              strokeWidth={2}
            />
          ))}
        </Pie>
        {renderCenterText({ viewBox: { cx: "50%", cy: "50%" } })}
        <Legend 
          layout="horizontal" 
          verticalAlign="bottom" 
          align="center"
          wrapperStyle={{ paddingTop: '20px' }}
        />
      </PieChart>
    </ChartContainer>
  );
};

export default DonutChart;
