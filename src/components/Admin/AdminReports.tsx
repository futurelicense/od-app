import React, { useState } from 'react';
import { BarChart2Icon, TrendingUpIcon, LineChartIcon, PieChartIcon, CalendarIcon, DownloadIcon, RefreshCwIcon, FilterIcon, ArrowUpIcon, ArrowDownIcon, DollarSignIcon, UsersIcon, TruckIcon, ShoppingBagIcon, ClockIcon, ZapIcon } from 'lucide-react';
export const AdminReports = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [dateRange, setDateRange] = useState('30d');
  const [loading, setLoading] = useState(false);
  // Mock function to simulate refreshing data
  const refreshData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };
  const tabs = [{
    id: 'overview',
    label: 'Overview',
    icon: BarChart2Icon
  }, {
    id: 'financial',
    label: 'Financial',
    icon: DollarSignIcon
  }, {
    id: 'users',
    label: 'User Activity',
    icon: UsersIcon
  }, {
    id: 'operations',
    label: 'Operations',
    icon: TruckIcon
  }, {
    id: 'orders',
    label: 'Orders',
    icon: ShoppingBagIcon
  }];
  // Mock data for overview metrics
  const overviewMetrics = [{
    title: 'Total Revenue',
    value: '₦12.5M',
    change: '+15.3%',
    trend: 'up',
    icon: DollarSignIcon,
    color: 'bg-indigo-500'
  }, {
    title: 'Active Users',
    value: '2,845',
    change: '+12.5%',
    trend: 'up',
    icon: UsersIcon,
    color: 'bg-blue-500'
  }, {
    title: 'Completed Orders',
    value: '18,542',
    change: '+8.2%',
    trend: 'up',
    icon: ShoppingBagIcon,
    color: 'bg-green-500'
  }, {
    title: 'Avg. Order Value',
    value: '₦3,250',
    change: '-2.1%',
    trend: 'down',
    icon: TrendingUpIcon,
    color: 'bg-yellow-500'
  }];
  // Mock data for financial breakdown
  const revenueByChannel = [{
    name: 'Direct Orders',
    value: 65
  }, {
    name: 'Marketplace',
    value: 20
  }, {
    name: 'Kiosk',
    value: 10
  }, {
    name: 'Referrals',
    value: 5
  }];
  // Mock data for top performing items
  const topItems = [{
    name: 'Express Delivery',
    category: 'Service',
    orders: 4256,
    revenue: 4256000,
    growth: 18.5
  }, {
    name: 'Standard Delivery',
    category: 'Service',
    orders: 3821,
    revenue: 2674700,
    growth: 12.3
  }, {
    name: 'Food Delivery',
    category: 'Service',
    orders: 2145,
    revenue: 1287000,
    growth: 24.7
  }, {
    name: 'Grocery Delivery',
    category: 'Service',
    orders: 1876,
    revenue: 1125600,
    growth: 15.2
  }, {
    name: 'Parcel Delivery',
    category: 'Service',
    orders: 1254,
    revenue: 752400,
    growth: 8.9
  }];
  // Mock data for user activity
  const userActivity = {
    newUsers: [120, 145, 132, 165, 178, 149, 152, 138, 148, 159, 175, 182, 195, 188, 172, 168, 182, 194, 208, 215, 225, 218, 235, 248, 256, 242, 238, 252, 267, 275],
    activeUsers: [1245, 1350, 1280, 1420, 1380, 1290, 1310, 1360, 1420, 1480, 1520, 1590, 1650, 1720, 1680, 1730, 1790, 1850, 1920, 1980, 2050, 2120, 2180, 2250, 2320, 2380, 2450, 2520, 2610, 2845],
    labels: Array.from({
      length: 30
    }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      });
    })
  };
  const renderOverviewTab = () => <div className="space-y-6">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewMetrics.map((metric, index) => {
        const Icon = metric.icon;
        return <div key={index} className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`${metric.color} p-3 rounded-lg text-white mr-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{metric.title}</p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                  </div>
                </div>
                <div className={`flex items-center ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {metric.trend === 'up' ? <ArrowUpIcon className="h-4 w-4 mr-1" /> : <ArrowDownIcon className="h-4 w-4 mr-1" />}
                  <span className="text-sm font-medium">{metric.change}</span>
                </div>
              </div>
            </div>;
      })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-800">Revenue Trend</h3>
            <select className="text-sm border border-gray-300 rounded p-1">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>Last 12 Months</option>
            </select>
          </div>
          <div className="p-4 h-64 flex items-center justify-center bg-gray-50">
            {/* Placeholder for chart */}
            <div className="text-center">
              <LineChartIcon className="w-12 h-12 text-gray-300 mx-auto" />
              <p className="mt-2 text-sm text-gray-500">
                Revenue trend chart would be displayed here
              </p>
            </div>
          </div>
        </div>

        {/* Revenue by Channel */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-800">
              Revenue by Channel
            </h3>
          </div>
          <div className="p-4 flex">
            <div className="w-1/2 h-56 flex items-center justify-center">
              {/* Placeholder for pie chart */}
              <div className="text-center">
                <PieChartIcon className="w-12 h-12 text-gray-300 mx-auto" />
                <p className="mt-2 text-sm text-gray-500">
                  Pie chart would be displayed here
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="space-y-4">
                {revenueByChannel.map((channel, index) => <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{channel.name}</span>
                      <span className="font-medium">{channel.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-2 ${index === 0 ? 'bg-indigo-500' : index === 1 ? 'bg-blue-500' : index === 2 ? 'bg-green-500' : 'bg-yellow-500'}`} style={{
                    width: `${channel.value}%`
                  }}></div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Performing Items */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-800">
            Top Performing Items
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Growth
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topItems.map((item, index) => <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                    {item.orders.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-medium">
                    ₦{item.revenue.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end">
                      <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm font-medium text-green-500">
                        {item.growth}%
                      </span>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-3 border-t border-gray-200 text-center">
          <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            View All Items
          </button>
        </div>
      </div>
    </div>;
  const renderUserActivityTab = () => <div className="space-y-6">
      {/* User Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <p className="text-2xl font-bold">2,845</p>
            </div>
            <div className="flex items-center text-green-500">
              <ArrowUpIcon className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">+12.5%</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">New Users (30d)</p>
              <p className="text-2xl font-bold">275</p>
            </div>
            <div className="flex items-center text-green-500">
              <ArrowUpIcon className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">+8.3%</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Operators</p>
              <p className="text-2xl font-bold">156</p>
            </div>
            <div className="flex items-center text-green-500">
              <ArrowUpIcon className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">+5.2%</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Retention Rate</p>
              <p className="text-2xl font-bold">78.3%</p>
            </div>
            <div className="flex items-center text-red-500">
              <ArrowDownIcon className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">-1.2%</span>
            </div>
          </div>
        </div>
      </div>

      {/* User Growth Chart */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-800">User Growth</h3>
          <select className="text-sm border border-gray-300 rounded p-1">
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Last 12 Months</option>
          </select>
        </div>
        <div className="p-4 h-80 flex items-center justify-center bg-gray-50">
          {/* Placeholder for chart */}
          <div className="text-center">
            <LineChartIcon className="w-12 h-12 text-gray-300 mx-auto" />
            <p className="mt-2 text-sm text-gray-500">
              User growth chart would be displayed here
            </p>
            <p className="text-xs text-gray-400">
              Shows both new user registrations and active users over time
            </p>
          </div>
        </div>
      </div>

      {/* User Segments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-800">User Segments</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Customers</span>
                  <span className="font-medium">75%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-2 bg-blue-500" style={{
                  width: '75%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Operators</span>
                  <span className="font-medium">18%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-2 bg-green-500" style={{
                  width: '18%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Sub-Agents</span>
                  <span className="font-medium">5%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-2 bg-purple-500" style={{
                  width: '5%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Admins</span>
                  <span className="font-medium">2%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-2 bg-indigo-500" style={{
                  width: '2%'
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-800">
              User Activity Metrics
            </h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <ClockIcon className="w-4 h-4 text-indigo-500 mr-2" />
                  <p className="text-sm font-medium">Avg. Session Duration</p>
                </div>
                <p className="text-2xl font-bold">8m 45s</p>
                <p className="text-xs text-green-500 mt-1">
                  +12% vs. last period
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <ZapIcon className="w-4 h-4 text-indigo-500 mr-2" />
                  <p className="text-sm font-medium">Sessions per User</p>
                </div>
                <p className="text-2xl font-bold">4.2</p>
                <p className="text-xs text-green-500 mt-1">
                  +8% vs. last period
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <ShoppingBagIcon className="w-4 h-4 text-indigo-500 mr-2" />
                  <p className="text-sm font-medium">Orders per User</p>
                </div>
                <p className="text-2xl font-bold">2.8</p>
                <p className="text-xs text-green-500 mt-1">
                  +5% vs. last period
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <UsersIcon className="w-4 h-4 text-indigo-500 mr-2" />
                  <p className="text-sm font-medium">Referral Rate</p>
                </div>
                <p className="text-2xl font-bold">18%</p>
                <p className="text-xs text-red-500 mt-1">-2% vs. last period</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Locations */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-800">User Locations</h3>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            {/* Placeholder for map */}
            <div className="text-center">
              <MapIcon className="w-12 h-12 text-gray-300 mx-auto" />
              <p className="mt-2 text-sm text-gray-500">
                User location map would be displayed here
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">
              Top Locations
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  <span className="text-sm">Lagos, Nigeria</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium mr-2">48.5%</span>
                  <div className="w-16 bg-gray-200 rounded-full h-1.5">
                    <div className="bg-indigo-500 h-1.5 rounded-full" style={{
                    width: '48.5%'
                  }}></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm">Abuja, Nigeria</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium mr-2">15.2%</span>
                  <div className="w-16 bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{
                    width: '15.2%'
                  }}></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm">Port Harcourt, Nigeria</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium mr-2">12.8%</span>
                  <div className="w-16 bg-gray-200 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{
                    width: '12.8%'
                  }}></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-sm">Ibadan, Nigeria</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium mr-2">8.3%</span>
                  <div className="w-16 bg-gray-200 rounded-full h-1.5">
                    <div className="bg-yellow-500 h-1.5 rounded-full" style={{
                    width: '8.3%'
                  }}></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm">Accra, Ghana</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium mr-2">5.7%</span>
                  <div className="w-16 bg-gray-200 rounded-full h-1.5">
                    <div className="bg-red-500 h-1.5 rounded-full" style={{
                    width: '5.7%'
                  }}></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
                  <span className="text-sm">Other</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium mr-2">9.5%</span>
                  <div className="w-16 bg-gray-200 rounded-full h-1.5">
                    <div className="bg-gray-500 h-1.5 rounded-full" style={{
                    width: '9.5%'
                  }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  const renderFinancialTab = () => <div className="space-y-6">
      <div className="text-center py-12">
        <DollarSignIcon className="w-16 h-16 text-indigo-300 mx-auto mb-4" />
        <h3 className="text-xl font-medium text-gray-900 mb-2">
          Financial Reports
        </h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Detailed financial reports including revenue analysis, transaction
          history, payment processing, and financial forecasting.
        </p>
        <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
          Coming Soon
        </button>
      </div>
    </div>;
  const renderOperationsTab = () => <div className="space-y-6">
      <div className="text-center py-12">
        <TruckIcon className="w-16 h-16 text-indigo-300 mx-auto mb-4" />
        <h3 className="text-xl font-medium text-gray-900 mb-2">
          Operations Reports
        </h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Comprehensive operations reports including delivery metrics, operator
          performance, logistics efficiency, and service level analytics.
        </p>
        <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
          Coming Soon
        </button>
      </div>
    </div>;
  const renderOrdersTab = () => <div className="space-y-6">
      <div className="text-center py-12">
        <ShoppingBagIcon className="w-16 h-16 text-indigo-300 mx-auto mb-4" />
        <h3 className="text-xl font-medium text-gray-900 mb-2">
          Order Reports
        </h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Detailed order analytics including order volume, completion rates,
          cancellations, customer satisfaction, and order trends.
        </p>
        <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
          Coming Soon
        </button>
      </div>
    </div>;
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverviewTab();
      case 'users':
        return renderUserActivityTab();
      case 'financial':
        return renderFinancialTab();
      case 'operations':
        return renderOperationsTab();
      case 'orders':
        return renderOrdersTab();
      default:
        return renderOverviewTab();
    }
  };
  return <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Reports & Analytics
        </h1>
        <div className="flex items-center space-x-3">
          <div className="flex items-center bg-white border border-gray-300 rounded-lg">
            <div className="relative">
              <select value={dateRange} onChange={e => setDateRange(e.target.value)} className="appearance-none bg-transparent pl-8 pr-8 py-2 text-sm focus:outline-none">
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="12m">Last 12 months</option>
                <option value="custom">Custom range</option>
              </select>
              <CalendarIcon className="absolute left-2 top-2.5 text-gray-400 w-4 h-4" />
            </div>
          </div>
          <button onClick={refreshData} disabled={loading} className={`flex items-center text-sm bg-white border border-gray-300 px-3 py-2 rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}>
            <RefreshCwIcon className={`w-4 h-4 mr-1.5 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
          <button className="flex items-center text-sm bg-white border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50">
            <FilterIcon className="w-4 h-4 mr-1.5" />
            Filter
          </button>
          <button className="flex items-center text-sm bg-white border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50">
            <DownloadIcon className="w-4 h-4 mr-1.5" />
            Export
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto py-1 px-2">
            {tabs.map(tab => {
            const Icon = tab.icon;
            return <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center whitespace-nowrap px-4 py-2.5 text-sm font-medium rounded-lg mr-2 ${activeTab === tab.id ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                  <Icon className="w-4 h-4 mr-1.5" />
                  {tab.label}
                </button>;
          })}
          </nav>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto">{renderContent()}</div>
    </div>;
};