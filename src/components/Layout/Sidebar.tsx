import React from 'react';
import { HomeIcon, TruckIcon, ShoppingBagIcon, UsersIcon, WalletIcon, ClockIcon, LogOutIcon, UserIcon } from 'lucide-react';
interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onLogout?: () => void;
  userEmail?: string;
}
export const Sidebar = ({
  activeSection,
  setActiveSection,
  onLogout,
  userEmail
}: SidebarProps) => {
  const navItems = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: HomeIcon
  }, {
    id: 'delivery',
    label: 'Delivery',
    icon: TruckIcon
  }, {
    id: 'kiosk',
    label: 'Kiosk',
    icon: ShoppingBagIcon
  }, {
    id: 'referral',
    label: 'Referral',
    icon: UsersIcon
  }, {
    id: 'wallet',
    label: 'Wallet',
    icon: WalletIcon
  }, {
    id: 'history',
    label: 'History',
    icon: ClockIcon
  }];
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };
  return <div className="hidden md:flex flex-col w-64 bg-indigo-700 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold">OyaDrop</h1>
      </div>
      {userEmail && <div className="px-4 py-2 bg-indigo-800 mb-4">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
              <UserIcon className="w-4 h-4" />
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-medium truncate">{userEmail}</p>
              <p className="text-xs text-indigo-200">User</p>
            </div>
          </div>
        </div>}
      <nav className="flex-1 pt-4">
        <ul>
          {navItems.map(item => {
          const Icon = item.icon;
          return <li key={item.id}>
                <button onClick={() => setActiveSection(item.id)} className={`flex items-center w-full px-6 py-3 text-left ${activeSection === item.id ? 'bg-indigo-800 font-medium' : 'hover:bg-indigo-600'}`}>
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              </li>;
        })}
        </ul>
      </nav>
      <div className="p-4">
        <button className="flex items-center text-indigo-200 hover:text-white" onClick={handleLogout}>
          <LogOutIcon className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </div>;
};