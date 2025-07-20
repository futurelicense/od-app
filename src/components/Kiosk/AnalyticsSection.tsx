import React, { useState } from 'react';
import { BarChartIcon, TrendingUpIcon, CalendarIcon, ShoppingBagIcon, UsersIcon, DollarSignIcon, ChevronDownIcon, ArrowUpIcon, ArrowDownIcon, PackageIcon } from 'lucide-react';
export const AnalyticsSection = () => {
  const [dateRange, setDateRange] = useState('last30days');
  // Sample data for charts
  const salesData = [{
    date: 'Apr 1',
    amount: 12500
  }, {
    date: 'Apr 2',
    amount: 8700
  }, {
    date: 'Apr 3',
    amount: 9200
  }, {
    date: 'Apr 4',
    amount: 10500
  }, {
    date: 'Apr 5',
    amount: 11200
  }, {
    date: 'Apr 6',
    amount: 9800
  }, {
    date: 'Apr 7',
    amount: 8500
  }, {
    date: 'Apr 8',
    amount: 7900
  }, {
    date: 'Apr 9',
    amount: 9100
  }, {
    date: 'Apr 10',
    amount: 10800
  }, {
    date: 'Apr 11',
    amount: 12100
  }, {
    date: 'Apr 12',
    amount: 13500
  }, {
    date: 'Apr 13',
    amount: 14200
  }, {
    date: 'Apr 14',
    amount: 15000
  }, {
    date: 'Apr 15',
    amount: 13800
  }];
  const maxSalesAmount = Math.max(...salesData.map(item => item.amount));
  const topProducts = [{
    id: 1,
    name: 'Wireless Earbuds',
    sales: 45,
    revenue: '₦382,500',
    change: '+12%'
  }, {
    id: 2,
    name: 'Smart Watch',
    sales: 32,
    revenue: '₦800,000',
    change: '+8%'
  }, {
    id: 3,
    name: 'Leather Wallet',
    sales: 28,
    revenue: '₦238,000',
    change: '-3%'
  }, {
    id: 4,
    name: 'Phone Case',
    sales: 25,
    revenue: '₦87,500',
    change: '+5%'
  }, {
    id: 5,
    name: 'Bluetooth Speaker',
    sales: 20,
    revenue: '₦360,000',
    change: '+15%'
  }];
  const stats = [{
    title: 'Total Sales',
    value: '₦2,458,700',
    change: '+12.5%',
    changeType: 'positive',
    icon: DollarSignIcon,
    color: 'bg-green-100 text-green-600'
  }, {
    title: 'Orders',
    value: '245',
    change: '+8.2%',
    changeType: 'positive',
    icon: ShoppingBagIcon,
    color: 'bg-blue-100 text-blue-600'
  }, {
    title: 'Customers',
    value: '182',
    change: '+5.1%',
    changeType: 'positive',
    icon: UsersIcon,
    color: 'bg-purple-100 text-purple-600'
  }, {
    title: 'Avg. Order Value',
    value: '₦10,035',
    change: '-2.3%',
    changeType: 'negative',
    icon: TrendingUpIcon,
    color: 'bg-yellow-100 text-yellow-600'
  }];
  return <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 md:mb-0">
          Sales Analytics
        </h2>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <select value={dateRange} onChange={e => setDateRange(e.target.value)} className="pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none">
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="last7days">Last 7 days</option>
              <option value="last30days">Last 30 days</option>
              <option value="thisMonth">This Month</option>
              <option value="lastMonth">Last Month</option>
              <option value="custom">Custom Range</option>
            </select>
            <CalendarIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <ChevronDownIcon className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
            Export
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
        const Icon = stat.icon;
        return <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </h3>
                  <div className={`flex items-center mt-1 ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.changeType === 'positive' ? <ArrowUpIcon className="w-4 h-4 mr-1" /> : <ArrowDownIcon className="w-4 h-4 mr-1" />}
                    <span className="text-sm">{stat.change}</span>
                  </div>
                </div>
                <div className={`${stat.color} p-3 rounded-full`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>;
      })}
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-medium mb-6">Sales Trend</h3>
        <div className="h-64">
          <div className="flex h-full items-end space-x-2">
            {salesData.map((item, index) => <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-indigo-500 hover:bg-indigo-600 rounded-t" style={{
              height: `${item.amount / maxSalesAmount * 100}%`,
              minHeight: '4px'
            }}></div>
                <div className="text-xs text-gray-500 mt-2 transform -rotate-45 origin-top-left whitespace-nowrap">
                  {item.date}
                </div>
              </div>)}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-medium mb-4">Top Selling Products</h3>
          <div className="space-y-4">
            {topProducts.map(product => <div key={product.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-md mr-3">
                    <PackageIcon className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <div className="font-medium">{product.name}</div>
                    <div className="text-sm text-gray-500">
                      {product.sales} sold
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{product.revenue}</div>
                  <div className={`text-sm ${product.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {product.change}
                  </div>
                </div>
              </div>)}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-medium mb-4">Sales by Category</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Electronics</span>
              <span className="text-sm text-gray-500">₦1,245,500</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full" style={{
              width: '65%'
            }}></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Accessories</span>
              <span className="text-sm text-gray-500">₦645,800</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full" style={{
              width: '42%'
            }}></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Fashion</span>
              <span className="text-sm text-gray-500">₦325,400</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full" style={{
              width: '28%'
            }}></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Home & Kitchen</span>
              <span className="text-sm text-gray-500">₦154,000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full" style={{
              width: '15%'
            }}></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Beauty</span>
              <span className="text-sm text-gray-500">₦88,000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full" style={{
              width: '8%'
            }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-medium mb-4">Traffic Sources</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Direct</span>
                <span className="text-sm text-gray-500">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{
                width: '45%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Social Media</span>
                <span className="text-sm text-gray-500">30%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-600 h-2.5 rounded-full" style={{
                width: '30%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Referral</span>
                <span className="text-sm text-gray-500">15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{
                width: '15%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Search</span>
                <span className="text-sm text-gray-500">10%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-600 h-2.5 rounded-full" style={{
                width: '10%'
              }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-medium mb-4">Customer Demographics</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">18-24</span>
                <span className="text-sm text-gray-500">15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{
                width: '15%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">25-34</span>
                <span className="text-sm text-gray-500">40%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{
                width: '40%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">35-44</span>
                <span className="text-sm text-gray-500">25%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{
                width: '25%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">45-54</span>
                <span className="text-sm text-gray-500">12%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{
                width: '12%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">55+</span>
                <span className="text-sm text-gray-500">8%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{
                width: '8%'
              }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-medium mb-4">Device Usage</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Mobile</span>
                <span className="text-sm text-gray-500">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{
                width: '65%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Desktop</span>
                <span className="text-sm text-gray-500">25%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{
                width: '25%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Tablet</span>
                <span className="text-sm text-gray-500">10%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{
                width: '10%'
              }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};