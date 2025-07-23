import React, { useState } from 'react';
import { UsersIcon, ShareIcon, GiftIcon, CopyIcon, TrophyIcon, AwardIcon, StarIcon, BadgeCheckIcon, TrendingUpIcon, CrownIcon, UserIcon, PlusIcon, MinusIcon, TrashIcon, CheckIcon as LucideCheckIcon } from 'lucide-react';
export const ReferralSection = () => {
  const [showReferralSuccessAnimation, setShowReferralSuccessAnimation] = useState(false);
  const [referralCode, setReferralCode] = useState('OYADROP123');
  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    setShowReferralSuccessAnimation(true);
    setTimeout(() => setShowReferralSuccessAnimation(false), 2000);
  };
  // Referral achievements data
  const achievements = [{
    id: 1,
    title: 'First Referral',
    description: 'Refer your first friend',
    icon: StarIcon,
    completed: true,
    reward: '₦500 bonus'
  }, {
    id: 2,
    title: 'Referral Trio',
    description: 'Refer 3 friends',
    icon: BadgeCheckIcon,
    completed: true,
    reward: '₦1,000 bonus'
  }, {
    id: 3,
    title: 'Referral Pro',
    description: 'Refer 5 friends',
    icon: AwardIcon,
    completed: true,
    reward: '₦2,000 bonus'
  }, {
    id: 4,
    title: 'Referral Champion',
    description: 'Refer 10 friends',
    icon: TrophyIcon,
    completed: false,
    reward: '₦5,000 bonus'
  }, {
    id: 5,
    title: 'Referral Master',
    description: 'Refer 25 friends',
    icon: CrownIcon,
    completed: false,
    reward: '₦15,000 bonus'
  }];
  // Mock leaderboard data
  const leaderboard = [{
    rank: 1,
    name: 'Adebayo O.',
    referrals: 28,
    points: 5600
  }, {
    rank: 2,
    name: 'Chioma N.',
    referrals: 24,
    points: 4800
  }, {
    rank: 3,
    name: 'Emmanuel K.',
    referrals: 22,
    points: 4400
  }, {
    rank: 4,
    name: 'You',
    referrals: 5,
    points: 1000,
    isCurrentUser: true
  }, {
    rank: 5,
    name: 'Ngozi A.',
    referrals: 4,
    points: 800
  }];
  // User's current referral level
  const currentLevel = 2;
  const nextLevel = 3;
  const referralsForNextLevel = 10;
  const currentReferrals = 5;
  const referralProgress = currentReferrals / referralsForNextLevel * 100;
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
          <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-6 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <p className="text-sm text-indigo-600 mb-1">
                  Your Referral Code
                </p>
                <h3 className="text-2xl font-bold text-indigo-700 tracking-wider">
                  {referralCode}
                </h3>
              </div>
              <button className="mt-3 md:mt-0 flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm" onClick={copyReferralCode}>
                <CopyIcon className="w-4 h-4 mr-2" />
                Copy Code
              </button>
            </div>
            {showReferralSuccessAnimation && <div className="absolute inset-0 bg-indigo-600 bg-opacity-90 flex items-center justify-center transition-opacity animate-pulse">
                <div className="text-white text-center">
                  <LucideCheckIcon className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-bold text-xl">Copied!</p>
                </div>
              </div>}
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
      {/* Gamified Referral Journey Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Your Referral Journey
          </h2>
          <div className="flex items-center bg-indigo-50 px-3 py-1 rounded-full">
            <TrophyIcon className="w-4 h-4 text-indigo-600 mr-1" />
            <span className="text-sm font-medium text-indigo-700">
              Level {currentLevel}
            </span>
          </div>
        </div>
        {/* Level Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium">Progress to Level {nextLevel}</span>
            <span className="text-indigo-600 font-medium">
              {currentReferrals}/{referralsForNextLevel} Referrals
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div className="bg-indigo-600 h-4 rounded-full transition-all duration-500 ease-out" style={{
            width: `${referralProgress}%`
          }}></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Level {currentLevel}</span>
            <span>Level {nextLevel}</span>
          </div>
        </div>
        {/* Achievements Section */}
        <h3 className="font-medium text-gray-800 mb-3 flex items-center">
          <AwardIcon className="w-5 h-5 mr-2 text-indigo-600" />
          Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {achievements.map(achievement => {
          const Icon = achievement.icon;
          return <div key={achievement.id} className={`border rounded-lg p-4 transition-all ${achievement.completed ? 'border-indigo-200 bg-indigo-50' : 'border-gray-200 bg-gray-50 opacity-70'}`}>
                <div className="flex items-start">
                  <div className={`p-2 rounded-full mr-3 ${achievement.completed ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-200 text-gray-500'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">{achievement.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {achievement.description}
                    </p>
                    <div className={`text-xs font-medium ${achievement.completed ? 'text-green-600' : 'text-gray-500'}`}>
                      {achievement.completed ? 'Completed' : 'Locked'} •{' '}
                      {achievement.reward}
                    </div>
                  </div>
                </div>
              </div>;
        })}
        </div>
        {/* Referral Leaderboard */}
        <h3 className="font-medium text-gray-800 mb-3 flex items-center">
          <TrophyIcon className="w-5 h-5 mr-2 text-indigo-600" />
          Referral Leaderboard
        </h3>
        <div className="bg-gray-50 rounded-lg overflow-hidden mb-6">
          <div className="bg-indigo-600 text-white px-4 py-3 flex items-center">
            <div className="w-12 text-center font-medium">Rank</div>
            <div className="flex-1 font-medium">User</div>
            <div className="w-24 text-center font-medium">Referrals</div>
            <div className="w-24 text-center font-medium">Points</div>
          </div>
          <div className="divide-y divide-gray-200">
            {leaderboard.map(user => <div key={user.rank} className={`px-4 py-3 flex items-center ${user.isCurrentUser ? 'bg-indigo-50' : ''}`}>
                <div className="w-12 text-center">
                  {user.rank <= 3 ? <div className={`
                      inline-flex items-center justify-center w-6 h-6 rounded-full
                      ${user.rank === 1 ? 'bg-yellow-100 text-yellow-600' : user.rank === 2 ? 'bg-gray-200 text-gray-600' : 'bg-amber-100 text-amber-600'}
                    `}>
                      {user.rank}
                    </div> : <span className="text-gray-500">{user.rank}</span>}
                </div>
                <div className={`flex-1 font-medium ${user.isCurrentUser ? 'text-indigo-600' : 'text-gray-700'}`}>
                  {user.name}{' '}
                  {user.isCurrentUser && <span className="text-xs ml-1">(You)</span>}
                </div>
                <div className="w-24 text-center text-gray-700">
                  {user.referrals}
                </div>
                <div className="w-24 text-center font-medium text-gray-700">
                  {user.points}
                </div>
              </div>)}
          </div>
        </div>
        {/* Monthly Challenge */}
        <div className="border border-indigo-200 bg-indigo-50 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <div className="w-5 h-5 text-indigo-600 mr-2" />
            <h3 className="font-medium text-indigo-800">Monthly Challenge</h3>
          </div>
          <p className="text-sm text-indigo-700 mb-3">
            Refer 3 more friends before the end of the month to earn a bonus of
            ₦5,000!
          </p>
          <div className="w-full bg-white bg-opacity-50 rounded-full h-3 mb-2">
            <div className="bg-indigo-600 h-3 rounded-full" style={{
            width: '40%'
          }}></div>
          </div>
          <div className="flex justify-between text-xs text-indigo-600">
            <span>2/5 Referrals</span>
            <span>23 days left</span>
          </div>
        </div>
      </div>
      {/* Your Referrals Section - Gamified */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <UsersIcon className="w-5 h-5 mr-2 text-indigo-600" />
          Your Referrals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-5 text-white">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold mb-1">Referral Streak</h3>
                <p className="text-sm text-indigo-100 mb-3">
                  Keep your momentum going!
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-full p-2">
                <div className="w-6 h-6 text-yellow-300" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div className="text-3xl font-bold">3</div>
              <div className="text-sm text-indigo-200">
                <span className="flex items-center">
                  <TrendingUpIcon className="w-4 h-4 mr-1" />
                  Weekly streak
                </span>
              </div>
            </div>
            <div className="mt-3 flex">
              {[1, 2, 3, 4, 5, 6, 7].map(day => <div key={day} className="flex-1 px-1">
                  <div className={`h-8 rounded-md ${day <= 3 ? 'bg-white bg-opacity-30' : 'bg-white bg-opacity-10'}`}></div>
                  <div className="text-center text-xs mt-1">{day}</div>
                </div>)}
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <StarIcon className="w-5 h-5 mr-2 text-yellow-500" />
              Referral Stats
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">This Week</span>
                  <span className="font-medium">3 Referrals</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{
                  width: '60%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">This Month</span>
                  <span className="font-medium">5 Referrals</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-500 h-2 rounded-full" style={{
                  width: '50%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">All Time</span>
                  <span className="font-medium">5 Referrals</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{
                  width: '20%'
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Points
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="bg-green-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <BadgeCheckIcon className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">
                        John Doe
                      </div>
                      <div className="text-xs text-gray-500">
                        First referral bonus!
                      </div>
                    </div>
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
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-indigo-600">
                    +200 pts
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <UserIcon className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">
                        Jane Smith
                      </div>
                    </div>
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
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-indigo-600">
                    +200 pts
                  </span>
                </td>
              </tr>
              <tr className="bg-yellow-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                      <AwardIcon className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">
                        Mike Johnson
                      </div>
                      <div className="text-xs text-gray-500">
                        Unlocked "Referral Trio" achievement!
                      </div>
                    </div>
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
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-indigo-600">
                    +200 pts
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <UserIcon className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">
                        Sarah Williams
                      </div>
                    </div>
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
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-indigo-600">
                    +200 pts
                  </span>
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <StarIcon className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">
                        David Brown
                      </div>
                      <div className="text-xs text-gray-500">
                        Reached Level 2!
                      </div>
                    </div>
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
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-indigo-600">
                    +200 pts
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* New Referral CTA */}
        <div className="mt-6 flex justify-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg shadow-md flex items-center">
            <PlusIcon className="w-5 h-5 mr-2" />
            Invite More Friends
          </button>
        </div>
      </div>
    </div>;
};