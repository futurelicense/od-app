import React, { useState } from 'react';
import { MapIcon, DollarSignIcon, ImageIcon, BarChart3Icon, LayersIcon, Settings2Icon, AreaChartIcon } from 'lucide-react';
import { GodsEyeView } from './GodsEyeView';
import { CommissionManagement } from './CommissionManagement';
import { AdBannerManagement } from './AdBannerManagement';
import { UserHeatMap } from './UserHeatMap';
import { AdvancedAnalytics } from './AdvancedAnalytics';
import { SystemHealth } from './SystemHealth';
export const AdvancedDashboardSection = () => {
  const [activeTab, setActiveTab] = useState('godsEye');
  const tabs = [{
    id: 'godsEye',
    label: "God's Eye View",
    icon: MapIcon,
    description: 'Real-time tracking and monitoring of all operations'
  }, {
    id: 'commission',
    label: 'Commission Management',
    icon: DollarSignIcon,
    description: 'Manage operator and agent commissions and payouts'
  }, {
    id: 'adBanner',
    label: 'Ad & Banner Management',
    icon: ImageIcon,
    description: 'Control promotional content across the platform'
  }, {
    id: 'userHeatMap',
    label: 'User Heat Map',
    icon: AreaChartIcon,
    description: 'Geographic visualization of user activity'
  }, {
    id: 'analytics',
    label: 'Advanced Analytics',
    icon: BarChart3Icon,
    description: 'Deep insights and predictive business intelligence'
  }, {
    id: 'systemHealth',
    label: 'System Health',
    icon: LayersIcon,
    description: 'Monitor platform performance and stability'
  }];
  const renderContent = () => {
    switch (activeTab) {
      case 'godsEye':
        return <GodsEyeView />;
      case 'commission':
        return <CommissionManagement />;
      case 'adBanner':
        return <AdBannerManagement />;
      case 'userHeatMap':
        return <UserHeatMap />;
      case 'analytics':
        return <AdvancedAnalytics />;
      case 'systemHealth':
        return <SystemHealth />;
      default:
        return <GodsEyeView />;
    }
  };
  return <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Advanced Dashboard
          </h1>
          <p className="text-gray-500">
            Comprehensive monitoring and management tools
          </p>
        </div>
        <button className="flex items-center text-sm bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-lg hover:bg-indigo-100">
          <Settings2Icon className="w-4 h-4 mr-1.5" />
          Configure Dashboard
        </button>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden flex-1 flex flex-col">
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
        <div className="flex-1 overflow-auto p-0">{renderContent()}</div>
      </div>
    </div>;
};