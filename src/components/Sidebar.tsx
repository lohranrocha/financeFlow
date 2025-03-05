import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Receipt, Target, LineChart, UserCircle, DivideIcon as LucideIcon } from 'lucide-react';

interface NavItem {
  icon: typeof LucideIcon;
  label: string;
  path: string;
}

const Sidebar: React.FC = () => {
  const navItems: NavItem[] = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Receipt, label: 'Transactions', path: '/transactions' },
    { icon: Target, label: 'Goals', path: '/goals' },
    { icon: LineChart, label: 'Insights', path: '/insights' },
    { icon: UserCircle, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4 fixed left-0">
      <div className="flex items-center gap-2 mb-8">
        <Receipt className="w-8 h-8 text-emerald-400" />
        <h1 className="text-xl font-bold">FinanceFlow</h1>
      </div>
      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;