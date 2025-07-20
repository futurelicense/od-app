import React, { useState } from 'react';
import { TruckIcon, MapPinIcon, UserIcon, PhoneIcon, ClockIcon, CheckCircleIcon, XCircleIcon, AlertTriangleIcon, MessageCircleIcon } from 'lucide-react';
export const OrderStatusUpdateForm = () => {
  const [orderStatus, setOrderStatus] = useState('picked_up');
  const [showIssueForm, setShowIssueForm] = useState(false);
  // Mock order data
  const order = {
    id: 'ORD-3839',
    sender: {
      name: 'John Doe',
      phone: '080-1234-5678',
      address: 'Ikoyi, Lagos'
    },
    recipient: {
      name: 'Jane Smith',
      phone: '080-8765-4321',
      address: 'Festac, Lagos'
    },
    operator: {
      name: 'David Adeleke',
      phone: '080-1234-5678'
    },
    status: 'Picked Up',
    assignedTime: '2023-04-20T10:30',
    latestDeliveryTime: '2023-04-20T18:00'
  };
  return <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Update Order #{order.id}
        </h2>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
          {order.status}
        </span>
      </div>
      <div className="space-y-6">
        {/* Order Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Sender</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <UserIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{order.sender.name}</p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{order.sender.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Pickup Address</p>
                  <p className="font-medium">{order.sender.address}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Recipient
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <UserIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{order.recipient.name}</p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{order.recipient.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Delivery Address</p>
                  <p className="font-medium">{order.recipient.address}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Operator</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <UserIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{order.operator.name}</p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{order.operator.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Latest Delivery Time</p>
                  <p className="font-medium">
                    {new Date(order.latestDeliveryTime).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Status Update */}
        {!showIssueForm ? <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Update Order Status
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                <button type="button" onClick={() => setOrderStatus('assigned')} className={`p-3 rounded-lg border ${orderStatus === 'assigned' ? 'bg-indigo-50 border-indigo-300 text-indigo-800' : 'border-gray-300 hover:bg-gray-50'}`}>
                  <TruckIcon className="w-6 h-6 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Assigned</span>
                </button>
                <button type="button" onClick={() => setOrderStatus('picked_up')} className={`p-3 rounded-lg border ${orderStatus === 'picked_up' ? 'bg-indigo-50 border-indigo-300 text-indigo-800' : 'border-gray-300 hover:bg-gray-50'}`}>
                  <TruckIcon className="w-6 h-6 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Picked Up</span>
                </button>
                <button type="button" onClick={() => setOrderStatus('in_transit')} className={`p-3 rounded-lg border ${orderStatus === 'in_transit' ? 'bg-indigo-50 border-indigo-300 text-indigo-800' : 'border-gray-300 hover:bg-gray-50'}`}>
                  <TruckIcon className="w-6 h-6 mx-auto mb-2" />
                  <span className="block text-sm font-medium">In Transit</span>
                </button>
                <button type="button" onClick={() => setOrderStatus('pending')} className={`p-3 rounded-lg border ${orderStatus === 'pending' ? 'bg-indigo-50 border-indigo-300 text-indigo-800' : 'border-gray-300 hover:bg-gray-50'}`}>
                  <ClockIcon className="w-6 h-6 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Pending</span>
                </button>
                <button type="button" onClick={() => setOrderStatus('delivered')} className={`p-3 rounded-lg border ${orderStatus === 'delivered' ? 'bg-indigo-50 border-indigo-300 text-indigo-800' : 'border-gray-300 hover:bg-gray-50'}`}>
                  <CheckCircleIcon className="w-6 h-6 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Delivered</span>
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status Notes (optional)
                </label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="Add any additional notes about the status update..."></textarea>
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={() => setShowIssueForm(true)} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center">
                  <AlertTriangleIcon className="w-5 h-5 mr-2" />
                  Report Issue
                </button>
                <button type="button" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center">
                  <CheckCircleIcon className="w-5 h-5 mr-2" />
                  Update Status
                </button>
              </div>
            </div>
          </div> : <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Report Issue
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Issue Type <span className="text-red-500">*</span>
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required>
                  <option value="">Select issue type</option>
                  <option value="delivery_delay">Delivery Delay</option>
                  <option value="wrong_address">Wrong Address</option>
                  <option value="customer_unavailable">
                    Customer Unavailable
                  </option>
                  <option value="damaged_item">Damaged Item</option>
                  <option value="operator_issue">Operator Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Issue Description <span className="text-red-500">*</span>
                </label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" rows={5} placeholder="Describe the issue in detail..." required></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Image (optional)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={() => setShowIssueForm(false)} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  Cancel
                </button>
                <button type="button" className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center">
                  <AlertTriangleIcon className="w-5 h-5 mr-2" />
                  Submit Issue
                </button>
              </div>
            </div>
          </div>}
        {/* Communication Log */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Communication Log
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-indigo-500 pl-4 py-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Order Assigned to Operator</p>
                  <p className="text-sm text-gray-500">
                    David Adeleke has been assigned to this order
                  </p>
                </div>
                <span className="text-xs text-gray-500">Today, 10:30 AM</span>
              </div>
            </div>
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Order Picked Up</p>
                  <p className="text-sm text-gray-500">
                    Operator has picked up the package from the sender
                  </p>
                </div>
                <span className="text-xs text-gray-500">Today, 11:15 AM</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Add Comment
              </label>
              <div className="flex">
                <input type="text" className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Type a message..." />
                <button type="button" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-r-lg">
                  <MessageCircleIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};