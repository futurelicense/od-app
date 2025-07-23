import React, { useState } from 'react';
import { LayoutDashboardIcon, UsersIcon, SettingsIcon, LogOutIcon, UserIcon, BarChartIcon, ShieldIcon, MapIcon, DollarSignIcon, ImageIcon, AreaChartIcon, LayersIcon, ChevronDownIcon, ChevronUpIcon, FileTextIcon } from 'lucide-react';
interface AdminSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onLogout?: () => void;
  adminEmail?: string;
}
export const AdminSidebar = ({
  activeSection,
  setActiveSection,
  onLogout,
  adminEmail
}: AdminSidebarProps) => {
  const [expandedMenus, setExpandedMenus] = useState({
    advanced: false
  });
  const toggleMenu = (menu: string) => {
    setExpandedMenus({
      ...expandedMenus,
      [menu]: !expandedMenus[menu]
    });
  };
  const mainNavItems = [{
    id: 'overview',
    label: 'Admin Overview',
    icon: LayoutDashboardIcon
  }, {
    id: 'users',
    label: 'User Management',
    icon: UsersIcon
  }, {
    id: 'settings',
    label: 'System Settings',
    icon: SettingsIcon
  }, {
    id: 'reports',
    label: 'Reports & Analytics',
    icon: FileTextIcon
  }];
  const advancedNavItems = [{
    id: 'godsEye',
    label: "God's Eye View",
    icon: MapIcon
  }, {
    id: 'commission',
    label: 'Commission Management',
    icon: DollarSignIcon
  }, {
    id: 'adBanner',
    label: 'Ad & Banner Management',
    icon: ImageIcon
  }, {
    id: 'userHeatMap',
    label: 'User Heat Map',
    icon: AreaChartIcon
  }, {
    id: 'analytics',
    label: 'Advanced Analytics',
    icon: BarChartIcon
  }, {
    id: 'systemHealth',
    label: 'System Health',
    icon: LayersIcon
  }];
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };
  return <div className="hidden md:flex flex-col w-64 bg-gray-800 text-white">
      <div className="p-4 flex items-center space-x-2">
        <ShieldIcon className="h-8 w-8 text-indigo-400" />
        <div>
          <h1 className="text-xl font-bold">OyaDrop Admin</h1>
          <p className="text-xs text-gray-400">Administration Portal</p>
        </div>
      </div>
      {adminEmail && <div className="px-4 py-2 bg-gray-900 mb-4">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
              <UserIcon className="w-4 h-4" />
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-medium truncate">{adminEmail}</p>
              <p className="text-xs text-gray-400">Administrator</p>
            </div>
          </div>
        </div>}
      <nav className="flex-1 pt-4 overflow-y-auto">
        <ul>
          {/* Main navigation items */}
          {mainNavItems.map(item => {
          const Icon = item.icon;
          return <li key={item.id}>
                <button onClick={() => setActiveSection(item.id)} className={`flex items-center w-full px-6 py-3 text-left ${activeSection === item.id ? 'bg-gray-900 font-medium' : 'hover:bg-gray-700'}`}>
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              </li>;
        })}
          {/* Advanced Dashboard section with dropdown */}
          <li className="mt-2">
            <button onClick={() => toggleMenu('advanced')} className="flex items-center justify-between w-full px-6 py-3 text-left hover:bg-gray-700">
              <div className="flex items-center">
                <BarChartIcon className="w-5 h-5 mr-3" />
                <span>Advanced Dashboard</span>
              </div>
              {expandedMenus.advanced ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
            </button>
            {expandedMenus.advanced && <ul className="bg-gray-900 py-2">
                {advancedNavItems.map(item => {
              const Icon = item.icon;
              return <li key={item.id}>
                      <button onClick={() => setActiveSection(item.id)} className={`flex items-center w-full pl-10 pr-6 py-2 text-left text-sm ${activeSection === item.id ? 'text-indigo-400 font-medium' : 'text-gray-400 hover:text-white'}`}>
                        <Icon className="w-4 h-4 mr-2" />
                        {item.label}
                      </button>
                    </li>;
            })}
              </ul>}
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <button className="flex items-center text-gray-400 hover:text-white" onClick={handleLogout}>
          <LogOutIcon className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </div>;
};