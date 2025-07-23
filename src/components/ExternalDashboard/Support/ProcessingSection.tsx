import React, { useState } from 'react';
import { TruckIcon, SearchIcon, FilterIcon, ChevronDownIcon, ClockIcon, CheckCircleIcon, XCircleIcon, EyeIcon, MapPinIcon } from 'lucide-react';
export const ProcessingSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  // Mock data for processing orders
  const processingOrders = [{
    id: 'ORD-3840',
    customer: 'Michael Williams',
    pickup: 'Surulere, Lagos',
    dropoff: 'Yaba, Lagos',
    status: 'Processing',
    statusColor: 'bg-indigo-100 text-indigo-800',
    time: '2 hours ago',
    operator: 'David Adeleke',
    operatorPhone: '080-1234-5678',
    estimatedDelivery: 'Today, 4:30 PM',
    currentLocation: 'Surulere, Lagos',
    price: '₦1,800'
  }, {
    id: 'ORD-3838',
    customer: 'Daniel Wilson',
    pickup: 'Apapa, Lagos',
    dropoff: 'Ikeja, Lagos',
    status: 'In Transit',
    statusColor: 'bg-blue-100 text-blue-800',
    time: '5 hours ago',
    operator: 'Funke Akindele',
    operatorPhone: '080-9876-5432',
    estimatedDelivery: 'Today, 3:15 PM',
    currentLocation: 'Oshodi, Lagos',
    price: '₦2,800'
  }, {
    id: 'ORD-3835',
    customer: 'Jessica Lee',
    pickup: 'Lekki Phase 1, Lagos',
    dropoff: 'Ikoyi, Lagos',
    status: 'Processing',
    statusColor: 'bg-indigo-100 text-indigo-800',
    time: 'Yesterday',
    operator: 'Chijioke Eze',
    operatorPhone: '080-5555-1234',
    estimatedDelivery: 'Today, 5:00 PM',
    currentLocation: 'Lekki Phase 1, Lagos',
    price: '₦2,200'
  }, {
    id: 'ORD-3833',
    customer: 'Robert Johnson',
    pickup: 'Victoria Island, Lagos',
    dropoff: 'Ajah, Lagos',
    status: 'Delayed',
    statusColor: 'bg-yellow-100 text-yellow-800',
    time: 'Yesterday',
    operator: 'David Adeleke',
    operatorPhone: '080-1234-5678',
    estimatedDelivery: 'Today, 6:30 PM',
    currentLocation: 'Victoria Island, Lagos',
    price: '₦3,500'
  }, {
    id: 'ORD-3832',
    customer: 'Amanda Parker',
    pickup: 'Ikeja, Lagos',
    dropoff: 'Maryland, Lagos',
    status: 'Issue Reported',
    statusColor: 'bg-red-100 text-red-800',
    time: '2 days ago',
    operator: 'Funke Akindele',
    operatorPhone: '080-9876-5432',
    estimatedDelivery: 'Delayed',
    currentLocation: 'Ikeja, Lagos',
    price: '₦1,500'
  }];
  // Filter orders based on active tab
  const filteredOrders = processingOrders.filter(order => {
    if (activeTab === 'all') return true;
    if (activeTab === 'processing') return order.status === 'Processing';
    if (activeTab === 'transit') return order.status === 'In Transit';
    if (activeTab === 'delayed') return order.status === 'Delayed';
    if (activeTab === 'issues') return order.status === 'Issue Reported';
    return true;
  });
  if (selectedOrder) {
    const order = processingOrders.find(o => o.id === selectedOrder);
    if (!order) return null;
    return <div className="space-y-6">
        <div className="flex items-center">
          <button onClick={() => setSelectedOrder(null)} className="text-gray-500 hover:text-gray-700 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-gray-800">
            Processing Order Details
          </h1>
          <span className={`ml-4 px-2 py-1 ${order.statusColor} text-xs font-semibold rounded-full`}>
            {order.status}
          </span>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Order #{order.id}
              </h2>
              <p className="text-sm text-gray-500">
                Started processing {order.time}
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
                Contact Operator
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2 rounded-lg">
                Update Status
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-4">
                Delivery Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <TruckIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Operator</p>
                    <p className="font-medium">{order.operator}</p>
                    <p className="text-sm text-gray-500">
                      {order.operatorPhone}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Estimated Delivery</p>
                    <p className="font-medium">{order.estimatedDelivery}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPinIcon className="w-5 h-5 text-indigo-500 mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Current Location</p>
                    <p className="font-medium">{order.currentLocation}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-4">
                Order Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPinIcon className="w-5 h-5 text-green-500 mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Pickup</p>
                    <p className="font-medium">{order.pickup}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPinIcon className="w-5 h-5 text-red-500 mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Dropoff</p>
                    <p className="font-medium">{order.dropoff}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="font-medium">{order.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-gray-800 mb-4">
              Delivery Progress
            </h3>
            <div className="relative">
              <div className="absolute left-5 top-0 h-full border-l-2 border-indigo-200"></div>
              <div className="mb-8 flex items-center">
                <div className="z-10 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full">
                  <CheckCircleIcon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Order Accepted</h4>
                  <p className="text-sm text-gray-500">Today, 10:30 AM</p>
                </div>
              </div>
              <div className="mb-8 flex items-center">
                <div className="z-10 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full">
                  <CheckCircleIcon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Operator Assigned</h4>
                  <p className="text-sm text-gray-500">Today, 11:15 AM</p>
                </div>
              </div>
              <div className="mb-8 flex items-center">
                <div className="z-10 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full">
                  <CheckCircleIcon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Pickup in Progress</h4>
                  <p className="text-sm text-gray-500">Today, 12:00 PM</p>
                </div>
              </div>
              <div className="mb-8 flex items-center">
                <div className="z-10 flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-full">
                  <ClockIcon className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">In Transit</h4>
                  <p className="text-sm text-gray-500">
                    Estimated: Today, 2:30 PM
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                  <CheckCircleIcon className="w-6 h-6 text-gray-400" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-400">Delivered</h4>
                  <p className="text-sm text-gray-500">
                    Estimated: {order.estimatedDelivery}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-4">Activity Log</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Operator has picked up the package
                  </p>
                  <p className="text-sm text-gray-500">Today, 12:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Operator {order.operator} has been assigned to this order
                  </p>
                  <p className="text-sm text-gray-500">Today, 11:15 AM</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Order has been accepted by LAAS Admin
                  </p>
                  <p className="text-sm text-gray-500">Today, 10:30 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
  return <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
          Processing Orders
        </h1>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input type="text" placeholder="Search orders..." className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-64" />
            <SearchIcon className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          </div>
          <button onClick={() => setShowFilters(!showFilters)} className="flex items-center px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            <FilterIcon className="w-4 h-4 mr-2" />
            Filters
            <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
      {showFilters && <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Operator
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>All Operators</option>
                <option>David Adeleke</option>
                <option>Funke Akindele</option>
                <option>Chijioke Eze</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>All Status</option>
                <option>Processing</option>
                <option>In Transit</option>
                <option>Delayed</option>
                <option>Issue Reported</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Delivery Date
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>All Dates</option>
                <option>Today</option>
                <option>Tomorrow</option>
                <option>This Week</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg mr-2">
              Reset
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
              Apply Filters
            </button>
          </div>
        </div>}
      <div className="flex border-b border-gray-200 overflow-x-auto">
        <button onClick={() => setActiveTab('all')} className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'all' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
          All Orders
        </button>
        <button onClick={() => setActiveTab('processing')} className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'processing' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
          Processing
        </button>
        <button onClick={() => setActiveTab('transit')} className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'transit' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
          In Transit
        </button>
        <button onClick={() => setActiveTab('delayed')} className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'delayed' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
          Delayed
        </button>
        <button onClick={() => setActiveTab('issues')} className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'issues' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
          Issues
        </button>
      </div>
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
                  Operator
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Est. Delivery
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
                    {order.operator}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.estimatedDelivery}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => setSelectedOrder(order.id)} className="text-indigo-600 hover:text-indigo-900 flex items-center justify-end">
                      <EyeIcon className="w-4 h-4 mr-1" />
                      Track
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 flex justify-between items-center border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Showing {filteredOrders.length} of {processingOrders.length} results
          </div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
              Previous
            </button>
            <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>;
};