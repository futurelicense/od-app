import React from 'react';
import { BellIcon, UserIcon, SearchIcon } from 'lucide-react';
interface AdminHeaderProps {
  adminEmail: string;
}
export const AdminHeader = ({
  adminEmail
}: AdminHeaderProps) => {
  return <header className="bg-white shadow-sm">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex-1 flex">
          <div className="max-w-lg w-full lg:max-w-xs relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search..." type="search" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" />
          </button>
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
              <UserIcon className="h-5 w-5" />
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">
              {adminEmail}
            </span>
          </div>
        </div>
      </div>
    </header>;
};