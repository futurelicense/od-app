import React from 'react';
import { UsersIcon, ShareIcon, GiftIcon, CopyIcon } from 'lucide-react';
export const ReferralSection = () => {
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Referral Program</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6 md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Invite Friends & Earn
          </h2>
          <p className="text-gray-600 mb-6">
            Share your referral code with friends and family. When they sign up
            and complete their first transaction, you both earn ₦1,000!
          </p>
          <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <p className="text-sm text-indigo-600 mb-1">
                  Your Referral Code
                </p>
                <h3 className="text-2xl font-bold text-indigo-700 tracking-wider">
                  OYADROP123
                </h3>
              </div>
              <button className="mt-3 md:mt-0 flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm">
                <CopyIcon className="w-4 h-4 mr-2" />
                Copy Code
              </button>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-6">
            <h3 className="font-medium mb-4">Share Your Referral Link</h3>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                <ShareIcon className="w-4 h-4 mr-2" />
                Facebook
              </button>
              <button className="flex items-center bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg">
                <ShareIcon className="w-4 h-4 mr-2" />
                Twitter
              </button>
              <button className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                <ShareIcon className="w-4 h-4 mr-2" />
                WhatsApp
              </button>
              <button className="flex items-center bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg">
                <ShareIcon className="w-4 h-4 mr-2" />
                Email
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full">
              <GiftIcon className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">
            Your Rewards
          </h2>
          <div className="flex justify-center mb-6">
            <div className="text-3xl font-bold text-indigo-600">₦5,000</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Total Referrals</span>
              <span className="font-medium">5</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Pending Rewards</span>
              <span className="font-medium">₦0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Claimed Rewards</span>
              <span className="font-medium">₦5,000</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <ShareIcon className="w-6 h-6" />
            </div>
            <h3 className="font-medium mb-2">Share Your Code</h3>
            <p className="text-gray-600 text-sm">
              Share your unique referral code with friends and family.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <UsersIcon className="w-6 h-6" />
            </div>
            <h3 className="font-medium mb-2">Friends Sign Up</h3>
            <p className="text-gray-600 text-sm">
              They sign up using your referral code and complete their first
              transaction.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <GiftIcon className="w-6 h-6" />
            </div>
            <h3 className="font-medium mb-2">Both Earn Rewards</h3>
            <p className="text-gray-600 text-sm">
              You both receive ₦1,000 in your OyaDrop wallet.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Your Referrals
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reward
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    John Doe
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">Apr 15, 2023</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ₦1,000
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    Jane Smith
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">Apr 12, 2023</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ₦1,000
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    Mike Johnson
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">Apr 10, 2023</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ₦1,000
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    Sarah Williams
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">Apr 8, 2023</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ₦1,000
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    David Brown
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">Apr 5, 2023</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ₦1,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};