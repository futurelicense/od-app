import React, { useState } from 'react';
import { UsersIcon, SearchIcon, UserPlusIcon, FilterIcon, ChevronDownIcon, UserIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
export const LaasAdminSubAgents = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  // Mock data for sub agents
  const subAgents = [{
    id: 1,
    name: 'Lagos Central Agency',
    contactPerson: 'Adewale Ibrahim',
    phone: '080-1234-5678',
    email: 'lagos.central@example.com',
    location: 'Ikeja, Lagos',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800',
    activeOrders: 12,
    totalOrders: 245,
    operators: 8,
    joinDate: '05 Jan 2023'
  }, {
    id: 2,
    name: 'Island Express Logistics',
    contactPerson: 'Folake Ogunleye',
    phone: '080-9876-5432',
    email: 'island.express@example.com',
    location: 'Victoria Island, Lagos',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800',
    activeOrders: 9,
    totalOrders: 187,
    operators: 6,
    joinDate: '18 Feb 2023'
  }, {
    id: 3,
    name: 'Mainland Delivery Partners',
    contactPerson: 'Emeka Okafor',
    phone: '080-5555-1234',
    email: 'mainland.delivery@example.com',
    location: 'Yaba, Lagos',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800',
    activeOrders: 15,
    totalOrders: 312,
    operators: 10,
    joinDate: '12 Mar 2023'
  }, {
    id: 4,
    name: 'Swift Logistics',
    contactPerson: 'Amina Mohammed',
    phone: '080-4444-5678',
    email: 'swift.logistics@example.com',
    location: 'Lekki, Lagos',
    status: 'Inactive',
    statusColor: 'bg-gray-100 text-gray-800',
    activeOrders: 0,
    totalOrders: 98,
    operators: 4,
    joinDate: '30 Apr 2023'
  }, {
    id: 5,
    name: 'Express Couriers',
    contactPerson: 'Chinedu Eze',
    phone: '080-3333-9876',
    email: 'express.couriers@example.com',
    location: 'Surulere, Lagos',
    status: 'Suspended',
    statusColor: 'bg-red-100 text-red-800',
    activeOrders: 0,
    totalOrders: 76,
    operators: 5,
    joinDate: '22 May 2023'
  }];
  // Filter sub agents based on status
  const filteredSubAgents = filterStatus === 'all' ? subAgents : subAgents.filter(agent => {
    if (filterStatus === 'active') return agent.status === 'Active';
    if (filterStatus === 'inactive') return agent.status === 'Inactive';
    if (filterStatus === 'suspended') return agent.status === 'Suspended';
    return true;
  });
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          Sub-Agents Management
        </h1>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input type="text" placeholder="Search sub-agents..." className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64" />
            <SearchIcon className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          </div>
          <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <UserPlusIcon className="w-4 h-4 mr-2" />
            Add New Sub-Agent
          </button>
        </div>
      </div>
      {/* Status filter tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button onClick={() => setFilterStatus('all')} className={`py-4 px-1 border-b-2 font-medium text-sm ${filterStatus === 'all' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            All Sub-Agents
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
      {/* Sub Agents Cards */}
      <div className="grid grid-cols-1 gap-6">
        {filteredSubAgents.map(agent => <div key={agent.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-medium">
                    <UsersIcon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {agent.name}
                      </h2>
                      <span className={`ml-3 px-2 py-1 text-xs font-semibold rounded-full ${agent.statusColor}`}>
                        {agent.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      ID: SA-{agent.id.toString().padStart(4, '0')}
                    </p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-2">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
                    View Details
                  </button>
                  {agent.status === 'Active' ? <button className="bg-white hover:bg-gray-50 text-red-600 border border-red-300 px-4 py-2 rounded-lg">
                      Suspend
                    </button> : agent.status === 'Suspended' ? <button className="bg-white hover:bg-gray-50 text-green-600 border border-green-300 px-4 py-2 rounded-lg">
                      Activate
                    </button> : <button className="bg-white hover:bg-gray-50 text-green-600 border border-green-300 px-4 py-2 rounded-lg">
                      Activate
                    </button>}
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <UserIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Contact Person</p>
                      <p className="font-medium">{agent.contactPerson}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <PhoneIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">{agent.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPinIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">{agent.location}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">Active Orders</p>
                    <p className="font-medium text-indigo-600">
                      {agent.activeOrders}
                    </p>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-indigo-600 rounded-full" style={{
                  width: `${agent.activeOrders / 20 * 100}%`
                }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                      Total Orders Completed
                    </p>
                    <p className="font-medium">{agent.totalOrders}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">Operators</p>
                    <p className="font-medium">{agent.operators}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">Joined</p>
                    <p className="font-medium">{agent.joinDate}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">Commission Rate</p>
                    <p className="font-medium">15%</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">Last Payment</p>
                    <p className="font-medium">₦45,250 (15 Aug)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};