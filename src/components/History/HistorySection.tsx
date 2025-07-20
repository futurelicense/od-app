import React, { useState } from 'react';
import { ClockIcon, TruckIcon, ShoppingBagIcon, WalletIcon, FilterIcon, SearchIcon, ChevronDownIcon } from 'lucide-react';
export const HistorySection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const renderTabContent = () => {
    switch (activeTab) {
      case 'all':
        return <AllHistory />;
      case 'delivery':
        return <DeliveryHistory />;
      case 'kiosk':
        return <KioskHistory />;
      case 'wallet':
        return <WalletHistory />;
      default:
        return <AllHistory />;
    }
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          Transaction History
        </h1>
        <div className="flex space-x-2">
          <div className="relative">
            <input type="text" placeholder="Search..." className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <SearchIcon className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          </div>
          <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="bg-white border border-gray-300 hover:bg-gray-50 px-3 py-2 rounded-lg flex items-center">
            <FilterIcon className="w-4 h-4 mr-2" />
            Filter
            <ChevronDownIcon className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
      {isFilterOpen && <div className="bg-white rounded-lg shadow p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date Range
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
                <option>Custom range</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Transaction Type
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>All Types</option>
                <option>Delivery</option>
                <option>Kiosk</option>
                <option>Wallet</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>All Status</option>
                <option>Completed</option>
                <option>Pending</option>
                <option>Failed</option>
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
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button onClick={() => setActiveTab('all')} className={`px-4 py-3 text-sm font-medium ${activeTab === 'all' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              All
            </button>
            <button onClick={() => setActiveTab('delivery')} className={`px-4 py-3 text-sm font-medium ${activeTab === 'delivery' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              Delivery
            </button>
            <button onClick={() => setActiveTab('kiosk')} className={`px-4 py-3 text-sm font-medium ${activeTab === 'kiosk' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              Kiosk
            </button>
            <button onClick={() => setActiveTab('wallet')} className={`px-4 py-3 text-sm font-medium ${activeTab === 'wallet' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              Wallet
            </button>
          </nav>
        </div>
        <div>{renderTabContent()}</div>
      </div>
    </div>;
};
const AllHistory = () => {
  const transactions = [{
    id: 1,
    type: 'delivery',
    title: 'Delivery #DEL-3842',
    description: 'From Ikeja to Lekki',
    amount: '₦2,500',
    date: 'Today, 10:45 AM',
    status: 'Completed',
    icon: TruckIcon,
    iconColor: 'bg-blue-100 text-blue-600',
    statusColor: 'bg-green-100 text-green-800'
  }, {
    id: 2,
    type: 'kiosk',
    title: 'Order #ORD-2845',
    description: '2 items',
    amount: '₦12,500',
    date: 'Yesterday, 3:20 PM',
    status: 'Processing',
    icon: ShoppingBagIcon,
    iconColor: 'bg-purple-100 text-purple-600',
    statusColor: 'bg-blue-100 text-blue-800'
  }, {
    id: 3,
    type: 'wallet',
    title: 'Wallet Funded',
    description: 'Bank Transfer',
    amount: '+₦10,000',
    date: 'Apr 15, 2023',
    status: 'Completed',
    icon: WalletIcon,
    iconColor: 'bg-green-100 text-green-600',
    statusColor: 'bg-green-100 text-green-800'
  }, {
    id: 4,
    type: 'delivery',
    title: 'Delivery #DEL-3840',
    description: 'From Lagos to Abuja',
    amount: '₦5,500',
    date: 'Apr 12, 2023',
    status: 'In Transit',
    icon: TruckIcon,
    iconColor: 'bg-blue-100 text-blue-600',
    statusColor: 'bg-yellow-100 text-yellow-800'
  }, {
    id: 5,
    type: 'wallet',
    title: 'Airtime Purchase',
    description: 'MTN - 08012345678',
    amount: '₦1,000',
    date: 'Apr 10, 2023',
    status: 'Completed',
    icon: WalletIcon,
    iconColor: 'bg-green-100 text-green-600',
    statusColor: 'bg-green-100 text-green-800'
  }, {
    id: 6,
    type: 'kiosk',
    title: 'Order #ORD-2840',
    description: '1 item',
    amount: '₦5,000',
    date: 'Apr 8, 2023',
    status: 'Delivered',
    icon: ShoppingBagIcon,
    iconColor: 'bg-purple-100 text-purple-600',
    statusColor: 'bg-green-100 text-green-800'
  }, {
    id: 7,
    type: 'wallet',
    title: 'Withdrawal to Bank',
    description: 'GTBank - 012345678',
    amount: '₦5,000',
    date: 'Apr 5, 2023',
    status: 'Completed',
    icon: WalletIcon,
    iconColor: 'bg-green-100 text-green-600',
    statusColor: 'bg-green-100 text-green-800'
  }];
  return <div className="p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map(transaction => {
            const Icon = transaction.icon;
            return <tr key={transaction.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`${transaction.iconColor} p-2 rounded-full mr-3`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {transaction.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {transaction.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {transaction.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {transaction.amount}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${transaction.statusColor}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                      View
                    </a>
                  </td>
                </tr>;
          })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-500">
          Showing 1 to 7 of 42 results
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
    </div>;
};
const DeliveryHistory = () => {
  return <div className="p-6">
      <div className="grid grid-cols-1 gap-4">
        {[1, 2, 3, 4].map(item => <div key={item} className="border border-gray-200 rounded-lg p-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                  <TruckIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Delivery #DEL-384{item}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {item === 1 ? 'From Ikeja to Lekki' : item === 2 ? 'From Lagos to Abuja' : item === 3 ? 'From Victoria Island to Ajah' : 'From Surulere to Yaba'}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {item === 1 ? 'Today, 10:45 AM' : item === 2 ? 'Apr 12, 2023' : item === 3 ? 'Apr 3, 2023' : 'Mar 28, 2023'}
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col items-end">
                <div className="text-sm font-medium text-gray-900">
                  {item === 1 ? '₦2,500' : item === 2 ? '₦5,500' : item === 3 ? '₦1,800' : '₦2,200'}
                </div>
                <span className={`mt-1 px-2 py-1 text-xs font-semibold rounded-full ${item === 1 ? 'bg-green-100 text-green-800' : item === 2 ? 'bg-yellow-100 text-yellow-800' : item === 3 ? 'bg-green-100 text-green-800' : 'bg-green-100 text-green-800'}`}>
                  {item === 1 ? 'Completed' : item === 2 ? 'In Transit' : item === 3 ? 'Completed' : 'Completed'}
                </span>
                <button className="mt-3 text-indigo-600 hover:text-indigo-900 text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};
const KioskHistory = () => {
  return <div className="p-6">
      <div className="space-y-4">
        {[1, 2, 3].map(item => <div key={item} className="border border-gray-200 rounded-lg p-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-start">
                <div className="bg-purple-100 text-purple-600 p-2 rounded-full mr-3">
                  <ShoppingBagIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Order #ORD-284{item}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {item === 1 ? '2 items' : item === 2 ? '1 item' : '3 items'}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {item === 1 ? 'Yesterday, 3:20 PM' : item === 2 ? 'Apr 8, 2023' : 'Mar 25, 2023'}
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col items-end">
                <div className="text-sm font-medium text-gray-900">
                  {item === 1 ? '₦12,500' : item === 2 ? '₦5,000' : '₦18,200'}
                </div>
                <span className={`mt-1 px-2 py-1 text-xs font-semibold rounded-full ${item === 1 ? 'bg-blue-100 text-blue-800' : item === 2 ? 'bg-green-100 text-green-800' : 'bg-green-100 text-green-800'}`}>
                  {item === 1 ? 'Processing' : item === 2 ? 'Delivered' : 'Delivered'}
                </span>
                <button className="mt-3 text-indigo-600 hover:text-indigo-900 text-sm font-medium">
                  View Order
                </button>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};
const WalletHistory = () => {
  return <div className="p-6">
      <div className="space-y-4">
        {[1, 2, 3, 4].map(item => <div key={item} className="border border-gray-200 rounded-lg p-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 p-2 rounded-full mr-3">
                  <WalletIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {item === 1 ? 'Wallet Funded' : item === 2 ? 'Airtime Purchase' : item === 3 ? 'Data Purchase' : 'Withdrawal to Bank'}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {item === 1 ? 'Bank Transfer' : item === 2 ? 'MTN - 08012345678' : item === 3 ? 'Airtel - 09087654321' : 'GTBank - 012345678'}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {item === 1 ? 'Apr 15, 2023' : item === 2 ? 'Apr 10, 2023' : item === 3 ? 'Apr 8, 2023' : 'Apr 5, 2023'}
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col items-end">
                <div className={`text-sm font-medium ${item === 1 ? 'text-green-600' : item === 4 ? 'text-red-600' : 'text-red-600'}`}>
                  {item === 1 ? '+₦10,000' : item === 2 ? '₦1,000' : item === 3 ? '₦2,500' : '₦5,000'}
                </div>
                <span className="mt-1 px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  Completed
                </span>
                <button className="mt-3 text-indigo-600 hover:text-indigo-900 text-sm font-medium">
                  View Receipt
                </button>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};