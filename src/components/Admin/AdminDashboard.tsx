import React, { useState } from 'react';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';
import { AdminOverview } from './AdminOverview';
import { UserManagement } from './UserManagement';
import { SystemSettings } from './SystemSettings';
import { AdminReports } from './AdminReports';
import { GodsEyeView } from '../AdvancedDashboard/GodsEyeView';
import { CommissionManagement } from '../AdvancedDashboard/CommissionManagement';
import { AdBannerManagement } from '../AdvancedDashboard/AdBannerManagement';
import { UserHeatMap } from '../AdvancedDashboard/UserHeatMap';
import { AdvancedAnalytics } from '../AdvancedDashboard/AdvancedAnalytics';
import { SystemHealth } from '../AdvancedDashboard/SystemHealth';
interface AdminDashboardProps {
  adminEmail: string;
  onLogout: () => void;
}
export const AdminDashboard = ({
  adminEmail,
  onLogout
}: AdminDashboardProps) => {
  const [activeSection, setActiveSection] = useState('overview');
  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <AdminOverview />;
      case 'users':
        return <UserManagement />;
      case 'settings':
        return <SystemSettings />;
      case 'reports':
        return <AdminReports />;
      // Advanced Dashboard sections
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
        return <AdminOverview />;
    }
  };
  return <div className="flex h-screen bg-gray-50">
      <AdminSidebar activeSection={activeSection} setActiveSection={setActiveSection} onLogout={onLogout} adminEmail={adminEmail} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <AdminHeader adminEmail={adminEmail} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {renderSection()}
        </main>
      </div>
    </div>;
};