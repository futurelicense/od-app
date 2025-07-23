import React, { useState } from 'react';
import { TruckIcon, SearchIcon, FilterIcon, ChevronDownIcon, MapPinIcon, UserIcon, PhoneIcon, ClockIcon, EyeIcon } from 'lucide-react';
export const OrderRequestsSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  // Mock data for order requests
  const orderRequests = [{
    id: 'ORD-3842',
    customer: 'John Doe',
    customerPhone: '080-1234-5678',
    pickup: 'Ikeja, Lagos',
    dropoff: 'Lekki, Lagos',
    status: 'Pending LAAS Admin',
    time: '10 mins ago',
    statusColor: 'bg-yellow-100 text-yellow-800',
    items: 2,
    requestedDeliveryTime: 'Today, 5:00 PM',
    systemPrice: '₦2,500'
  }, {
    id: 'ORD-3841',
    customer: 'Sarah Johnson',
    customerPhone: '080-9876-5432',
    pickup: 'Victoria Island, Lagos',
    dropoff: 'Ajah, Lagos',
    status: 'New',
    time: '45 mins ago',
    statusColor: 'bg-blue-100 text-blue-800',
    items: 1,
    requestedDeliveryTime: 'Today, 6:30 PM',
    systemPrice: '₦3,200'
  }, {
    id: 'ORD-3840',
    customer: 'Michael Williams',
    customerPhone: '080-2345-6789',
    pickup: 'Surulere, Lagos',
    dropoff: 'Yaba, Lagos',
    status: 'Processing',
    time: '2 hours ago',
    statusColor: 'bg-indigo-100 text-indigo-800',
    items: 3,
    requestedDeliveryTime: 'Today, 4:00 PM',
    systemPrice: '₦1,800'
  }, {
    id: 'ORD-3839',
    customer: 'Emma Brown',
    customerPhone: '080-3456-7890',
    pickup: 'Ikoyi, Lagos',
    dropoff: 'Festac, Lagos',
    status: 'Payment Pending',
    time: '3 hours ago',
    statusColor: 'bg-purple-100 text-purple-800',
    items: 1,
    requestedDeliveryTime: 'Tomorrow, 10:00 AM',
    systemPrice: '₦4,500'
  }, {
    id: 'ORD-3838',
    customer: 'Daniel Wilson',
    customerPhone: '080-4567-8901',
    pickup: 'Apapa, Lagos',
    dropoff: 'Ikeja, Lagos',
    status: 'Cancelled',
    time: '5 hours ago',
    statusColor: 'bg-red-100 text-red-800',
    items: 2,
    requestedDeliveryTime: 'Today, 3:00 PM',
    systemPrice: '₦2,800'
  }, {
    id: 'ORD-3837',
    customer: 'Olivia Taylor',
    customerPhone: '080-5678-9012',
    pickup: 'Lekki, Lagos',
    dropoff: 'Victoria Island, Lagos',
    status: 'Delivered',
    time: 'Yesterday',
    statusColor: 'bg-green-100 text-green-800',
    items: 1,
    requestedDeliveryTime: 'Yesterday, 4:00 PM',
    systemPrice: '₦1,900'
  }];
  // Filter orders based on active tab
  const filteredOrders = orderRequests.filter(order => {
    if (activeTab === 'all') return true;
    if (activeTab === 'new') return order.status === 'New';
    if (activeTab === 'pending') return order.status === 'Pending LAAS Admin';
    if (activeTab === 'processing') return order.status === 'Processing';
    if (activeTab === 'payment') return order.status === 'Payment Pending';
    if (activeTab === 'completed') return order.status === 'Delivered';
    return true;
  });
  if (selectedOrder) {
    const order = orderRequests.find(o => o.id === selectedOrder);
    if (!order) return null;
    return <div className="space-y-6">
        <div className="flex items-center">
          <button onClick={() => setSelectedOrder(null)} className="text-gray-500 hover:text-gray-700 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-gray-800">
            Order Request Details
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
              <p className="text-sm text-gray-500">Requested {order.time}</p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
                Forward to LAAS Admin
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2 rounded-lg">
                Edit Request
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-4">
                Customer Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <UserIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-medium">{order.customer}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{order.customerPhone}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-4">
                Delivery Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <ClockIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">
                      Requested Delivery Time
                    </p>
                    <p className="font-medium">{order.requestedDeliveryTime}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TruckIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Items</p>
                    <p className="font-medium">{order.items} item(s)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-4">
                Pickup Location
              </h3>
              <div className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-green-500 mt-0.5 mr-2" />
                <div>
                  <p className="font-medium">{order.pickup}</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-4">
                Dropoff Location
              </h3>
              <div className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-red-500 mt-0.5 mr-2" />
                <div>
                  <p className="font-medium">{order.dropoff}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-gray-800 mb-4">Pricing</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">System Calculated Price</span>
                <span className="font-medium">{order.systemPrice}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Base Delivery Fee</span>
                <span className="font-medium">₦1,500</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Distance Fee</span>
                <span className="font-medium">₦800</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Service Fee</span>
                <span className="font-medium">₦200</span>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-4">Item Description</h3>
            <p className="text-gray-700">
              Package contains fragile electronics. Please handle with care and
              ensure proper packaging.
            </p>
          </div>
        </div>
      </div>;
  }
  return <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
          Order Requests
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
                Date Range
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>All Time</option>
                <option>Today</option>
                <option>Yesterday</option>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>This Month</option>
                <option>Last Month</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>All Status</option>
                <option>New</option>
                <option>Pending LAAS Admin</option>
                <option>Processing</option>
                <option>Payment Pending</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sort By
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Price: High to Low</option>
                <option>Price: Low to High</option>
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
          All Requests
        </button>
        <button onClick={() => setActiveTab('new')} className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'new' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
          New
        </button>
        <button onClick={() => setActiveTab('pending')} className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'pending' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
          Pending LAAS Admin
        </button>
        <button onClick={() => setActiveTab('processing')} className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'processing' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
          Processing
        </button>
        <button onClick={() => setActiveTab('payment')} className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'payment' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
          Payment Pending
        </button>
        <button onClick={() => setActiveTab('completed')} className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'completed' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
          Completed
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
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
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
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.systemPrice}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => setSelectedOrder(order.id)} className="text-indigo-600 hover:text-indigo-900 flex items-center justify-end">
                      <EyeIcon className="w-4 h-4 mr-1" />
                      View
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 flex justify-between items-center border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Showing {filteredOrders.length} of {orderRequests.length} results
          </div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
              Previous
            </button>
            <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>;
};