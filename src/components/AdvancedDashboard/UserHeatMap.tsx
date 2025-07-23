import React, { useState } from 'react';
import { MapIcon, UsersIcon, RefreshCwIcon, FilterIcon, CalendarIcon, DownloadIcon, ZoomInIcon, ZoomOutIcon, GlobeIcon, LayoutIcon, InfoIcon } from 'lucide-react';
export const UserHeatMap = () => {
  const [mapView, setMapView] = useState('heatmap');
  const [timeRange, setTimeRange] = useState('24h');
  const [loading, setLoading] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  // Mock function to simulate refreshing data
  const refreshData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };
  // Mock data for user activity by country
  const countryStats = [{
    country: 'Nigeria',
    users: 12450,
    percentage: 68.5,
    color: 'bg-red-500'
  }, {
    country: 'Ghana',
    users: 2340,
    percentage: 12.9,
    color: 'bg-orange-500'
  }, {
    country: 'Kenya',
    users: 1560,
    percentage: 8.6,
    color: 'bg-yellow-500'
  }, {
    country: 'South Africa',
    users: 980,
    percentage: 5.4,
    color: 'bg-green-500'
  }, {
    country: 'United Kingdom',
    users: 420,
    percentage: 2.3,
    color: 'bg-blue-500'
  }, {
    country: 'United States',
    users: 380,
    percentage: 2.1,
    color: 'bg-indigo-500'
  }, {
    country: 'Other',
    users: 40,
    percentage: 0.2,
    color: 'bg-purple-500'
  }];
  // Mock data for user activity by city
  const cityStats = [{
    city: 'Lagos, Nigeria',
    users: 8750,
    percentage: 48.1
  }, {
    city: 'Abuja, Nigeria',
    users: 2100,
    percentage: 11.6
  }, {
    city: 'Accra, Ghana',
    users: 1980,
    percentage: 10.9
  }, {
    city: 'Nairobi, Kenya',
    users: 1560,
    percentage: 8.6
  }, {
    city: 'Port Harcourt, Nigeria',
    users: 1150,
    percentage: 6.3
  }, {
    city: 'Ibadan, Nigeria',
    users: 950,
    percentage: 5.2
  }, {
    city: 'Johannesburg, South Africa',
    users: 620,
    percentage: 3.4
  }, {
    city: 'London, United Kingdom',
    users: 420,
    percentage: 2.3
  }, {
    city: 'New York, United States',
    users: 240,
    percentage: 1.3
  }, {
    city: 'Other',
    users: 400,
    percentage: 2.2
  }];
  // Function to handle zoom
  const handleZoomIn = () => {
    if (zoomLevel < 3) setZoomLevel(zoomLevel + 0.5);
  };
  const handleZoomOut = () => {
    if (zoomLevel > 0.5) setZoomLevel(zoomLevel - 0.5);
  };
  return <div className="h-full flex flex-col">
      {/* Header and Controls */}
      <div className="bg-white border-b border-gray-200 p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              View Type
            </label>
            <div className="flex">
              <button onClick={() => setMapView('heatmap')} className={`px-3 py-1.5 text-sm font-medium rounded-l-lg ${mapView === 'heatmap' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                Heat Map
              </button>
              <button onClick={() => setMapView('markers')} className={`px-3 py-1.5 text-sm font-medium ${mapView === 'markers' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                Markers
              </button>
              <button onClick={() => setMapView('regions')} className={`px-3 py-1.5 text-sm font-medium rounded-r-lg ${mapView === 'regions' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                Regions
              </button>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Time Range
            </label>
            <select value={timeRange} onChange={e => setTimeRange(e.target.value)} className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="1h">Last Hour</option>
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button onClick={refreshData} disabled={loading} className={`flex items-center text-sm px-3 py-1.5 rounded-lg ${loading ? 'bg-gray-100 text-gray-400' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
            <RefreshCwIcon className={`w-4 h-4 mr-1.5 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
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
      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Map Area */}
        <div className="flex-1 relative bg-gray-100 overflow-hidden">
          {/* Map Placeholder - In a real implementation, this would be a map component */}
          <div className="absolute inset-0 bg-[url('https://i.imgur.com/0Ghfj0N.png')] bg-cover bg-center transition-transform duration-300 ease-in-out" style={{
          transform: `scale(${zoomLevel})`
        }}>
            {/* Overlay with heat dots - In a real implementation, these would be positioned based on real data */}
            {mapView === 'heatmap' && <>
                {/* Nigeria (Lagos) - High concentration */}
                <div className="absolute top-[45%] left-[48%] w-16 h-16 rounded-full bg-red-500 opacity-50 blur-xl"></div>
                <div className="absolute top-[44%] left-[47%] w-10 h-10 rounded-full bg-red-500 opacity-60 blur-lg"></div>
                {/* Ghana */}
                <div className="absolute top-[46%] left-[45%] w-8 h-8 rounded-full bg-orange-500 opacity-50 blur-xl"></div>
                {/* Kenya */}
                <div className="absolute top-[48%] left-[56%] w-8 h-8 rounded-full bg-yellow-500 opacity-50 blur-xl"></div>
                {/* South Africa */}
                <div className="absolute top-[60%] left-[52%] w-6 h-6 rounded-full bg-green-500 opacity-50 blur-xl"></div>
                {/* UK */}
                <div className="absolute top-[30%] left-[47%] w-4 h-4 rounded-full bg-blue-500 opacity-50 blur-xl"></div>
                {/* US */}
                <div className="absolute top-[35%] left-[25%] w-4 h-4 rounded-full bg-indigo-500 opacity-50 blur-xl"></div>
              </>}
            {/* Marker pins - Only shown in marker view */}
            {mapView === 'markers' && <>
                {/* Nigeria (Lagos) */}
                <div className="absolute top-[44%] left-[47%] flex flex-col items-center">
                  <div className="relative">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold z-10">
                      1
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-red-500"></div>
                  </div>
                </div>
                {/* Ghana */}
                <div className="absolute top-[46%] left-[45%] flex flex-col items-center">
                  <div className="relative">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold z-10">
                      2
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-orange-500"></div>
                  </div>
                </div>
                {/* Kenya */}
                <div className="absolute top-[48%] left-[56%] flex flex-col items-center">
                  <div className="relative">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold z-10">
                      3
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-yellow-500"></div>
                  </div>
                </div>
                {/* South Africa */}
                <div className="absolute top-[60%] left-[52%] flex flex-col items-center">
                  <div className="relative">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold z-10">
                      4
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-green-500"></div>
                  </div>
                </div>
                {/* UK */}
                <div className="absolute top-[30%] left-[47%] flex flex-col items-center">
                  <div className="relative">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold z-10">
                      5
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-blue-500"></div>
                  </div>
                </div>
              </>}
            {/* Region coloring - Only shown in regions view */}
            {mapView === 'regions' && <div className="absolute inset-0 bg-[url('https://i.imgur.com/JEodPAA.png')] bg-cover bg-center opacity-70"></div>}
          </div>
          {/* Map Controls */}
          <div className="absolute bottom-4 right-4 flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
            <button onClick={handleZoomIn} className="p-2 hover:bg-gray-100 border-b border-gray-200">
              <ZoomInIcon className="w-5 h-5 text-gray-600" />
            </button>
            <button onClick={handleZoomOut} className="p-2 hover:bg-gray-100">
              <ZoomOutIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg">
            <h4 className="text-sm font-semibold mb-2">User Density</h4>
            <div className="space-y-1.5">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                <span className="text-xs">Very High (10,000+)</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-orange-500 mr-2"></div>
                <span className="text-xs">High (1,000 - 10,000)</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                <span className="text-xs">Medium (500 - 1,000)</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                <span className="text-xs">Low (100 - 500)</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-xs">Very Low ( 100)</span>
              </div>
            </div>
          </div>
        </div>
        {/* Stats Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-medium text-gray-800 flex items-center">
              <UsersIcon className="w-4 h-4 mr-2 text-indigo-600" />
              User Activity Statistics
            </h3>
          </div>
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-sm font-medium text-gray-700">Overview</h4>
              <span className="text-xs text-gray-500">Last 24 Hours</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">Active Users</div>
                <div className="text-lg font-bold text-gray-900">18,170</div>
                <div className="text-xs text-green-600 mt-1">
                  +12.5% vs previous
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">New Users</div>
                <div className="text-lg font-bold text-gray-900">1,245</div>
                <div className="text-xs text-green-600 mt-1">
                  +8.3% vs previous
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">Sessions</div>
                <div className="text-lg font-bold text-gray-900">32,580</div>
                <div className="text-xs text-green-600 mt-1">
                  +15.2% vs previous
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">Avg. Session</div>
                <div className="text-lg font-bold text-gray-900">8m 12s</div>
                <div className="text-xs text-red-600 mt-1">
                  -2.1% vs previous
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-b border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-3">
              Users by Country
            </h4>
            <div className="space-y-3">
              {countryStats.map((country, index) => <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{country.country}</span>
                    <span className="font-medium">
                      {country.users.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-2 ${country.color}`} style={{
                  width: `${country.percentage}%`
                }}></div>
                  </div>
                  <div className="text-xs text-gray-500 text-right mt-1">
                    {country.percentage}%
                  </div>
                </div>)}
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-3">
              Top Cities
            </h4>
            <div className="space-y-2">
              {cityStats.map((city, index) => <div key={index} className="flex justify-between items-center text-sm">
                  <span className="text-gray-700">{city.city}</span>
                  <span className="font-medium">
                    {city.users.toLocaleString()}
                  </span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
      {/* Footer Stats */}
      <div className="bg-white border-t border-gray-200 px-4 py-2 text-xs text-gray-600 flex justify-between items-center">
        <div className="flex items-center">
          <CalendarIcon className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
          <span>Data from: Aug 25, 2023 - Aug 26, 2023</span>
        </div>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <GlobeIcon className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
            <span>Countries: 42</span>
          </div>
          <div className="flex items-center">
            <LayoutIcon className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
            <span>Cities: 312</span>
          </div>
          <div className="flex items-center">
            <InfoIcon className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
            <span>IP addresses: 15,842</span>
          </div>
        </div>
      </div>
    </div>;
};