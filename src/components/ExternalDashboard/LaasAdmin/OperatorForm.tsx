import React, { useState } from 'react';
import { UserIcon, PhoneIcon, MapPinIcon, MailIcon, CameraIcon, TruckIcon, IdCardIcon, CheckIcon, BuildingIcon } from 'lucide-react';
export const OperatorForm = () => {
  const [formStep, setFormStep] = useState(1);
  const handleNextStep = () => {
    setFormStep(formStep + 1);
  };
  const handlePrevStep = () => {
    setFormStep(formStep - 1);
  };
  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Operator added successfully!');
    setFormStep(1);
  };
  return <div className="bg-white rounded-lg shadow p-6">
      {/* Progress steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${formStep >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              <UserIcon className="h-5 w-5" />
            </div>
            <div className={`ml-3 ${formStep >= 1 ? 'text-indigo-600' : 'text-gray-500'}`}>
              <p className="text-sm font-medium">Personal Info</p>
            </div>
          </div>
          <div className={`flex-1 mx-4 h-1 ${formStep >= 2 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
          <div className="flex items-center">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${formStep >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              <TruckIcon className="h-5 w-5" />
            </div>
            <div className={`ml-3 ${formStep >= 2 ? 'text-indigo-600' : 'text-gray-500'}`}>
              <p className="text-sm font-medium">Vehicle Info</p>
            </div>
          </div>
          <div className={`flex-1 mx-4 h-1 ${formStep >= 3 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
          <div className="flex items-center">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${formStep >= 3 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              <CheckIcon className="h-5 w-5" />
            </div>
            <div className={`ml-3 ${formStep >= 3 ? 'text-indigo-600' : 'text-gray-500'}`}>
              <p className="text-sm font-medium">Confirmation</p>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Step 1: Personal Information */}
        {formStep === 1 && <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-800">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input type="text" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter operator's full name" required />
                  <UserIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Name
                </label>
                <div className="relative">
                  <input type="text" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter business name (if applicable)" />
                  <BuildingIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input type="tel" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter phone number" required />
                  <PhoneIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <input type="email" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter email address" />
                  <MailIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Home Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input type="text" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter home address" required />
                  <MapPinIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload ID Card <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <IdCardIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="id-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload ID</span>
                      <input id="id-upload" name="id-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    National ID, Driver's License, or Passport
                  </p>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Photo <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <CameraIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="photo-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload photo</span>
                      <input id="photo-upload" name="photo-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button type="button" onClick={handleNextStep} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                Next Step
              </button>
            </div>
          </div>}
        {/* Step 2: Vehicle Information */}
        {formStep === 2 && <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-800">
              Vehicle Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Vehicle Type <span className="text-red-500">*</span>
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required>
                  <option value="">Select vehicle type</option>
                  <option value="motorcycle">Motorcycle</option>
                  <option value="car">Car</option>
                  <option value="van">Van</option>
                  <option value="truck">Truck</option>
                  <option value="bicycle">Bicycle</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Vehicle Model <span className="text-red-500">*</span>
                </label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. Honda CG 125" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Plate Number <span className="text-red-500">*</span>
                </label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. ABC-123XY" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Vehicle Color <span className="text-red-500">*</span>
                </label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. Black" required />
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6 mt-6">
              <h4 className="text-md font-medium text-gray-800 mb-4">
                Rider Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rider's Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input type="text" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter rider's full name" required />
                    <UserIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rider's Contact Number{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input type="tel" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter rider's phone number" required />
                    <PhoneIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rider's ID Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input type="text" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter rider's ID number" required />
                    <IdCardIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Vehicle Photo <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <TruckIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="vehicle-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload photo</span>
                      <input id="vehicle-upload" name="vehicle-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={handlePrevStep} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                Previous
              </button>
              <button type="button" onClick={handleNextStep} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                Next Step
              </button>
            </div>
          </div>}
        {/* Step 3: Confirmation */}
        {formStep === 3 && <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-800">Confirmation</h3>
            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <CheckIcon className="h-5 w-5 text-green-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-700">
                    All information has been collected. Please review and
                    confirm.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-4">
                Operator Information Summary
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">David Adeleke</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Business Name</p>
                  <p className="font-medium">Adeleke Logistics</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">080-1234-5678</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">david.adeleke@example.com</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium">123 Ikeja, Lagos</p>
                </div>
              </div>
              <h4 className="font-medium text-gray-800 mt-6 mb-4">
                Vehicle & Rider Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Vehicle</p>
                  <p className="font-medium">
                    Motorcycle - Honda CG 125 (Black)
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Plate Number</p>
                  <p className="font-medium">LAG-123XY</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Rider's Name</p>
                  <p className="font-medium">John Okafor</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Rider's Contact</p>
                  <p className="font-medium">080-9876-5432</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Rider's ID Number</p>
                  <p className="font-medium">NG12345678</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-2">
                  <p className="text-xs text-gray-500 mb-1">ID Card</p>
                  <div className="bg-gray-100 h-24 rounded flex items-center justify-center">
                    <IdCardIcon className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-2">
                  <p className="text-xs text-gray-500 mb-1">Operator Photo</p>
                  <div className="bg-gray-100 h-24 rounded flex items-center justify-center">
                    <CameraIcon className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-2">
                  <p className="text-xs text-gray-500 mb-1">Vehicle Photo</p>
                  <div className="bg-gray-100 h-24 rounded flex items-center justify-center">
                    <TruckIcon className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={handlePrevStep} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                Previous
              </button>
              <button type="submit" className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
                Add Operator
              </button>
            </div>
          </div>}
      </form>
    </div>;
};