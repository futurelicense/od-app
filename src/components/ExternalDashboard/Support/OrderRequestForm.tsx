import React, { useState } from 'react';
import { TruckIcon, MapPinIcon, UserIcon, PhoneIcon, PackageIcon, ClockIcon, ImageIcon, CalendarIcon, PlusIcon, XIcon } from 'lucide-react';
export const OrderRequestForm = () => {
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
  return <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          New Order Request
        </h2>
      </div>
      <form className="space-y-6">
        {/* Sender Information Section */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Sender Information
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input type="text" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter sender's full name" required />
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
                <input type="tel" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter sender's phone number" required />
                <PhoneIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
        {/* Recipient Information Section */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Drop-off Details
          </h3>
          {dropOffLocations.map((location, index) => <div key={location.id} className={`${index > 0 ? 'mt-8 pt-6 border-t border-gray-200' : ''}`}>
              {index > 0 && <div className="flex justify-between items-center mb-4">
                  <h4 className="text-md font-medium text-gray-700">
                    Drop-off Location #{index + 1}
                  </h4>
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
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Delivery Details
          </h3>
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
                Item Description and Comments{' '}
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
        {/* System calculated pricing */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
            System Calculated Price
          </h3>
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
              <span className="font-bold text-indigo-600 text-xl">₦2,500</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button type="button" className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center">
            <TruckIcon className="w-5 h-5 mr-2" />
            Submit to LAAS Admin
          </button>
        </div>
      </form>
    </div>;
};