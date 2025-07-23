import React, { useState } from 'react';
import { SearchIcon, DollarSignIcon, CreditCardIcon, WalletIcon, CheckCircleIcon } from 'lucide-react';
export const PaymentProcessingForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderSearched, setOrderSearched] = useState(false);
  // Mock order data
  const orderData = {
    id: 'ORD-3842',
    customer: 'John Doe',
    customerPhone: '080-1234-5678',
    amount: '₦2,500',
    status: 'Payment Pending',
    items: 2,
    description: 'Package delivery from Ikeja to Lekki'
  };
  const handleSearch = e => {
    e.preventDefault();
    setOrderSearched(true);
  };
  const handleSubmitPayment = e => {
    e.preventDefault();
    alert('Payment processed successfully!');
  };
  return <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Process Payment
        </h2>
        {!orderSearched ? <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-md font-medium text-gray-800 mb-4">
              Find Order
            </h3>
            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Order ID or Customer Phone
                </label>
                <div className="relative">
                  <input type="text" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter order ID or customer phone number" required />
                  <SearchIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                  Search
                </button>
              </div>
            </form>
          </div> : <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-md font-medium text-gray-800 mb-4">
                Order Details
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-medium">{orderData.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Customer:</span>
                  <span className="font-medium">{orderData.customer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone:</span>
                  <span className="font-medium">{orderData.customerPhone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount Due:</span>
                  <span className="font-medium text-indigo-600">
                    {orderData.amount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                    {orderData.status}
                  </span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <span className="text-gray-600">Description:</span>
                  <p className="mt-1">{orderData.description}</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-md font-medium text-gray-800 mb-4">
                Payment Method
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
                <button type="button" onClick={() => setPaymentMethod('card')} className={`p-3 rounded-lg border ${paymentMethod === 'card' ? 'bg-indigo-50 border-indigo-300 text-indigo-800' : 'border-gray-300 hover:bg-gray-50'}`}>
                  <CreditCardIcon className="w-6 h-6 mx-auto mb-2" />
                  <span className="block text-sm font-medium">
                    Card Payment
                  </span>
                </button>
                <button type="button" onClick={() => setPaymentMethod('bank')} className={`p-3 rounded-lg border ${paymentMethod === 'bank' ? 'bg-indigo-50 border-indigo-300 text-indigo-800' : 'border-gray-300 hover:bg-gray-50'}`}>
                  <div className="w-6 h-6 mx-auto mb-2" />
                  <span className="block text-sm font-medium">
                    Bank Transfer
                  </span>
                </button>
                <button type="button" onClick={() => setPaymentMethod('wallet')} className={`p-3 rounded-lg border ${paymentMethod === 'wallet' ? 'bg-indigo-50 border-indigo-300 text-indigo-800' : 'border-gray-300 hover:bg-gray-50'}`}>
                  <WalletIcon className="w-6 h-6 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Wallet</span>
                </button>
                <button type="button" onClick={() => setPaymentMethod('cash')} className={`p-3 rounded-lg border ${paymentMethod === 'cash' ? 'bg-indigo-50 border-indigo-300 text-indigo-800' : 'border-gray-300 hover:bg-gray-50'}`}>
                  <DollarSignIcon className="w-6 h-6 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Cash</span>
                </button>
              </div>
              <form onSubmit={handleSubmitPayment} className="space-y-4">
                {paymentMethod === 'card' && <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="**** **** **** ****" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date
                        </label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="MM/YY" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="***" required />
                      </div>
                    </div>
                  </>}
                {paymentMethod === 'bank' && <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bank
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required>
                        <option value="">Select Bank</option>
                        <option value="gtbank">GTBank</option>
                        <option value="firstbank">First Bank</option>
                        <option value="zenith">Zenith Bank</option>
                        <option value="access">Access Bank</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Reference Number
                      </label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter bank transfer reference" required />
                    </div>
                  </>}
                {paymentMethod === 'wallet' && <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Wallet ID
                      </label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter wallet ID" required />
                    </div>
                  </>}
                {paymentMethod === 'cash' && <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Amount Received
                      </label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter amount received" defaultValue={orderData.amount.replace('₦', '')} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Received By
                      </label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter receiver's name" required />
                    </div>
                  </>}
                <div className="flex justify-between">
                  <button type="button" onClick={() => setOrderSearched(false)} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                    Back
                  </button>
                  <button type="submit" className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center">
                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                    Process Payment
                  </button>
                </div>
              </form>
            </div>
          </div>}
      </div>
    </div>;
};