import React, { useState } from 'react';
import { DollarSignIcon, UserIcon, UsersIcon, PercentIcon, ArrowUpIcon, ArrowDownIcon, SearchIcon, FilterIcon, DownloadIcon, PlusIcon, FileTextIcon } from 'lucide-react';
export const CommissionManagement = () => {
  const [activeTab, setActiveTab] = useState('operators');
  const [sortConfig, setSortConfig] = useState({
    key: 'earnings',
    direction: 'desc'
  });
  const tabs = [{
    id: 'operators',
    label: 'Operators',
    icon: UserIcon
  }, {
    id: 'subagents',
    label: 'Sub Agents',
    icon: UsersIcon
  }, {
    id: 'settings',
    label: 'Commission Settings',
    icon: PercentIcon
  }, {
    id: 'payouts',
    label: 'Payout History',
    icon: FileTextIcon
  }];
  // Mock data for operators
  const operators = [{
    id: 'OP-0042',
    name: 'David Adeleke',
    totalOrders: 145,
    completionRate: 98,
    earnings: 245000,
    commission: 15,
    lastPayout: '15 Aug 2023',
    status: 'Active'
  }, {
    id: 'OP-0018',
    name: 'Funke Akindele',
    totalOrders: 98,
    completionRate: 95,
    earnings: 186000,
    commission: 15,
    lastPayout: '15 Aug 2023',
    status: 'Active'
  }, {
    id: 'OP-0035',
    name: 'Chijioke Eze',
    totalOrders: 76,
    completionRate: 100,
    earnings: 152000,
    commission: 15,
    lastPayout: '15 Aug 2023',
    status: 'Active'
  }, {
    id: 'OP-0027',
    name: 'Ngozi Okafor',
    totalOrders: 52,
    completionRate: 92,
    earnings: 98000,
    commission: 15,
    lastPayout: '15 Aug 2023',
    status: 'Inactive'
  }, {
    id: 'OP-0053',
    name: 'Adebayo Johnson',
    totalOrders: 37,
    completionRate: 85,
    earnings: 65000,
    commission: 15,
    lastPayout: '15 Aug 2023',
    status: 'Suspended'
  }];
  // Mock data for sub agents
  const subAgents = [{
    id: 'SA-0001',
    name: 'Lagos Central Agency',
    contactPerson: 'Adewale Ibrahim',
    totalOrders: 245,
    operators: 8,
    earnings: 485000,
    commission: 10,
    lastPayout: '15 Aug 2023',
    status: 'Active'
  }, {
    id: 'SA-0002',
    name: 'Island Express Logistics',
    contactPerson: 'Folake Ogunleye',
    totalOrders: 187,
    operators: 6,
    earnings: 352000,
    commission: 10,
    lastPayout: '15 Aug 2023',
    status: 'Active'
  }, {
    id: 'SA-0003',
    name: 'Mainland Delivery Partners',
    contactPerson: 'Emeka Okafor',
    totalOrders: 312,
    operators: 10,
    earnings: 623000,
    commission: 10,
    lastPayout: '15 Aug 2023',
    status: 'Active'
  }];
  // Sort function
  const sortedOperators = [...operators].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });
  const sortedSubAgents = [...subAgents].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });
  // Request sort function
  const requestSort = key => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({
      key,
      direction
    });
  };
  // Render sort indicator
  const renderSortIndicator = key => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? <ArrowUpIcon className="w-3 h-3 ml-1" /> : <ArrowDownIcon className="w-3 h-3 ml-1" />;
  };
  const formatCurrency = amount => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  const renderOperatorsTable = () => <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Operator
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('totalOrders')}>
            <div className="flex items-center">
              Orders
              {renderSortIndicator('totalOrders')}
            </div>
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('completionRate')}>
            <div className="flex items-center">
              Completion Rate
              {renderSortIndicator('completionRate')}
            </div>
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('earnings')}>
            <div className="flex items-center">
              Earnings
              {renderSortIndicator('earnings')}
            </div>
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('commission')}>
            <div className="flex items-center">
              Commission Rate
              {renderSortIndicator('commission')}
            </div>
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Last Payout
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {sortedOperators.map(operator => <tr key={operator.id} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-medium">
                  {operator.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    {operator.name}
                  </div>
                  <div className="text-sm text-gray-500">{operator.id}</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {operator.totalOrders}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <span className="text-sm text-gray-900">
                  {operator.completionRate}%
                </span>
                <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                  <div className={`h-2 rounded-full ${operator.completionRate >= 95 ? 'bg-green-500' : operator.completionRate >= 85 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                width: `${operator.completionRate}%`
              }}></div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
              {formatCurrency(operator.earnings)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {operator.commission}%
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {operator.lastPayout}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${operator.status === 'Active' ? 'bg-green-100 text-green-800' : operator.status === 'Inactive' ? 'bg-gray-100 text-gray-800' : 'bg-red-100 text-red-800'}`}>
                {operator.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                Edit
              </button>
              <button className="text-indigo-600 hover:text-indigo-900">
                Pay
              </button>
            </td>
          </tr>)}
      </tbody>
    </table>;
  const renderSubAgentsTable = () => <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Sub Agent
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('operators')}>
            <div className="flex items-center">
              Operators
              {renderSortIndicator('operators')}
            </div>
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('totalOrders')}>
            <div className="flex items-center">
              Orders
              {renderSortIndicator('totalOrders')}
            </div>
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('earnings')}>
            <div className="flex items-center">
              Earnings
              {renderSortIndicator('earnings')}
            </div>
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('commission')}>
            <div className="flex items-center">
              Commission Rate
              {renderSortIndicator('commission')}
            </div>
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Last Payout
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {sortedSubAgents.map(agent => <tr key={agent.id} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 font-medium">
                  <UsersIcon className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    {agent.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {agent.contactPerson}
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {agent.operators}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {agent.totalOrders}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
              {formatCurrency(agent.earnings)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {agent.commission}%
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {agent.lastPayout}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${agent.status === 'Active' ? 'bg-green-100 text-green-800' : agent.status === 'Inactive' ? 'bg-gray-100 text-gray-800' : 'bg-red-100 text-red-800'}`}>
                {agent.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                Edit
              </button>
              <button className="text-indigo-600 hover:text-indigo-900">
                Pay
              </button>
            </td>
          </tr>)}
      </tbody>
    </table>;
  const renderCommissionSettings = () => <div className="p-6">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-lg font-medium text-gray-900 mb-6">
          Commission Structure Settings
        </h3>
        <div className="bg-white shadow overflow-hidden rounded-lg divide-y divide-gray-200">
          <div className="px-6 py-5">
            <h4 className="text-base font-medium text-gray-900 flex items-center">
              <UserIcon className="w-5 h-5 mr-2 text-indigo-600" />
              Operator Commission Rates
            </h4>
          </div>
          <div className="px-6 py-5 bg-gray-50">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Default Commission Rate
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input type="text" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="15" defaultValue="15" />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">%</span>
                  </div>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Default commission rate for all operators
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Performance Bonus Rate
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input type="text" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="5" defaultValue="5" />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">%</span>
                  </div>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Additional commission for high-performing operators
                </p>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Performance Criteria for Bonus
              </label>
              <div className="mt-2 space-y-4">
                <div className="flex items-center">
                  <input id="completion-rate" name="bonus-criteria" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                  <label htmlFor="completion-rate" className="ml-2 block text-sm text-gray-700">
                    Completion Rate ≥ 95%
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="monthly-orders" name="bonus-criteria" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                  <label htmlFor="monthly-orders" className="ml-2 block text-sm text-gray-700">
                    Monthly Orders ≥ 50
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="rating" name="bonus-criteria" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                  <label htmlFor="rating" className="ml-2 block text-sm text-gray-700">
                    Average Rating ≥ 4.8
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-5">
            <h4 className="text-base font-medium text-gray-900 flex items-center">
              <UsersIcon className="w-5 h-5 mr-2 text-indigo-600" />
              Sub-Agent Commission Rates
            </h4>
          </div>
          <div className="px-6 py-5 bg-gray-50">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Default Commission Rate
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input type="text" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="10" defaultValue="10" />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">%</span>
                  </div>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Default commission rate for all sub-agents
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Volume Bonus Rate
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input type="text" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="2" defaultValue="2" />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">%</span>
                  </div>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Additional commission for high-volume sub-agents
                </p>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Volume Criteria for Bonus
              </label>
              <div className="mt-2 space-y-4">
                <div className="flex items-center">
                  <input id="monthly-volume" name="volume-criteria" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                  <label htmlFor="monthly-volume" className="ml-2 block text-sm text-gray-700">
                    Monthly Order Volume ≥ 200
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="operator-count" name="volume-criteria" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                  <label htmlFor="operator-count" className="ml-2 block text-sm text-gray-700">
                    Active Operators ≥ 10
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-5">
            <h4 className="text-base font-medium text-gray-900 flex items-center">
              <DollarSignIcon className="w-5 h-5 mr-2 text-indigo-600" />
              Payout Settings
            </h4>
          </div>
          <div className="px-6 py-5 bg-gray-50">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Payout Frequency
                </label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>Weekly</option>
                  <option selected>Bi-weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Minimum Payout Amount
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">₦</span>
                  </div>
                  <input type="text" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="5000" defaultValue="5000" />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center">
                <input id="automatic-payouts" name="automatic-payouts" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                <label htmlFor="automatic-payouts" className="ml-2 block text-sm text-gray-700">
                  Enable automatic payouts
                </label>
              </div>
              <p className="mt-1 text-xs text-gray-500 pl-6">
                When enabled, the system will automatically process payouts
                according to the schedule
              </p>
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-50 text-right">
            <button type="button" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>;
  const renderPayoutHistory = () => <div className="p-6">
      <div className="flex justify-between mb-6">
        <div className="relative w-64">
          <input type="text" placeholder="Search payouts..." className="pl-9 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm" />
          <SearchIcon className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center text-sm bg-white border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-50">
            <FilterIcon className="w-4 h-4 mr-1.5" />
            Filter
          </button>
          <button className="flex items-center text-sm bg-white border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-50">
            <DownloadIcon className="w-4 h-4 mr-1.5" />
            Export
          </button>
        </div>
      </div>
      <div className="bg-white shadow overflow-hidden rounded-lg">
        <ul className="divide-y divide-gray-200">
          <li className="p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <DollarSignIcon className="h-5 w-5 text-indigo-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    August 15, 2023 Payout
                  </p>
                  <p className="text-xs text-gray-500">Batch #PAY-2023081501</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">₦1,245,000</p>
                <p className="text-xs text-gray-500">42 recipients</p>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500 flex justify-between">
              <span>
                Status:{' '}
                <span className="text-green-600 font-medium">Completed</span>
              </span>
              <button className="text-indigo-600 hover:text-indigo-900">
                View Details
              </button>
            </div>
          </li>
          <li className="p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <DollarSignIcon className="h-5 w-5 text-indigo-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    August 1, 2023 Payout
                  </p>
                  <p className="text-xs text-gray-500">Batch #PAY-2023080101</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">₦1,125,500</p>
                <p className="text-xs text-gray-500">38 recipients</p>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500 flex justify-between">
              <span>
                Status:{' '}
                <span className="text-green-600 font-medium">Completed</span>
              </span>
              <button className="text-indigo-600 hover:text-indigo-900">
                View Details
              </button>
            </div>
          </li>
          <li className="p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <DollarSignIcon className="h-5 w-5 text-indigo-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    July 15, 2023 Payout
                  </p>
                  <p className="text-xs text-gray-500">Batch #PAY-2023071501</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">₦985,750</p>
                <p className="text-xs text-gray-500">35 recipients</p>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500 flex justify-between">
              <span>
                Status:{' '}
                <span className="text-green-600 font-medium">Completed</span>
              </span>
              <button className="text-indigo-600 hover:text-indigo-900">
                View Details
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>;
  return <div className="h-full flex flex-col">
      {/* Header and Controls */}
      <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">
          Commission Management
        </h2>
        <div className="flex items-center space-x-3">
          <button className="flex items-center text-sm bg-indigo-600 text-white px-3 py-1.5 rounded-lg hover:bg-indigo-700">
            <PlusIcon className="w-4 h-4 mr-1.5" />
            Process Payout
          </button>
        </div>
      </div>
      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200">
        <nav className="flex space-x-4 px-4">
          {tabs.map(tab => {
          const Icon = tab.icon;
          return <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                <Icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>;
        })}
        </nav>
      </div>
      {/* Content Area */}
      <div className="flex-1 overflow-auto bg-gray-50">
        {activeTab === 'operators' && <div className="overflow-x-auto">{renderOperatorsTable()}</div>}
        {activeTab === 'subagents' && <div className="overflow-x-auto">{renderSubAgentsTable()}</div>}
        {activeTab === 'settings' && renderCommissionSettings()}
        {activeTab === 'payouts' && renderPayoutHistory()}
      </div>
    </div>;
};