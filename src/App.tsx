import React, { useState } from 'react';
import { Sidebar } from './components/Layout/Sidebar';
import { Header } from './components/Layout/Header';
import { Dashboard } from './components/Dashboard/Dashboard';
import { DeliverySection } from './components/Delivery/DeliverySection';
import { KioskSection } from './components/Kiosk/KioskSection';
import { ReferralSection } from './components/Referral/ReferralSection';
import { WalletSection } from './components/Wallet/WalletSection';
import { HistorySection } from './components/History/HistorySection';
import { MarketplaceSection } from './components/Marketplace/MarketplaceSection';
import { ExternalDashboardContainer } from './components/ExternalDashboard/ExternalDashboardContainer';
import { Login } from './components/Auth/Login';
import { Signup } from './components/Auth/Signup';
import { AdminLogin } from './components/Auth/AdminLogin';
import { AdminDashboard } from './components/Admin/AdminDashboard';
export function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isExternalDashboard, setIsExternalDashboard] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [authView, setAuthView] = useState<'login' | 'signup' | 'adminLogin'>('login');
  const [userEmail, setUserEmail] = useState('');
  // Toggle between main app and external dashboard
  const toggleExternalDashboard = () => {
    setIsExternalDashboard(!isExternalDashboard);
  };
  // Handle user login
  const handleLogin = (email: string) => {
    setUserEmail(email);
    setIsAuthenticated(true);
    setIsAdmin(false);
  };
  // Handle admin login
  const handleAdminLogin = (email: string) => {
    setUserEmail(email);
    setIsAuthenticated(true);
    setIsAdmin(true);
  };
  // Handle user signup
  const handleSignup = (email: string) => {
    setUserEmail(email);
    setIsAuthenticated(true);
    setIsAdmin(false);
  };
  // Handle user logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    setUserEmail('');
    setAuthView('login');
  };
  // Switch between login views
  const switchToLogin = () => setAuthView('login');
  const switchToSignup = () => setAuthView('signup');
  const switchToAdminLogin = () => setAuthView('adminLogin');
  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard setActiveSection={setActiveSection} />;
      case 'delivery':
        return <DeliverySection />;
      case 'marketplace':
        return <MarketplaceSection />;
      case 'kiosk':
        return <KioskSection />;
      case 'referral':
        return <ReferralSection />;
      case 'wallet':
        return <WalletSection />;
      case 'history':
        return <HistorySection />;
      default:
        return <Dashboard setActiveSection={setActiveSection} />;
    }
  };
  // If external dashboard is active, show that instead of the main app
  if (isExternalDashboard) {
    return <div className="flex flex-col h-screen">
        <div className="bg-indigo-800 text-white px-4 py-2 flex justify-between items-center">
          <h1 className="text-lg font-bold">External Dashboard Mode</h1>
          <button onClick={toggleExternalDashboard} className="px-3 py-1 bg-white text-indigo-800 rounded text-sm font-medium">
            Return to Main App
          </button>
        </div>
        <div className="flex-1">
          <ExternalDashboardContainer />
        </div>
      </div>;
  }
  // If user is not authenticated, show login or signup
  if (!isAuthenticated) {
    if (authView === 'login') {
      return <Login onLogin={handleLogin} onSwitchToSignup={switchToSignup} onSwitchToAdminLogin={switchToAdminLogin} />;
    } else if (authView === 'signup') {
      return <Signup onSignup={handleSignup} onSwitchToLogin={switchToLogin} />;
    } else {
      return <AdminLogin onLogin={handleAdminLogin} onSwitchToUserLogin={switchToLogin} />;
    }
  }
  // If user is admin, show admin dashboard
  if (isAdmin) {
    return <AdminDashboard adminEmail={userEmail} onLogout={handleLogout} />;
  }
  // Main app view for authenticated regular users
  return <div className="flex h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} onLogout={handleLogout} userEmail={userEmail} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header userEmail={userEmail} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {renderSection()}
          {/* Button to access external dashboard */}
          <div className="fixed bottom-6 right-6">
            <button onClick={toggleExternalDashboard} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-lg font-medium flex items-center">
              Access External Dashboards
            </button>
          </div>
        </main>
      </div>
    </div>;
}