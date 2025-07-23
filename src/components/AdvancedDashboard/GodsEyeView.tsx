import React, { useEffect, useState } from 'react';
import { MapPinIcon, TruckIcon, UserIcon, PackageIcon, CloudIcon, RefreshCwIcon, FilterIcon, LayersIcon } from 'lucide-react';
export const GodsEyeView = () => {
  const [mapView, setMapView] = useState('standard');
  const [showWeather, setShowWeather] = useState(false);
  const [showTraffic, setShowTraffic] = useState(false);
  const [refreshInterval, setRefreshInterval] = useState(30);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [loading, setLoading] = useState(false);
  // Mock function to simulate refreshing data
  const refreshData = () => {
    setLoading(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setLoading(false);
    }, 800);
  };
  // Auto-refresh effect
  useEffect(() => {
    const interval = setInterval(() => {
      refreshData();
    }, refreshInterval * 1000);
    return () => clearInterval(interval);
  }, [refreshInterval]);
  return <div className="h-full flex flex-col">
      {/* Map Controls */}
      <div className="bg-white border-b border-gray-200 p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Map Type:</span>
            <select value={mapView} onChange={e => setMapView(e.target.value)} className="text-sm border border-gray-300 rounded-md p-1.5">
              <option value="standard">Standard</option>
              <option value="satellite">Satellite</option>
              <option value="terrain">Terrain</option>
            </select>
          </div>
          <div className="flex items-center space-x-3">
            <label className="flex items-center text-sm text-gray-700">
              <input type="checkbox" checked={showWeather} onChange={() => setShowWeather(!showWeather)} className="mr-1.5 h-4 w-4 text-indigo-600 rounded" />
              <CloudIcon className="w-4 h-4 mr-1" /> Weather
            </label>
            <label className="flex items-center text-sm text-gray-700">
              <input type="checkbox" checked={showTraffic} onChange={() => setShowTraffic(!showTraffic)} className="mr-1.5 h-4 w-4 text-indigo-600 rounded" />
              <TruckIcon className="w-4 h-4 mr-1" /> Traffic
            </label>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center text-sm text-gray-600">
            <span className="mr-2">Refresh:</span>
            <select value={refreshInterval} onChange={e => setRefreshInterval(Number(e.target.value))} className="border border-gray-300 rounded-md p-1.5">
              <option value="10">10s</option>
              <option value="30">30s</option>
              <option value="60">1m</option>
              <option value="300">5m</option>
            </select>
          </div>
          <button onClick={refreshData} disabled={loading} className={`flex items-center text-sm px-3 py-1.5 rounded-lg ${loading ? 'bg-gray-100 text-gray-400' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'}`}>
            <RefreshCwIcon className={`w-4 h-4 mr-1.5 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
          <button className="flex items-center text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-200">
            <FilterIcon className="w-4 h-4 mr-1.5" />
            Filter
          </button>
          <button className="flex items-center text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-200">
            <LayersIcon className="w-4 h-4 mr-1.5" />
            Layers
          </button>
        </div>
      </div>
      {/* Map and Data Display */}
      <div className="flex-1 flex">
        {/* Main Map Area */}
        <div className="flex-1 relative bg-gray-100 overflow-hidden">
          {/* Map Placeholder - In a real implementation, this would be a map component */}
          <div className="absolute inset-0 bg-[url('https://miro.medium.com/max/1400/1*qYUvh-EtES8dtgKiBRiLsA.png')] bg-cover bg-center">
            {/* Map Icons - These would be positioned based on real data */}
            <div className="absolute top-1/4 left-1/3 flex flex-col items-center">
              <div className="bg-blue-500 p-2 rounded-full text-white">
                <TruckIcon className="w-5 h-5" />
              </div>
              <div className="mt-1 bg-white px-2 py-0.5 rounded text-xs font-medium shadow">
                OP-0042
              </div>
            </div>
            <div className="absolute top-1/3 left-1/2 flex flex-col items-center">
              <div className="bg-green-500 p-2 rounded-full text-white">
                <TruckIcon className="w-5 h-5" />
              </div>
              <div className="mt-1 bg-white px-2 py-0.5 rounded text-xs font-medium shadow">
                OP-0018
              </div>
            </div>
            <div className="absolute top-2/3 left-1/4 flex flex-col items-center">
              <div className="bg-purple-500 p-2 rounded-full text-white">
                <PackageIcon className="w-5 h-5" />
              </div>
              <div className="mt-1 bg-white px-2 py-0.5 rounded text-xs font-medium shadow">
                ORD-3842
              </div>
            </div>
            <div className="absolute top-1/2 right-1/3 flex flex-col items-center">
              <div className="bg-red-500 p-2 rounded-full text-white">
                <UserIcon className="w-5 h-5" />
              </div>
              <div className="mt-1 bg-white px-2 py-0.5 rounded text-xs font-medium shadow">
                USR-1204
              </div>
            </div>
          </div>
          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg">
            <h4 className="text-sm font-semibold mb-2">Legend</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="bg-blue-500 p-1 rounded-full text-white mr-2">
                  <TruckIcon className="w-3 h-3" />
                </div>
                <span className="text-xs">Active Operator</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500 p-1 rounded-full text-white mr-2">
                  <TruckIcon className="w-3 h-3" />
                </div>
                <span className="text-xs">Available Operator</span>
              </div>
              <div className="flex items-center">
                <div className="bg-purple-500 p-1 rounded-full text-white mr-2">
                  <PackageIcon className="w-3 h-3" />
                </div>
                <span className="text-xs">Pending Order</span>
              </div>
              <div className="flex items-center">
                <div className="bg-red-500 p-1 rounded-full text-white mr-2">
                  <UserIcon className="w-3 h-3" />
                </div>
                <span className="text-xs">Active User</span>
              </div>
            </div>
          </div>
          {/* Weather Overlay (only shown when enabled) */}
          {showWeather && <div className="absolute inset-0 bg-[url('https://www.theweather.com/wimages/foto1b53b9f89a0f5c9b9f59c07c88a57a9f.png')] bg-cover bg-center opacity-40"></div>}
          {/* Traffic Overlay (only shown when enabled) */}
          {showTraffic && <div className="absolute inset-0 bg-[url('https://www.researchgate.net/profile/Javed-Aslam-2/publication/4156972/figure/fig1/AS:340778618580996@1458254542329/Traffic-map-of-Boston-The-color-of-a-road-segment-indicates-the-speed-of-traffic-green.png')] bg-cover bg-center opacity-40"></div>}
        </div>
        {/* Sidebar - Entity Information */}
        <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-medium text-gray-800">Active Entities</h3>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-blue-500 p-1.5 rounded-full text-white mr-3">
                    <TruckIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">OP-0042</h4>
                    <p className="text-xs text-gray-500">David Adeleke</p>
                  </div>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                  Active
                </span>
              </div>
              <div className="mt-2 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Current Order:</span>
                  <span className="font-medium">ORD-3840</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>Location:</span>
                  <span className="font-medium">Ikeja, Lagos</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>ETA:</span>
                  <span className="font-medium">15 mins</span>
                </div>
              </div>
            </div>
            <div className="p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-green-500 p-1.5 rounded-full text-white mr-3">
                    <TruckIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">OP-0018</h4>
                    <p className="text-xs text-gray-500">Funke Akindele</p>
                  </div>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                  Available
                </span>
              </div>
              <div className="mt-2 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Last Order:</span>
                  <span className="font-medium">ORD-3835</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>Location:</span>
                  <span className="font-medium">Victoria Island, Lagos</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>Status:</span>
                  <span className="font-medium">Waiting for order</span>
                </div>
              </div>
            </div>
            <div className="p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-purple-500 p-1.5 rounded-full text-white mr-3">
                    <PackageIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">ORD-3842</h4>
                    <p className="text-xs text-gray-500">John Doe</p>
                  </div>
                </div>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                  Pending
                </span>
              </div>
              <div className="mt-2 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Pickup:</span>
                  <span className="font-medium">Ikeja, Lagos</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>Dropoff:</span>
                  <span className="font-medium">Lekki, Lagos</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>Price:</span>
                  <span className="font-medium">₦2,500</span>
                </div>
              </div>
            </div>
            <div className="p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-red-500 p-1.5 rounded-full text-white mr-3">
                    <UserIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">USR-1204</h4>
                    <p className="text-xs text-gray-500">Sarah Johnson</p>
                  </div>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                  Online
                </span>
              </div>
              <div className="mt-2 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="font-medium">Victoria Island, Lagos</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>Last Active:</span>
                  <span className="font-medium">2 mins ago</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>Orders:</span>
                  <span className="font-medium">12 total</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Status Bar */}
      <div className="bg-gray-50 border-t border-gray-200 px-4 py-2 text-xs text-gray-600 flex justify-between items-center">
        <div>Last updated: {lastUpdated.toLocaleTimeString()}</div>
        <div>
          <span className="mr-4">Active Operators: 42</span>
          <span className="mr-4">Pending Orders: 18</span>
          <span className="mr-4">Active Users: 156</span>
          <span>
            System Status:{' '}
            <span className="text-green-600 font-medium">Healthy</span>
          </span>
        </div>
      </div>
    </div>;
};