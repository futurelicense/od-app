import React, { useState } from 'react';
import { WalletIcon, PlusIcon, ArrowDownIcon, PhoneIcon, DatabaseIcon, CreditCardIcon } from 'lucide-react';
export const WalletSection = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <WalletOverview />;
      case 'add-funds':
        return <AddFunds />;
      case 'withdraw':
        return <Withdraw />;
      case 'airtime':
        return <BuyAirtime />;
      default:
        return <WalletOverview />;
    }
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Wallet</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-indigo-600 rounded-lg shadow p-6 text-white md:col-span-2">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-indigo-200">Available Balance</p>
              <h2 className="text-3xl font-bold mt-1">₦35,200.00</h2>
            </div>
            <WalletIcon className="w-10 h-10 text-indigo-300" />
          </div>
          <div className="flex space-x-2 mt-6">
            <button className="bg-white text-indigo-600 px-3 py-2 rounded-lg text-sm font-medium flex items-center">
              <PlusIcon className="w-4 h-4 mr-1" />
              Add Funds
            </button>
            <button className="bg-indigo-500 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center">
              <ArrowDownIcon className="w-4 h-4 mr-1" />
              Withdraw
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-full mb-3">
            <PhoneIcon className="w-6 h-6" />
          </div>
          <h3 className="font-medium text-center">Buy Airtime</h3>
          <p className="text-sm text-gray-500 text-center mt-1">
            Get 15% cashback
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center">
          <div className="bg-green-100 text-green-600 p-3 rounded-full mb-3">
            <DatabaseIcon className="w-6 h-6" />
          </div>
          <h3 className="font-medium text-center">Buy Data</h3>
          <p className="text-sm text-gray-500 text-center mt-1">
            Get 15% cashback
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button onClick={() => setActiveTab('overview')} className={`px-4 py-3 text-sm font-medium ${activeTab === 'overview' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              Transactions
            </button>
            <button onClick={() => setActiveTab('add-funds')} className={`px-4 py-3 text-sm font-medium ${activeTab === 'add-funds' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              Add Funds
            </button>
            <button onClick={() => setActiveTab('withdraw')} className={`px-4 py-3 text-sm font-medium ${activeTab === 'withdraw' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              Withdraw
            </button>
            <button onClick={() => setActiveTab('airtime')} className={`px-4 py-3 text-sm font-medium ${activeTab === 'airtime' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              Airtime & Data
            </button>
          </nav>
        </div>
        <div>{renderTabContent()}</div>
      </div>
    </div>;
};
const WalletOverview = () => {
  const transactions = [{
    id: 1,
    type: 'credit',
    title: 'Wallet Funded',
    amount: '₦10,000.00',
    date: 'Today, 10:45 AM',
    status: 'Completed'
  }, {
    id: 2,
    type: 'debit',
    title: 'Delivery Payment',
    amount: '₦2,500.00',
    date: 'Yesterday, 3:20 PM',
    status: 'Completed'
  }, {
    id: 3,
    type: 'credit',
    title: 'Cashback Reward',
    amount: '₦750.00',
    date: 'Apr 15, 2023',
    status: 'Completed'
  }, {
    id: 4,
    type: 'debit',
    title: 'Airtime Purchase',
    amount: '₦1,000.00',
    date: 'Apr 12, 2023',
    status: 'Completed'
  }, {
    id: 5,
    type: 'debit',
    title: 'Withdrawal to Bank',
    amount: '₦5,000.00',
    date: 'Apr 10, 2023',
    status: 'Completed'
  }];
  return <div className="p-6">
      <h3 className="font-medium mb-4">Recent Transactions</h3>
      <div className="space-y-4">
        {transactions.map(transaction => <div key={transaction.id} className="flex justify-between items-center border-b border-gray-100 pb-4">
            <div className="flex items-center">
              <div className={`p-2 rounded-full mr-3 ${transaction.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {transaction.type === 'credit' ? <PlusIcon className="w-5 h-5" /> : <ArrowDownIcon className="w-5 h-5" />}
              </div>
              <div>
                <div className="font-medium">{transaction.title}</div>
                <div className="text-sm text-gray-500">{transaction.date}</div>
              </div>
            </div>
            <div className="text-right">
              <div className={`font-medium ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                {transaction.type === 'credit' ? '+' : '-'}
                {transaction.amount}
              </div>
              <div className="text-xs px-2 py-1 bg-gray-100 rounded-full inline-block">
                {transaction.status}
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};
const AddFunds = () => {
  return <div className="p-6 max-w-md mx-auto">
      <h3 className="font-medium mb-4">Add Funds to Wallet</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount (₦)
          </label>
          <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter amount" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Payment Method
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div className="border border-gray-300 rounded-lg p-3 flex items-center cursor-pointer hover:border-indigo-500">
              <CreditCardIcon className="w-5 h-5 text-gray-400 mr-2" />
              <span>Card</span>
            </div>
            <div className="border border-gray-300 rounded-lg p-3 flex items-center cursor-pointer hover:border-indigo-500">
              <DatabaseIcon className="w-5 h-5 text-gray-400 mr-2" />
              <span>Bank Transfer</span>
            </div>
          </div>
        </div>
        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg">
          Proceed
        </button>
      </form>
    </div>;
};
const Withdraw = () => {
  return <div className="p-6 max-w-md mx-auto">
      <h3 className="font-medium mb-4">Withdraw Funds</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount (₦)
          </label>
          <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter amount" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bank Account
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>GTBank - 012345678</option>
            <option>Add new bank account</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg">
          Withdraw Funds
        </button>
      </form>
    </div>;
};
const BuyAirtime = () => {
  return <div className="p-6 max-w-md mx-auto">
      <h3 className="font-medium mb-4">Buy Airtime or Data</h3>
      <div className="bg-green-50 border border-green-100 rounded-lg p-3 mb-4">
        <p className="text-green-700 text-sm">
          Get 15% cashback on all airtime and data purchases!
        </p>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Type
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div className="border border-indigo-500 bg-indigo-50 rounded-lg p-3 flex items-center cursor-pointer">
              <PhoneIcon className="w-5 h-5 text-indigo-500 mr-2" />
              <span className="text-indigo-700">Airtime</span>
            </div>
            <div className="border border-gray-300 rounded-lg p-3 flex items-center cursor-pointer hover:border-indigo-500">
              <DatabaseIcon className="w-5 h-5 text-gray-400 mr-2" />
              <span>Data Bundle</span>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Network Provider
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>MTN</option>
            <option>Airtel</option>
            <option>Glo</option>
            <option>9mobile</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter phone number" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount (₦)
          </label>
          <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter amount" />
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex justify-between mb-1">
            <span className="text-gray-600">Amount</span>
            <span>₦1,000</span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-gray-600">Cashback (15%)</span>
            <span className="text-green-600">+₦150</span>
          </div>
          <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between">
            <span className="font-medium">Total</span>
            <span className="font-bold">₦1,000</span>
          </div>
        </div>
        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg">
          Buy Airtime
        </button>
      </form>
    </div>;
};