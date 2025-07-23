import React, { useState } from 'react';
import { WalletIcon, PlusIcon, ArrowDownIcon, PhoneIcon, DatabaseIcon, CreditCardIcon, QrCodeIcon, DownloadIcon, ShareIcon, CopyIcon, CheckIcon, TrendingUpIcon, HistoryIcon, AlertCircleIcon, DollarSignIcon, RefreshCwIcon, BellIcon, ChevronRightIcon, ArrowUpRightIcon, ArrowDownLeftIcon, SettingsIcon, ZapIcon, ShieldIcon, XIcon, InfoIcon, ChevronDownIcon } from 'lucide-react';
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
      case 'receive':
        return <ReceivePayment />;
      default:
        return <WalletOverview />;
    }
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Wallet</h1>
        <button className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800">
          <SettingsIcon className="w-4 h-4 mr-1" />
          Wallet Settings
        </button>
      </div>
      {/* Wallet Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-6 shadow-lg">
          <div className="absolute top-0 right-0 mt-4 mr-4 bg-white/20 rounded-full p-2">
            <WalletIcon className="w-6 h-6" />
          </div>
          <div className="flex flex-col h-full justify-between">
            <div>
              <p className="text-indigo-200 text-sm font-medium">
                Available Balance
              </p>
              <h2 className="text-3xl font-bold mt-1 mb-1">₦35,200.00</h2>
              <div className="flex items-center text-indigo-100 text-sm">
                <TrendingUpIcon className="w-3 h-3 mr-1" />
                <span>+12% from last month</span>
              </div>
            </div>
            <div className="flex space-x-2 mt-6">
              <button onClick={() => setActiveTab('add-funds')} className="flex-1 bg-white text-indigo-700 px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center hover:bg-indigo-50">
                <PlusIcon className="w-4 h-4 mr-1" />
                Add Funds
              </button>
              <button onClick={() => setActiveTab('withdraw')} className="flex-1 bg-indigo-500 hover:bg-indigo-400 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center">
                <ArrowDownIcon className="w-4 h-4 mr-1" />
                Withdraw
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Quick Actions</p>
            </div>
            <div className="bg-indigo-100 text-indigo-600 p-1.5 rounded-full">
              <ZapIcon className="w-4 h-4" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => setActiveTab('airtime')} className="flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 p-3 rounded-lg transition-colors">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-full mb-2">
                <PhoneIcon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Buy Airtime</span>
            </button>
            <button onClick={() => setActiveTab('airtime')} className="flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 p-3 rounded-lg transition-colors">
              <div className="bg-green-100 text-green-600 p-2 rounded-full mb-2">
                <DatabaseIcon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Buy Data</span>
            </button>
            <button onClick={() => setActiveTab('receive')} className="flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 p-3 rounded-lg transition-colors">
              <div className="bg-purple-100 text-purple-600 p-2 rounded-full mb-2">
                <QrCodeIcon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Receive</span>
            </button>
            <button className="flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 p-3 rounded-lg transition-colors">
              <div className="bg-amber-100 text-amber-600 p-2 rounded-full mb-2">
                <RefreshCwIcon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Transfer</span>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Savings Goal</p>
            </div>
            <div className="bg-green-100 text-green-600 p-1.5 rounded-full">
              <DollarSignIcon className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-800">
            ₦24,000 / ₦100,000
          </h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3 mb-4">
            <div className="bg-green-600 h-2.5 rounded-full" style={{
            width: '24%'
          }}></div>
          </div>
          <div className="flex justify-between text-sm mb-4">
            <span className="text-gray-500">24% of goal</span>
            <span className="text-gray-500">76 days left</span>
          </div>
          <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-2 rounded-lg text-sm font-medium">
            Add to Savings
          </button>
        </div>
      </div>
      {/* Activity Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <div className="flex items-center">
            <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg mr-4">
              <ArrowUpRightIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Spent</p>
              <h3 className="text-xl font-bold text-gray-800">₦142,500</h3>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <div className="flex items-center">
            <div className="bg-green-100 text-green-600 p-3 rounded-lg mr-4">
              <ArrowDownLeftIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Received</p>
              <h3 className="text-xl font-bold text-gray-800">₦178,250</h3>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <div className="flex items-center">
            <div className="bg-amber-100 text-amber-600 p-3 rounded-lg mr-4">
              <HistoryIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Transactions</p>
              <h3 className="text-xl font-bold text-gray-800">42</h3>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <div className="flex items-center">
            <div className="bg-purple-100 text-purple-600 p-3 rounded-lg mr-4">
              <ShieldIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Cashback Earned</p>
              <h3 className="text-xl font-bold text-gray-800">₦3,750</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Notifications */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start">
        <div className="bg-amber-200 text-amber-700 p-2 rounded-full mr-3 flex-shrink-0">
          <BellIcon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-amber-800">Special Offer</h4>
          <p className="text-amber-700 text-sm">
            Get 20% cashback on all airtime and data purchases this weekend.
            Limited time offer!
          </p>
        </div>
        <button className="text-amber-700 hover:text-amber-900">
          <XIcon className="w-5 h-5" />
        </button>
      </div>
      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            <button onClick={() => setActiveTab('overview')} className={`px-4 py-4 text-sm font-medium whitespace-nowrap flex items-center ${activeTab === 'overview' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              <HistoryIcon className="w-4 h-4 mr-2" />
              Transactions
            </button>
            <button onClick={() => setActiveTab('add-funds')} className={`px-4 py-4 text-sm font-medium whitespace-nowrap flex items-center ${activeTab === 'add-funds' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              <PlusIcon className="w-4 h-4 mr-2" />
              Add Funds
            </button>
            <button onClick={() => setActiveTab('withdraw')} className={`px-4 py-4 text-sm font-medium whitespace-nowrap flex items-center ${activeTab === 'withdraw' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              <ArrowDownIcon className="w-4 h-4 mr-2" />
              Withdraw
            </button>
            <button onClick={() => setActiveTab('receive')} className={`px-4 py-4 text-sm font-medium whitespace-nowrap flex items-center ${activeTab === 'receive' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              <QrCodeIcon className="w-4 h-4 mr-2" />
              Receive
            </button>
            <button onClick={() => setActiveTab('airtime')} className={`px-4 py-4 text-sm font-medium whitespace-nowrap flex items-center ${activeTab === 'airtime' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              <PhoneIcon className="w-4 h-4 mr-2" />
              Airtime & Data
            </button>
          </div>
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
    status: 'Completed',
    description: 'Via Bank Transfer'
  }, {
    id: 2,
    type: 'debit',
    title: 'Delivery Payment',
    amount: '₦2,500.00',
    date: 'Yesterday, 3:20 PM',
    status: 'Completed',
    description: 'Order #DEL-3842'
  }, {
    id: 3,
    type: 'credit',
    title: 'Cashback Reward',
    amount: '₦750.00',
    date: 'Apr 15, 2023',
    status: 'Completed',
    description: 'From Airtime Purchase'
  }, {
    id: 4,
    type: 'debit',
    title: 'Airtime Purchase',
    amount: '₦1,000.00',
    date: 'Apr 12, 2023',
    status: 'Completed',
    description: 'MTN - 08012345678'
  }, {
    id: 5,
    type: 'debit',
    title: 'Withdrawal to Bank',
    amount: '₦5,000.00',
    date: 'Apr 10, 2023',
    status: 'Completed',
    description: 'To GTBank - 012345678'
  }];
  return <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-medium text-gray-800">Recent Transactions</h3>
        <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
          View All
          <ChevronRightIcon className="w-4 h-4 ml-1" />
        </button>
      </div>
      <div className="space-y-4">
        {transactions.map(transaction => <div key={transaction.id} className="bg-white rounded-lg border border-gray-100 hover:border-gray-300 p-4 transition-all hover:shadow-sm">
            <div className="flex items-center">
              <div className={`p-3 rounded-full mr-4 ${transaction.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {transaction.type === 'credit' ? <ArrowDownLeftIcon className="w-5 h-5" /> : <ArrowUpRightIcon className="w-5 h-5" />}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-gray-900">
                      {transaction.title}
                    </div>
                    <div className="text-sm text-gray-500">
                      {transaction.description}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-medium ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.type === 'credit' ? '+' : '-'}
                      {transaction.amount}
                    </div>
                    <div className="text-xs text-gray-500">
                      {transaction.date}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-xs px-2 py-1 bg-gray-100 rounded-full inline-block text-gray-600">
                    {transaction.status}
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>)}
      </div>
      <div className="mt-8 bg-indigo-50 rounded-xl p-5 border border-indigo-100">
        <h4 className="font-medium text-indigo-800 mb-3">
          Transaction Analysis
        </h4>
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm text-indigo-600 mb-1">Income</div>
            <div className="font-bold text-gray-900">₦10,750.00</div>
          </div>
          <div>
            <div className="text-sm text-indigo-600 mb-1">Expenses</div>
            <div className="font-bold text-gray-900">₦8,500.00</div>
          </div>
          <div>
            <div className="text-sm text-indigo-600 mb-1">Net</div>
            <div className="font-bold text-green-600">+₦2,250.00</div>
          </div>
        </div>
        <div className="w-full bg-indigo-200 rounded-full h-2.5 mb-1">
          <div className="bg-indigo-600 h-2.5 rounded-full" style={{
          width: '55%'
        }}></div>
        </div>
        <div className="text-xs text-indigo-600 text-right">Last 30 days</div>
      </div>
    </div>;
};
const AddFunds = () => {
  return <div className="p-6 max-w-lg mx-auto">
      <div className="text-center mb-6">
        <div className="bg-indigo-100 inline-flex p-3 rounded-full mb-3">
          <PlusIcon className="w-6 h-6 text-indigo-600" />
        </div>
        <h3 className="font-medium text-xl text-gray-800">
          Add Funds to Wallet
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          Choose your preferred payment method
        </p>
      </div>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount (₦)
          </label>
          <div className="relative rounded-lg shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">₦</span>
            </div>
            <input type="number" className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Enter amount" />
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <button type="button" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">
              ₦1,000
            </button>
            <button type="button" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">
              ₦5,000
            </button>
            <button type="button" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">
              ₦10,000
            </button>
            <button type="button" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">
              ₦20,000
            </button>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Payment Method
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div className="border border-gray-300 rounded-lg p-4 flex items-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50">
              <input type="radio" name="payment-method" id="card" className="mr-3" />
              <label htmlFor="card" className="flex items-center cursor-pointer">
                <CreditCardIcon className="w-5 h-5 text-gray-500 mr-2" />
                <span>Card</span>
              </label>
            </div>
            <div className="border border-gray-300 rounded-lg p-4 flex items-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50">
              <input type="radio" name="payment-method" id="bank" className="mr-3" />
              <label htmlFor="bank" className="flex items-center cursor-pointer">
                <DatabaseIcon className="w-5 h-5 text-gray-500 mr-2" />
                <span>Bank Transfer</span>
              </label>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex justify-between mb-1 text-sm">
            <span className="text-gray-600">Amount</span>
            <span className="font-medium">₦5,000.00</span>
          </div>
          <div className="flex justify-between mb-1 text-sm">
            <span className="text-gray-600">Transaction Fee</span>
            <span className="font-medium">₦0.00</span>
          </div>
          <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between">
            <span className="font-medium">Total</span>
            <span className="font-bold">₦5,000.00</span>
          </div>
        </div>
        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center">
          <PlusIcon className="w-5 h-5 mr-2" />
          Add Funds
        </button>
      </form>
    </div>;
};
const Withdraw = () => {
  return <div className="p-6 max-w-lg mx-auto">
      <div className="text-center mb-6">
        <div className="bg-indigo-100 inline-flex p-3 rounded-full mb-3">
          <ArrowDownIcon className="w-6 h-6 text-indigo-600" />
        </div>
        <h3 className="font-medium text-xl text-gray-800">Withdraw Funds</h3>
        <p className="text-gray-500 text-sm mt-1">
          Transfer money to your bank account
        </p>
      </div>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount (₦)
          </label>
          <div className="relative rounded-lg shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">₦</span>
            </div>
            <input type="number" className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Enter amount" />
          </div>
          <div className="mt-1 text-sm text-gray-500 flex items-center">
            <InfoIcon className="w-4 h-4 mr-1" />
            Available balance: ₦35,200.00
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bank Account
          </label>
          <div className="relative">
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none">
              <option>GTBank - 012345678</option>
              <option>Access Bank - 987654321</option>
              <option>Add new bank account</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDownIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex justify-between mb-1 text-sm">
            <span className="text-gray-600">Amount</span>
            <span className="font-medium">₦5,000.00</span>
          </div>
          <div className="flex justify-between mb-1 text-sm">
            <span className="text-gray-600">Transaction Fee</span>
            <span className="font-medium">₦100.00</span>
          </div>
          <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between">
            <span className="font-medium">Total</span>
            <span className="font-bold">₦4,900.00</span>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start">
          <AlertCircleIcon className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" />
          <p className="text-sm text-amber-700">
            Withdrawals are typically processed within 24 hours. Bank transfers
            may take 1-3 business days to reflect in your account.
          </p>
        </div>
        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center">
          <ArrowDownIcon className="w-5 h-5 mr-2" />
          Withdraw Funds
        </button>
      </form>
    </div>;
};
const ReceivePayment = () => {
  const [copied, setCopied] = useState(false);
  const walletId = 'OYA-1234567890';
  const walletAddress = 'oyadrop.com/pay/OYA-1234567890';
  const handleCopyWalletId = () => {
    navigator.clipboard.writeText(walletId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return <div className="p-6 max-w-xl mx-auto">
      <div className="text-center mb-6">
        <div className="bg-indigo-100 inline-flex p-3 rounded-full mb-3">
          <QrCodeIcon className="w-6 h-6 text-indigo-600" />
        </div>
        <h3 className="font-medium text-xl text-gray-800">Receive Payment</h3>
        <p className="text-gray-500 text-sm mt-1">
          Share your QR code or wallet ID to receive payments
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="bg-white border-2 border-indigo-200 rounded-xl p-6 w-64 h-64 flex items-center justify-center">
          {/* QR Code for the wallet */}
          <QrCodeIcon className="w-48 h-48 text-gray-800" />
        </div>
        <div className="flex-1 space-y-6">
          <div>
            <p className="text-sm text-gray-500 mb-1">Your Wallet ID</p>
            <div className="flex items-center">
              <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 flex-1 font-mono">
                {walletId}
              </div>
              <button onClick={handleCopyWalletId} className="ml-2 p-2.5 bg-indigo-100 hover:bg-indigo-200 rounded-lg text-indigo-700">
                {copied ? <CheckIcon className="w-5 h-5" /> : <CopyIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Payment Link</p>
            <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 font-mono text-sm break-all">
              {walletAddress}
            </div>
          </div>
          <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
            <p className="text-indigo-800 text-sm">
              Share this QR code or wallet ID with others to receive payments
              directly to your OyaDrop wallet. No fees for receiving payments!
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
              <DownloadIcon className="w-4 h-4 mr-2" />
              Download QR
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              <ShareIcon className="w-4 h-4 mr-2" />
              Share
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-gray-50 rounded-lg p-5 border border-gray-200">
        <h4 className="font-medium text-gray-800 mb-3">How it works</h4>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
          <li>
            Share your QR code or wallet ID with someone who wants to send you
            money
          </li>
          <li>
            They can scan the QR code using their OyaDrop app or enter your
            wallet ID manually
          </li>
          <li>
            Once they confirm the payment, the money will be instantly credited
            to your wallet
          </li>
          <li>You'll receive a notification when the payment is completed</li>
        </ol>
      </div>
    </div>;
};
const BuyAirtime = () => {
  return <div className="p-6 max-w-lg mx-auto">
      <div className="text-center mb-6">
        <div className="bg-indigo-100 inline-flex p-3 rounded-full mb-3">
          <PhoneIcon className="w-6 h-6 text-indigo-600" />
        </div>
        <h3 className="font-medium text-xl text-gray-800">
          Buy Airtime or Data
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          Get 15% cashback on all purchases
        </p>
      </div>
      <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-6 flex items-start">
        <div className="bg-green-200 text-green-700 p-1.5 rounded-full mr-3 flex-shrink-0">
          <ZapIcon className="w-4 h-4" />
        </div>
        <div>
          <h4 className="font-medium text-green-800">Special Offer</h4>
          <p className="text-green-700 text-sm">
            Get 15% cashback on all airtime and data purchases! Limited time
            offer.
          </p>
        </div>
      </div>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Type
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div className="border-2 border-indigo-500 bg-indigo-50 rounded-lg p-4 flex items-center cursor-pointer">
              <input type="radio" name="service-type" id="airtime" className="mr-3" defaultChecked />
              <label htmlFor="airtime" className="flex items-center cursor-pointer">
                <PhoneIcon className="w-5 h-5 text-indigo-600 mr-2" />
                <span className="text-indigo-700 font-medium">Airtime</span>
              </label>
            </div>
            <div className="border border-gray-300 rounded-lg p-4 flex items-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50">
              <input type="radio" name="service-type" id="data" className="mr-3" />
              <label htmlFor="data" className="flex items-center cursor-pointer">
                <DatabaseIcon className="w-5 h-5 text-gray-500 mr-2" />
                <span>Data Bundle</span>
              </label>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Network Provider
          </label>
          <div className="grid grid-cols-4 gap-3">
            <div className="border border-gray-200 hover:border-indigo-500 rounded-lg p-3 flex flex-col items-center justify-center cursor-pointer">
              <div className="w-10 h-10 bg-yellow-500 rounded-full mb-2"></div>
              <span className="text-xs font-medium">MTN</span>
            </div>
            <div className="border border-gray-200 hover:border-indigo-500 rounded-lg p-3 flex flex-col items-center justify-center cursor-pointer">
              <div className="w-10 h-10 bg-red-500 rounded-full mb-2"></div>
              <span className="text-xs font-medium">Airtel</span>
            </div>
            <div className="border border-gray-200 hover:border-indigo-500 rounded-lg p-3 flex flex-col items-center justify-center cursor-pointer">
              <div className="w-10 h-10 bg-green-500 rounded-full mb-2"></div>
              <span className="text-xs font-medium">Glo</span>
            </div>
            <div className="border border-gray-200 hover:border-indigo-500 rounded-lg p-3 flex flex-col items-center justify-center cursor-pointer">
              <div className="w-10 h-10 bg-indigo-500 rounded-full mb-2"></div>
              <span className="text-xs font-medium">9mobile</span>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <div className="relative rounded-lg shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <PhoneIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input type="tel" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Enter phone number" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount (₦)
          </label>
          <input type="number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Enter amount" />
          <div className="mt-2 flex flex-wrap gap-2">
            <button type="button" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">
              ₦100
            </button>
            <button type="button" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">
              ₦200
            </button>
            <button type="button" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">
              ₦500
            </button>
            <button type="button" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">
              ₦1,000
            </button>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex justify-between mb-1 text-sm">
            <span className="text-gray-600">Amount</span>
            <span className="font-medium">₦1,000</span>
          </div>
          <div className="flex justify-between mb-1 text-sm">
            <span className="text-gray-600">Cashback (15%)</span>
            <span className="text-green-600">+₦150</span>
          </div>
          <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between">
            <span className="font-medium">Total</span>
            <span className="font-bold">₦1,000</span>
          </div>
        </div>
        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center">
          <PhoneIcon className="w-5 h-5 mr-2" />
          Buy Airtime
        </button>
      </form>
    </div>;
};