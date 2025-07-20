import React from 'react';
import { TruckIcon, ShoppingCartIcon, CreditCardIcon } from 'lucide-react';
export const RecentActivity = () => {
  const activities = [{
    id: 1,
    type: 'delivery',
    title: 'Delivery Completed',
    description: 'Your package was delivered to Lekki, Lagos',
    time: '2 hours ago',
    icon: TruckIcon,
    iconColor: 'bg-blue-100 text-blue-600'
  }, {
    id: 2,
    type: 'kiosk',
    title: 'New Order',
    description: 'You received a new order (#ORD-2845)',
    time: '5 hours ago',
    icon: ShoppingCartIcon,
    iconColor: 'bg-purple-100 text-purple-600'
  }, {
    id: 3,
    type: 'wallet',
    title: 'Wallet Funded',
    description: 'You added ₦10,000 to your wallet',
    time: 'Yesterday',
    icon: CreditCardIcon,
    iconColor: 'bg-green-100 text-green-600'
  }, {
    id: 4,
    type: 'delivery',
    title: 'Delivery Request',
    description: 'New delivery request created',
    time: '2 days ago',
    icon: TruckIcon,
    iconColor: 'bg-blue-100 text-blue-600'
  }];
  return <div className="space-y-4">
      {activities.map(activity => {
      const Icon = activity.icon;
      return <div key={activity.id} className="flex items-start space-x-4 py-3 border-b border-gray-100 last:border-0">
            <div className={`${activity.iconColor} p-2 rounded-full`}>
              <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-800">
                {activity.title}
              </h4>
              <p className="text-sm text-gray-600">{activity.description}</p>
            </div>
            <div className="text-xs text-gray-500">{activity.time}</div>
          </div>;
    })}
      <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
        View all activity
      </button>
    </div>;
};