import React, { useEffect, useState } from 'react';
import { TruckIcon, MapPinIcon, UserIcon, PhoneIcon, PackageIcon, ClockIcon, DollarSignIcon, CheckIcon, SearchIcon, PlusIcon, CalculatorIcon } from 'lucide-react';
export const OrderProcessingForm = () => {
  const [selectedOperator, setSelectedOperator] = useState('');
  const [showNewOperatorForm, setShowNewOperatorForm] = useState(false);
  const [bargainedPrice, setBargainedPrice] = useState('2500');
  const [useSystemPrice, setUseSystemPrice] = useState(false);
  // Mock order data
  const order = {
    id: 'ORD-3842',
    systemPrice: '₦2,500',
    systemPriceValue: 2500,
    sender: {
      name: 'John Doe',
      phone: '080-1234-5678',
      address: 'Ikeja, Lagos'
    },
    recipient: {
      name: 'Jane Smith',
      phone: '080-8765-4321',
      address: 'Lekki, Lagos'
    },
    items: '2 packages',
    description: 'Documents and small electronics',
    latestDeliveryTime: '2023-04-20T18:00'
  };
  // Calculate profit margin
  const operatorPriceValue = useSystemPrice ? order.systemPriceValue : parseInt(bargainedPrice) || 0;
  const profitMargin = order.systemPriceValue - operatorPriceValue;
  const profitPercentage = order.systemPriceValue > 0 ? Math.round(profitMargin / order.systemPriceValue * 100) : 0;
  // Handle checkbox change
  const handleUseSystemPriceChange = e => {
    setUseSystemPrice(e.target.checked);
    if (e.target.checked) {
      setBargainedPrice(order.systemPriceValue.toString());
    }
  };
  // Mock operators
  const operators = [{
    id: 1,
    name: 'David Adeleke',
    phone: '080-1234-5678'
  }, {
    id: 2,
    name: 'Funke Akindele',
    phone: '080-9876-5432'
  }, {
    id: 3,
    name: 'Chijioke Eze',
    phone: '080-5555-1234'
  }];
  return <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Process Order #{order.id}
        </h2>
      </div>
      <div className="space-y-6">
        {/* Order Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Sender Information
            </h3>
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
              Recipient Information
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
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Delivery Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <PackageIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Items</p>
                <p className="font-medium">{order.items}</p>
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
            <div className="flex items-start">
              <DollarSignIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Customer Price</p>
                <p className="font-medium">{order.systemPrice}</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Description</p>
            <p className="mt-1">{order.description}</p>
          </div>
        </div>
        {/* Pricing Management */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
            <CalculatorIcon className="w-5 h-5 text-indigo-600 mr-2" />
            Pricing & Profit Management
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Customer Price</p>
                <p className="font-medium text-lg">{order.systemPrice}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Price charged to the customer
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div>
                  <p className="text-sm text-gray-500">Operator Price</p>
                  <div className="relative mt-1">
                    <input type="number" value={bargainedPrice} onChange={e => setBargainedPrice(e.target.value)} disabled={useSystemPrice} className={`w-full pl-7 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${useSystemPrice ? 'bg-gray-100' : ''}`} />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      ₦
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Price negotiated with operator
                  </p>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${profitMargin > 0 ? 'bg-green-50' : profitMargin < 0 ? 'bg-red-50' : 'bg-gray-50'}`}>
                <p className="text-sm text-gray-500">Your Profit</p>
                <p className={`font-medium text-lg ${profitMargin > 0 ? 'text-green-600' : profitMargin < 0 ? 'text-red-600' : 'text-gray-600'}`}>
                  ₦{profitMargin.toLocaleString()}
                  <span className="text-sm ml-1">({profitPercentage}%)</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Difference between customer and operator price
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <input id="use-system-price" name="pricing" type="checkbox" checked={useSystemPrice} onChange={handleUseSystemPriceChange} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label htmlFor="use-system-price" className="ml-2 block text-sm text-gray-900">
                No bargaining (operator gets full customer price)
              </label>
            </div>
            {profitMargin < 0 && <div className="bg-red-50 border border-red-100 rounded-lg p-3">
                <p className="text-sm text-red-600">
                  Warning: You're paying the operator more than what the
                  customer is paying. This will result in a loss.
                </p>
              </div>}
          </div>
        </div>
        {/* Operator Assignment */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Operator Assignment
          </h3>
          {!showNewOperatorForm ? <div className="space-y-4">
              <div className="relative">
                <input type="text" placeholder="Search operators..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <SearchIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phone
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {operators.map(operator => <tr key={operator.id} className={`hover:bg-gray-50 ${selectedOperator === operator.id ? 'bg-indigo-50' : ''}`}>
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button onClick={() => setSelectedOperator(operator.id)} className={`px-3 py-1 rounded-full ${selectedOperator === operator.id ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-800'} hover:bg-indigo-200`}>
                            {selectedOperator === operator.id ? <span className="flex items-center">
                                <CheckIcon className="w-4 h-4 mr-1" />
                                Selected
                              </span> : 'Select'}
                          </button>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
              <button type="button" onClick={() => setShowNewOperatorForm(true)} className="mt-4 flex items-center text-indigo-600 hover:text-indigo-800">
                <PlusIcon className="w-4 h-4 mr-1" />
                Add New Operator
              </button>
            </div> : <div className="space-y-4">
              <h4 className="font-medium text-gray-700">
                New Operator Details
              </h4>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Operator Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input type="text" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter operator's full name" required />
                  <UserIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input type="tel" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter operator's phone number" required />
                  <PhoneIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>
              </div>
              <div className="flex space-x-3">
                <button type="button" onClick={() => setShowNewOperatorForm(false)} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  Cancel
                </button>
                <button type="button" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center">
                  <PlusIcon className="w-5 h-5 mr-2" />
                  Add Operator
                </button>
              </div>
            </div>}
        </div>
        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button type="button" className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button type="button" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center">
            <TruckIcon className="w-5 h-5 mr-2" />
            Assign and Open for Sub-Agents
          </button>
        </div>
      </div>
    </div>;
};