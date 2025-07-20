import React, { useState } from 'react';
import { DollarSignIcon, SearchIcon, FilterIcon, ChevronDownIcon, CalendarIcon, CheckCircleIcon, ClockIcon, ArrowRightIcon, DownloadIcon } from 'lucide-react';
export const LaasAdminPayroll = () => {
  const [filterPeriod, setFilterPeriod] = useState('current');
  // Mock data for payroll
  const payrollSummary = {
    totalPending: '₦245,800',
    operatorPayments: '₦158,200',
    subAgentCommissions: '₦87,600',
    lastProcessed: '15 Aug 2023',
    nextScheduled: '31 Aug 2023'
  };
  // Mock data for pending payments
  const pendingPayments = [{
    id: 'PAY-3842',
    recipient: 'David Adeleke',
    type: 'Operator',
    amount: '₦28,500',
    orders: 12,
    status: 'Pending',
    statusColor: 'bg-yellow-100 text-yellow-800',
    period: 'Aug 16-31, 2023'
  }, {
    id: 'PAY-3841',
    recipient: 'Funke Akindele',
    type: 'Operator',
    amount: '₦32,200',
    orders: 14,
    status: 'Pending',
    statusColor: 'bg-yellow-100 text-yellow-800',
    period: 'Aug 16-31, 2023'
  }, {
    id: 'PAY-3840',
    recipient: 'Lagos Central Agency',
    type: 'Sub-Agent',
    amount: '₦45,800',
    orders: 32,
    status: 'Pending',
    statusColor: 'bg-yellow-100 text-yellow-800',
    period: 'Aug 16-31, 2023'
  }, {
    id: 'PAY-3839',
    recipient: 'Chijioke Eze',
    type: 'Operator',
    amount: '₦18,700',
    orders: 8,
    status: 'Pending',
    statusColor: 'bg-yellow-100 text-yellow-800',
    period: 'Aug 16-31, 2023'
  }, {
    id: 'PAY-3838',
    recipient: 'Island Express Logistics',
    type: 'Sub-Agent',
    amount: '₦41,800',
    orders: 29,
    status: 'Pending',
    statusColor: 'bg-yellow-100 text-yellow-800',
    period: 'Aug 16-31, 2023'
  }];
  // Mock data for payment history
  const paymentHistory = [{
    id: 'PAY-3837',
    recipient: 'David Adeleke',
    type: 'Operator',
    amount: '₦25,300',
    orders: 11,
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
    date: '15 Aug 2023',
    period: 'Aug 1-15, 2023'
  }, {
    id: 'PAY-3836',
    recipient: 'Funke Akindele',
    type: 'Operator',
    amount: '₦29,800',
    orders: 13,
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
    date: '15 Aug 2023',
    period: 'Aug 1-15, 2023'
  }, {
    id: 'PAY-3835',
    recipient: 'Lagos Central Agency',
    type: 'Sub-Agent',
    amount: '₦42,500',
    orders: 30,
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
    date: '15 Aug 2023',
    period: 'Aug 1-15, 2023'
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Payroll Management</h1>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input type="text" placeholder="Search payments..." className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64" />
            <SearchIcon className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          </div>
          <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <DollarSignIcon className="w-4 h-4 mr-2" />
            Process Payments
          </button>
        </div>
      </div>
      {/* Payroll Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Pending</p>
              <h3 className="text-2xl font-bold text-gray-800">
                {payrollSummary.totalPending}
              </h3>
            </div>
            <div className="bg-indigo-500 rounded-full p-2">
              <DollarSignIcon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 mb-1">Operator Payments</p>
              <h3 className="text-2xl font-bold text-gray-800">
                {payrollSummary.operatorPayments}
              </h3>
            </div>
            <div className="bg-green-500 rounded-full p-2">
              <DollarSignIcon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 mb-1">
                Sub-Agent Commissions
              </p>
              <h3 className="text-2xl font-bold text-gray-800">
                {payrollSummary.subAgentCommissions}
              </h3>
            </div>
            <div className="bg-purple-500 rounded-full p-2">
              <DollarSignIcon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 mb-1">Last Processed</p>
              <h3 className="text-2xl font-bold text-gray-800">
                {payrollSummary.lastProcessed}
              </h3>
            </div>
            <div className="bg-blue-500 rounded-full p-2">
              <CheckCircleIcon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 mb-1">Next Scheduled</p>
              <h3 className="text-2xl font-bold text-gray-800">
                {payrollSummary.nextScheduled}
              </h3>
            </div>
            <div className="bg-yellow-500 rounded-full p-2">
              <CalendarIcon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
      {/* Period filter tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button onClick={() => setFilterPeriod('current')} className={`py-4 px-1 border-b-2 font-medium text-sm ${filterPeriod === 'current' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Current Period
          </button>
          <button onClick={() => setFilterPeriod('history')} className={`py-4 px-1 border-b-2 font-medium text-sm ${filterPeriod === 'history' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Payment History
          </button>
        </nav>
      </div>
      {/* Pending Payments */}
      {filterPeriod === 'current' && <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                Pending Payments (Aug 16-31, 2023)
              </h2>
              <div className="flex items-center space-x-2">
                <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
                  <DownloadIcon className="w-4 h-4 mr-1" />
                  Export CSV
                </button>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm">
                  Process All
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Recipient
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Orders
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Period
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pendingPayments.map(payment => <tr key={payment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {payment.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.recipient}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {payment.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.orders}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${payment.statusColor}`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.period}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                        View
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        Process
                      </button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>}
      {/* Payment History */}
      {filterPeriod === 'history' && <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                Payment History
              </h2>
              <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
                <DownloadIcon className="w-4 h-4 mr-1" />
                Export CSV
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Recipient
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Orders
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Period
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paymentHistory.map(payment => <tr key={payment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {payment.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.recipient}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {payment.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.orders}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${payment.statusColor}`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.period}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        View Receipt
                      </button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>}
    </div>;
};