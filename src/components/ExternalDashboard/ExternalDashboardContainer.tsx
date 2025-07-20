import React, { useState } from 'react';
import { ExternalDashboardLogin } from './Login/ExternalDashboardLogin';
import { SupportDashboard } from './Support/SupportDashboard';
import { LaasAdminDashboard } from './LaasAdmin/LaasAdminDashboard';
import { LaasSubAgentDashboard } from './LaasSubAgent/LaasSubAgentDashboard';
export const ExternalDashboardContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'support' | 'laasAdmin' | 'laasSubAgent'>('support');
  const [username, setUsername] = useState('');
  const handleLogin = (role: 'support' | 'laasAdmin' | 'laasSubAgent', username: string) => {
    console.log(`Logging in as ${role} with username: ${username}`);
    setUserRole(role);
    setUsername(username);
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };
  if (!isLoggedIn) {
    return <ExternalDashboardLogin onLogin={handleLogin} />;
  }
  // Render the appropriate dashboard based on user role
  switch (userRole) {
    case 'support':
      return <SupportDashboard onLogout={handleLogout} />;
    case 'laasAdmin':
      return <LaasAdminDashboard onLogout={handleLogout} />;
    case 'laasSubAgent':
      return <LaasSubAgentDashboard onLogout={handleLogout} />;
    default:
      return <SupportDashboard onLogout={handleLogout} />;
  }
};