import React from 'react';
import { BoxIcon } from 'lucide-react';
interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  icon: BoxIcon;
  color: string;
}
export const StatCard = ({
  title,
  value,
  change,
  icon: Icon,
  color
}: StatCardProps) => {
  return <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
          {change && <p className="text-sm text-green-500">{change}</p>}
        </div>
        <div className={`${color} rounded-full p-2`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>;
};