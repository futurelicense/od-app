import React from 'react';
import { TruckIcon, PhoneIcon, MapPinIcon, ClockIcon, UserIcon, SearchIcon, FilterIcon, ChevronDownIcon } from 'lucide-react';
export const SubAgentAvailableOrders = () => {
  // Mock data for available orders
  const availableOrders = [{
    id: 'ORD-3842',
    pickup: 'Ikeja, Lagos',
    dropoff: 'Lekki, Lagos',
    operator: 'David Adeleke',
    operatorPhone: '080-1234-5678',
    time: '10 mins ago',
    distance: '18.5 km',
    payment: '₦2,500',
    customer: 'John Doe'
  }, {
    id: 'ORD-3841',
    pickup: 'Victoria Island, Lagos',
    dropoff: 'Ajah, Lagos',
    operator: 'Funke Akindele',
    operatorPhone: '080-9876-5432',
    time: '45 mins ago',
    distance: '22 km',
    payment: '₦3,200',
    customer: 'Sarah Johnson'
  }, {
    id: 'ORD-3840',
    pickup: 'Surulere, Lagos',
    dropoff: 'Yaba, Lagos',
    operator: 'Chijioke Eze',
    operatorPhone: '080-5555-1234',
    time: '2 hours ago',
    distance: '8 km',
    payment: '₦1,800',
    customer: 'Michael Williams'
  }, {
    id: 'ORD-3839',
    pickup: 'Ikoyi, Lagos',
    dropoff: 'Festac, Lagos',
    operator: 'David Adeleke',
    operatorPhone: '080-1234-5678',
    time: '3 hours ago',
    distance: '24 km',
    payment: '₦4,500',
    customer: 'Emma Brown'
  }, {
    id: 'ORD-3838',
    pickup: 'Apapa, Lagos',
    dropoff: 'Ikeja, Lagos',
    operator: 'Funke Akindele',
    operatorPhone: '080-9876-5432',
    time: '5 hours ago',
    distance: '15 km',
    payment: '₦2,800',
    customer: 'Daniel Wilson'
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Available Orders</h1>
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
      <div className="grid grid-cols-1 gap-4">
        {availableOrders.map(order => <div key={order.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center">
                    <div className="bg-indigo-100 p-2 rounded-full mr-3">
                      <TruckIcon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        Order #{order.id}
                      </h2>
                      <p className="text-sm text-gray-500">
                        Assigned {order.time}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
                    Accept Order
                  </button>
                  <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2 rounded-lg">
                    View Details
                  </button>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPinIcon className="w-5 h-5 text-green-500 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Pickup Location</p>
                      <p className="font-medium">{order.pickup}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPinIcon className="w-5 h-5 text-red-500 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Dropoff Location</p>
                      <p className="font-medium">{order.dropoff}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <UserIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Operator</p>
                      <p className="font-medium">{order.operator}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <PhoneIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">{order.operatorPhone}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <TruckIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Distance</p>
                      <p className="font-medium">{order.distance}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Payment</p>
                      <p className="font-medium">{order.payment}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>)}
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-4 py-2 rounded-lg font-medium">
          Load More Orders
        </button>
      </div>
    </div>;
};