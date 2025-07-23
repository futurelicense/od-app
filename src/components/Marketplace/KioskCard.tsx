import React from 'react';
import { StarIcon, MapPinIcon, TagIcon, ShoppingBagIcon, ClockIcon } from 'lucide-react';
interface KioskProps {
  kiosk: {
    id: number;
    name: string;
    description: string;
    rating: number;
    reviewCount: number;
    image: string;
    categories: string[];
    location: string;
    badges: string[];
    deliveryTime: string;
    productCount: number;
  };
  onViewKiosk: () => void;
  onShopNow: () => void;
}
export const KioskCard = ({
  kiosk,
  onViewKiosk,
  onShopNow
}: KioskProps) => {
  return <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-200 border border-orange-100">
      <div className="relative">
        <img src={kiosk.image} alt={kiosk.name} className="w-full h-48 object-cover" />
        {kiosk.badges.length > 0 && <div className="absolute top-3 right-3 flex flex-col gap-2">
            {kiosk.badges.map((badge, index) => <span key={index} className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${badge === 'Featured' ? 'bg-yellow-500 text-white' : badge === 'Top Rated' ? 'bg-green-500 text-white' : badge === 'New' ? 'bg-blue-500 text-white' : badge === 'Hot Deals' ? 'bg-red-500 text-white' : badge === 'Premium' ? 'bg-purple-500 text-white' : badge === 'Organic' ? 'bg-green-600 text-white' : badge === 'Best Seller' ? 'bg-orange-500 text-white' : 'bg-gray-500 text-white'}`}>
                {badge}
              </span>)}
          </div>}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20 opacity-60"></div>
        <div className="absolute bottom-3 left-3">
          <div className="flex items-center bg-white bg-opacity-90 px-2 py-1 rounded-full shadow-sm">
            <StarIcon className="w-3 h-3 text-yellow-500 fill-current" />
            <span className="text-xs font-medium ml-1">{kiosk.rating}</span>
            <span className="text-xs text-gray-600 ml-1">
              ({kiosk.reviewCount})
            </span>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-gray-800 text-lg">{kiosk.name}</h3>
          <div className="bg-orange-50 text-orange-600 text-xs px-2 py-1 rounded font-medium">
            {kiosk.categories[0].charAt(0).toUpperCase() + kiosk.categories[0].slice(1)}
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {kiosk.description}
        </p>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPinIcon className="w-4 h-4 mr-1 text-orange-500" />
          {kiosk.location}
        </div>
        <div className="flex items-center justify-between text-sm mb-4">
          <div className="flex items-center text-gray-500">
            <ShoppingBagIcon className="w-4 h-4 mr-1 text-orange-500" />
            <span>{kiosk.productCount} products</span>
          </div>
          <div className="flex items-center text-gray-500">
            <ClockIcon className="w-4 h-4 mr-1 text-orange-500" />
            <span>{kiosk.deliveryTime}</span>
          </div>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <button onClick={onViewKiosk} className="text-orange-500 hover:text-orange-600 text-sm font-medium">
            View Kiosk
          </button>
          <button onClick={onShopNow} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
            Shop Now
          </button>
        </div>
      </div>
    </div>;
};