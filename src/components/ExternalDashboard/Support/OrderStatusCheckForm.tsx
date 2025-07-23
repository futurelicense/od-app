import React, { useState } from 'react';
import { SearchIcon, TruckIcon, MapPinIcon, UserIcon, PhoneIcon, ClockIcon, CheckCircleIcon, ArrowRightIcon } from 'lucide-react';
export const OrderStatusCheckForm = () => {
  const [orderSearched, setOrderSearched] = useState(false);
  // Mock order data
  const orderData = {
    id: 'ORD-3840',
    customer: 'Michael Williams',
    customerPhone: '080-2345-6789',
    pickup: 'Surulere, Lagos',
    dropoff: 'Yaba, Lagos',
    status: 'In Transit',
    statusColor: 'bg-blue-100 text-blue-800',
    time: '2 hours ago',
    operator: 'David Adeleke',
    operatorPhone: '080-1234-5678',
    estimatedDelivery: 'Today, 4:30 PM',
    currentLocation: 'Surulere, Lagos',
    price: '₦1,800',
    items: 3,
    description: 'Package delivery containing electronics'
  };
  const handleSearch = e => {
    e.preventDefault();
    setOrderSearched(true);
  };
  return <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Check Order Status
        </h2>
        {!orderSearched ? <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-md font-medium text-gray-800 mb-4">
              Find Order
            </h3>
            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Order ID or Customer Phone
                </label>
                <div className="relative">
                  <input type="text" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter order ID or customer phone number" required />
                  <SearchIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                  Search
                </button>
              </div>
            </form>
          </div> : <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Order #{orderData.id}
                </h3>
                <p className="text-sm text-gray-500">
                  Started processing {orderData.time}
                </p>
              </div>
              <span className={`px-3 py-1 ${orderData.statusColor} text-sm rounded-full`}>
                {orderData.status}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-4">
                  Customer Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <UserIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="font-medium">{orderData.customer}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <PhoneIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">{orderData.customerPhone}</p>
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
                    <TruckIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Operator</p>
                      <p className="font-medium">{orderData.operator}</p>
                      <p className="text-sm text-gray-500">
                        {orderData.operatorPhone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ClockIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">
                        Estimated Delivery
                      </p>
                      <p className="font-medium">
                        {orderData.estimatedDelivery}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-4">
                  Pickup Location
                </h3>
                <div className="flex items-start">
                  <MapPinIcon className="w-5 h-5 text-green-500 mt-0.5 mr-2" />
                  <div>
                    <p className="font-medium">{orderData.pickup}</p>
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
                    <p className="font-medium">{orderData.dropoff}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-4">Order Progress</h3>
              <div className="relative">
                <div className="absolute left-5 top-0 h-full border-l-2 border-indigo-200"></div>
                <div className="mb-8 flex items-center">
                  <div className="z-10 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Order Placed</h4>
                    <p className="text-sm text-gray-500">Today, 10:30 AM</p>
                  </div>
                </div>
                <div className="mb-8 flex items-center">
                  <div className="z-10 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">
                      Order Accepted by LAAS Admin
                    </h4>
                    <p className="text-sm text-gray-500">Today, 11:00 AM</p>
                  </div>
                </div>
                <div className="mb-8 flex items-center">
                  <div className="z-10 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Operator Assigned</h4>
                    <p className="text-sm text-gray-500">Today, 11:30 AM</p>
                  </div>
                </div>
                <div className="mb-8 flex items-center">
                  <div className="z-10 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Pickup Completed</h4>
                    <p className="text-sm text-gray-500">Today, 12:15 PM</p>
                  </div>
                </div>
                <div className="mb-8 flex items-center">
                  <div className="z-10 flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full">
                    <TruckIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">In Transit</h4>
                    <p className="text-sm text-gray-500">
                      Current Location: {orderData.currentLocation}
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
                      Estimated: {orderData.estimatedDelivery}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={() => setOrderSearched(false)} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                Back to Search
              </button>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                  Contact Operator
                </button>
                <button className="px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg">
                  View Full Details
                </button>
              </div>
            </div>
          </div>}
      </div>
    </div>;
};