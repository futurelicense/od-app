import React from 'react';
import { BarChart3Icon } from 'lucide-react';
export const AdvancedAnalytics = () => {
  return <div className="h-full flex items-center justify-center bg-gray-50 p-6">
      <div className="text-center max-w-md">
        <BarChart3Icon className="w-16 h-16 text-indigo-300 mx-auto mb-4" />
        <h3 className="text-xl font-medium text-gray-900 mb-2">
          Advanced Analytics
        </h3>
        <p className="text-gray-600">
          This module will provide deep business intelligence, predictive
          analytics, and advanced data visualization tools.
        </p>
        <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
          Coming Soon
        </button>
      </div>
    </div>;
};