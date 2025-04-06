
import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome back, Admin</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-dashboard-blue focus:border-transparent"
            />
          </div>
          
          <button className="p-2 rounded-lg hover:bg-gray-100 relative">
            <Bell size={20} className="text-gray-500" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-dashboard-red rounded-full"></span>
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-dashboard-indigo text-white rounded-full flex items-center justify-center">
              <User size={20} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
