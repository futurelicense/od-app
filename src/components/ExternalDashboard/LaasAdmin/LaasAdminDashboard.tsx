import React, { useState } from 'react';
import { ExternalDashboardLayout } from '../ExternalDashboardLayout';
import { TruckIcon, UserIcon, DollarSignIcon, CheckCircleIcon, ClockIcon, AlertCircleIcon, ArrowRightIcon, UsersIcon } from 'lucide-react';
import { LaasAdminDashboardOverview } from './LaasAdminDashboardOverview';
import { LaasAdminOrders } from './LaasAdminOrders';
import { LaasAdminOperators } from './LaasAdminOperators';
import { LaasAdminSubAgents } from './LaasAdminSubAgents';
import { LaasAdminPayroll } from './LaasAdminPayroll';
import { OrderProcessingForm } from './OrderProcessingForm';
import { OperatorForm } from './OperatorForm';
interface LaasAdminDashboardProps {
  onLogout: () => void;
}
export const LaasAdminDashboard = ({
  onLogout
}: LaasAdminDashboardProps) => {
  const [activeNavItem, setActiveNavItem] = useState('dashboard');
  const [showAssignOperator, setShowAssignOperator] = useState(false);
  const [showAddOperator, setShowAddOperator] = useState(false);
  // Handle quick action button clicks
  const handleAssignOperator = () => {
    setShowAssignOperator(true);
    setShowAddOperator(false);
  };
  const handleAddOperator = () => {
    setShowAddOperator(true);
    setShowAssignOperator(false);
  };
  const handleManageSubAgents = () => {
    setActiveNavItem('subagents');
    setShowAssignOperator(false);
    setShowAddOperator(false);
  };
  const handleProcessPayroll = () => {
    setActiveNavItem('payroll');
    setShowAssignOperator(false);
    setShowAddOperator(false);
  };
  const handleBackToMain = () => {
    setShowAssignOperator(false);
    setShowAddOperator(false);
  };
  // Render the appropriate section based on active nav item and form states
  const renderContent = () => {
    if (showAssignOperator) {
      return <div className="space-y-6">
          <div className="flex items-center">
            <button onClick={handleBackToMain} className="text-gray-500 hover:text-gray-700 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <h1 className="text-2xl font-bold text-gray-800">
              Assign Operator to Order
            </h1>
          </div>
          <OrderProcessingForm />
        </div>;
    }
    if (showAddOperator) {
      return <div className="space-y-6">
          <div className="flex items-center">
            <button onClick={handleBackToMain} className="text-gray-500 hover:text-gray-700 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <h1 className="text-2xl font-bold text-gray-800">
              Add New Operator
            </h1>
          </div>
          <OperatorForm />
        </div>;
    }
    switch (activeNavItem) {
      case 'dashboard':
        return <LaasAdminDashboardOverview onAssignOperator={handleAssignOperator} onAddOperator={handleAddOperator} onManageSubAgents={handleManageSubAgents} onProcessPayroll={handleProcessPayroll} />;
      case 'orders':
        return <LaasAdminOrders onAssignOperator={handleAssignOperator} />;
      case 'operators':
        return <LaasAdminOperators onAddOperator={handleAddOperator} />;
      case 'subagents':
        return <LaasAdminSubAgents />;
      case 'payroll':
        return <LaasAdminPayroll />;
      default:
        return <LaasAdminDashboardOverview onAssignOperator={handleAssignOperator} onAddOperator={handleAddOperator} onManageSubAgents={handleManageSubAgents} onProcessPayroll={handleProcessPayroll} />;
    }
  };
  return <ExternalDashboardLayout role="laasAdmin" onLogout={onLogout} activeNavItem={activeNavItem} setActiveNavItem={setActiveNavItem}>
      {renderContent()}
    </ExternalDashboardLayout>;
};