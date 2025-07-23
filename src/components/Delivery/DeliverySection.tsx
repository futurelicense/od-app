import React, { useState } from 'react';
import { TruckIcon, MapPinIcon, PackageIcon, ClockIcon, UserIcon, PhoneIcon, PlusIcon, ImageIcon, CalendarIcon, DollarSignIcon, InfoIcon, WalletIcon, CreditCardIcon, CheckIcon, XIcon, ClockIcon as ClockIconOutline, ArrowRightIcon, SearchIcon, ArrowUpRightIcon, BarChartIcon, ShieldIcon, ChevronDownIcon, ChevronRightIcon, AlertCircleIcon, SendIcon, NavigationIcon, RefreshCwIcon, CheckCircleIcon, TrendingUpIcon, LocateIcon } from 'lucide-react';
export const DeliverySection = () => {
  const [deliveryType, setDeliveryType] = useState('intra');
  const [activeTab, setActiveTab] = useState('new-request');
  const [dropOffLocations, setDropOffLocations] = useState([{
    id: 1
  }]);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [walletBalance] = useState(5000); // Mock wallet balance
  const [formStep, setFormStep] = useState(1);
  const [showDeliveryDetails, setShowDeliveryDetails] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState<any>(null);
  // Mock data for tracking
  const trackingSteps = [{
    id: 1,
    status: 'Order Placed',
    completed: true,
    time: '10:30 AM'
  }, {
    id: 2,
    status: 'Driver Assigned',
    completed: true,
    time: '10:45 AM'
  }, {
    id: 3,
    status: 'Pickup in Progress',
    completed: true,
    time: '11:15 AM'
  }, {
    id: 4,
    status: 'In Transit',
    completed: true,
    time: '11:45 AM'
  }, {
    id: 5,
    status: 'Out for Delivery',
    completed: false,
    time: ''
  }, {
    id: 6,
    status: 'Delivered',
    completed: false,
    time: ''
  }];
  // Mock data for recent deliveries
  const recentDeliveries = [{
    id: 'DEL-3842',
    from: 'Ikeja',
    to: 'Lekki',
    status: 'completed',
    date: '2023-09-15',
    amount: '₦2,500',
    items: 2
  }, {
    id: 'DEL-3840',
    from: 'Lagos',
    to: 'Abuja',
    status: 'in-transit',
    date: '2023-09-14',
    amount: '₦8,500',
    items: 1
  }, {
    id: 'DEL-3835',
    from: 'Surulere',
    to: 'Victoria Island',
    status: 'pending',
    date: '2023-09-13',
    amount: '₦1,800',
    items: 3
  }];
  const addDropOffLocation = () => {
    const newId = dropOffLocations.length > 0 ? Math.max(...dropOffLocations.map(loc => loc.id)) + 1 : 1;
    setDropOffLocations([...dropOffLocations, {
      id: newId
    }]);
  };
  const removeDropOffLocation = id => {
    if (dropOffLocations.length > 1) {
      setDropOffLocations(dropOffLocations.filter(loc => loc.id !== id));
    }
  };
  const handleRequestDelivery = e => {
    e.preventDefault();
    setShowPaymentOptions(true);
  };
  const handlePaymentMethodSelect = (method: string) => {
    setSelectedPaymentMethod(method);
  };
  const handlePaymentSubmit = () => {
    setPaymentComplete(true);
  };
  const closePaymentModal = () => {
    setShowPaymentOptions(false);
    setSelectedPaymentMethod(null);
    setPaymentComplete(false);
  };
  const nextFormStep = () => {
    setFormStep(formStep + 1);
  };
  const prevFormStep = () => {
    setFormStep(formStep - 1);
  };
  const viewDeliveryDetails = delivery => {
    setSelectedDelivery(delivery);
    setShowDeliveryDetails(true);
  };
  const closeDeliveryDetails = () => {
    setShowDeliveryDetails(false);
    setSelectedDelivery(null);
  };
  const renderPaymentMethodContent = () => {
    switch (selectedPaymentMethod) {
      case 'wallet':
        return <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <WalletIcon className="h-5 w-5 text-indigo-600 mr-2" />
                  <span className="font-medium">Your Wallet Balance</span>
                </div>
                <span className="font-bold text-indigo-600">
                  ₦{walletBalance.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Delivery Cost</span>
                <span className="font-medium text-gray-900">₦2,500</span>
              </div>
              <div className="border-t border-gray-200 my-2 pt-2 flex justify-between">
                <span className="font-medium text-gray-900">
                  Remaining Balance
                </span>
                <span className={`font-bold ${walletBalance - 2500 >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ₦{(walletBalance - 2500).toLocaleString()}
                </span>
              </div>
            </div>
            {walletBalance < 2500 ? <div className="bg-red-50 border border-red-100 rounded-lg p-3">
                <div className="flex items-start">
                  <InfoIcon className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-red-700 font-medium">
                      Insufficient Balance
                    </p>
                    <p className="text-sm text-red-600 mt-1">
                      Please top up your wallet or choose another payment
                      method.
                    </p>
                    <button className="mt-2 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Top Up Wallet
                    </button>
                  </div>
                </div>
              </div> : <button onClick={handlePaymentSubmit} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg">
                Pay ₦2,500 from Wallet
              </button>}
          </div>;
      case 'pay-after-pickup':
        return <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
              <div className="flex items-start">
                <ClockIconOutline className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-yellow-800 font-medium">
                    Pay After Pickup
                  </p>
                  <p className="text-sm text-yellow-700 mt-1">
                    You'll be required to pay the delivery fee (₦2,500) when the
                    rider picks up your item.
                  </p>
                  <ul className="mt-2 text-sm text-yellow-700 list-disc list-inside">
                    <li>
                      Payment can be made in cash or via transfer to the rider
                    </li>
                    <li>Delivery won't proceed until payment is confirmed</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I agree to pay the delivery fee at pickup
              </label>
            </div>
            <button onClick={handlePaymentSubmit} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg">
              Confirm Pay After Pickup
            </button>
          </div>;
      case 'paystack':
        return <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-md">
              <div className="flex items-center mb-4">
                <CreditCardIcon className="h-6 w-6 text-gray-400 mr-2" />
                <h4 className="text-sm font-medium text-gray-900">
                  Card Details
                </h4>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Card Number
                  </label>
                  <input type="text" placeholder="1234 5678 9012 3456" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Expiry Date
                    </label>
                    <input type="text" placeholder="MM/YY" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      CVV
                    </label>
                    <input type="text" placeholder="123" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name on Card
                  </label>
                  <input type="text" placeholder="John Doe" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input type="email" placeholder="johndoe@example.com" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center text-gray-500">
                <InfoIcon className="h-4 w-4 mr-1" />
                <span>Secured by Paystack</span>
              </div>
              <span className="font-medium">Amount: ₦2,500</span>
            </div>
            <button onClick={handlePaymentSubmit} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg">
              Pay ₦2,500
            </button>
          </div>;
      default:
        return <div className="text-center py-4">
            <p className="text-gray-600">
              Please select a payment method to continue
            </p>
          </div>;
    }
  };
  const renderFormStep = () => {
    switch (formStep) {
      case 1:
        return <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                <UserIcon className="w-5 h-5 mr-2 text-indigo-600" />
                Sender Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input type="text" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your full name" required />
                    <UserIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pickup Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input type="text" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter pickup address" required />
                    <MapPinIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                  </div>
                  <button className="mt-2 text-sm text-indigo-600 hover:text-indigo-800 flex items-center">
                    <LocateIcon className="w-4 h-4 mr-1" />
                    Use current location
                  </button>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input type="tel" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your phone number" required />
                    <PhoneIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div></div>
              <button onClick={nextFormStep} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg flex items-center">
                Next
                <ChevronRightIcon className="ml-1 w-5 h-5" />
              </button>
            </div>
          </div>;
      case 2:
        return <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2 text-indigo-600" />
                Drop-off Details
              </h2>
              {dropOffLocations.map((location, index) => <div key={location.id} className={`${index > 0 ? 'mt-8 pt-6 border-t border-gray-200' : ''}`}>
                  {index > 0 && <div className="flex justify-between items-center mb-4">
                      <h3 className="text-md font-medium text-gray-700">
                        Drop-off Location #{index + 1}
                      </h3>
                      <button type="button" onClick={() => removeDropOffLocation(location.id)} className="text-red-600 hover:text-red-800 text-sm flex items-center">
                        <XIcon className="w-4 h-4 mr-1" />
                        Remove
                      </button>
                    </div>}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Recipient's Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input type="text" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter recipient's full name" required />
                        <UserIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Recipient's Phone{' '}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input type="tel" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter recipient's phone number" required />
                        <PhoneIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Drop-off Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input type="text" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter delivery address" required />
                        <MapPinIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Item Description <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input type="text" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="What are you sending?" required />
                        <PackageIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Item Quantity <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input type="number" min="1" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Number of items" required />
                        <PackageIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>)}
              <button type="button" onClick={addDropOffLocation} className="mt-4 flex items-center text-indigo-600 hover:text-indigo-800">
                <PlusIcon className="w-4 h-4 mr-1" />
                Add Another Drop-off Location
              </button>
            </div>
            <div className="flex justify-between">
              <button onClick={prevFormStep} className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-lg flex items-center">
                <ChevronDownIcon className="mr-1 w-5 h-5 transform rotate-90" />
                Back
              </button>
              <button onClick={nextFormStep} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg flex items-center">
                Next
                <ChevronRightIcon className="ml-1 w-5 h-5" />
              </button>
            </div>
          </div>;
      case 3:
        return <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                <ClockIcon className="w-5 h-5 mr-2 text-indigo-600" />
                Delivery Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Latest Drop-off Date/Time{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input type="datetime-local" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                    <CalendarIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Item Image
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                    <div className="space-y-1 text-center">
                      <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        Max file size: 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Special Instructions
                  </label>
                  <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="Any special instructions for the delivery"></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Who referred you?
                  </label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter referrer's name or code (optional)" />
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <ShieldIcon className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-indigo-800">
                        Delivery Protection
                      </h3>
                      <p className="text-xs text-indigo-600 mt-1">
                        Add delivery protection for just ₦500 to cover your
                        package against damage or loss.
                      </p>
                      <div className="mt-2 flex items-center">
                        <input id="delivery-protection" name="delivery-protection" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        <label htmlFor="delivery-protection" className="ml-2 block text-sm text-indigo-700">
                          Add Delivery Protection (+₦500)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                <DollarSignIcon className="w-5 h-5 mr-2 text-indigo-600" />
                Pricing & Payment
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Base Delivery Fee</span>
                  <span className="font-medium">₦1,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Distance Fee</span>
                  <span className="font-medium">₦800</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Service Fee</span>
                  <span className="font-medium">₦200</span>
                </div>
                <div className="border-t border-gray-200 my-2 pt-2 flex justify-between items-center">
                  <span className="font-medium">Estimated Price</span>
                  <span className="font-bold text-indigo-600 text-xl">
                    ₦2,500
                  </span>
                </div>
                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-3 mt-2">
                  <div className="flex items-start">
                    <InfoIcon className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-yellow-700">
                      Final price may vary based on actual distance, waiting
                      time, and any additional services required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <button onClick={prevFormStep} className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-lg flex items-center">
                <ChevronDownIcon className="mr-1 w-5 h-5 transform rotate-90" />
                Back
              </button>
              <button type="submit" onClick={handleRequestDelivery} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center">
                <TruckIcon className="w-5 h-5 mr-2" />
                Request Delivery
              </button>
            </div>
          </div>;
      default:
        return null;
    }
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Delivery Services</h1>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input type="text" placeholder="Search deliveries..." className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm" />
            <SearchIcon className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          </div>
          <button className="bg-indigo-100 text-indigo-700 p-2 rounded-lg hover:bg-indigo-200">
            <RefreshCwIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      {/* Delivery Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="bg-indigo-100 p-3 rounded-full mr-4">
            <TruckIcon className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Deliveries</p>
            <p className="text-xl font-semibold">24</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="bg-green-100 p-3 rounded-full mr-4">
            <CheckCircleIcon className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Completed</p>
            <p className="text-xl font-semibold">18</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="bg-yellow-100 p-3 rounded-full mr-4">
            <ClockIcon className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">In Transit</p>
            <p className="text-xl font-semibold">3</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <TrendingUpIcon className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">This Month</p>
            <p className="text-xl font-semibold">+12%</p>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button onClick={() => setActiveTab('new-request')} className={`${activeTab === 'new-request' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} flex-1 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-center`}>
              New Delivery Request
            </button>
            <button onClick={() => setActiveTab('my-deliveries')} className={`${activeTab === 'my-deliveries' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} flex-1 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-center`}>
              My Deliveries
            </button>
            <button onClick={() => setActiveTab('tracking')} className={`${activeTab === 'tracking' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} flex-1 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-center`}>
              Track Delivery
            </button>
          </nav>
        </div>
        <div className="p-6">
          {activeTab === 'new-request' && <div>
              <div className="flex space-x-4 mb-6">
                <button className={`px-4 py-2 rounded-lg flex items-center ${deliveryType === 'intra' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`} onClick={() => setDeliveryType('intra')}>
                  <TruckIcon className="w-5 h-5 mr-2" />
                  Intra-State Delivery
                </button>
                <button className={`px-4 py-2 rounded-lg flex items-center ${deliveryType === 'inter' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`} onClick={() => setDeliveryType('inter')}>
                  <SendIcon className="w-5 h-5 mr-2" />
                  Inter-State Delivery
                </button>
              </div>
              <form className="space-y-6" onSubmit={handleRequestDelivery}>
                {renderFormStep()}
              </form>
            </div>}
          {activeTab === 'my-deliveries' && <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-800">
                  Recent Deliveries
                </h2>
                <div className="flex items-center space-x-2">
                  <select className="border border-gray-300 rounded-md text-sm p-2">
                    <option>All Statuses</option>
                    <option>Completed</option>
                    <option>In Transit</option>
                    <option>Pending</option>
                  </select>
                  <select className="border border-gray-300 rounded-md text-sm p-2">
                    <option>Last 30 days</option>
                    <option>Last 7 days</option>
                    <option>This month</option>
                    <option>Last month</option>
                  </select>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ID
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Route
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentDeliveries.map(delivery => <tr key={delivery.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">
                            #{delivery.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {delivery.from} to {delivery.to}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(delivery.date).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {delivery.amount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${delivery.status === 'completed' ? 'bg-green-100 text-green-800' : delivery.status === 'in-transit' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                              {delivery.status === 'completed' ? 'Completed' : delivery.status === 'in-transit' ? 'In Transit' : 'Pending'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button onClick={() => viewDeliveryDetails(delivery)} className="text-indigo-600 hover:text-indigo-900">
                              View Details
                            </button>
                          </td>
                        </tr>)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>}
          {activeTab === 'tracking' && <div>
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex-1 relative">
                    <input type="text" placeholder="Enter tracking number (e.g., DEL-3842)" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    <SearchIcon className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                  </div>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium">
                    Track
                  </button>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        Tracking #DEL-3840
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Package: Electronics (1 item)
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full font-medium">
                      In Transit
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      <span>Lagos</span>
                    </div>
                    <div className="w-24 h-0.5 bg-indigo-600"></div>
                    <div className="flex items-center text-sm text-gray-500">
                      <NavigationIcon className="w-4 h-4 mr-1" />
                      <span>In Transit</span>
                    </div>
                    <div className="w-24 h-0.5 bg-gray-300"></div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      <span>Abuja</span>
                    </div>
                  </div>
                  <div className="relative pb-8">
                    <div className="absolute left-0 top-0 ml-5 h-full w-0.5 bg-gray-200"></div>
                    {trackingSteps.map((step, index) => <div key={step.id} className="relative mb-8 last:mb-0">
                        <div className={`absolute left-0 -ml-1 mt-1.5 w-7 h-7 rounded-full border-2 flex items-center justify-center ${step.completed ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-gray-300'}`}>
                          {step.completed ? <CheckIcon className="w-4 h-4 text-white" /> : <span className="w-2 h-2 bg-gray-300 rounded-full"></span>}
                        </div>
                        <div className="ml-10">
                          <h4 className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                            {step.status}
                          </h4>
                          {step.completed && <p className="text-sm text-gray-500 mt-0.5">
                              {new Date().toLocaleDateString()} • {step.time}
                            </p>}
                          {index === 3 && step.completed && <div className="mt-2 p-3 bg-indigo-50 rounded-lg text-sm text-indigo-700">
                              Your package is currently in transit from Lagos to
                              Abuja. Estimated delivery time: Tomorrow by 2:00
                              PM.
                            </div>}
                        </div>
                      </div>)}
                  </div>
                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <UserIcon className="w-4 h-4 mr-1" />
                        <span>Driver: John D.</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <PhoneIcon className="w-4 h-4 mr-1" />
                        <span>080-XXXX-1234</span>
                      </div>
                    </div>
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                      Contact Driver
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  Your Recent Trackings
                </h3>
                <div className="space-y-3">
                  {recentDeliveries.map(delivery => <div key={delivery.id} className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:border-indigo-300 cursor-pointer">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-full mr-4 ${delivery.status === 'completed' ? 'bg-green-100' : delivery.status === 'in-transit' ? 'bg-yellow-100' : 'bg-blue-100'}`}>
                          <TruckIcon className={`w-5 h-5 ${delivery.status === 'completed' ? 'text-green-600' : delivery.status === 'in-transit' ? 'text-yellow-600' : 'text-blue-600'}`} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            #{delivery.id}
                          </p>
                          <p className="text-sm text-gray-500">
                            {delivery.from} to {delivery.to}
                          </p>
                        </div>
                      </div>
                      <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                    </div>)}
                </div>
              </div>
            </div>}
        </div>
      </div>
      {/* Payment Options Modal */}
      {showPaymentOptions && <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={paymentComplete ? closePaymentModal : undefined}></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {paymentComplete ? <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="text-center py-6">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                      <CheckIcon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="mt-4 text-xl font-medium text-gray-900">
                      Payment Successful!
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Your delivery request has been confirmed and a rider will
                      be assigned shortly.
                    </p>
                    <p className="mt-1 text-gray-600">
                      Tracking ID: #DEL-
                      {Math.floor(100000 + Math.random() * 900000)}
                    </p>
                    <div className="mt-6">
                      <button onClick={closePaymentModal} className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                        Track Delivery
                      </button>
                    </div>
                  </div>
                </div> : <>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Select Payment Method
                          </h3>
                          <button type="button" className="text-gray-400 hover:text-gray-500" onClick={closePaymentModal}>
                            <XIcon className="h-5 w-5" />
                          </button>
                        </div>
                        <div className="mt-4 border-b border-gray-200 pb-4">
                          <div className="space-y-2">
                            <button onClick={() => handlePaymentMethodSelect('wallet')} className={`w-full flex items-center justify-between p-3 rounded-lg border ${selectedPaymentMethod === 'wallet' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300 hover:border-indigo-300 hover:bg-indigo-50'}`}>
                              <div className="flex items-center">
                                <div className="bg-indigo-100 rounded-full p-2 mr-3">
                                  <WalletIcon className="h-5 w-5 text-indigo-600" />
                                </div>
                                <div className="text-left">
                                  <p className="font-medium text-gray-900">
                                    Using Wallet
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    Pay directly from your OyaDrop wallet
                                  </p>
                                </div>
                              </div>
                              <ArrowRightIcon className={`h-5 w-5 ${selectedPaymentMethod === 'wallet' ? 'text-indigo-600' : 'text-gray-400'}`} />
                            </button>
                            <button onClick={() => handlePaymentMethodSelect('pay-after-pickup')} className={`w-full flex items-center justify-between p-3 rounded-lg border ${selectedPaymentMethod === 'pay-after-pickup' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300 hover:border-indigo-300 hover:bg-indigo-50'}`}>
                              <div className="flex items-center">
                                <div className="bg-yellow-100 rounded-full p-2 mr-3">
                                  <ClockIconOutline className="h-5 w-5 text-yellow-600" />
                                </div>
                                <div className="text-left">
                                  <p className="font-medium text-gray-900">
                                    Pay After Pickup
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    Pay when the rider picks up your item
                                  </p>
                                </div>
                              </div>
                              <ArrowRightIcon className={`h-5 w-5 ${selectedPaymentMethod === 'pay-after-pickup' ? 'text-indigo-600' : 'text-gray-400'}`} />
                            </button>
                            <button onClick={() => handlePaymentMethodSelect('paystack')} className={`w-full flex items-center justify-between p-3 rounded-lg border ${selectedPaymentMethod === 'paystack' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300 hover:border-indigo-300 hover:bg-indigo-50'}`}>
                              <div className="flex items-center">
                                <div className="bg-green-100 rounded-full p-2 mr-3">
                                  <CreditCardIcon className="h-5 w-5 text-green-600" />
                                </div>
                                <div className="text-left">
                                  <p className="font-medium text-gray-900">
                                    Pay with Paystack
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    Pay securely with card via Paystack
                                  </p>
                                </div>
                              </div>
                              <ArrowRightIcon className={`h-5 w-5 ${selectedPaymentMethod === 'paystack' ? 'text-indigo-600' : 'text-gray-400'}`} />
                            </button>
                          </div>
                        </div>
                        <div className="mt-4">
                          {renderPaymentMethodContent()}
                        </div>
                      </div>
                    </div>
                  </div>
                  {!selectedPaymentMethod && <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button type="button" className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm" onClick={closePaymentModal}>
                        Cancel
                      </button>
                    </div>}
                </>}
            </div>
          </div>
        </div>}
      {/* Delivery Details Modal */}
      {showDeliveryDetails && selectedDelivery && <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={closeDeliveryDetails}></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Delivery #{selectedDelivery.id}
                  </h3>
                  <button type="button" className="text-gray-400 hover:text-gray-500" onClick={closeDeliveryDetails}>
                    <XIcon className="h-5 w-5" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Status</span>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${selectedDelivery.status === 'completed' ? 'bg-green-100 text-green-800' : selectedDelivery.status === 'in-transit' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                      {selectedDelivery.status === 'completed' ? 'Completed' : selectedDelivery.status === 'in-transit' ? 'In Transit' : 'Pending'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Date</span>
                    <span className="font-medium">
                      {new Date(selectedDelivery.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">From</span>
                    <span className="font-medium">{selectedDelivery.from}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">To</span>
                    <span className="font-medium">{selectedDelivery.to}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Items</span>
                    <span className="font-medium">
                      {selectedDelivery.items} item(s)
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Amount</span>
                    <span className="font-medium">
                      {selectedDelivery.amount}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-medium mb-2">Recipient Details</h4>
                    <p className="text-gray-600 text-sm">
                      John Doe
                      <br />
                      +234 800 123 4567
                      <br />
                      123 Example Street, {selectedDelivery.to}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
                  Track Delivery
                </button>
                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:mr-3 sm:w-auto sm:text-sm" onClick={closeDeliveryDetails}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>}
    </div>;
};