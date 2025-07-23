import React, { useState } from 'react';
import { BarChartIcon, TrendingUpIcon, CalendarIcon, ShoppingBagIcon, UsersIcon, DollarSignIcon, ChevronDownIcon, ArrowUpIcon, ArrowDownIcon, PackageIcon, RefreshCwIcon, FilterIcon, DownloadIcon, PieChartIcon, UsersIcon as UserGroupIcon, ClockIcon, MapPinIcon, SearchIcon, ZapIcon, ShieldIcon, HeartIcon, TagIcon, AlertCircleIcon, InfoIcon, ChevronRightIcon, ActivityIcon, LayersIcon, ArrowRightIcon, CheckIcon, CreditCardIcon, LineChartIcon, StarIcon, PlusIcon } from 'lucide-react';
export const AnalyticsSection = () => {
  const [dateRange, setDateRange] = useState('last30days');
  const [activeTab, setActiveTab] = useState('overview');
  const [comparisonMode, setComparisonMode] = useState(false);
  const [showInsights, setShowInsights] = useState(true);
  // Sample data for charts
  const salesData = [{
    date: 'Apr 1',
    amount: 12500,
    orders: 15,
    lastYear: 10200
  }, {
    date: 'Apr 2',
    amount: 8700,
    orders: 10,
    lastYear: 7800
  }, {
    date: 'Apr 3',
    amount: 9200,
    orders: 11,
    lastYear: 8500
  }, {
    date: 'Apr 4',
    amount: 10500,
    orders: 13,
    lastYear: 9800
  }, {
    date: 'Apr 5',
    amount: 11200,
    orders: 14,
    lastYear: 10500
  }, {
    date: 'Apr 6',
    amount: 9800,
    orders: 12,
    lastYear: 9200
  }, {
    date: 'Apr 7',
    amount: 8500,
    orders: 10,
    lastYear: 7500
  }, {
    date: 'Apr 8',
    amount: 7900,
    orders: 9,
    lastYear: 7100
  }, {
    date: 'Apr 9',
    amount: 9100,
    orders: 11,
    lastYear: 8200
  }, {
    date: 'Apr 10',
    amount: 10800,
    orders: 13,
    lastYear: 9500
  }, {
    date: 'Apr 11',
    amount: 12100,
    orders: 15,
    lastYear: 10800
  }, {
    date: 'Apr 12',
    amount: 13500,
    orders: 16,
    lastYear: 11200
  }, {
    date: 'Apr 13',
    amount: 14200,
    orders: 17,
    lastYear: 12100
  }, {
    date: 'Apr 14',
    amount: 15000,
    orders: 18,
    lastYear: 13500
  }, {
    date: 'Apr 15',
    amount: 13800,
    orders: 16,
    lastYear: 12800
  }];
  const maxSalesAmount = Math.max(...salesData.map(item => item.amount));
  const totalSales = salesData.reduce((sum, item) => sum + item.amount, 0);
  const totalOrders = salesData.reduce((sum, item) => sum + item.orders, 0);
  const totalLastYear = salesData.reduce((sum, item) => sum + item.lastYear, 0);
  const yearOverYearGrowth = (totalSales - totalLastYear) / totalLastYear * 100;
  const topProducts = [{
    id: 1,
    name: 'Wireless Earbuds',
    sales: 45,
    revenue: '₦382,500',
    change: '+12%',
    inventory: 38,
    category: 'Electronics'
  }, {
    id: 2,
    name: 'Smart Watch',
    sales: 32,
    revenue: '₦800,000',
    change: '+8%',
    inventory: 25,
    category: 'Electronics'
  }, {
    id: 3,
    name: 'Leather Wallet',
    sales: 28,
    revenue: '₦238,000',
    change: '-3%',
    inventory: 52,
    category: 'Accessories'
  }, {
    id: 4,
    name: 'Phone Case',
    sales: 25,
    revenue: '₦87,500',
    change: '+5%',
    inventory: 120,
    category: 'Accessories'
  }, {
    id: 5,
    name: 'Bluetooth Speaker',
    sales: 20,
    revenue: '₦360,000',
    change: '+15%',
    inventory: 18,
    category: 'Electronics'
  }];
  const stats = [{
    title: 'Total Sales',
    value: '₦2,458,700',
    change: '+12.5%',
    changeType: 'positive',
    icon: DollarSignIcon,
    color: 'bg-green-100 text-green-600',
    detail: 'vs. last period'
  }, {
    title: 'Orders',
    value: '245',
    change: '+8.2%',
    changeType: 'positive',
    icon: ShoppingBagIcon,
    color: 'bg-blue-100 text-blue-600',
    detail: '32 pending'
  }, {
    title: 'Customers',
    value: '182',
    change: '+5.1%',
    changeType: 'positive',
    icon: UsersIcon,
    color: 'bg-purple-100 text-purple-600',
    detail: '64 new'
  }, {
    title: 'Avg. Order Value',
    value: '₦10,035',
    change: '-2.3%',
    changeType: 'negative',
    icon: TrendingUpIcon,
    color: 'bg-yellow-100 text-yellow-600',
    detail: 'vs. last period'
  }];
  const insights = [{
    title: 'Sales peak on weekends',
    description: 'Your sales are 35% higher on weekends compared to weekdays',
    icon: TrendingUpIcon,
    color: 'text-green-500'
  }, {
    title: 'Electronics category growing',
    description: 'Electronics sales have increased by 22% this month',
    icon: ZapIcon,
    color: 'text-purple-500'
  }, {
    title: 'Inventory alert',
    description: '3 products are running low on inventory',
    icon: AlertCircleIcon,
    color: 'text-red-500'
  }];
  const customerMetrics = [{
    title: 'Customer Retention',
    value: '68%',
    change: '+5.2%',
    description: 'of customers made repeat purchases'
  }, {
    title: 'Average Lifetime Value',
    value: '₦42,500',
    change: '+8.7%',
    description: 'revenue per customer'
  }, {
    title: 'Conversion Rate',
    value: '3.8%',
    change: '+0.5%',
    description: 'of visitors completed a purchase'
  }];
  const salesByCategory = [{
    name: 'Electronics',
    value: 1245500,
    percentage: 65
  }, {
    name: 'Accessories',
    value: 645800,
    percentage: 42
  }, {
    name: 'Fashion',
    value: 325400,
    percentage: 28
  }, {
    name: 'Home & Kitchen',
    value: 154000,
    percentage: 15
  }, {
    name: 'Beauty',
    value: 88000,
    percentage: 8
  }];
  const salesByChannel = [{
    name: 'Website',
    value: 1350000,
    percentage: 55
  }, {
    name: 'Mobile App',
    value: 750000,
    percentage: 30
  }, {
    name: 'Marketplace',
    value: 250000,
    percentage: 10
  }, {
    name: 'In-store',
    value: 108700,
    percentage: 5
  }];
  const salesForecast = [{
    month: 'May',
    forecast: 2650000,
    previous: 2458700
  }, {
    month: 'Jun',
    forecast: 2850000,
    previous: 2600000
  }, {
    month: 'Jul',
    forecast: 3100000,
    previous: 2750000
  }];
  // For demo purposes only - would use real data in production
  const generateMonthlyData = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months.map(month => ({
      month,
      sales: Math.floor(Math.random() * 3000000) + 1000000,
      lastYear: Math.floor(Math.random() * 2500000) + 800000
    }));
  };
  const monthlyData = generateMonthlyData();
  const renderDateSelector = () => <div className="flex items-center space-x-3">
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
      <div className="flex space-x-2">
        <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <RefreshCwIcon className="w-5 h-5 text-gray-500" />
        </button>
        <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <FilterIcon className="w-5 h-5 text-gray-500" />
        </button>
        <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <DownloadIcon className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      <button onClick={() => setComparisonMode(!comparisonMode)} className={`px-3 py-2 text-sm border rounded-lg flex items-center ${comparisonMode ? 'bg-indigo-50 text-indigo-600 border-indigo-200' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
        <ActivityIcon className="w-4 h-4 mr-1" />
        {comparisonMode ? 'Hide Comparison' : 'Compare Periods'}
      </button>
    </div>;
  return <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Sales Analytics
          </h2>
          <p className="text-sm text-gray-500">
            Gain insights into your store's performance and customer behavior
          </p>
        </div>
        {renderDateSelector()}
      </div>
      {/* Analytics Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px space-x-8">
          <button onClick={() => setActiveTab('overview')} className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'overview' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Overview
          </button>
          <button onClick={() => setActiveTab('products')} className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'products' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Products
          </button>
          <button onClick={() => setActiveTab('customers')} className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'customers' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Customers
          </button>
          <button onClick={() => setActiveTab('channels')} className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'channels' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Channels
          </button>
          <button onClick={() => setActiveTab('forecast')} className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'forecast' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Forecast
          </button>
        </nav>
      </div>
      {activeTab === 'overview' && <>
          {/* Key Stats */}
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
                      <div className="flex items-center mt-1">
                        <div className={`flex items-center ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                          {stat.changeType === 'positive' ? <ArrowUpIcon className="w-4 h-4 mr-1" /> : <ArrowDownIcon className="w-4 h-4 mr-1" />}
                          <span className="text-sm font-medium">
                            {stat.change}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500 ml-2">
                          {stat.detail}
                        </span>
                      </div>
                    </div>
                    <div className={`${stat.color} p-3 rounded-full`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>;
        })}
          </div>
          {/* Insights Banner */}
          {showInsights && <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 relative">
              <button onClick={() => setShowInsights(false)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-500">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="flex items-center mb-3">
                <ZapIcon className="w-5 h-5 text-indigo-600 mr-2" />
                <h3 className="font-medium text-indigo-800">
                  AI-Powered Insights
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {insights.map((insight, index) => <div key={index} className="bg-white rounded-lg p-3 flex items-start">
                    <div className={`p-2 rounded-full ${insight.color.replace('text', 'bg').replace('500', '100')} mr-3`}>
                      <insight.icon className={`w-5 h-5 ${insight.color}`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">
                        {insight.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">
                        {insight.description}
                      </p>
                    </div>
                  </div>)}
              </div>
            </div>}
          {/* Sales Trend Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-medium text-gray-800">Revenue Trend</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Daily revenue for the selected period
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-700">
                  Revenue
                </button>
                <button className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Orders
                </button>
              </div>
            </div>
            <div className="h-64">
              <div className="flex h-full items-end space-x-2">
                {salesData.map((item, index) => <div key={index} className="flex-1 flex flex-col items-center group">
                    <div className="relative w-full">
                      {comparisonMode && <div className="w-full bg-indigo-200 rounded-t opacity-70" style={{
                  height: `${item.lastYear / maxSalesAmount * 100}%`,
                  minHeight: '4px'
                }}></div>}
                      <div className="w-full bg-indigo-500 hover:bg-indigo-600 rounded-t relative" style={{
                  height: `${item.amount / maxSalesAmount * 100}%`,
                  minHeight: '4px',
                  marginTop: comparisonMode ? '1px' : '0'
                }}>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-gray-900 text-white text-xs rounded px-2 py-1 absolute bottom-full mb-2 whitespace-nowrap">
                            ₦{item.amount.toLocaleString()}
                            {comparisonMode && <div className="text-xs">
                                <span className={item.amount > item.lastYear ? 'text-green-400' : 'text-red-400'}>
                                  {item.amount > item.lastYear ? '↑' : '↓'}
                                  {Math.abs(Math.round((item.amount - item.lastYear) / item.lastYear * 100))}
                                  %
                                </span>
                              </div>}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2 whitespace-nowrap">
                      {item.date}
                    </div>
                  </div>)}
              </div>
            </div>
            {comparisonMode && <div className="flex items-center justify-center mt-4 text-sm">
                <div className="flex items-center mr-4">
                  <div className="w-3 h-3 bg-indigo-500 rounded-sm mr-1"></div>
                  <span className="text-gray-600">Current period</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-indigo-200 rounded-sm mr-1"></div>
                  <span className="text-gray-600">Previous period</span>
                </div>
              </div>}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500">Total Revenue</div>
                  <div className="text-xl font-bold text-gray-800 mt-1">
                    ₦{totalSales.toLocaleString()}
                  </div>
                  {comparisonMode && <div className="flex items-center mt-1">
                      <div className={yearOverYearGrowth >= 0 ? 'text-green-600' : 'text-red-600'}>
                        {yearOverYearGrowth >= 0 ? <ArrowUpIcon className="w-4 h-4 inline" /> : <ArrowDownIcon className="w-4 h-4 inline" />}
                        <span className="text-sm font-medium ml-1">
                          {Math.abs(Math.round(yearOverYearGrowth))}%
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 ml-2">
                        vs. last year
                      </span>
                    </div>}
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500">Total Orders</div>
                  <div className="text-xl font-bold text-gray-800 mt-1">
                    {totalOrders}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Avg. {Math.round(totalSales / totalOrders).toLocaleString()}{' '}
                    per order
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500">Conversion Rate</div>
                  <div className="text-xl font-bold text-gray-800 mt-1">
                    3.8%
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="text-green-600">
                      <ArrowUpIcon className="w-4 h-4 inline" />
                      <span className="text-sm font-medium ml-1">0.5%</span>
                    </div>
                    <span className="text-xs text-gray-500 ml-2">
                      vs. last period
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Top Products & Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">
                  Top Selling Products
                </h3>
                <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                  View All
                  <ChevronRightIcon className="w-4 h-4 ml-1" />
                </button>
              </div>
              <div className="space-y-4">
                {topProducts.slice(0, 4).map(product => <div key={product.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center">
                      <div className="bg-gray-100 p-2 rounded-md mr-3">
                        <PackageIcon className="w-5 h-5 text-gray-500" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">
                          {product.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">
                          {product.category} • {product.sales} sold
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-800">
                        {product.revenue}
                      </div>
                      <div className={`text-xs ${product.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {product.change}
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Sales by Category</h3>
                <div className="flex space-x-2">
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <PieChartIcon className="w-5 h-5" />
                  </button>
                  <button className="p-1 text-indigo-600">
                    <BarChartIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                {salesByCategory.map((category, index) => <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-800">
                          {category.name}
                        </span>
                        <span className="ml-2 text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                          {category.percentage}%
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">
                        ₦{category.value.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{
                  width: `${category.percentage}%`
                }}></div>
                    </div>
                  </div>)}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between text-sm">
                <span className="text-gray-500">Total Sales</span>
                <span className="font-medium text-gray-800">
                  ₦
                  {salesByCategory.reduce((sum, cat) => sum + cat.value, 0).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
          {/* Monthly Performance */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-medium text-gray-800">
                    Monthly Performance
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Year-to-date revenue by month
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-700">
                    2023
                  </button>
                  <button className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                    2022
                  </button>
                </div>
              </div>
              <div className="h-64">
                <div className="flex h-full items-end space-x-4">
                  {monthlyData.map((item, index) => <div key={index} className="flex-1 flex flex-col items-center group">
                      <div className="relative w-full">
                        {comparisonMode && <div className="w-full bg-indigo-200 rounded-t opacity-70" style={{
                    height: `${item.lastYear / 3000000 * 100}%`,
                    minHeight: '4px'
                  }}></div>}
                        <div className="w-full bg-indigo-500 hover:bg-indigo-600 rounded-t relative" style={{
                    height: `${item.sales / 3000000 * 100}%`,
                    minHeight: '4px',
                    marginTop: comparisonMode ? '1px' : '0'
                  }}>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="bg-gray-900 text-white text-xs rounded px-2 py-1 absolute bottom-full mb-2">
                              ₦{item.sales.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        {item.month}
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </>}
      {activeTab === 'products' && <div className="space-y-6">
          {/* Product Performance Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800">
                  Product Performance
                </h3>
                <InfoIcon className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex items-center justify-center h-36">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">48</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Active Products
                  </div>
                  <div className="flex items-center justify-center mt-2">
                    <div className="text-green-600 flex items-center">
                      <ArrowUpIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">12%</span>
                    </div>
                    <span className="text-xs text-gray-500 ml-2">
                      vs. last period
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-4 mt-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-sm text-gray-500">Avg. Rating</div>
                    <div className="text-lg font-bold text-gray-800 mt-1">
                      4.8/5
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Inventory Value</div>
                    <div className="text-lg font-bold text-gray-800 mt-1">
                      ₦4.2M
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800">
                  Category Distribution
                </h3>
                <InfoIcon className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex items-center justify-center h-36">
                {/* Simplified pie chart representation */}
                <div className="relative w-28 h-28">
                  <div className="absolute inset-0 rounded-full border-8 border-indigo-500" style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)'
              }}></div>
                  <div className="absolute inset-0 rounded-full border-8 border-blue-500" style={{
                clipPath: 'polygon(0 0, 100% 0, 0 100%, 0 0)'
              }}></div>
                  <div className="absolute inset-0 rounded-full border-8 border-green-500" style={{
                clipPath: 'polygon(100% 100%, 0 100%, 0 0, 100% 100%)'
              }}></div>
                  <div className="absolute inset-0 rounded-full border-8 border-yellow-500" style={{
                clipPath: 'polygon(100% 100%, 100% 0, 0 100%, 100% 100%)'
              }}></div>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-4 mt-4">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-indigo-500 rounded-sm mr-1"></div>
                    <span className="text-gray-600">Electronics (42%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-sm mr-1"></div>
                    <span className="text-gray-600">Fashion (28%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-sm mr-1"></div>
                    <span className="text-gray-600">Accessories (18%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-sm mr-1"></div>
                    <span className="text-gray-600">Other (12%)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800">Inventory Status</h3>
                <InfoIcon className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex items-center justify-center h-36">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-600">32</div>
                    <div className="text-xs text-green-800 mt-1">In Stock</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-yellow-600">12</div>
                    <div className="text-xs text-yellow-800 mt-1">
                      Low Stock
                    </div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-red-600">4</div>
                    <div className="text-xs text-red-800 mt-1">
                      Out of Stock
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-blue-600">8</div>
                    <div className="text-xs text-blue-800 mt-1">
                      New Arrivals
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-4 mt-4">
                <button className="w-full px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg flex items-center justify-center">
                  <PackageIcon className="w-4 h-4 mr-1" />
                  Manage Inventory
                </button>
              </div>
            </div>
          </div>
          {/* Top Products Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6 pb-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">
                  Product Performance
                </h3>
                <div className="relative">
                  <input type="text" placeholder="Search products..." className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm" />
                  <SearchIcon className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sales
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Revenue
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Growth
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Inventory
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {topProducts.map(product => <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="bg-gray-100 p-2 rounded-md mr-3">
                            <PackageIcon className="w-5 h-5 text-gray-500" />
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            {product.name}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-500">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                        {product.sales} units
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-900">
                        {product.revenue}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <span className={`text-sm ${product.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {product.change}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${product.inventory > 50 ? 'bg-green-100 text-green-800' : product.inventory > 20 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                          {product.inventory} in stock
                        </span>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 px-6 py-3 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing 5 of 48 products
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
          {/* Product Recommendations */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg shadow p-6 text-white">
            <div className="flex items-center mb-4">
              <ZapIcon className="w-5 h-5 mr-2" />
              <h3 className="font-medium">Product Recommendations</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-medium text-white text-sm mb-2">
                  Increase Inventory
                </h4>
                <p className="text-indigo-100 text-xs mb-3">
                  Smart Watch is selling fast. Consider increasing inventory by
                  15 units.
                </p>
                <button className="w-full px-3 py-1.5 bg-white text-indigo-600 text-xs font-medium rounded-lg">
                  Order Stock
                </button>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-medium text-white text-sm mb-2">
                  Bundle Opportunity
                </h4>
                <p className="text-indigo-100 text-xs mb-3">
                  Customers who buy Wireless Earbuds often buy Phone Case.
                  Create a bundle.
                </p>
                <button className="w-full px-3 py-1.5 bg-white text-indigo-600 text-xs font-medium rounded-lg">
                  Create Bundle
                </button>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-medium text-white text-sm mb-2">
                  Price Optimization
                </h4>
                <p className="text-indigo-100 text-xs mb-3">
                  Bluetooth Speaker could sell better with a 5% price reduction.
                </p>
                <button className="w-full px-3 py-1.5 bg-white text-indigo-600 text-xs font-medium rounded-lg">
                  Adjust Price
                </button>
              </div>
            </div>
          </div>
        </div>}
      {activeTab === 'customers' && <div className="space-y-6">
          {/* Customer Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerMetrics.map((metric, index) => <div key={index} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-sm text-gray-500 mb-1">{metric.title}</h3>
                <div className="flex items-end">
                  <div className="text-2xl font-bold text-gray-800">
                    {metric.value}
                  </div>
                  <div className={`ml-2 text-sm ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change}
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {metric.description}
                </p>
              </div>)}
          </div>
          {/* Customer Demographics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-medium text-gray-800 mb-4">
                Age Distribution
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      18-24
                    </span>
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
                    <span className="text-sm font-medium text-gray-700">
                      25-34
                    </span>
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
                    <span className="text-sm font-medium text-gray-700">
                      35-44
                    </span>
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
                    <span className="text-sm font-medium text-gray-700">
                      45-54
                    </span>
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
                    <span className="text-sm font-medium text-gray-700">
                      55+
                    </span>
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
              <h3 className="font-medium text-gray-800 mb-4">
                Customer Location
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      Lagos
                    </span>
                    <span className="text-sm text-gray-500">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{
                  width: '45%'
                }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      Abuja
                    </span>
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
                    <span className="text-sm font-medium text-gray-700">
                      Port Harcourt
                    </span>
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
                    <span className="text-sm font-medium text-gray-700">
                      Ibadan
                    </span>
                    <span className="text-sm text-gray-500">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{
                  width: '10%'
                }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      Other
                    </span>
                    <span className="text-sm text-gray-500">5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{
                  width: '5%'
                }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Customer Engagement */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-medium text-gray-800 mb-4">
              Customer Engagement
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <UserGroupIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">
                      Active Users
                    </div>
                    <div className="flex items-center mt-0.5">
                      <div className="text-lg font-bold text-gray-800">128</div>
                      <div className="text-xs text-green-600 ml-2">+8%</div>
                    </div>
                  </div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-indigo-600 rounded-full" style={{
                width: '65%'
              }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <div>Last 30 days</div>
                  <div>65% of total</div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <ShoppingBagIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">
                      Repeat Customers
                    </div>
                    <div className="flex items-center mt-0.5">
                      <div className="text-lg font-bold text-gray-800">86</div>
                      <div className="text-xs text-green-600 ml-2">+12%</div>
                    </div>
                  </div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-indigo-600 rounded-full" style={{
                width: '48%'
              }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <div>Last 30 days</div>
                  <div>48% of total</div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <HeartIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">
                      Customer Satisfaction
                    </div>
                    <div className="flex items-center mt-0.5">
                      <div className="text-lg font-bold text-gray-800">
                        4.8/5
                      </div>
                      <div className="text-xs text-green-600 ml-2">+0.2</div>
                    </div>
                  </div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-indigo-600 rounded-full" style={{
                width: '92%'
              }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <div>Based on 156 reviews</div>
                  <div>92%</div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h4 className="text-sm font-medium text-gray-800 mb-3">
                Customer Feedback
              </h4>
              <div className="space-y-3">
                {[{
              text: 'Love the fast shipping and product quality!',
              date: '2 days ago',
              rating: 5
            }, {
              text: 'Great customer service when I needed help with my order.',
              date: '1 week ago',
              rating: 5
            }, {
              text: 'The product was good but delivery took longer than expected.',
              date: '2 weeks ago',
              rating: 4
            }].map((feedback, index) => <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start space-x-1">
                        {[...Array(5)].map((_, i) => <StarIcon key={i} className={`w-4 h-4 ${i < feedback.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {feedback.date}
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mt-2">
                      {feedback.text}
                    </p>
                  </div>)}
              </div>
            </div>
          </div>
          {/* Customer Segments */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-800">Customer Segments</h3>
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                Create Segment
                <PlusIcon className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-indigo-100 rounded-lg p-4 hover:bg-indigo-50 transition-colors">
                <div className="flex items-center mb-3">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <CreditCardIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h4 className="font-medium text-gray-800">High Spenders</h4>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Customers who spend over ₦50,000 in a single order
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">32 customers</span>
                  <span className="text-indigo-600 font-medium">View</span>
                </div>
              </div>
              <div className="border border-indigo-100 rounded-lg p-4 hover:bg-indigo-50 transition-colors">
                <div className="flex items-center mb-3">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <RefreshCwIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h4 className="font-medium text-gray-800">Repeat Buyers</h4>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Customers who have made 3+ purchases in the last 60 days
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">48 customers</span>
                  <span className="text-indigo-600 font-medium">View</span>
                </div>
              </div>
              <div className="border border-indigo-100 rounded-lg p-4 hover:bg-indigo-50 transition-colors">
                <div className="flex items-center mb-3">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <ClockIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h4 className="font-medium text-gray-800">At Risk</h4>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Customers who haven't purchased in over 90 days
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">64 customers</span>
                  <span className="text-indigo-600 font-medium">View</span>
                </div>
              </div>
            </div>
          </div>
        </div>}
      {activeTab === 'channels' && <div className="space-y-6">
          {/* Sales by Channel */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-medium text-gray-800">Sales by Channel</h3>
                <p className="text-sm text-gray-500 mt-1">
                  How your products are selling across different platforms
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-700">
                  Revenue
                </button>
                <button className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Orders
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                {salesByChannel.map((channel, index) => <div key={index} className="mb-4 last:mb-0">
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-800">
                          {channel.name}
                        </span>
                        <span className="ml-2 text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                          {channel.percentage}%
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">
                        ₦{channel.value.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{
                  width: `${channel.percentage}%`
                }}></div>
                    </div>
                  </div>)}
              </div>
              <div className="flex items-center justify-center">
                {/* Simplified donut chart representation */}
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 rounded-full border-[16px] border-indigo-500" style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)',
                opacity: 0.9
              }}></div>
                  <div className="absolute inset-0 rounded-full border-[16px] border-blue-500" style={{
                clipPath: 'polygon(0 0, 100% 0, 0 100%, 0 0)',
                opacity: 0.9
              }}></div>
                  <div className="absolute inset-0 rounded-full border-[16px] border-green-500" style={{
                clipPath: 'polygon(100% 100%, 0 100%, 0 0, 100% 100%)',
                opacity: 0.9
              }}></div>
                  <div className="absolute inset-0 rounded-full border-[16px] border-yellow-500" style={{
                clipPath: 'polygon(100% 100%, 100% 0, 0 100%, 100% 100%)',
                opacity: 0.9
              }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">
                        ₦2.46M
                      </div>
                      <div className="text-xs text-gray-500">Total Revenue</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-sm text-gray-500">Conversion Rate</div>
                  <div className="text-lg font-bold text-gray-800 mt-1">
                    3.8%
                  </div>
                  <div className="text-xs text-green-600">+0.5%</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-sm text-gray-500">Avg. Order Value</div>
                  <div className="text-lg font-bold text-gray-800 mt-1">
                    ₦10,035
                  </div>
                  <div className="text-xs text-red-600">-2.3%</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-sm text-gray-500">Cart Abandonment</div>
                  <div className="text-lg font-bold text-gray-800 mt-1">
                    68%
                  </div>
                  <div className="text-xs text-green-600">-3.2%</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-sm text-gray-500">Traffic</div>
                  <div className="text-lg font-bold text-gray-800 mt-1">
                    6,428
                  </div>
                  <div className="text-xs text-green-600">+12.5%</div>
                </div>
              </div>
            </div>
          </div>
          {/* Traffic Sources */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-medium text-gray-800 mb-4">Traffic Sources</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    Direct
                  </span>
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
                  <span className="text-sm font-medium text-gray-700">
                    Social Media
                  </span>
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
                  <span className="text-sm font-medium text-gray-700">
                    Referral
                  </span>
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
                  <span className="text-sm font-medium text-gray-700">
                    Search
                  </span>
                  <span className="text-sm text-gray-500">10%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-600 h-2.5 rounded-full" style={{
                width: '10%'
              }}></div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <h4 className="text-sm font-medium text-gray-800 mb-3">
                Top Referrers
              </h4>
              <div className="space-y-3">
                {[{
              name: 'Instagram',
              visits: 1245,
              conversion: '3.2%'
            }, {
              name: 'Facebook',
              visits: 856,
              conversion: '2.8%'
            }, {
              name: 'Twitter',
              visits: 432,
              conversion: '1.9%'
            }].map((referrer, index) => <div key={index} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-indigo-600 font-medium">
                          {referrer.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">
                          {referrer.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {referrer.visits} visits
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      {referrer.conversion} conversion
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
          {/* Device Usage */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-medium text-gray-800 mb-4">Device Usage</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      Mobile
                    </span>
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
                    <span className="text-sm font-medium text-gray-700">
                      Desktop
                    </span>
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
                    <span className="text-sm font-medium text-gray-700">
                      Tablet
                    </span>
                    <span className="text-sm text-gray-500">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{
                  width: '10%'
                }}></div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 bg-gray-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-800 mb-3">
                  Mobile Performance
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-500">Page Load Time</div>
                    <div className="text-lg font-bold text-gray-800 mt-1">
                      2.4s
                    </div>
                    <div className="text-xs text-green-600">-0.3s</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-500">Bounce Rate</div>
                    <div className="text-lg font-bold text-gray-800 mt-1">
                      38%
                    </div>
                    <div className="text-xs text-green-600">-5%</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-500">Conversion</div>
                    <div className="text-lg font-bold text-gray-800 mt-1">
                      3.2%
                    </div>
                    <div className="text-xs text-green-600">+0.4%</div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm text-indigo-600">
                    <InfoIcon className="w-4 h-4 mr-1" />
                    <span>
                      Mobile optimization can increase conversions by up to 20%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Channel Performance Comparison */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6 pb-0">
              <h3 className="font-medium text-gray-800 mb-4">
                Channel Performance Comparison
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Channel
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Revenue
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Orders
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Avg. Order Value
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Conversion Rate
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[{
                channel: 'Website',
                revenue: '₦1,350,000',
                orders: 125,
                aov: '₦10,800',
                conversion: '3.8%'
              }, {
                channel: 'Mobile App',
                revenue: '₦750,000',
                orders: 78,
                aov: '₦9,615',
                conversion: '4.2%'
              }, {
                channel: 'Marketplace',
                revenue: '₦250,000',
                orders: 32,
                aov: '₦7,812',
                conversion: '2.5%'
              }, {
                channel: 'In-store',
                revenue: '₦108,700',
                orders: 10,
                aov: '₦10,870',
                conversion: '8.5%'
              }].map((channel, index) => <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {channel.channel}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                        {channel.revenue}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                        {channel.orders}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                        {channel.aov}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                        {channel.conversion}
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>}
      {activeTab === 'forecast' && <div className="space-y-6">
          {/* Forecast Summary */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-medium text-gray-800">Revenue Forecast</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Projected revenue for the next 3 months
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-700">
                  3 Months
                </button>
                <button className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                  6 Months
                </button>
                <button className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                  12 Months
                </button>
              </div>
            </div>
            <div className="h-64">
              <div className="flex h-full items-end space-x-16">
                {salesForecast.map((item, index) => <div key={index} className="flex-1 flex flex-col items-center group">
                    <div className="relative w-full flex items-end justify-center">
                      <div className="w-12 bg-gray-200 rounded-t opacity-70" style={{
                  height: `${item.previous / 3500000 * 100}%`,
                  minHeight: '4px'
                }}></div>
                      <div className="w-12 bg-indigo-500 hover:bg-indigo-600 rounded-t ml-2" style={{
                  height: `${item.forecast / 3500000 * 100}%`,
                  minHeight: '4px'
                }}>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-gray-900 text-white text-xs rounded px-2 py-1 absolute bottom-full mb-2">
                            ₦{item.forecast.toLocaleString()}
                            <div className="text-xs">
                              <span className="text-green-400">
                                ↑{' '}
                                {Math.round((item.forecast - item.previous) / item.previous * 100)}
                                %
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-800 mt-2">
                      {item.month}
                    </div>
                  </div>)}
              </div>
            </div>
            <div className="flex items-center justify-center mt-4 text-sm">
              <div className="flex items-center mr-4">
                <div className="w-3 h-3 bg-indigo-500 rounded-sm mr-1"></div>
                <span className="text-gray-600">Forecast</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-200 rounded-sm mr-1"></div>
                <span className="text-gray-600">Previous Period</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500">Total Forecast</div>
                  <div className="text-xl font-bold text-gray-800 mt-1">
                    ₦8,600,000
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="text-green-600">
                      <ArrowUpIcon className="w-4 h-4 inline" />
                      <span className="text-sm font-medium ml-1">8.2%</span>
                    </div>
                    <span className="text-xs text-gray-500 ml-2">
                      vs. previous period
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500">Growth Rate</div>
                  <div className="text-xl font-bold text-gray-800 mt-1">
                    +8.2%
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Compared to +5.5% last quarter
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500">Confidence Level</div>
                  <div className="text-xl font-bold text-gray-800 mt-1">
                    85%
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Based on historical data and market trends
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Category Forecast */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-medium text-gray-800 mb-4">
              Category Forecast
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Current Revenue
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Forecast (Next Quarter)
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Growth
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Opportunity
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[{
                category: 'Electronics',
                current: '₦1,245,500',
                forecast: '₦1,420,000',
                growth: '+14%',
                opportunity: 'High'
              }, {
                category: 'Accessories',
                current: '₦645,800',
                forecast: '₦720,000',
                growth: '+11.5%',
                opportunity: 'Medium'
              }, {
                category: 'Fashion',
                current: '₦325,400',
                forecast: '₦380,000',
                growth: '+16.8%',
                opportunity: 'High'
              }, {
                category: 'Home & Kitchen',
                current: '₦154,000',
                forecast: '₦165,000',
                growth: '+7.1%',
                opportunity: 'Low'
              }, {
                category: 'Beauty',
                current: '₦88,000',
                forecast: '₦115,000',
                growth: '+30.7%',
                opportunity: 'Very High'
              }].map((category, index) => <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {category.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                        {category.current}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                        {category.forecast}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <span className="text-sm text-green-600 font-medium">
                          {category.growth}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${category.opportunity === 'Very High' ? 'bg-purple-100 text-purple-800' : category.opportunity === 'High' ? 'bg-green-100 text-green-800' : category.opportunity === 'Medium' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {category.opportunity}
                        </span>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
          {/* Growth Opportunities */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg shadow p-6 text-white">
            <div className="flex items-center mb-4">
              <TrendingUpIcon className="w-5 h-5 mr-2" />
              <h3 className="font-medium">Growth Opportunities</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-medium text-white text-sm mb-2">
                  Beauty Products
                </h4>
                <p className="text-indigo-100 text-xs mb-3">
                  The Beauty category shows 30.7% growth potential. Consider
                  expanding your product line.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-white bg-opacity-20 px-2 py-0.5 rounded-full">
                    Very High Potential
                  </span>
                  <ArrowRightIcon className="w-4 h-4" />
                </div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-medium text-white text-sm mb-2">
                  Fashion Category
                </h4>
                <p className="text-indigo-100 text-xs mb-3">
                  Fashion shows 16.8% growth. Consider seasonal promotions to
                  boost sales further.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-white bg-opacity-20 px-2 py-0.5 rounded-full">
                    High Potential
                  </span>
                  <ArrowRightIcon className="w-4 h-4" />
                </div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-medium text-white text-sm mb-2">
                  Mobile App Channel
                </h4>
                <p className="text-indigo-100 text-xs mb-3">
                  Mobile app shows higher conversion (4.2%). Invest in
                  app-exclusive promotions.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-white bg-opacity-20 px-2 py-0.5 rounded-full">
                    High Potential
                  </span>
                  <ArrowRightIcon className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-50">
                View Detailed Growth Plan
              </button>
            </div>
          </div>
          {/* Market Trends */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-medium text-gray-800 mb-4">
              Market Trends Affecting Forecast
            </h3>
            <div className="space-y-4">
              {[{
            title: 'Seasonal Shopping Patterns',
            description: 'Expect 25% higher sales during upcoming holiday season based on historical data.',
            impact: 'Positive',
            icon: CalendarIcon
          }, {
            title: 'Mobile Shopping Adoption',
            description: 'Mobile shopping continues to grow, with 12% more users shopping via mobile devices.',
            impact: 'Positive',
            icon: ShoppingBagIcon
          }, {
            title: 'Economic Factors',
            description: 'Recent economic changes may impact consumer spending in luxury categories.',
            impact: 'Neutral',
            icon: DollarSignIcon
          }].map((trend, index) => <div key={index} className="flex items-start p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                  <div className={`p-2 rounded-full mr-3 ${trend.impact === 'Positive' ? 'bg-green-100 text-green-600' : trend.impact === 'Negative' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'}`}>
                    <trend.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-gray-800">
                        {trend.title}
                      </h4>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${trend.impact === 'Positive' ? 'bg-green-100 text-green-800' : trend.impact === 'Negative' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {trend.impact} Impact
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {trend.description}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>}
    </div>;
};