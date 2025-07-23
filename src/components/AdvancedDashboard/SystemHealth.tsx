import React from 'react';
import { LayersIcon } from 'lucide-react';
export const SystemHealth = () => {
  return <div className="h-full flex items-center justify-center bg-gray-50 p-6">
      <div className="text-center max-w-md">
        <LayersIcon className="w-16 h-16 text-indigo-300 mx-auto mb-4" />
        <h3 className="text-xl font-medium text-gray-900 mb-2">
          System Health Monitoring
        </h3>
        <p className="text-gray-600">
          This module will provide real-time monitoring of system performance,
          server health, API status, and application metrics.
        </p>
        <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
          Coming Soon
        </button>
      </div>
    </div>;
};