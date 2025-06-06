
import React from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50/80">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Index;
