import React, { useState } from 'react';
import { ExternalDashboardLayout } from '../ExternalDashboardLayout';
import { TruckIcon, ClockIcon, CheckCircleIcon, AlertCircleIcon, DollarSignIcon, ArrowRightIcon } from 'lucide-react';
interface SupportDashboardProps {
  onLogout: () => void;
}
export const SupportDashboard = ({
  onLogout
}: SupportDashboardProps) => {
  const [activeNavItem, setActiveNavItem] = useState('dashboard');
  // Mock data for dashboard statistics
  const stats = [{
    title: 'New Order Requests',
    value: '24',
    icon: TruckIcon,
    color: 'bg-blue-500'
  }, {
    title: 'Processing Orders',
    value: '18',
    icon: ClockIcon,
    color: 'bg-yellow-500'
  }, {
    title: 'Completed Orders',
    value: '156',
    icon: CheckCircleIcon,
    color: 'bg-green-500'
  }, {
    title: 'Issues Reported',
    value: '3',
    icon: AlertCircleIcon,
    color: 'bg-red-500'
  }, {
    title: 'Pending Payments',
    value: '7',
    icon: DollarSignIcon,
    color: 'bg-purple-500'
  }];
  // Mock data for recent orders
  const recentOrders = [{
    id: 'ORD-3842',
    customer: 'John Doe',
    pickup: 'Ikeja, Lagos',
    dropoff: 'Lekki, Lagos',
    status: 'Pending LAAS Admin',
    time: '10 mins ago',
    statusColor: 'bg-yellow-100 text-yellow-800'
  }, {
    id: 'ORD-3841',
    customer: 'Sarah Johnson',
    pickup: 'Victoria Island, Lagos',
    dropoff: 'Ajah, Lagos',
    status: 'Processing',
    time: '45 mins ago',
    statusColor: 'bg-blue-100 text-blue-800'
  }, {
    id: 'ORD-3840',
    customer: 'Michael Williams',
    pickup: 'Surulere, Lagos',
    dropoff: 'Yaba, Lagos',
    status: 'Delivered',
    time: '2 hours ago',
    statusColor: 'bg-green-100 text-green-800'
  }, {
    id: 'ORD-3839',
    customer: 'Emma Brown',
    pickup: 'Ikoyi, Lagos',
    dropoff: 'Festac, Lagos',
    status: 'Payment Pending',
    time: '3 hours ago',
    statusColor: 'bg-purple-100 text-purple-800'
  }];
  return <ExternalDashboardLayout role="support" onLogout={onLogout} activeNavItem={activeNavItem} setActiveNavItem={setActiveNavItem}>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Support Dashboard</h1>
        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {stats.map((stat, index) => {
          const Icon = stat.icon;
          return <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {stat.value}
                    </h3>
                  </div>
                  <div className={`${stat.color} rounded-full p-2`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>;
        })}
        </div>
        {/* Quick actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg flex items-center justify-center">
              <TruckIcon className="w-5 h-5 mr-2" />
              New Delivery Request
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg flex items-center justify-center">
              <DollarSignIcon className="w-5 h-5 mr-2" />
              Process Payment
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg flex items-center justify-center">
              <ClockIcon className="w-5 h-5 mr-2" />
              Check Order Status
            </button>
          </div>
        </div>
        {/* Recent orders */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                Recent Order Requests
              </h2>
              <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
                View All
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Route
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentOrders.map(order => <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.pickup} → {order.dropoff}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${order.statusColor}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        View
                      </button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ExternalDashboardLayout>;
};