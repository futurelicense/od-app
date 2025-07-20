import React, { useState } from 'react';
import { TruckIcon, SearchIcon, FilterIcon, ChevronDownIcon, ArrowRightIcon } from 'lucide-react';
interface LaasAdminOrdersProps {
  onAssignOperator: () => void;
}
export const LaasAdminOrders = ({
  onAssignOperator
}: LaasAdminOrdersProps) => {
  const [filterStatus, setFilterStatus] = useState('all');
  // Mock data for orders
  const orders = [{
    id: 'ORD-3842',
    customer: 'John Doe',
    pickup: 'Ikeja, Lagos',
    dropoff: 'Lekki, Lagos',
    systemPrice: '₦2,500',
    status: 'New',
    time: '10 mins ago',
    statusColor: 'bg-blue-100 text-blue-800',
    operator: ''
  }, {
    id: 'ORD-3841',
    customer: 'Sarah Johnson',
    pickup: 'Victoria Island, Lagos',
    dropoff: 'Ajah, Lagos',
    systemPrice: '₦3,200',
    status: 'New',
    time: '45 mins ago',
    statusColor: 'bg-blue-100 text-blue-800',
    operator: ''
  }, {
    id: 'ORD-3840',
    customer: 'Michael Williams',
    pickup: 'Surulere, Lagos',
    dropoff: 'Yaba, Lagos',
    systemPrice: '₦1,800',
    status: 'Bargaining',
    time: '2 hours ago',
    statusColor: 'bg-yellow-100 text-yellow-800',
    operator: ''
  }, {
    id: 'ORD-3839',
    customer: 'Emma Brown',
    pickup: 'Ikoyi, Lagos',
    dropoff: 'Festac, Lagos',
    systemPrice: '₦4,500',
    status: 'Operator Assigned',
    time: '3 hours ago',
    statusColor: 'bg-green-100 text-green-800',
    operator: 'David Adeleke'
  }, {
    id: 'ORD-3838',
    customer: 'Daniel Wilson',
    pickup: 'Apapa, Lagos',
    dropoff: 'Ikeja, Lagos',
    systemPrice: '₦2,800',
    status: 'In Transit',
    time: '5 hours ago',
    statusColor: 'bg-indigo-100 text-indigo-800',
    operator: 'Funke Akindele'
  }, {
    id: 'ORD-3837',
    customer: 'Olivia Taylor',
    pickup: 'Lekki, Lagos',
    dropoff: 'Victoria Island, Lagos',
    systemPrice: '₦1,900',
    status: 'Delivered',
    time: 'Yesterday',
    statusColor: 'bg-green-100 text-green-800',
    operator: 'Chijioke Eze'
  }, {
    id: 'ORD-3836',
    customer: 'James Anderson',
    pickup: 'Maryland, Lagos',
    dropoff: 'Gbagada, Lagos',
    systemPrice: '₦2,100',
    status: 'Completed',
    time: 'Yesterday',
    statusColor: 'bg-green-100 text-green-800',
    operator: 'David Adeleke'
  }];
  // Filter orders based on status
  const filteredOrders = filterStatus === 'all' ? orders : orders.filter(order => {
    if (filterStatus === 'new') return order.status === 'New';
    if (filterStatus === 'active') return ['Bargaining', 'Operator Assigned', 'In Transit'].includes(order.status);
    if (filterStatus === 'completed') return ['Delivered', 'Completed'].includes(order.status);
    return true;
  });
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Orders Management</h1>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input type="text" placeholder="Search orders..." className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64" />
            <SearchIcon className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          </div>
          <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            <FilterIcon className="w-4 h-4 mr-2" />
            Filters
            <ChevronDownIcon className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
      {/* Status filter tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button onClick={() => setFilterStatus('all')} className={`py-4 px-1 border-b-2 font-medium text-sm ${filterStatus === 'all' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            All Orders
          </button>
          <button onClick={() => setFilterStatus('new')} className={`py-4 px-1 border-b-2 font-medium text-sm ${filterStatus === 'new' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            New Orders
          </button>
          <button onClick={() => setFilterStatus('active')} className={`py-4 px-1 border-b-2 font-medium text-sm ${filterStatus === 'active' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Active Orders
          </button>
          <button onClick={() => setFilterStatus('completed')} className={`py-4 px-1 border-b-2 font-medium text-sm ${filterStatus === 'completed' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Completed Orders
          </button>
        </nav>
      </div>
      {/* Orders table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
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
                  System Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Operator
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
              {filteredOrders.map(order => <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.pickup} → {order.dropoff}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.systemPrice}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.operator || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {order.status === 'New' || order.status === 'Bargaining' ? <button onClick={onAssignOperator} className="text-indigo-600 hover:text-indigo-900 mr-3">
                        Process
                      </button> : <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                        View
                      </button>}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};