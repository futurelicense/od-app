import React, { useState, memo } from 'react';
import { SettingsIcon, CreditCardIcon, TruckIcon, BellIcon, UsersIcon, GlobeIcon, SaveIcon, ImageIcon, CheckIcon, QrCodeIcon, LinkIcon, DownloadIcon, CopyIcon, ShareIcon, ExternalLinkIcon, PrinterIcon } from 'lucide-react';
export const KioskSettings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return <GeneralSettings />;
      case 'payment':
        return <PaymentSettings />;
      case 'shipping':
        return <ShippingSettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'users':
        return <UserSettings />;
      case 'storefront':
        return <StorefrontSettings />;
      default:
        return <GeneralSettings />;
    }
  };
  return <div className="p-6">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <div className="md:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-medium text-gray-800">Settings</h3>
            </div>
            <nav className="p-2">
              <button onClick={() => setActiveTab('general')} className={`flex items-center w-full px-3 py-2 rounded-md text-left ${activeTab === 'general' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'}`}>
                <SettingsIcon className="w-5 h-5 mr-3" />
                General
              </button>
              <button onClick={() => setActiveTab('payment')} className={`flex items-center w-full px-3 py-2 rounded-md text-left ${activeTab === 'payment' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'}`}>
                <CreditCardIcon className="w-5 h-5 mr-3" />
                Payment Methods
              </button>
              <button onClick={() => setActiveTab('shipping')} className={`flex items-center w-full px-3 py-2 rounded-md text-left ${activeTab === 'shipping' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'}`}>
                <TruckIcon className="w-5 h-5 mr-3" />
                Shipping Options
              </button>
              <button onClick={() => setActiveTab('notifications')} className={`flex items-center w-full px-3 py-2 rounded-md text-left ${activeTab === 'notifications' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'}`}>
                <BellIcon className="w-5 h-5 mr-3" />
                Notifications
              </button>
              <button onClick={() => setActiveTab('users')} className={`flex items-center w-full px-3 py-2 rounded-md text-left ${activeTab === 'users' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'}`}>
                <UsersIcon className="w-5 h-5 mr-3" />
                User Access
              </button>
              <button onClick={() => setActiveTab('storefront')} className={`flex items-center w-full px-3 py-2 rounded-md text-left ${activeTab === 'storefront' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'}`}>
                <QrCodeIcon className="w-5 h-5 mr-3" />
                Storefront Access
              </button>
            </nav>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow">
          {renderTabContent()}
        </div>
      </div>
    </div>;
};
const GeneralSettings = () => {
  return <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        General Settings
      </h2>
      <form className="space-y-6">
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Store Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Store Name*
              </label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" defaultValue="OyaDrop Kiosk" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Store Email*
              </label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" defaultValue="kiosk@oyadrop.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Store Description
            </label>
            <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" defaultValue="Your one-stop shop for electronics, fashion, and accessories. Fast delivery guaranteed!"></textarea>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number*
              </label>
              <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" defaultValue="+234 800 123 4567" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business Address*
              </label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" defaultValue="15 Admiralty Way, Lekki Phase 1, Lagos" />
            </div>
          </div>
        </div>
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Store Branding
          </h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Store Logo
            </label>
            <div className="mt-1 flex items-center">
              <div className="h-16 w-16 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                <ImageIcon className="h-8 w-8 text-gray-400" />
              </div>
              <button type="button" className="ml-4 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Change
              </button>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Store Banner
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Primary Color
              </label>
              <div className="flex items-center">
                <input type="color" className="h-10 w-10 border border-gray-300 rounded" defaultValue="#6366F1" />
                <input type="text" className="ml-2 flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" defaultValue="#6366F1" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Secondary Color
              </label>
              <div className="flex items-center">
                <input type="color" className="h-10 w-10 border border-gray-300 rounded" defaultValue="#4F46E5" />
                <input type="text" className="ml-2 flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" defaultValue="#4F46E5" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Accent Color
              </label>
              <div className="flex items-center">
                <input type="color" className="h-10 w-10 border border-gray-300 rounded" defaultValue="#10B981" />
                <input type="text" className="ml-2 flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" defaultValue="#10B981" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Regional Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Currency
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="NGN">Nigerian Naira (₦)</option>
                <option value="USD">US Dollar ($)</option>
                <option value="EUR">Euro (€)</option>
                <option value="GBP">British Pound (£)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time Zone
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="Africa/Lagos">Africa/Lagos (GMT+1)</option>
                <option value="UTC">UTC</option>
                <option value="America/New_York">
                  America/New_York (GMT-4)
                </option>
                <option value="Europe/London">Europe/London (GMT+1)</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Default Language
            </label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input id="language-en" name="language" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" defaultChecked />
                <label htmlFor="language-en" className="ml-2 block text-sm text-gray-700">
                  English
                </label>
              </div>
              <div className="flex items-center">
                <input id="language-fr" name="language" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                <label htmlFor="language-fr" className="ml-2 block text-sm text-gray-700">
                  French
                </label>
              </div>
              <div className="flex items-center">
                <input id="language-es" name="language" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                <label htmlFor="language-es" className="ml-2 block text-sm text-gray-700">
                  Spanish
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center">
            <SaveIcon className="w-4 h-4 mr-2" />
            Save Changes
          </button>
        </div>
      </form>
    </div>;
};
const PaymentSettings = () => {
  return <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Payment Methods
      </h2>
      <form className="space-y-6">
        <div className="border-b border-gray-200 pb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-800">
              Available Payment Methods
            </h3>
            <button type="button" className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-lg flex items-center">
              <PlusIcon className="w-4 h-4 mr-1" />
              Add Method
            </button>
          </div>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <CreditCardIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">Card Payments</h4>
                    <p className="text-sm text-gray-500">
                      Accept Visa, Mastercard, Verve
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full mr-3">
                    Active
                  </span>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
              </div>
              <div className="mt-4 border-t border-gray-100 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Payment Processor
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm">
                      <option>Paystack</option>
                      <option>Flutterwave</option>
                      <option>Stripe</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Transaction Fee
                    </label>
                    <div className="relative">
                      <input type="text" className="w-full pl-7 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm" defaultValue="1.5" />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        %
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <button type="button" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                    Configure
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-yellow-100 p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">OyaDrop Wallet</h4>
                    <p className="text-sm text-gray-500">
                      Allow customers to pay with their OyaDrop wallet
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full mr-3">
                    Active
                  </span>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">Cash on Delivery</h4>
                    <p className="text-sm text-gray-500">
                      Allow customers to pay when they receive their order
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full mr-3">
                    Inactive
                  </span>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Payment Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Default Currency
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="NGN">Nigerian Naira (₦)</option>
                <option value="USD">US Dollar ($)</option>
                <option value="EUR">Euro (€)</option>
                <option value="GBP">British Pound (£)</option>
              </select>
            </div>
            <div className="flex items-center">
              <input id="payment-capture" name="payment-capture" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
              <label htmlFor="payment-capture" className="ml-2 block text-sm text-gray-700">
                Capture payment immediately (if unchecked, payment will be
                authorized but not captured)
              </label>
            </div>
            <div className="flex items-center">
              <input id="payment-receipt" name="payment-receipt" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
              <label htmlFor="payment-receipt" className="ml-2 block text-sm text-gray-700">
                Send payment receipt to customer
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center">
            <SaveIcon className="w-4 h-4 mr-2" />
            Save Changes
          </button>
        </div>
      </form>
    </div>;
};
const ShippingSettings = () => {
  return <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Shipping Options
      </h2>
      <form className="space-y-6">
        <div className="border-b border-gray-200 pb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-800">
              Shipping Methods
            </h3>
            <button type="button" className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-lg flex items-center">
              <PlusIcon className="w-4 h-4 mr-1" />
              Add Method
            </button>
          </div>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-2 rounded-md">
                    <TruckIcon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">Standard Shipping</h4>
                    <p className="text-sm text-gray-500">2-3 business days</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full mr-3">
                    Active
                  </span>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
              </div>
              <div className="mt-4 border-t border-gray-100 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Shipping Fee
                    </label>
                    <div className="relative">
                      <input type="text" className="w-full pl-7 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm" defaultValue="1500" />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        ₦
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Free Shipping Threshold
                    </label>
                    <div className="relative">
                      <input type="text" className="w-full pl-7 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm" defaultValue="10000" />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        ₦
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">Express Shipping</h4>
                    <p className="text-sm text-gray-500">Next day delivery</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full mr-3">
                    Active
                  </span>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
              </div>
              <div className="mt-4 border-t border-gray-100 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Shipping Fee
                    </label>
                    <div className="relative">
                      <input type="text" className="w-full pl-7 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm" defaultValue="3000" />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        ₦
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Free Shipping Threshold
                    </label>
                    <div className="relative">
                      <input type="text" className="w-full pl-7 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm" defaultValue="20000" />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        ₦
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">Store Pickup</h4>
                    <p className="text-sm text-gray-500">
                      Customer picks up from store
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full mr-3">
                    Inactive
                  </span>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Shipping Zones
          </h3>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Zone Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Regions
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Shipping Methods
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        Lagos
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Lagos State</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        Standard, Express
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        South West
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        Oyo, Ogun, Osun, Ondo, Ekiti
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Standard</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        Other States
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        All other states
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Standard</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button type="button" className="mt-2 text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
              <PlusIcon className="w-4 h-4 mr-1" />
              Add Shipping Zone
            </button>
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center">
            <SaveIcon className="w-4 h-4 mr-2" />
            Save Changes
          </button>
        </div>
      </form>
    </div>;
};
const NotificationSettings = () => {
  return <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Notification Settings
      </h2>
      <form className="space-y-6">
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Email Notifications
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">New Order</h4>
                <p className="text-sm text-gray-500">
                  Receive an email when a new order is placed
                </p>
              </div>
              <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Order Status Update</h4>
                <p className="text-sm text-gray-500">
                  Receive an email when an order status changes
                </p>
              </div>
              <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Low Stock Alert</h4>
                <p className="text-sm text-gray-500">
                  Receive an email when product stock is low
                </p>
              </div>
              <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Product Review</h4>
                <p className="text-sm text-gray-500">
                  Receive an email when a product receives a review
                </p>
              </div>
              <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Recipients
            </label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" defaultValue="admin@oyadrop.com, manager@oyadrop.com" placeholder="Enter email addresses separated by commas" />
            <p className="text-xs text-gray-500 mt-1">
              Notifications will be sent to these email addresses.
            </p>
          </div>
        </div>
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Push Notifications
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">New Order</h4>
                <p className="text-sm text-gray-500">
                  Receive a push notification when a new order is placed
                </p>
              </div>
              <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Order Status Update</h4>
                <p className="text-sm text-gray-500">
                  Receive a push notification when an order status changes
                </p>
              </div>
              <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Low Stock Alert</h4>
                <p className="text-sm text-gray-500">
                  Receive a push notification when product stock is low
                </p>
              </div>
              <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Customer Notifications
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Order Confirmation</h4>
                <p className="text-sm text-gray-500">
                  Send an email to customers when they place an order
                </p>
              </div>
              <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Shipping Updates</h4>
                <p className="text-sm text-gray-500">
                  Send an email to customers when their order ships
                </p>
              </div>
              <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Delivery Confirmation</h4>
                <p className="text-sm text-gray-500">
                  Send an email to customers when their order is delivered
                </p>
              </div>
              <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Abandoned Cart Reminder</h4>
                <p className="text-sm text-gray-500">
                  Send an email to customers who abandoned their cart
                </p>
              </div>
              <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Marketing Emails</h4>
                <p className="text-sm text-gray-500">
                  Send promotional emails to customers
                </p>
              </div>
              <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center">
            <SaveIcon className="w-4 h-4 mr-2" />
            Save Changes
          </button>
        </div>
      </form>
    </div>;
};
const UserSettings = () => {
  return <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        User Access Management
      </h2>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-medium text-gray-800">Team Members</h3>
          <p className="text-sm text-gray-500">
            Manage who has access to your kiosk
          </p>
        </div>
        <button type="button" className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-lg flex items-center">
          <PlusIcon className="w-4 h-4 mr-1" />
          Invite User
        </button>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Active
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                    AD
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Adebayo Johnson
                    </div>
                    <div className="text-sm text-gray-500">
                      adebayo@oyadrop.com
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Owner</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Now
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white">
                    SO
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Sarah Okafor
                    </div>
                    <div className="text-sm text-gray-500">
                      sarah@oyadrop.com
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Manager</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                2 hours ago
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-yellow-600 flex items-center justify-center text-white">
                    JA
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      John Adeyemi
                    </div>
                    <div className="text-sm text-gray-500">
                      john@oyadrop.com
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Staff</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Yesterday
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center text-white">
                    MI
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Mary Igwe
                    </div>
                    <div className="text-sm text-gray-500">
                      mary@oyadrop.com
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Staff</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                  Inactive
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                1 week ago
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Role Permissions
        </h3>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Permission
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Owner
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Manager
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Staff
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  View Dashboard
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <CheckIcon className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <CheckIcon className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <CheckIcon className="w-5 h-5 text-green-600 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Manage Products
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <CheckIcon className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <CheckIcon className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <XIcon className="w-5 h-5 text-red-600 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Manage Orders
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <CheckIcon className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <CheckIcon className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <CheckIcon className="w-5 h-5 text-green-600 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Manage Coupons
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <CheckIcon className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <CheckIcon className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <XIcon className="w-5 h-5 text-red-600 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  View Analytics
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <CheckIcon className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <CheckIcon className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <XIcon className="w-5 h-5 text-red-600 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Manage Settings
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <CheckIcon className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <XIcon className="w-5 h-5 text-red-600 mx-auto" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <XIcon className="w-5 h-5 text-red-600 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Manage Users
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <CheckIcon className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <XIcon className="w-5 h-5 text-red-600 mx-auto" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <XIcon className="w-5 h-5 text-red-600 mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="button" className="mt-4 text-sm text-indigo-600 hover:text-indigo-800 font-medium">
          Edit Role Permissions
        </button>
      </div>
    </div>;
};
const StorefrontSettings = () => {
  const [copied, setCopied] = useState(false);
  const storeUrl = 'https://oyadrop.com/store/oyadrop-kiosk';
  const handleCopyLink = () => {
    navigator.clipboard.writeText(storeUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const handleDownloadQR = () => {
    // In a real implementation, this would generate and download the QR code
    alert('QR code download functionality would be implemented here');
  };
  return <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Storefront Access
      </h2>
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Storefront QR Code
          </h3>
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="bg-white border border-gray-200 rounded-lg p-4 w-64 h-64 flex items-center justify-center">
              {/* Placeholder for QR Code - in a real implementation, this would be a generated QR code */}
              <div className="w-52 h-52 bg-gray-100 flex items-center justify-center">
                <QrCodeIcon className="w-32 h-32 text-gray-400" />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <p className="text-gray-700">
                This QR code provides direct access to your storefront.
                Customers can scan it to instantly visit your store on their
                mobile devices.
              </p>
              <div className="flex flex-wrap gap-3">
                <button onClick={handleDownloadQR} className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  Download QR Code
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  <ShareIcon className="w-4 h-4 mr-2" />
                  Share QR Code
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  <PrinterIcon className="w-4 h-4 mr-2" />
                  Print QR Code
                </button>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Tip:</strong> Place this QR code at your physical
                  location, on business cards, or promotional materials to make
                  it easy for customers to access your online store.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Storefront Link
          </h3>
          <div className="space-y-4">
            <p className="text-gray-700">
              Share this link with your customers to give them direct access to
              your online storefront.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input type="text" readOnly value={storeUrl} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50" />
                <LinkIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>
              <button onClick={handleCopyLink} className="flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg min-w-[120px]">
                {copied ? <>
                    <CheckIcon className="w-4 h-4 mr-2" />
                    Copied!
                  </> : <>
                    <CopyIcon className="w-4 h-4 mr-2" />
                    Copy Link
                  </>}
              </button>
              <a href={storeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                <ExternalLinkIcon className="w-4 h-4 mr-2" />
                Visit
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-medium text-gray-800 mb-3">
                Customize storefront URL
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">oyadrop.com/store/</span>
                  </div>
                  <input type="text" className="w-full pl-[140px] pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" defaultValue="oyadrop-kiosk" placeholder="your-store-name" />
                </div>
                <button className="flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                  <SaveIcon className="w-4 h-4 mr-2" />
                  Save URL
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Choose a memorable URL that's easy for your customers to
                remember and type.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};