import React, { useState } from 'react';
import { TruckIcon, PhoneIcon, MapPinIcon, ClockIcon, CheckCircleIcon, AlertCircleIcon, ArrowRightIcon, UserIcon } from 'lucide-react';
import { OrderStatusUpdateForm } from './OrderStatusUpdateForm';
export const SubAgentActiveOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  // Mock data for active orders
  const activeOrders = [{
    id: 'ORD-3839',
    pickup: 'Ikoyi, Lagos',
    dropoff: 'Festac, Lagos',
    operator: 'David Adeleke',
    operatorPhone: '080-1234-5678',
    status: 'Picked Up',
    statusColor: 'bg-blue-100 text-blue-800',
    time: '1 hour ago',
    customer: 'Emma Brown',
    customerPhone: '080-8765-4321',
    deliveryTime: '3:30 PM Today'
  }, {
    id: 'ORD-3838',
    pickup: 'Apapa, Lagos',
    dropoff: 'Ikeja, Lagos',
    operator: 'Funke Akindele',
    operatorPhone: '080-9876-5432',
    status: 'In Transit',
    statusColor: 'bg-yellow-100 text-yellow-800',
    time: '2 hours ago',
    customer: 'Daniel Wilson',
    customerPhone: '080-3456-7890',
    deliveryTime: '4:15 PM Today'
  }, {
    id: 'ORD-3837',
    pickup: 'Lekki, Lagos',
    dropoff: 'Victoria Island, Lagos',
    operator: 'Chijioke Eze',
    operatorPhone: '080-5555-1234',
    status: 'Pending Delivery',
    statusColor: 'bg-purple-100 text-purple-800',
    time: '3 hours ago',
    customer: 'Olivia Taylor',
    customerPhone: '080-2345-6789',
    deliveryTime: '5:00 PM Today'
  }];
  if (selectedOrder) {
    return <div className="space-y-6">
        <div className="flex items-center">
          <button onClick={() => setSelectedOrder(null)} className="text-gray-500 hover:text-gray-700 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-gray-800">
            Update Order Status
          </h1>
        </div>
        <OrderStatusUpdateForm />
      </div>;
  }
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">My Active Orders</h1>
      <div className="grid grid-cols-1 gap-4">
        {activeOrders.map(order => <div key={order.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center">
                    <div className="bg-indigo-100 p-2 rounded-full mr-3">
                      <TruckIcon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h2 className="text-lg font-semibold text-gray-800">
                          Order #{order.id}
                        </h2>
                        <span className={`ml-3 px-2 py-1 text-xs font-semibold rounded-full ${order.statusColor}`}>
                          {order.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        Accepted {order.time}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button onClick={() => setSelectedOrder(order.id)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
                    Update Status
                  </button>
                  <button className="bg-white hover:bg-gray-50 text-red-600 border border-red-300 px-4 py-2 rounded-lg">
                    Report Issue
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
                      <p className="text-sm text-gray-500">Customer</p>
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
                <div className="space-y-3">
                  <div className="flex items-start">
                    <UserIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Operator</p>
                      <p className="font-medium">{order.operator}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ClockIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Delivery Time</p>
                      <p className="font-medium">{order.deliveryTime}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <ClockIcon className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-sm font-medium">Status Timeline</span>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
                    View Complete History
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </button>
                </div>
                <div className="mt-3 flex items-center space-x-2">
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="h-10 w-0.5 bg-gray-200"></div>
                  </div>
                  <div>
                    <p className="font-medium">Order Accepted</p>
                    <p className="text-sm text-gray-500">Today, 10:30 AM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="h-10 w-0.5 bg-gray-200"></div>
                  </div>
                  <div>
                    <p className="font-medium">Arrived at Pickup</p>
                    <p className="text-sm text-gray-500">Today, 11:15 AM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex flex-col items-center">
                    <div className={`h-8 w-8 rounded-full ${order.status === 'Picked Up' || order.status === 'In Transit' || order.status === 'Pending Delivery' ? 'bg-green-100' : 'bg-gray-100'}`}>
                      {order.status === 'Picked Up' || order.status === 'In Transit' || order.status === 'Pending Delivery' ? <CheckCircleIcon className="h-5 w-5 text-green-600 m-1.5" /> : <div className="h-5 w-5 m-1.5"></div>}
                    </div>
                    <div className="h-10 w-0.5 bg-gray-200"></div>
                  </div>
                  <div>
                    <p className={`font-medium ${order.status === 'Picked Up' || order.status === 'In Transit' || order.status === 'Pending Delivery' ? 'text-gray-800' : 'text-gray-400'}`}>
                      Package Picked Up
                    </p>
                    <p className="text-sm text-gray-500">
                      {order.status === 'Picked Up' || order.status === 'In Transit' || order.status === 'Pending Delivery' ? 'Today, 11:30 AM' : 'Pending'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex flex-col items-center">
                    <div className={`h-8 w-8 rounded-full ${order.status === 'In Transit' || order.status === 'Pending Delivery' ? 'bg-green-100' : 'bg-gray-100'}`}>
                      {order.status === 'In Transit' || order.status === 'Pending Delivery' ? <CheckCircleIcon className="h-5 w-5 text-green-600 m-1.5" /> : <div className="h-5 w-5 m-1.5"></div>}
                    </div>
                    <div className="h-10 w-0.5 bg-gray-200"></div>
                  </div>
                  <div>
                    <p className={`font-medium ${order.status === 'In Transit' || order.status === 'Pending Delivery' ? 'text-gray-800' : 'text-gray-400'}`}>
                      In Transit
                    </p>
                    <p className="text-sm text-gray-500">
                      {order.status === 'In Transit' || order.status === 'Pending Delivery' ? 'Today, 12:15 PM' : 'Pending'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex flex-col items-center">
                    <div className={`h-8 w-8 rounded-full ${order.status === 'Pending Delivery' ? 'bg-yellow-100' : 'bg-gray-100'}`}>
                      {order.status === 'Pending Delivery' ? <ClockIcon className="h-5 w-5 text-yellow-600 m-1.5" /> : <div className="h-5 w-5 m-1.5"></div>}
                    </div>
                  </div>
                  <div>
                    <p className={`font-medium ${order.status === 'Pending Delivery' ? 'text-gray-800' : 'text-gray-400'}`}>
                      Delivered
                    </p>
                    <p className="text-sm text-gray-500">
                      {order.status === 'Delivered' ? 'Today, 2:30 PM' : 'Pending'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};