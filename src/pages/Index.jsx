
import React from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0a2e22]">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Index;
