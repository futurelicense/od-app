import React, { useState } from 'react';
import { ShoppingBagIcon, PackageIcon, TagIcon, SettingsIcon, BarChartIcon, TicketIcon, StoreIcon, ClipboardIcon, UsersIcon, TruckIcon, CreditCardIcon, BoxIcon } from 'lucide-react';
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
      {/* Kiosk Header with Indigo Theme */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white">Your Kiosk</h1>
            <p className="text-white text-opacity-90 mt-1">
              Manage your online store and sell your products
            </p>
          </div>
          <button onClick={() => setShowStorefront(true)} className="bg-white text-indigo-600 px-4 py-2 rounded-lg flex items-center shadow-md hover:bg-indigo-50">
            <StoreIcon className="w-5 h-5 mr-2" />
            View Storefront
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 flex items-center">
            <div className="bg-white p-2 rounded-full mr-3">
              <PackageIcon className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <div className="text-white text-opacity-80 text-sm">Products</div>
              <div className="text-white font-bold text-xl">48</div>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 flex items-center">
            <div className="bg-white p-2 rounded-full mr-3">
              <ClipboardIcon className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <div className="text-white text-opacity-80 text-sm">Orders</div>
              <div className="text-white font-bold text-xl">12</div>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 flex items-center">
            <div className="bg-white p-2 rounded-full mr-3">
              <UsersIcon className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <div className="text-white text-opacity-80 text-sm">
                Customers
              </div>
              <div className="text-white font-bold text-xl">156</div>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 flex items-center">
            <div className="bg-white p-2 rounded-full mr-3">
              <BarChartIcon className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <div className="text-white text-opacity-80 text-sm">Revenue</div>
              <div className="text-white font-bold text-xl">₦125,800</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="border-b border-gray-200 bg-indigo-50">
          <nav className="flex overflow-x-auto">
            <button onClick={() => setActiveTab('overview')} className={`px-5 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'overview' ? 'border-b-2 border-indigo-600 text-indigo-600 bg-white' : 'text-gray-600 hover:text-indigo-600'}`}>
              Overview
            </button>
            <button onClick={() => setActiveTab('products')} className={`px-5 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'products' ? 'border-b-2 border-indigo-600 text-indigo-600 bg-white' : 'text-gray-600 hover:text-indigo-600'}`}>
              Products
            </button>
            <button onClick={() => setActiveTab('orders')} className={`px-5 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'orders' ? 'border-b-2 border-indigo-600 text-indigo-600 bg-white' : 'text-gray-600 hover:text-indigo-600'}`}>
              Orders
            </button>
            <button onClick={() => setActiveTab('coupons')} className={`px-5 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'coupons' ? 'border-b-2 border-indigo-600 text-indigo-600 bg-white' : 'text-gray-600 hover:text-indigo-600'}`}>
              Coupons
            </button>
            <button onClick={() => setActiveTab('analytics')} className={`px-5 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'analytics' ? 'border-b-2 border-indigo-600 text-indigo-600 bg-white' : 'text-gray-600 hover:text-indigo-600'}`}>
              Analytics
            </button>
            <button onClick={() => setActiveTab('settings')} className={`px-5 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'settings' ? 'border-b-2 border-indigo-600 text-indigo-600 bg-white' : 'text-gray-600 hover:text-indigo-600'}`}>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, index) => {
        const Icon = stat.icon;
        return <div key={index} className="bg-white border border-indigo-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
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
        <div className="bg-white border border-indigo-100 rounded-lg p-5 shadow-sm">
          <h3 className="font-medium text-lg mb-4 text-indigo-800">
            Recent Orders
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map(item => <div key={item} className="flex justify-between items-center border-b border-gray-100 pb-4">
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-2 rounded-md mr-3">
                    <BoxIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-medium">Order #ORD-284{item}</div>
                    <div className="text-sm text-gray-500">
                      2 items • ₦12,500
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Processing
                </span>
              </div>)}
          </div>
          <button className="text-indigo-600 text-sm font-medium mt-4 flex items-center">
            View all orders
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="bg-white border border-indigo-100 rounded-lg p-5 shadow-sm">
          <h3 className="font-medium text-lg mb-4 text-indigo-800">
            Top Selling Products
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map(item => <div key={item} className="flex justify-between items-center border-b border-gray-100 pb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-md mr-3 flex items-center justify-center">
                    <PackageIcon className="w-6 h-6 text-indigo-600" />
                  </div>
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
          <button className="text-indigo-600 text-sm font-medium mt-4 flex items-center">
            View all products
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-indigo-100 rounded-lg p-5 shadow-sm lg:col-span-2">
          <h3 className="font-medium text-lg mb-4 text-indigo-800">
            Sales Overview
          </h3>
          <div className="h-60 flex items-center justify-center bg-indigo-50 rounded-lg">
            <p className="text-gray-500">Sales chart will appear here</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg p-5 text-white shadow-md">
          <h3 className="font-medium text-lg mb-4">Boost Your Sales</h3>
          <p className="mb-6 text-indigo-100">
            Get featured in the OyaDrop marketplace and reach thousands of
            potential customers.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
                <TagIcon className="w-5 h-5" />
              </div>
              <div>Create special offers</div>
            </div>
            <div className="flex items-center">
              <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
                <TruckIcon className="w-5 h-5" />
              </div>
              <div>Offer free shipping</div>
            </div>
            <div className="flex items-center">
              <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
                <CreditCardIcon className="w-5 h-5" />
              </div>
              <div>Enable multiple payment options</div>
            </div>
          </div>
          <button className="mt-6 bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium w-full">
            Promote Your Kiosk
          </button>
        </div>
      </div>
      <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-lg text-indigo-800">Quick Actions</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-white hover:bg-indigo-50 border border-indigo-100 rounded-lg p-4 text-center transition-colors">
            <PackageIcon className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
            <span className="text-sm font-medium">Add Product</span>
          </button>
          <button className="bg-white hover:bg-indigo-50 border border-indigo-100 rounded-lg p-4 text-center transition-colors">
            <TagIcon className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
            <span className="text-sm font-medium">Create Coupon</span>
          </button>
          <button className="bg-white hover:bg-indigo-50 border border-indigo-100 rounded-lg p-4 text-center transition-colors">
            <TruckIcon className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
            <span className="text-sm font-medium">Process Orders</span>
          </button>
          <button className="bg-white hover:bg-indigo-50 border border-indigo-100 rounded-lg p-4 text-center transition-colors">
            <SettingsIcon className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
            <span className="text-sm font-medium">Kiosk Settings</span>
          </button>
        </div>
      </div>
    </div>;
};