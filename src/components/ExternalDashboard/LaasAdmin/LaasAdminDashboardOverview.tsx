import React from 'react';
import { TruckIcon, UserIcon, DollarSignIcon, CheckCircleIcon, ArrowRightIcon, UsersIcon } from 'lucide-react';
interface LaasAdminDashboardOverviewProps {
  onAssignOperator: () => void;
  onAddOperator: () => void;
  onManageSubAgents: () => void;
  onProcessPayroll: () => void;
}
export const LaasAdminDashboardOverview = ({
  onAssignOperator,
  onAddOperator,
  onManageSubAgents,
  onProcessPayroll
}: LaasAdminDashboardOverviewProps) => {
  // Mock data for dashboard statistics
  const stats = [{
    title: 'New Orders',
    value: '18',
    icon: TruckIcon,
    color: 'bg-blue-500'
  }, {
    title: 'Active Operators',
    value: '42',
    icon: UserIcon,
    color: 'bg-green-500'
  }, {
    title: 'Sub Agents',
    value: '12',
    icon: UsersIcon,
    color: 'bg-purple-500'
  }, {
    title: 'Completed Orders',
    value: '246',
    icon: CheckCircleIcon,
    color: 'bg-indigo-500'
  }, {
    title: 'Revenue',
    value: '₦1.2M',
    icon: DollarSignIcon,
    color: 'bg-yellow-500'
  }];
  // Mock data for pending orders
  const pendingOrders = [{
    id: 'ORD-3842',
    customer: 'John Doe',
    pickup: 'Ikeja, Lagos',
    dropoff: 'Lekki, Lagos',
    systemPrice: '₦2,500',
    status: 'New',
    time: '10 mins ago',
    statusColor: 'bg-blue-100 text-blue-800'
  }, {
    id: 'ORD-3841',
    customer: 'Sarah Johnson',
    pickup: 'Victoria Island, Lagos',
    dropoff: 'Ajah, Lagos',
    systemPrice: '₦3,200',
    status: 'New',
    time: '45 mins ago',
    statusColor: 'bg-blue-100 text-blue-800'
  }, {
    id: 'ORD-3840',
    customer: 'Michael Williams',
    pickup: 'Surulere, Lagos',
    dropoff: 'Yaba, Lagos',
    systemPrice: '₦1,800',
    status: 'Bargaining',
    time: '2 hours ago',
    statusColor: 'bg-yellow-100 text-yellow-800'
  }, {
    id: 'ORD-3839',
    customer: 'Emma Brown',
    pickup: 'Ikoyi, Lagos',
    dropoff: 'Festac, Lagos',
    systemPrice: '₦4,500',
    status: 'Operator Assigned',
    time: '3 hours ago',
    statusColor: 'bg-green-100 text-green-800'
  }];
  // Mock data for active operators
  const activeOperators = [{
    id: 1,
    name: 'David Adeleke',
    phone: '080-1234-5678',
    activeOrders: 3,
    totalOrders: 145,
    rating: '4.8'
  }, {
    id: 2,
    name: 'Funke Akindele',
    phone: '080-9876-5432',
    activeOrders: 2,
    totalOrders: 98,
    rating: '4.7'
  }, {
    id: 3,
    name: 'Chijioke Eze',
    phone: '080-5555-1234',
    activeOrders: 1,
    totalOrders: 76,
    rating: '4.9'
  }];
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">LAAS Admin Dashboard</h1>
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button onClick={onAssignOperator} className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg flex items-center justify-center">
            <TruckIcon className="w-5 h-5 mr-2" />
            Assign Operator
          </button>
          <button onClick={onAddOperator} className="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg flex items-center justify-center">
            <UserIcon className="w-5 h-5 mr-2" />
            Add New Operator
          </button>
          <button onClick={onManageSubAgents} className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg flex items-center justify-center">
            <UsersIcon className="w-5 h-5 mr-2" />
            Manage Sub Agents
          </button>
          <button onClick={onProcessPayroll} className="bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-4 rounded-lg flex items-center justify-center">
            <DollarSignIcon className="w-5 h-5 mr-2" />
            Process Payroll
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending orders */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                Pending Orders
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
                    Route
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    System Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pendingOrders.map(order => <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.id}
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
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={onAssignOperator} className="text-indigo-600 hover:text-indigo-900 mr-3">
                        Process
                      </button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
        {/* Active operators */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                Active Operators
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
                    Operator
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Active Orders
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activeOperators.map(operator => <tr key={operator.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-medium">
                          {operator.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">
                            {operator.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {operator.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {operator.activeOrders} / {operator.totalOrders}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-900">
                          {operator.rating}
                        </span>
                        <svg className="w-4 h-4 text-yellow-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
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
    </div>;
};