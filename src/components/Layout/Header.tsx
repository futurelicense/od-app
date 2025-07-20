import React from 'react';
import { BellIcon, MenuIcon, SearchIcon, UserIcon } from 'lucide-react';
interface HeaderProps {
  userEmail?: string;
}
export const Header = ({
  userEmail
}: HeaderProps) => {
  return <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center md:hidden">
        <button className="text-gray-500 hover:text-gray-700">
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="md:flex-1 flex justify-center md:justify-start">
        <div className="relative md:max-w-md w-full">
          <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <SearchIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-700 relative">
          <BellIcon className="w-6 h-6" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
            <UserIcon className="w-5 h-5" />
          </div>
          {userEmail && <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">
              {userEmail}
            </span>}
        </div>
      </div>
    </header>;
};