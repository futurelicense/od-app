import React, { useState } from 'react';
import { TruckIcon, MapPinIcon, PackageIcon, ClockIcon, UserIcon, PhoneIcon, PlusIcon, ImageIcon, CalendarIcon, DollarSignIcon, InfoIcon } from 'lucide-react';
export const DeliverySection = () => {
  const [deliveryType, setDeliveryType] = useState('intra');
  const [dropOffLocations, setDropOffLocations] = useState([{
    id: 1
  }]);
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
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Delivery Services</h1>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex space-x-4 mb-6">
          <button className={`px-4 py-2 rounded-lg ${deliveryType === 'intra' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`} onClick={() => setDeliveryType('intra')}>
            Intra-State Delivery
          </button>
          <button className={`px-4 py-2 rounded-lg ${deliveryType === 'inter' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`} onClick={() => setDeliveryType('inter')}>
            Inter-State Delivery
          </button>
        </div>
        <form className="space-y-6">
          {/* Sender Information Section */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
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
          {/* Recipient Information Section */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Drop-off Details
            </h2>
            {dropOffLocations.map((location, index) => <div key={location.id} className={`${index > 0 ? 'mt-8 pt-6 border-t border-gray-200' : ''}`}>
                {index > 0 && <div className="flex justify-between items-center mb-4">
                    <h3 className="text-md font-medium text-gray-700">
                      Drop-off Location #{index + 1}
                    </h3>
                    <button type="button" onClick={() => removeDropOffLocation(location.id)} className="text-red-600 hover:text-red-800 text-sm">
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
                      Recipient's Phone <span className="text-red-500">*</span>
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
          {/* Delivery Details Section */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
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
                    <p className="text-xs text-gray-500">Max file size: 10MB</p>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Item for Pickup and Comments{' '}
                  <span className="text-red-500">*</span>
                </label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="Describe the item(s) and any special instructions for the delivery" required></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Who referred you?
                </label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter referrer's name or code (optional)" />
              </div>
            </div>
          </div>
          {/* Pricing & Payment Section */}
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
                    Final price may vary based on actual distance, waiting time,
                    and any additional services required.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center">
            <TruckIcon className="w-5 h-5 mr-2" />
            Request Delivery
          </button>
        </form>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Deliveries
        </h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center">
                  <TruckIcon className="w-5 h-5 text-indigo-600 mr-2" />
                  <h3 className="font-medium">Delivery #DEL-3842</h3>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  From Ikeja to Lekki
                </p>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                Completed
              </span>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center">
                  <TruckIcon className="w-5 h-5 text-indigo-600 mr-2" />
                  <h3 className="font-medium">Delivery #DEL-3840</h3>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  From Lagos to Abuja
                </p>
              </div>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                In Transit
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>;
};