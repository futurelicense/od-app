import React from 'react';
import { TruckIcon, CheckCircleIcon, ClockIcon, AlertCircleIcon, ArrowRightIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
export const SubAgentDashboardOverview = () => {
  // Mock data for dashboard statistics
  const stats = [{
    title: 'Available Orders',
    value: '12',
    icon: TruckIcon,
    color: 'bg-blue-500'
  }, {
    title: 'Active Orders',
    value: '8',
    icon: ClockIcon,
    color: 'bg-yellow-500'
  }, {
    title: 'Completed Today',
    value: '16',
    icon: CheckCircleIcon,
    color: 'bg-green-500'
  }, {
    title: 'Issues Reported',
    value: '2',
    icon: AlertCircleIcon,
    color: 'bg-red-500'
  }];
  // Mock data for recent activity
  const recentActivity = [{
    id: 'ACT-123',
    action: 'Order Accepted',
    details: 'You accepted order #ORD-3842',
    time: '1 hour ago',
    icon: CheckCircleIcon,
    iconColor: 'bg-green-100 text-green-600'
  }, {
    id: 'ACT-122',
    action: 'Order Completed',
    details: 'You completed order #ORD-3830',
    time: '3 hours ago',
    icon: CheckCircleIcon,
    iconColor: 'bg-green-100 text-green-600'
  }, {
    id: 'ACT-121',
    action: 'Order Updated',
    details: 'You updated status for order #ORD-3835 to "In Transit"',
    time: '5 hours ago',
    icon: ClockIcon,
    iconColor: 'bg-blue-100 text-blue-600'
  }, {
    id: 'ACT-120',
    action: 'Issue Reported',
    details: 'You reported an issue with order #ORD-3829',
    time: 'Yesterday',
    icon: AlertCircleIcon,
    iconColor: 'bg-red-100 text-red-600'
  }];
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        LAAS Sub-Agent Dashboard
      </h1>
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
        const Icon = stat.icon;
        return <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </h3>
                </div>
                <div className={`${stat.color} rounded-full p-2`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>;
      })}
      </div>
      {/* Performance Summary */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Your Performance Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-gray-700">Acceptance Rate</h3>
              <span className="text-green-600 font-medium">92%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{
              width: '92%'
            }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              You've accepted 23 out of 25 orders this week
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-gray-700">On-Time Delivery</h3>
              <span className="text-green-600 font-medium">95%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{
              width: '95%'
            }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              19 out of 20 deliveries were on time this week
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-gray-700">Customer Rating</h3>
              <span className="text-green-600 font-medium">4.8/5</span>
            </div>
            <div className="flex justify-center my-2">
              {[1, 2, 3, 4, 5].map(star => <svg key={star} className={`w-5 h-5 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>)}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Based on 24 customer ratings this month
            </p>
          </div>
        </div>
      </div>
      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Activity
            </h2>
            <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
              View All
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {recentActivity.map(activity => {
            const Icon = activity.icon;
            return <div key={activity.id} className="flex">
                  <div className={`${activity.iconColor} p-2 rounded-full h-10 w-10 flex items-center justify-center mr-4`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 border-b border-gray-100 pb-4">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-800">
                        {activity.action}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {activity.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {activity.details}
                    </p>
                  </div>
                </div>;
          })}
          </div>
        </div>
      </div>
      {/* Earnings Summary */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Earnings Summary
        </h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">This Week</p>
            <p className="text-3xl font-bold text-gray-800">₦24,500</p>
            <p className="text-sm text-green-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
              15% from last week
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="text-sm text-indigo-600">Orders Completed</p>
              <p className="text-2xl font-bold text-indigo-700">16</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-600">Average Per Order</p>
              <p className="text-2xl font-bold text-green-700">₦1,531</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};