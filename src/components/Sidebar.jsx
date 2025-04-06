
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Users, 
  Settings, 
  BarChart, 
  LogOut, 
  ChevronLeft, 
  ChevronRight,
  Bell,
  Search
} from 'lucide-react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, name: 'Dashboard', active: true },
    { icon: ShoppingCart, name: 'Products', active: false },
    { icon: Users, name: 'Customers', active: false },
    { icon: BarChart, name: 'Analytics', active: false },
    { icon: Settings, name: 'Settings', active: false },
  ];

  return (
    <aside 
      className={`${collapsed ? 'w-20' : 'w-64'} h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <div className="text-xl font-bold text-dashboard-blue">Admin<span className="text-dashboard-indigo">Pro</span></div>
        )}
        {collapsed && (
          <div className="mx-auto text-xl font-bold text-dashboard-blue">A</div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg hover:bg-gray-100"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <div className="flex flex-col flex-1 py-6 space-y-1">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center ${collapsed ? 'justify-center' : 'justify-start'} px-4 py-3 ${
              item.active 
                ? 'text-dashboard-blue bg-blue-50' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <item.icon size={20} className={`${item.active ? 'text-dashboard-blue' : 'text-gray-500'}`} />
            {!collapsed && <span className="ml-4">{item.name}</span>}
          </a>
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <a
          href="#"
          className={`flex items-center ${collapsed ? 'justify-center' : 'justify-start'} px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg`}
        >
          <LogOut size={20} className="text-gray-500" />
          {!collapsed && <span className="ml-4">Logout</span>}
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
