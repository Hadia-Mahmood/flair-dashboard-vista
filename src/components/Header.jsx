
import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-dashboard-dark-green border-b border-dashboard-green/20 px-6 py-4 shadow-md sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-dashboard-off-white">Dashboard</h1>
          <p className="text-sm text-dashboard-pale-yellow/70">Welcome back, Admin</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dashboard-green" size={18} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2 bg-dashboard-green/10 border border-dashboard-green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dashboard-yellow focus:border-transparent transition-all text-dashboard-pale-yellow placeholder-dashboard-pale-yellow/50"
            />
          </div>
          
          <button className="p-2 rounded-lg hover:bg-dashboard-green/10 relative transition-colors border border-transparent hover:border-dashboard-green/20">
            <Bell size={20} className="text-dashboard-yellow" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-dashboard-red rounded-full animate-pulse shadow-lg shadow-dashboard-red/30"></span>
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-dashboard-green to-dashboard-yellow text-dashboard-dark-green rounded-full flex items-center justify-center shadow-md">
              <User size={20} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
