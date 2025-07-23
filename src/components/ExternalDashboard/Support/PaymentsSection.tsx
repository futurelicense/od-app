import React, { useState } from 'react';
import { SearchIcon, FilterIcon, ChevronDownIcon, DollarSignIcon, CreditCardIcon, CheckCircleIcon, XCircleIcon, EyeIcon, UserIcon, ClockIcon } from 'lucide-react';
export const PaymentsSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  // Mock data for payments
  const payments = [{
    id: 'PAY-1234',
    orderId: 'ORD-3842',
    customer: 'John Doe',
    amount: '₦2,500',
    method: 'Card Payment',
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
    time: '10 mins ago',
    cardDetails: '**** **** **** 4242',
    reference: 'REF-12345678'
  }, {
    id: 'PAY-1233',
    orderId: 'ORD-3841',
    customer: 'Sarah Johnson',
    amount: '₦3,200',
    method: 'Bank Transfer',
    status: 'Pending',
    statusColor: 'bg-yellow-100 text-yellow-800',
    time: '45 mins ago',
    bankDetails: 'GTBank',
    reference: 'REF-87654321'
  }, {
    id: 'PAY-1232',
    orderId: 'ORD-3839',
    customer: 'Emma Brown',
    amount: '₦4,500',
    method: 'Wallet',
    status: 'Pending',
    statusColor: 'bg-yellow-100 text-yellow-800',
    time: '3 hours ago',
    walletId: 'WAL-5678',
    reference: 'REF-23456789'
  }, {
    id: 'PAY-1231',
    orderId: 'ORD-3837',
    customer: 'Olivia Taylor',
    amount: '₦1,900',
    method: 'Cash on Delivery',
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
    time: 'Yesterday',
    operatorName: 'David Adeleke',
    reference: 'REF-34567890'
  }, {
    id: 'PAY-1230',
    orderId: 'ORD-3836',
    customer: 'James Anderson',
    amount: '₦2,100',
    method: 'Card Payment',
    status: 'Failed',
    statusColor: 'bg-red-100 text-red-800',
    time: 'Yesterday',
    cardDetails: '**** **** **** 5678',
    failureReason: 'Insufficient funds',
    reference: 'REF-45678901'
  }];
  // Filter payments based on active tab
  const filteredPayments = payments.filter(payment => {
    if (activeTab === 'all') return true;
    if (activeTab === 'completed') return payment.status === 'Completed';
    if (activeTab === 'pending') return payment.status === 'Pending';
    if (activeTab === 'failed') return payment.status === 'Failed';
    return true;
  });
  if (selectedPayment) {
    const payment = payments.find(p => p.id === selectedPayment);
    if (!payment) return null;
    return <div className="space-y-6">
        <div className="flex items-center">
          <button onClick={() => setSelectedPayment(null)} className="text-gray-500 hover:text-gray-700 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Payment Details</h1>
          <span className={`ml-4 px-2 py-1 ${payment.statusColor} text-xs font-semibold rounded-full`}>
            {payment.status}
          </span>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Payment #{payment.id}
              </h2>
              <p className="text-sm text-gray-500">Processed {payment.time}</p>
            </div>
            <div className="flex space-x-2">
              {payment.status === 'Pending' && <>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                    Approve Payment
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
                    Decline Payment
                  </button>
                </>}
              {payment.status === 'Failed' && <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
                  Retry Payment
                </button>}
              <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2 rounded-lg">
                Print Receipt
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-4">
                Payment Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <DollarSignIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Amount</p>
                    <p className="font-medium">{payment.amount}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CreditCardIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Payment Method</p>
                    <p className="font-medium">{payment.method}</p>
                    {payment.cardDetails && <p className="text-sm text-gray-500">
                        {payment.cardDetails}
                      </p>}
                    {payment.bankDetails && <p className="text-sm text-gray-500">
                        {payment.bankDetails}
                      </p>}
                    {payment.walletId && <p className="text-sm text-gray-500">
                        Wallet ID: {payment.walletId}
                      </p>}
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Reference Number</p>
                    <p className="font-medium">{payment.reference}</p>
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
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">Order ID</p>
                    <p className="font-medium">{payment.orderId}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <UserIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Customer</p>
                    <p className="font-medium">{payment.customer}</p>
                  </div>
                </div>
                {payment.operatorName && <div className="flex items-start">
                    <UserIcon className="w-5 h-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Operator</p>
                      <p className="font-medium">{payment.operatorName}</p>
                    </div>
                  </div>}
              </div>
            </div>
          </div>
          {payment.status === 'Failed' && payment.failureReason && <div className="border border-red-200 bg-red-50 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-red-800 mb-2">Failure Reason</h3>
              <p className="text-red-700">{payment.failureReason}</p>
            </div>}
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-4">Payment Timeline</h3>
            <div className="relative">
              <div className="absolute left-5 top-0 h-full border-l-2 border-indigo-200"></div>
              <div className="mb-8 flex items-center">
                <div className="z-10 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Payment Initiated</h4>
                  <p className="text-sm text-gray-500">Today, 10:30 AM</p>
                </div>
              </div>
              {payment.status === 'Completed' && <div className="mb-8 flex items-center">
                  <div className="z-10 flex items-center justify-center w-10 h-10 bg-green-600 rounded-full">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Payment Completed</h4>
                    <p className="text-sm text-gray-500">Today, 10:32 AM</p>
                  </div>
                </div>}
              {payment.status === 'Pending' && <div className="mb-8 flex items-center">
                  <div className="z-10 flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full">
                    <ClockIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Payment Pending</h4>
                    <p className="text-sm text-gray-500">
                      Awaiting confirmation
                    </p>
                  </div>
                </div>}
              {payment.status === 'Failed' && <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-10 h-10 bg-red-600 rounded-full">
                    <XCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Payment Failed</h4>
                    <p className="text-sm text-gray-500">Today, 10:32 AM</p>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>;
  }
  return <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
          Payments
        </h1>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input type="text" placeholder="Search payments..." className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-64" />
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
                Payment Method
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>All Methods</option>
                <option>Card Payment</option>
                <option>Bank Transfer</option>
                <option>Wallet</option>
                <option>Cash on Delivery</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount Range
              </label>
              <div className="flex space-x-2">
                <input type="text" placeholder="Min" className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <input type="text" placeholder="Max" className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
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
          All Payments
        </button>
        <button onClick={() => setActiveTab('completed')} className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'completed' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
          Completed
        </button>
        <button onClick={() => setActiveTab('pending')} className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'pending' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
          Pending
        </button>
        <button onClick={() => setActiveTab('failed')} className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'failed' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
          Failed
        </button>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPayments.map(payment => <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {payment.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.orderId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.method}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${payment.statusColor}`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => setSelectedPayment(payment.id)} className="text-indigo-600 hover:text-indigo-900 flex items-center justify-end">
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
            Showing {filteredPayments.length} of {payments.length} results
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