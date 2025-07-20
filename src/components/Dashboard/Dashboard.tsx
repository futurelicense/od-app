import React from 'react';
import { TruckIcon, ShoppingBagIcon, UsersIcon, WalletIcon, ClockIcon, TrendingUpIcon, CreditCardIcon, ShoppingCartIcon } from 'lucide-react';
import { FeatureCard } from '../UI/FeatureCard';
import { StatCard } from '../UI/StatCard';
import { RecentActivity } from './RecentActivity';
interface DashboardProps {
  setActiveSection: (section: string) => void;
}
export const Dashboard = ({
  setActiveSection
}: DashboardProps) => {
  const features = [{
    id: 'delivery',
    title: 'Delivery',
    description: 'Request pickup & delivery services intra-state and inter-state',
    icon: TruckIcon,
    color: 'bg-blue-500'
  }, {
    id: 'kiosk',
    title: 'Kiosk',
    description: 'Manage your e-commerce store, inventory, and orders',
    icon: ShoppingBagIcon,
    color: 'bg-purple-500'
  }, {
    id: 'referral',
    title: 'Referral',
    description: 'Invite friends and earn rewards through our referral program',
    icon: UsersIcon,
    color: 'bg-green-500'
  }, {
    id: 'wallet',
    title: 'Wallet',
    description: 'Manage funds, withdraw, and buy airtime with 15% cashback',
    icon: WalletIcon,
    color: 'bg-yellow-500'
  }, {
    id: 'history',
    title: 'History',
    description: 'View your transaction and delivery request history',
    icon: ClockIcon,
    color: 'bg-red-500'
  }];
  const stats = [{
    title: 'Total Sales',
    value: '₦152,500',
    change: '+12.5%',
    icon: TrendingUpIcon,
    color: 'text-green-500'
  }, {
    title: 'Deliveries',
    value: '24',
    change: '+8%',
    icon: TruckIcon,
    color: 'text-blue-500'
  }, {
    title: 'Wallet Balance',
    value: '₦35,200',
    change: '',
    icon: CreditCardIcon,
    color: 'text-indigo-500'
  }, {
    title: 'Kiosk Orders',
    value: '18',
    change: '+15%',
    icon: ShoppingCartIcon,
    color: 'text-purple-500'
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="text-sm text-gray-500">Welcome back, Adebayo</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => <StatCard key={index} {...stat} />)}
      </div>
      <h2 className="text-xl font-semibold text-gray-800">OyaDrop Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(feature => <FeatureCard key={feature.id} {...feature} onClick={() => setActiveSection(feature.id)} />)}
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Activity
        </h2>
        <RecentActivity />
      </div>
    </div>;
};