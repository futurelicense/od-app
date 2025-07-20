import React, { useState } from 'react';
import { LayoutDashboardIcon, HeadphonesIcon, TruckIcon, UserIcon, LogOutIcon, MenuIcon, XIcon } from 'lucide-react';
type DashboardRole = 'support' | 'laasAdmin' | 'laasSubAgent';
interface ExternalDashboardLayoutProps {
  children: React.ReactNode;
  role: DashboardRole;
  onLogout?: () => void;
  activeNavItem: string;
  setActiveNavItem: (id: string) => void;
}
export const ExternalDashboardLayout = ({
  children,
  role,
  onLogout,
  activeNavItem,
  setActiveNavItem
}: ExternalDashboardLayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const getNavItems = (role: DashboardRole) => {
    switch (role) {
      case 'support':
        return [{
          id: 'dashboard',
          label: 'Dashboard',
          icon: LayoutDashboardIcon
        }, {
          id: 'orders',
          label: 'Order Requests',
          icon: TruckIcon
        }, {
          id: 'processing',
          label: 'Processing',
          icon: TruckIcon
        }, {
          id: 'payments',
          label: 'Payments',
          icon: TruckIcon
        }];
      case 'laasAdmin':
        return [{
          id: 'dashboard',
          label: 'Dashboard',
          icon: LayoutDashboardIcon
        }, {
          id: 'orders',
          label: 'Orders',
          icon: TruckIcon
        }, {
          id: 'operators',
          label: 'Operators',
          icon: UserIcon
        }, {
          id: 'subagents',
          label: 'Sub Agents',
          icon: UserIcon
        }, {
          id: 'payroll',
          label: 'Payroll',
          icon: TruckIcon
        }];
      case 'laasSubAgent':
        return [{
          id: 'dashboard',
          label: 'Dashboard',
          icon: LayoutDashboardIcon
        }, {
          id: 'available',
          label: 'Available Orders',
          icon: TruckIcon
        }, {
          id: 'active',
          label: 'Active Orders',
          icon: TruckIcon
        }, {
          id: 'complaints',
          label: 'Complaints',
          icon: HeadphonesIcon
        }];
      default:
        return [];
    }
  };
  const getRoleTitle = (role: DashboardRole) => {
    switch (role) {
      case 'support':
        return 'Support Dashboard';
      case 'laasAdmin':
        return 'LAAS Admin Dashboard';
      case 'laasSubAgent':
        return 'LAAS Sub-Agent Dashboard';
      default:
        return 'Dashboard';
    }
  };
  const navItems = getNavItems(role);
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };
  return <div className="flex h-screen bg-gray-50">
      {/* Sidebar - hidden on mobile */}
      <div className="hidden md:flex flex-col w-64 bg-indigo-700 text-white">
        <div className="p-4 border-b border-indigo-800">
          <h1 className="text-xl font-bold">OyaDrop LAAS</h1>
          <p className="text-sm text-indigo-200 mt-1">{getRoleTitle(role)}</p>
        </div>
        <nav className="flex-1 pt-4 overflow-y-auto">
          <ul>
            {navItems.map(item => {
            const Icon = item.icon;
            return <li key={item.id}>
                  <button className={`flex items-center w-full px-6 py-3 text-left hover:bg-indigo-600 ${activeNavItem === item.id ? 'bg-indigo-800 font-medium' : ''}`} onClick={() => setActiveNavItem(item.id)}>
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </button>
                </li>;
          })}
          </ul>
        </nav>
        <div className="p-4 border-t border-indigo-800">
          <button className="flex items-center text-indigo-200 hover:text-white" onClick={handleLogout}>
            <LogOutIcon className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </div>
      {/* Mobile menu button and overlay */}
      <div className="md:hidden">
        {isMobileMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)}></div>}
        {/* Mobile sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-indigo-700 text-white transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <div className="p-4 border-b border-indigo-800 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold">OyaDrop LAAS</h1>
              <p className="text-sm text-indigo-200 mt-1">
                {getRoleTitle(role)}
              </p>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
              <XIcon className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 pt-4">
            <ul>
              {navItems.map(item => {
              const Icon = item.icon;
              return <li key={item.id}>
                    <button onClick={() => {
                  setActiveNavItem(item.id);
                  setIsMobileMenuOpen(false);
                }} className={`flex items-center w-full px-6 py-3 text-left hover:bg-indigo-600 ${activeNavItem === item.id ? 'bg-indigo-800 font-medium' : ''}`}>
                      <Icon className="w-5 h-5 mr-3" />
                      {item.label}
                    </button>
                  </li>;
            })}
            </ul>
          </nav>
          <div className="p-4 border-t border-indigo-800">
            <button className="flex items-center text-indigo-200 hover:text-white" onClick={handleLogout}>
              <LogOutIcon className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-gray-600 mr-3">
                <MenuIcon className="w-6 h-6" />
              </button>
              <h2 className="text-xl font-semibold text-gray-800">
                {getRoleTitle(role)}
              </h2>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                  <UserIcon className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>;
};