import React, { useState } from 'react';
import { ShoppingBagIcon, SearchIcon, FilterIcon, ChevronDownIcon, EyeIcon, CheckIcon, TruckIcon, XIcon, ClockIcon, UserIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
export const OrdersSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<number | null>(null);
  const orders = [{
    id: 2845,
    customer: 'John Doe',
    date: 'Today, 10:45 AM',
    total: '₦12,500',
    items: 2,
    status: 'Processing',
    statusColor: 'bg-blue-100 text-blue-800',
    paymentStatus: 'Paid',
    paymentMethod: 'Card Payment',
    address: '15 Admiralty Way, Lekki Phase 1, Lagos',
    phone: '080-1234-5678',
    products: [{
      id: 1,
      name: 'Wireless Earbuds',
      price: '₦8,500',
      quantity: 1
    }, {
      id: 2,
      name: 'Phone Case',
      price: '₦4,000',
      quantity: 1
    }]
  }, {
    id: 2844,
    customer: 'Sarah Johnson',
    date: 'Yesterday, 3:20 PM',
    total: '₦18,000',
    items: 1,
    status: 'Shipped',
    statusColor: 'bg-yellow-100 text-yellow-800',
    paymentStatus: 'Paid',
    paymentMethod: 'Bank Transfer',
    address: '7 Broad Street, Marina, Lagos Island',
    phone: '080-9876-5432',
    products: [{
      id: 5,
      name: 'Bluetooth Speaker',
      price: '₦18,000',
      quantity: 1
    }]
  }, {
    id: 2843,
    customer: 'Michael Williams',
    date: 'Apr 15, 2023',
    total: '₦25,000',
    items: 1,
    status: 'Delivered',
    statusColor: 'bg-green-100 text-green-800',
    paymentStatus: 'Paid',
    paymentMethod: 'Wallet',
    address: '25 Allen Avenue, Ikeja, Lagos',
    phone: '080-2345-6789',
    products: [{
      id: 2,
      name: 'Smart Watch',
      price: '₦25,000',
      quantity: 1
    }]
  }, {
    id: 2842,
    customer: 'Emma Brown',
    date: 'Apr 12, 2023',
    total: '₦35,500',
    items: 3,
    status: 'Delivered',
    statusColor: 'bg-green-100 text-green-800',
    paymentStatus: 'Paid',
    paymentMethod: 'Card Payment',
    address: '10 Bourdillon Road, Ikoyi, Lagos',
    phone: '080-3456-7890',
    products: [{
      id: 1,
      name: 'Wireless Earbuds',
      price: '₦8,500',
      quantity: 1
    }, {
      id: 3,
      name: 'Leather Wallet',
      price: '₦8,500',
      quantity: 2
    }, {
      id: 4,
      name: 'Phone Case',
      price: '₦3,500',
      quantity: 3
    }]
  }, {
    id: 2841,
    customer: 'David Wilson',
    date: 'Apr 10, 2023',
    total: '₦12,000',
    items: 1,
    status: 'Cancelled',
    statusColor: 'bg-red-100 text-red-800',
    paymentStatus: 'Refunded',
    paymentMethod: 'Card Payment',
    address: '5 Adeola Odeku Street, Victoria Island, Lagos',
    phone: '080-4567-8901',
    products: [{
      id: 6,
      name: 'Backpack',
      price: '₦12,000',
      quantity: 1
    }]
  }];
  return <div className="p-6">
      {selectedOrder !== null ? <OrderDetails order={orders.find(order => order.id === selectedOrder)!} onBack={() => setSelectedOrder(null)} /> : <>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
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
          {showFilters && <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
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
                    Order Status
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>All Status</option>
                    <option>Processing</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Status
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>All Payment Status</option>
                    <option>Paid</option>
                    <option>Pending</option>
                    <option>Failed</option>
                    <option>Refunded</option>
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
          <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
            <button onClick={() => setActiveTab('all')} className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'all' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              All Orders
            </button>
            <button onClick={() => setActiveTab('processing')} className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'processing' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              Processing
            </button>
            <button onClick={() => setActiveTab('shipped')} className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'shipped' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              Shipped
            </button>
            <button onClick={() => setActiveTab('delivered')} className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'delivered' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              Delivered
            </button>
            <button onClick={() => setActiveTab('cancelled')} className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'cancelled' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              Cancelled
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map(order => <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <ShoppingBagIcon className="w-5 h-5 text-gray-400 mr-2" />
                        <div className="text-sm font-medium text-gray-900">
                          #{order.id}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {order.customer}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{order.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {order.total}
                      </div>
                      <div className="text-xs text-gray-500">
                        {order.items} items
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${order.statusColor}`}>
                        {order.status}
                      </span>
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
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-gray-500">
              Showing 1 to {orders.length} of {orders.length} results
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
                3
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                Next
              </button>
            </div>
          </div>
        </>}
    </div>;
};
interface OrderDetailsProps {
  order: {
    id: number;
    customer: string;
    date: string;
    total: string;
    items: number;
    status: string;
    statusColor: string;
    paymentStatus: string;
    paymentMethod: string;
    address: string;
    phone: string;
    products: Array<{
      id: number;
      name: string;
      price: string;
      quantity: number;
    }>;
  };
  onBack: () => void;
}
const OrderDetails = ({
  order,
  onBack
}: OrderDetailsProps) => {
  return <div>
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="text-gray-500 hover:text-gray-700 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <h2 className="text-xl font-semibold text-gray-800">
          Order #{order.id}
        </h2>
        <span className={`ml-3 px-2 py-1 text-xs font-semibold rounded-full ${order.statusColor}`}>
          {order.status}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center mb-4">
            <ClockIcon className="w-5 h-5 text-gray-400 mr-2" />
            <h3 className="font-medium">Order Information</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Order Date:</span>
              <span>{order.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Order Status:</span>
              <span className="font-medium">{order.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Payment Status:</span>
              <span className="font-medium">{order.paymentStatus}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Payment Method:</span>
              <span>{order.paymentMethod}</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center mb-4">
            <UserIcon className="w-5 h-5 text-gray-400 mr-2" />
            <h3 className="font-medium">Customer Information</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-gray-500">Name:</span>
              <div className="font-medium">{order.customer}</div>
            </div>
            <div>
              <span className="text-gray-500">Phone:</span>
              <div className="flex items-center">
                <PhoneIcon className="w-4 h-4 text-gray-400 mr-1" />
                {order.phone}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center mb-4">
            <MapPinIcon className="w-5 h-5 text-gray-400 mr-2" />
            <h3 className="font-medium">Shipping Address</h3>
          </div>
          <div className="text-sm">
            <p>{order.address}</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="font-medium">Order Items</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {order.products.map(product => <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {product.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      ID: {product.id}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {product.quantity}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="text-sm font-medium text-gray-900">
                      {/* Calculate total for each product based on price and quantity */}
                      {`₦${parseInt(product.price.replace(/[^\d]/g, '')) * product.quantity}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </div>
                  </td>
                </tr>)}
            </tbody>
            <tfoot className="bg-gray-50">
              <tr>
                <td colSpan={3} className="px-6 py-4 text-right text-sm font-medium text-gray-900">
                  Subtotal:
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium text-gray-900">
                  {order.total}
                </td>
              </tr>
              <tr>
                <td colSpan={3} className="px-6 py-4 text-right text-sm font-medium text-gray-900">
                  Shipping:
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium text-gray-900">
                  ₦0
                </td>
              </tr>
              <tr>
                <td colSpan={3} className="px-6 py-4 text-right text-sm font-medium text-gray-900">
                  Total:
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium text-indigo-600">
                  {order.total}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="font-medium mb-4">Update Order Status</h3>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            <CheckIcon className="w-4 h-4 mr-2" />
            Mark as Processing
          </button>
          <button className="flex items-center px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg">
            <TruckIcon className="w-4 h-4 mr-2" />
            Mark as Shipped
          </button>
          <button className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
            <CheckIcon className="w-4 h-4 mr-2" />
            Mark as Delivered
          </button>
          <button className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg">
            <XIcon className="w-4 h-4 mr-2" />
            Cancel Order
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={onBack} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
          Back to Orders
        </button>
        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
          Print Invoice
        </button>
      </div>
    </div>;
};