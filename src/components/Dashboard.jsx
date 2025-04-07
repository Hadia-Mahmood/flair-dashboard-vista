
import React from 'react';
import Header from './Header';
import StatCard from './StatCard';
import ChartCard from './ChartCard';
import DonutChart from './DonutChart';
import AreaChart from './AreaChart';
import CustomerTable from './ProductTable';
import { DollarSign, Users, ShoppingBag, Activity } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-gray-50/80 overflow-auto">
      <Header />
      
      <main className="flex-1 p-6 overflow-auto">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Total Revenue" 
            value="$12,875" 
            icon={DollarSign} 
            change="12.5%" 
            changeType="increase" 
            color="blue" 
          />
          <StatCard 
            title="Total Customers" 
            value="4,562" 
            icon={Users} 
            change="8.2%" 
            changeType="increase" 
            color="indigo" 
          />
          <StatCard 
            title="Total Orders" 
            value="1,245" 
            icon={ShoppingBag} 
            change="3.1%" 
            changeType="decrease" 
            color="purple" 
          />
          <StatCard 
            title="Conversion Rate" 
            value="3.2%" 
            icon={Activity} 
            change="1.2%" 
            changeType="increase" 
            color="pink" 
          />
        </div>
        
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 mb-8">
          <ChartCard title="Sales Overview" className="lg:col-span-4">
            <div className="h-80">
              <AreaChart />
            </div>
          </ChartCard>
          <ChartCard title="Sales by Category" className="lg:col-span-3">
            <div className="h-80">
              <DonutChart />
            </div>
          </ChartCard>
        </div>
        
        {/* Customer Data Table */}
        <div className="mb-6">
          <CustomerTable />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
