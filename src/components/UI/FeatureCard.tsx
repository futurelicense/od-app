import React from 'react';
import { BoxIcon } from 'lucide-react';
interface FeatureCardProps {
  title: string;
  description: string;
  icon: BoxIcon;
  color: string;
  onClick: () => void;
}
export const FeatureCard = ({
  title,
  description,
  icon: Icon,
  color,
  onClick
}: FeatureCardProps) => {
  return <div onClick={onClick} className="bg-white rounded-lg shadow p-6 cursor-pointer transition-transform hover:scale-105">
      <div className={`${color} text-white rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>;
};