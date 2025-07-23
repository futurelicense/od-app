import React from 'react';
import { UsersIcon, TruckIcon, DollarSignIcon, ShoppingBagIcon, AlertTriangleIcon, CheckCircleIcon, ClockIcon, BarChart2Icon, Settings as SettingsIcon } from 'lucide-react';
export const AdminOverview = () => {
  // Mock data for admin dashboard
  const stats = [{
    title: 'Total Users',
    value: '2,845',
    change: '+12.5%',
    icon: UsersIcon,
    color: 'bg-blue-500'
  }, {
    title: 'Active Operators',
    value: '156',
    change: '+8.2%',
    icon: TruckIcon,
    color: 'bg-green-500'
  }, {
    title: 'Revenue (MTD)',
    value: '₦5.2M',
    change: '+15.3%',
    icon: DollarSignIcon,
    color: 'bg-indigo-500'
  }, {
    title: 'Pending Orders',
    value: '28',
    change: '-4.5%',
    icon: ShoppingBagIcon,
    color: 'bg-yellow-500'
  }];
  const recentAlerts = [{
    id: 1,
    type: 'error',
    message: 'Payment gateway timeout detected',
    time: '10 minutes ago',
    icon: AlertTriangleIcon,
    iconColor: 'text-red-500'
  }, {
    id: 2,
    type: 'success',
    message: 'System update completed successfully',
    time: '1 hour ago',
    icon: CheckCircleIcon,
    iconColor: 'text-green-500'
  }, {
    id: 3,
    type: 'warning',
    message: 'High server load detected',
    time: '2 hours ago',
    icon: AlertTriangleIcon,
    iconColor: 'text-yellow-500'
  }, {
    id: 4,
    type: 'info',
    message: 'New operator registrations need approval',
    time: '3 hours ago',
    icon: UsersIcon,
    iconColor: 'text-blue-500'
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
        const Icon = stat.icon;
        return <div key={index} className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`${stat.color} p-3 rounded-lg text-white mr-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
                <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change}
                </span>
              </div>
            </div>;
      })}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-800">
              Recent Activity
            </h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {recentAlerts.map(alert => {
              const Icon = alert.icon;
              return <div key={alert.id} className="flex items-start">
                    <div className={`${alert.iconColor} flex-shrink-0 mr-3 mt-1`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {alert.message}
                      </p>
                      <p className="text-xs text-gray-500 flex items-center mt-1">
                        <ClockIcon className="h-3 w-3 mr-1" /> {alert.time}
                      </p>
                    </div>
                  </div>;
            })}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 text-center">
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                View All Activity
              </button>
            </div>
          </div>
        </div>
        {/* System Status */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-800">System Status</h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    Server Load
                  </span>
                  <span className="text-sm font-medium text-gray-700">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{
                  width: '65%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    Database Usage
                  </span>
                  <span className="text-sm font-medium text-gray-700">82%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{
                  width: '82%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    Memory Usage
                  </span>
                  <span className="text-sm font-medium text-gray-700">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{
                  width: '45%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    API Response Time
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    220ms
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{
                  width: '30%'
                }}></div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm text-gray-600">
                  All Systems Operational
                </span>
              </div>
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-800 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center p-4 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors">
            <UsersIcon className="h-5 w-5 mr-2" />
            <span>Manage Users</span>
          </button>
          <button className="flex items-center justify-center p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
            <BarChart2Icon className="h-5 w-5 mr-2" />
            <span>View Reports</span>
          </button>
          <button className="flex items-center justify-center p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
            <SettingsIcon className="h-5 w-5 mr-2" />
            <span>System Settings</span>
          </button>
        </div>
      </div>
    </div>;
};