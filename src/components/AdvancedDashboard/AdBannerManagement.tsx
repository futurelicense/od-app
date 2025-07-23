import React, { useState } from 'react';
import { ImageIcon, PlusIcon, EditIcon, Trash2Icon, EyeIcon, CheckIcon, XIcon, CalendarIcon, LayoutIcon, TagIcon, LineChartIcon, FilterIcon, SearchIcon, ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
export const AdBannerManagement = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [showAddBanner, setShowAddBanner] = useState(false);
  const tabs = [{
    id: 'active',
    label: 'Active Banners'
  }, {
    id: 'scheduled',
    label: 'Scheduled'
  }, {
    id: 'expired',
    label: 'Expired'
  }, {
    id: 'analytics',
    label: 'Analytics'
  }, {
    id: 'slots',
    label: 'Slot Management'
  }];
  // Mock data for banners
  const banners = [{
    id: 'BNR-001',
    title: 'Special Discount Promo',
    image: 'https://via.placeholder.com/600x200/4F46E5/FFFFFF?text=Special+Discount+Promo',
    status: 'active',
    slot: 'homepage-hero',
    startDate: '2023-08-01',
    endDate: '2023-08-31',
    impressions: 12450,
    clicks: 820,
    ctr: 6.59
  }, {
    id: 'BNR-002',
    title: 'New User Offer',
    image: 'https://via.placeholder.com/600x200/10B981/FFFFFF?text=New+User+Offer',
    status: 'active',
    slot: 'app-header',
    startDate: '2023-08-15',
    endDate: '2023-09-15',
    impressions: 8320,
    clicks: 645,
    ctr: 7.75
  }, {
    id: 'BNR-003',
    title: 'Weekend Flash Sale',
    image: 'https://via.placeholder.com/600x200/F59E0B/FFFFFF?text=Weekend+Flash+Sale',
    status: 'scheduled',
    slot: 'marketplace-top',
    startDate: '2023-09-01',
    endDate: '2023-09-03',
    impressions: 0,
    clicks: 0,
    ctr: 0
  }, {
    id: 'BNR-004',
    title: 'Back to School Campaign',
    image: 'https://via.placeholder.com/600x200/EC4899/FFFFFF?text=Back+to+School',
    status: 'expired',
    slot: 'homepage-hero',
    startDate: '2023-07-01',
    endDate: '2023-07-31',
    impressions: 18750,
    clicks: 1230,
    ctr: 6.56
  }];
  // Filter banners based on active tab
  const filteredBanners = banners.filter(banner => {
    if (activeTab === 'active') return banner.status === 'active';
    if (activeTab === 'scheduled') return banner.status === 'scheduled';
    if (activeTab === 'expired') return banner.status === 'expired';
    return true;
  });
  // Mock data for ad slots
  const adSlots = [{
    id: 'homepage-hero',
    name: 'Homepage Hero Banner',
    size: '1200x400',
    location: 'Main Homepage',
    priority: 'High',
    activeAds: 1,
    maxAds: 1
  }, {
    id: 'app-header',
    name: 'App Header Banner',
    size: '600x200',
    location: 'Mobile App Header',
    priority: 'Medium',
    activeAds: 1,
    maxAds: 2
  }, {
    id: 'marketplace-top',
    name: 'Marketplace Top',
    size: '800x200',
    location: 'Marketplace Section',
    priority: 'Medium',
    activeAds: 0,
    maxAds: 2
  }, {
    id: 'sidebar-promo',
    name: 'Sidebar Promo',
    size: '300x600',
    location: 'Website Sidebar',
    priority: 'Low',
    activeAds: 0,
    maxAds: 3
  }];
  const renderActiveBanners = () => <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="relative w-64">
          <input type="text" placeholder="Search banners..." className="pl-9 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm" />
          <SearchIcon className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center text-sm bg-white border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-50">
            <FilterIcon className="w-4 h-4 mr-1.5" />
            Filter
          </button>
          <button className="flex items-center text-sm bg-indigo-600 text-white px-3 py-1.5 rounded-lg hover:bg-indigo-700" onClick={() => setShowAddBanner(true)}>
            <PlusIcon className="w-4 h-4 mr-1.5" />
            Add Banner
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBanners.map(banner => <div key={banner.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-40 bg-gray-200 relative">
              <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
              <div className="absolute top-2 right-2 flex space-x-1">
                <button className="p-1.5 bg-white rounded-full shadow hover:bg-gray-100">
                  <EditIcon className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-1.5 bg-white rounded-full shadow hover:bg-gray-100">
                  <Trash2Icon className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-1.5 bg-white rounded-full shadow hover:bg-gray-100">
                  <EyeIcon className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="absolute bottom-2 left-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${banner.status === 'active' ? 'bg-green-100 text-green-800' : banner.status === 'scheduled' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                  {banner.status.charAt(0).toUpperCase() + banner.status.slice(1)}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900">{banner.title}</h3>
              <p className="text-sm text-gray-500 mt-1">ID: {banner.id}</p>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center">
                  <LayoutIcon className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">Slot: </span>
                  <span className="ml-1 font-medium">
                    {banner.slot.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">Duration: </span>
                  <span className="ml-1 font-medium">
                    {new Date(banner.startDate).toLocaleDateString()} -{' '}
                    {new Date(banner.endDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
              {banner.status === 'active' && <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-xs text-gray-500">Impressions</p>
                      <p className="font-medium">
                        {banner.impressions.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Clicks</p>
                      <p className="font-medium">
                        {banner.clicks.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">CTR</p>
                      <p className="font-medium">{banner.ctr}%</p>
                    </div>
                  </div>
                </div>}
            </div>
          </div>)}
      </div>
    </div>;
  const renderAnalytics = () => <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <select className="border border-gray-300 rounded-lg text-sm p-2">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Custom range</option>
          </select>
          <select className="border border-gray-300 rounded-lg text-sm p-2">
            <option>All Banners</option>
            <option>Special Discount Promo</option>
            <option>New User Offer</option>
            <option>Back to School Campaign</option>
          </select>
        </div>
        <button className="flex items-center text-sm bg-white border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-50">
          <FilterIcon className="w-4 h-4 mr-1.5" />
          More Filters
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">
              Total Impressions
            </h3>
            <ArrowUpIcon className="w-4 h-4 text-green-500" />
          </div>
          <p className="mt-2 text-3xl font-bold">39,520</p>
          <p className="text-sm text-green-600 mt-1">
            +12.5% vs previous period
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Total Clicks</h3>
            <ArrowUpIcon className="w-4 h-4 text-green-500" />
          </div>
          <p className="mt-2 text-3xl font-bold">2,695</p>
          <p className="text-sm text-green-600 mt-1">
            +8.3% vs previous period
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Average CTR</h3>
            <ArrowDownIcon className="w-4 h-4 text-red-500" />
          </div>
          <p className="mt-2 text-3xl font-bold">6.82%</p>
          <p className="text-sm text-red-600 mt-1">-0.5% vs previous period</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">
              Active Banners
            </h3>
            <span className="w-4 h-4 text-gray-400">—</span>
          </div>
          <p className="mt-2 text-3xl font-bold">2</p>
          <p className="text-sm text-gray-500 mt-1">
            No change vs previous period
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-medium text-gray-900">Performance Over Time</h3>
        </div>
        <div className="p-4 h-64 flex items-center justify-center bg-gray-50">
          {/* Placeholder for chart */}
          <div className="text-center">
            <LineChartIcon className="w-12 h-12 text-gray-300 mx-auto" />
            <p className="mt-2 text-sm text-gray-500">
              Performance chart would be displayed here
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-medium text-gray-900">
            Banner Performance Comparison
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Banner
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Slot
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Impressions
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Clicks
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CTR
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {banners.map(banner => <tr key={banner.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                        <img src={banner.image} alt="" className="h-10 w-10 object-cover" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {banner.title}
                        </div>
                        <div className="text-sm text-gray-500">{banner.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {banner.slot.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {banner.impressions.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {banner.clicks.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {banner.ctr}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${banner.status === 'active' ? 'bg-green-100 text-green-800' : banner.status === 'scheduled' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                      {banner.status.charAt(0).toUpperCase() + banner.status.slice(1)}
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
  const renderSlotManagement = () => <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">
          Ad Placement Slots
        </h3>
        <button className="flex items-center text-sm bg-indigo-600 text-white px-3 py-1.5 rounded-lg hover:bg-indigo-700">
          <PlusIcon className="w-4 h-4 mr-1.5" />
          Add Slot
        </button>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Slot Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Size
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Priority
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Usage
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {adSlots.map(slot => <tr key={slot.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {slot.name}
                  </div>
                  <div className="text-xs text-gray-500">{slot.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {slot.size}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {slot.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${slot.priority === 'High' ? 'bg-red-100 text-red-800' : slot.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                    {slot.priority}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {slot.activeAds} / {slot.maxAds}
                  </div>
                  <div className="w-24 h-2 bg-gray-200 rounded-full mt-1">
                    <div className="h-2 bg-indigo-600 rounded-full" style={{
                  width: `${slot.activeAds / slot.maxAds * 100}%`
                }}></div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-medium text-gray-900">Slot Placement Preview</h3>
        </div>
        <div className="p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="max-w-4xl mx-auto">
              {/* Mock website layout */}
              <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                <div className="h-16 bg-indigo-100 rounded flex items-center justify-center mb-4 border-2 border-dashed border-indigo-300">
                  <div className="text-sm text-indigo-500 font-medium flex items-center">
                    <LayoutIcon className="w-4 h-4 mr-1.5" />
                    App Header Banner (600x200)
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-2/3">
                    <div className="h-48 bg-indigo-100 rounded flex items-center justify-center mb-4 border-2 border-dashed border-indigo-300">
                      <div className="text-sm text-indigo-500 font-medium flex items-center">
                        <LayoutIcon className="w-4 h-4 mr-1.5" />
                        Homepage Hero Banner (1200x400)
                      </div>
                    </div>
                    <div className="h-12 bg-gray-200 rounded mb-4"></div>
                    <div className="h-32 bg-gray-200 rounded mb-4"></div>
                    <div className="h-24 bg-indigo-100 rounded flex items-center justify-center mb-4 border-2 border-dashed border-indigo-300">
                      <div className="text-sm text-indigo-500 font-medium flex items-center">
                        <LayoutIcon className="w-4 h-4 mr-1.5" />
                        Marketplace Top (800x200)
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <div className="h-96 bg-indigo-100 rounded flex items-center justify-center mb-4 border-2 border-dashed border-indigo-300">
                      <div className="text-sm text-indigo-500 font-medium flex items-center">
                        <LayoutIcon className="w-4 h-4 mr-1.5" />
                        Sidebar Promo (300x600)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  const renderAddBannerForm = () => <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">Add New Banner</h2>
          <button onClick={() => setShowAddBanner(false)} className="text-gray-400 hover:text-gray-500">
            <XIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Banner Title*
              </label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter banner title" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Banner Image*
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Placement Slot*
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option value="">Select a slot</option>
                  {adSlots.map(slot => <option key={slot.id} value={slot.id}>
                      {slot.name} ({slot.size})
                    </option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Link URL*
                </label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="https://" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date*
                </label>
                <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date*
                </label>
                <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Target Audience
              </label>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <input id="all-users" name="target-audience" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" defaultChecked />
                  <label htmlFor="all-users" className="ml-2 block text-sm text-gray-700">
                    All Users
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="new-users" name="target-audience" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                  <label htmlFor="new-users" className="ml-2 block text-sm text-gray-700">
                    New Users (registered less than 30 days)
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="inactive-users" name="target-audience" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                  <label htmlFor="inactive-users" className="ml-2 block text-sm text-gray-700">
                    Inactive Users (no orders in last 30 days)
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tags
              </label>
              <div className="flex flex-wrap items-center border border-gray-300 rounded-lg p-2">
                <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm mr-2 mb-2">
                  <span>Promotion</span>
                  <button className="ml-1 text-gray-500 hover:text-gray-700">
                    <XIcon className="w-3 h-3" />
                  </button>
                </div>
                <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm mr-2 mb-2">
                  <span>Discount</span>
                  <button className="ml-1 text-gray-500 hover:text-gray-700">
                    <XIcon className="w-3 h-3" />
                  </button>
                </div>
                <input type="text" className="flex-1 border-0 focus:ring-0 text-sm p-1 min-w-[100px]" placeholder="Add a tag..." />
              </div>
            </div>
            <div className="flex items-center">
              <input id="is-active" name="is-active" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
              <label htmlFor="is-active" className="ml-2 block text-sm text-gray-700">
                Activate immediately
              </label>
            </div>
          </form>
        </div>
        <div className="p-4 border-t border-gray-200 flex justify-end space-x-3">
          <button onClick={() => setShowAddBanner(false)} className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button onClick={() => setShowAddBanner(false)} className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
            Create Banner
          </button>
        </div>
      </div>
    </div>;
  return <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <h2 className="text-lg font-medium text-gray-900">
          Ad & Banner Management
        </h2>
      </div>
      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200">
        <nav className="flex space-x-4 px-4">
          {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              {tab.label}
            </button>)}
        </nav>
      </div>
      {/* Content Area */}
      <div className="flex-1 overflow-auto bg-gray-50 p-6">
        {activeTab === 'active' && renderActiveBanners()}
        {activeTab === 'scheduled' && renderActiveBanners()}
        {activeTab === 'expired' && renderActiveBanners()}
        {activeTab === 'analytics' && renderAnalytics()}
        {activeTab === 'slots' && renderSlotManagement()}
      </div>
      {/* Add Banner Modal */}
      {showAddBanner && renderAddBannerForm()}
    </div>;
};