import React, { useState } from 'react';
import { ExternalDashboardLayout } from '../ExternalDashboardLayout';
import { SubAgentDashboardOverview } from './SubAgentDashboardOverview';
import { SubAgentAvailableOrders } from './SubAgentAvailableOrders';
import { SubAgentActiveOrders } from './SubAgentActiveOrders';
import { SubAgentComplaints } from './SubAgentComplaints';
interface LaasSubAgentDashboardProps {
  onLogout: () => void;
}
export const LaasSubAgentDashboard = ({
  onLogout
}: LaasSubAgentDashboardProps) => {
  const [activeNavItem, setActiveNavItem] = useState('dashboard');
  // Render the appropriate section based on active nav item
  const renderSection = () => {
    switch (activeNavItem) {
      case 'dashboard':
        return <SubAgentDashboardOverview />;
      case 'available':
        return <SubAgentAvailableOrders />;
      case 'active':
        return <SubAgentActiveOrders />;
      case 'complaints':
        return <SubAgentComplaints />;
      default:
        return <SubAgentDashboardOverview />;
    }
  };
  return <ExternalDashboardLayout role="laasSubAgent" onLogout={onLogout} activeNavItem={activeNavItem} setActiveNavItem={setActiveNavItem}>
      {renderSection()}
    </ExternalDashboardLayout>;
};