
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
      className={`${collapsed ? 'w-20' : 'w-64'} h-screen bg-gradient-to-b from-sidebar-background to-sidebar-background/95 border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col shadow-lg`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200/50">
        {!collapsed && (
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-dashboard-blue via-dashboard-indigo to-dashboard-purple">Admin<span>Pro</span></div>
        )}
        {collapsed && (
          <div className="mx-auto text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-dashboard-blue to-dashboard-indigo">A</div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
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
                ? 'bg-white/10 shadow-sm backdrop-blur-sm' 
                : 'hover:bg-white/5'
            }`}
          >
            <item.icon size={20} className={`${item.active ? 'text-white' : 'text-gray-400'}`} />
            {!collapsed && <span className={`ml-4 ${item.active ? 'text-white' : 'text-gray-400'}`}>{item.name}</span>}
          </a>
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-200/30">
        <a
          href="#"
          className={`flex items-center ${collapsed ? 'justify-center' : 'justify-start'} px-4 py-3 text-gray-400 hover:bg-white/5 rounded-lg transition-all duration-200 mx-2`}
        >
          <LogOut size={20} className="text-gray-400" />
          {!collapsed && <span className="ml-4">Logout</span>}
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
