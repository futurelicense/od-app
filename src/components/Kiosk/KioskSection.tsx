import React, { useState } from 'react';
import { ShoppingBagIcon, PackageIcon, TagIcon, SettingsIcon, BarChartIcon, TicketIcon } from 'lucide-react';
import { ProductsSection } from './ProductsSection';
import { OrdersSection } from './OrdersSection';
import { CouponsSection } from './CouponsSection';
import { AnalyticsSection } from './AnalyticsSection';
import { KioskSettings } from './KioskSettings';
import { StorefrontView } from './StorefrontView';
export const KioskSection = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showStorefront, setShowStorefront] = useState(false);
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <KioskOverview />;
      case 'products':
        return <ProductsSection />;
      case 'orders':
        return <OrdersSection />;
      case 'coupons':
        return <CouponsSection />;
      case 'settings':
        return <KioskSettings />;
      case 'analytics':
        return <AnalyticsSection />;
      default:
        return <KioskOverview />;
    }
  };
  if (showStorefront) {
    return <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">
            Storefront Preview
          </h1>
          <button onClick={() => setShowStorefront(false)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center">
            <ShoppingBagIcon className="w-4 h-4 mr-2" />
            Back to Kiosk Management
          </button>
        </div>
        <StorefrontView />
      </div>;
  }
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Kiosk Management</h1>
        <button onClick={() => setShowStorefront(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center">
          <ShoppingBagIcon className="w-4 h-4 mr-2" />
          View Storefront
        </button>
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto">
            <button onClick={() => setActiveTab('overview')} className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'overview' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              Overview
            </button>
            <button onClick={() => setActiveTab('products')} className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'products' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              Products
            </button>
            <button onClick={() => setActiveTab('orders')} className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'orders' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              Orders
            </button>
            <button onClick={() => setActiveTab('coupons')} className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'coupons' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              Coupons
            </button>
            <button onClick={() => setActiveTab('analytics')} className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'analytics' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              Analytics
            </button>
            <button onClick={() => setActiveTab('settings')} className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'settings' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              Settings
            </button>
          </nav>
        </div>
        <div>{renderTabContent()}</div>
      </div>
    </div>;
};
const KioskOverview = () => {
  const stats = [{
    title: 'Total Products',
    value: '48',
    icon: PackageIcon,
    color: 'bg-blue-100 text-blue-600'
  }, {
    title: 'Active Orders',
    value: '12',
    icon: ShoppingBagIcon,
    color: 'bg-green-100 text-green-600'
  }, {
    title: 'Active Coupons',
    value: '5',
    icon: TicketIcon,
    color: 'bg-purple-100 text-purple-600'
  }, {
    title: 'Monthly Sales',
    value: '₦125,800',
    icon: BarChartIcon,
    color: 'bg-yellow-100 text-yellow-600'
  }];
  return <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
        const Icon = stat.icon;
        return <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-full mr-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <h3 className="text-xl font-bold">{stat.value}</h3>
                </div>
              </div>
            </div>;
      })}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="font-medium mb-4">Recent Orders</h3>
          <div className="space-y-3">
            {[1, 2, 3].map(item => <div key={item} className="flex justify-between items-center border-b border-gray-100 pb-3">
                <div>
                  <div className="font-medium">Order #ORD-284{item}</div>
                  <div className="text-sm text-gray-500">2 items • ₦12,500</div>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Processing
                </span>
              </div>)}
          </div>
          <button className="text-indigo-600 text-sm font-medium mt-4">
            View all orders
          </button>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="font-medium mb-4">Top Selling Products</h3>
          <div className="space-y-3">
            {[1, 2, 3].map(item => <div key={item} className="flex justify-between items-center border-b border-gray-100 pb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-md mr-3"></div>
                  <div>
                    <div className="font-medium">Product Name {item}</div>
                    <div className="text-sm text-gray-500">
                      ₦5,000 • 24 sold
                    </div>
                  </div>
                </div>
                <span className="text-green-600 font-medium">+12%</span>
              </div>)}
          </div>
          <button className="text-indigo-600 text-sm font-medium mt-4">
            View all products
          </button>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">B2B Marketing Opportunities</h3>
          <button className="text-indigo-600 text-sm font-medium">
            Learn more
          </button>
        </div>
        <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
          <h4 className="font-medium text-indigo-800 mb-2">
            Boost Your Visibility
          </h4>
          <p className="text-indigo-600 mb-4">
            Get featured in the OyaDrop app and reach thousands of potential
            customers.
          </p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm">
            Request Shoutout
          </button>
        </div>
      </div>
    </div>;
};