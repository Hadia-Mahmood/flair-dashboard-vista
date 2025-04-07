
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Users, 
  Settings, 
  BarChart, 
  LogOut, 
  ChevronLeft, 
  ChevronRight
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
      className={`${collapsed ? 'w-20' : 'w-64'} h-screen bg-dashboard-dark-green border-r border-dashboard-green/20 transition-all duration-300 ease-in-out flex flex-col shadow-lg z-20`}
    >
      <div className="flex items-center justify-between p-4 border-b border-dashboard-green/30">
        {!collapsed && (
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-dashboard-yellow via-dashboard-pale-yellow to-dashboard-off-white">Green<span className="text-dashboard-off-white">Dash</span></div>
        )}
        {collapsed && (
          <div className="mx-auto text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-dashboard-yellow to-dashboard-off-white">G</div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg hover:bg-dashboard-green/20 text-dashboard-yellow transition-colors"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <div className="flex flex-col flex-1 py-6 space-y-1">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center ${collapsed ? 'justify-center' : 'justify-start'} px-4 py-3 mb-1 mx-2 rounded-lg transition-all duration-200 ${
              item.active 
                ? 'bg-dashboard-green/20 shadow-sm backdrop-blur-sm border border-dashboard-green/30' 
                : 'hover:bg-dashboard-green/10 border border-transparent hover:border-dashboard-green/20'
            }`}
          >
            <item.icon size={20} className={`${item.active ? 'text-dashboard-yellow' : 'text-dashboard-pale-yellow/70'}`} />
            {!collapsed && (
              <span className={`ml-4 ${item.active ? 'text-dashboard-yellow' : 'text-dashboard-pale-yellow/70'}`}>
                {item.name}
              </span>
            )}
          </a>
        ))}
      </div>
      
      <div className="p-4 border-t border-dashboard-green/30">
        <a
          href="#"
          className={`flex items-center ${collapsed ? 'justify-center' : 'justify-start'} px-4 py-3 text-dashboard-pale-yellow/70 hover:bg-dashboard-green/10 rounded-lg transition-all duration-200 mx-2 hover:text-dashboard-yellow border border-transparent hover:border-dashboard-green/20`}
        >
          <LogOut size={20} />
          {!collapsed && <span className="ml-4">Logout</span>}
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
