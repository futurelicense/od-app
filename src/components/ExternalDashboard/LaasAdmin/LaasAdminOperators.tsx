import React, { useState } from 'react';
import { UserIcon, SearchIcon, FilterIcon, ChevronDownIcon, TruckIcon, PhoneIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react';
interface LaasAdminOperatorsProps {
  onAddOperator: () => void;
}
export const LaasAdminOperators = ({
  onAddOperator
}: LaasAdminOperatorsProps) => {
  const [filterStatus, setFilterStatus] = useState('all');
  // Mock data for operators
  const operators = [{
    id: 1,
    name: 'David Adeleke',
    phone: '080-1234-5678',
    email: 'david.adeleke@example.com',
    location: 'Ikeja, Lagos',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800',
    activeOrders: 3,
    totalOrders: 145,
    rating: '4.8',
    joinDate: '15 Jan 2023'
  }, {
    id: 2,
    name: 'Funke Akindele',
    phone: '080-9876-5432',
    email: 'funke.akindele@example.com',
    location: 'Victoria Island, Lagos',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800',
    activeOrders: 2,
    totalOrders: 98,
    rating: '4.7',
    joinDate: '03 Mar 2023'
  }, {
    id: 3,
    name: 'Chijioke Eze',
    phone: '080-5555-1234',
    email: 'chijioke.eze@example.com',
    location: 'Lekki, Lagos',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800',
    activeOrders: 1,
    totalOrders: 76,
    rating: '4.9',
    joinDate: '22 Apr 2023'
  }, {
    id: 4,
    name: 'Ngozi Okafor',
    phone: '080-4444-5678',
    email: 'ngozi.okafor@example.com',
    location: 'Surulere, Lagos',
    status: 'Inactive',
    statusColor: 'bg-gray-100 text-gray-800',
    activeOrders: 0,
    totalOrders: 52,
    rating: '4.5',
    joinDate: '10 May 2023'
  }, {
    id: 5,
    name: 'Adebayo Johnson',
    phone: '080-3333-9876',
    email: 'adebayo.johnson@example.com',
    location: 'Yaba, Lagos',
    status: 'Suspended',
    statusColor: 'bg-red-100 text-red-800',
    activeOrders: 0,
    totalOrders: 37,
    rating: '3.2',
    joinDate: '05 Jun 2023'
  }];
  // Filter operators based on status
  const filteredOperators = filterStatus === 'all' ? operators : operators.filter(operator => {
    if (filterStatus === 'active') return operator.status === 'Active';
    if (filterStatus === 'inactive') return operator.status === 'Inactive';
    if (filterStatus === 'suspended') return operator.status === 'Suspended';
    return true;
  });
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          Operators Management
        </h1>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input type="text" placeholder="Search operators..." className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64" />
            <SearchIcon className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          </div>
          <button onClick={onAddOperator} className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <UserIcon className="w-4 h-4 mr-2" />
            Add New Operator
          </button>
        </div>
      </div>
      {/* Status filter tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button onClick={() => setFilterStatus('all')} className={`py-4 px-1 border-b-2 font-medium text-sm ${filterStatus === 'all' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            All Operators
          </button>
          <button onClick={() => setFilterStatus('active')} className={`py-4 px-1 border-b-2 font-medium text-sm ${filterStatus === 'active' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Active
          </button>
          <button onClick={() => setFilterStatus('inactive')} className={`py-4 px-1 border-b-2 font-medium text-sm ${filterStatus === 'inactive' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Inactive
          </button>
          <button onClick={() => setFilterStatus('suspended')} className={`py-4 px-1 border-b-2 font-medium text-sm ${filterStatus === 'suspended' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Suspended
          </button>
        </nav>
      </div>
      {/* Operators table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Operator
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Join Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOperators.map(operator => <tr key={operator.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-medium">
                        {operator.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {operator.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          ID: OP-{operator.id.toString().padStart(4, '0')}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {operator.phone}
                    </div>
                    <div className="text-sm text-gray-500">
                      {operator.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {operator.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${operator.statusColor}`}>
                      {operator.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {operator.activeOrders} active
                    </div>
                    <div className="text-sm text-gray-500">
                      {operator.totalOrders} total
                    </div>
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {operator.joinDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                      View
                    </button>
                    {operator.status === 'Active' ? <button className="text-red-600 hover:text-red-900">
                        Suspend
                      </button> : operator.status === 'Suspended' ? <button className="text-green-600 hover:text-green-900">
                        Activate
                      </button> : <button className="text-green-600 hover:text-green-900">
                        Activate
                      </button>}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};