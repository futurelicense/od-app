import React, { useState } from 'react';
import { TicketIcon, SearchIcon, PlusIcon, EditIcon, TrashIcon, CheckIcon, XIcon, CalendarIcon, PercentIcon } from 'lucide-react';
export const CouponsSection = () => {
  const [showAddCoupon, setShowAddCoupon] = useState(false);
  const coupons = [{
    id: 'WELCOME20',
    description: '20% off for new customers',
    discount: '20%',
    type: 'Percentage',
    usageLimit: 100,
    usageCount: 45,
    startDate: 'Apr 1, 2023',
    endDate: 'Jun 30, 2023',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800'
  }, {
    id: 'FLASH50',
    description: '50% off flash sale',
    discount: '50%',
    type: 'Percentage',
    usageLimit: 50,
    usageCount: 32,
    startDate: 'Apr 15, 2023',
    endDate: 'Apr 20, 2023',
    status: 'Expired',
    statusColor: 'bg-red-100 text-red-800'
  }, {
    id: 'FREESHIP',
    description: 'Free shipping on all orders',
    discount: '₦0',
    type: 'Free Shipping',
    usageLimit: 200,
    usageCount: 78,
    startDate: 'Mar 1, 2023',
    endDate: 'Dec 31, 2023',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800'
  }, {
    id: 'FLAT2000',
    description: '₦2,000 off on orders above ₦15,000',
    discount: '₦2,000',
    type: 'Fixed Amount',
    usageLimit: 75,
    usageCount: 23,
    startDate: 'Apr 10, 2023',
    endDate: 'May 10, 2023',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800'
  }, {
    id: 'BOGO',
    description: 'Buy one get one free',
    discount: '100%',
    type: 'BOGO',
    usageLimit: 30,
    usageCount: 12,
    startDate: 'Apr 5, 2023',
    endDate: 'Apr 15, 2023',
    status: 'Expired',
    statusColor: 'bg-red-100 text-red-800'
  }];
  return <div className="p-6">
      {showAddCoupon ? <AddCouponForm onCancel={() => setShowAddCoupon(false)} /> : <>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="relative">
                <input type="text" placeholder="Search coupons..." className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-64" />
                <SearchIcon className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
              </div>
            </div>
            <button onClick={() => setShowAddCoupon(true)} className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
              <PlusIcon className="w-4 h-4 mr-2" />
              Create Coupon
            </button>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Coupon Code
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Discount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Usage / Limit
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Validity
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {coupons.map(coupon => <tr key={coupon.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <TicketIcon className="w-5 h-5 text-indigo-500 mr-2" />
                          <div className="text-sm font-medium text-gray-900">
                            {coupon.id}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {coupon.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {coupon.discount}
                        </div>
                        <div className="text-xs text-gray-500">
                          {coupon.type}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {coupon.usageCount} / {coupon.usageLimit}
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                          <div className="bg-indigo-600 h-1.5 rounded-full" style={{
                      width: `${coupon.usageCount / coupon.usageLimit * 100}%`
                    }}></div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {coupon.startDate}
                        </div>
                        <div className="text-xs text-gray-500">
                          to {coupon.endDate}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${coupon.statusColor}`}>
                          {coupon.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                          <EditIcon className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-gray-500">
              Showing 1 to {coupons.length} of {coupons.length} results
            </div>
            <div className="flex space-x-1">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                Previous
              </button>
              <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm">
                1
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                2
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                Next
              </button>
            </div>
          </div>
        </>}
    </div>;
};
const AddCouponForm = ({
  onCancel
}: {
  onCancel: () => void;
}) => {
  const [couponType, setCouponType] = useState('percentage');
  return <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Create New Coupon
        </h2>
        <button onClick={onCancel} className="text-gray-500 hover:text-gray-700">
          <XIcon className="w-5 h-5" />
        </button>
      </div>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Coupon Code*
            </label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. SUMMER20" />
            <p className="text-xs text-gray-500 mt-1">
              Customers will enter this code at checkout.
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description*
            </label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. 20% off summer sale" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Discount Type*
          </label>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div onClick={() => setCouponType('percentage')} className={`border rounded-lg p-3 flex items-center cursor-pointer ${couponType === 'percentage' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-gray-400'}`}>
              <PercentIcon className={`w-5 h-5 mr-2 ${couponType === 'percentage' ? 'text-indigo-500' : 'text-gray-400'}`} />
              <span className={couponType === 'percentage' ? 'text-indigo-700' : 'text-gray-700'}>
                Percentage
              </span>
            </div>
            <div onClick={() => setCouponType('fixed')} className={`border rounded-lg p-3 flex items-center cursor-pointer ${couponType === 'fixed' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-gray-400'}`}>
              <span className={`mr-2 font-bold ${couponType === 'fixed' ? 'text-indigo-500' : 'text-gray-400'}`}>
                ₦
              </span>
              <span className={couponType === 'fixed' ? 'text-indigo-700' : 'text-gray-700'}>
                Fixed Amount
              </span>
            </div>
            <div onClick={() => setCouponType('shipping')} className={`border rounded-lg p-3 flex items-center cursor-pointer ${couponType === 'shipping' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-gray-400'}`}>
              <TruckIcon className={`w-5 h-5 mr-2 ${couponType === 'shipping' ? 'text-indigo-500' : 'text-gray-400'}`} />
              <span className={couponType === 'shipping' ? 'text-indigo-700' : 'text-gray-700'}>
                Free Shipping
              </span>
            </div>
            <div onClick={() => setCouponType('bogo')} className={`border rounded-lg p-3 flex items-center cursor-pointer ${couponType === 'bogo' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-gray-400'}`}>
              <TicketIcon className={`w-5 h-5 mr-2 ${couponType === 'bogo' ? 'text-indigo-500' : 'text-gray-400'}`} />
              <span className={couponType === 'bogo' ? 'text-indigo-700' : 'text-gray-700'}>
                Buy One Get One
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(couponType === 'percentage' || couponType === 'fixed') && <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {couponType === 'percentage' ? 'Discount Percentage*' : 'Discount Amount (₦)*'}
              </label>
              <div className="relative">
                <input type="number" className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder={couponType === 'percentage' ? 'e.g. 20' : 'e.g. 2000'} />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {couponType === 'percentage' ? '%' : '₦'}
                </div>
              </div>
            </div>}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Usage Limit*
            </label>
            <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. 100" />
            <p className="text-xs text-gray-500 mt-1">
              Maximum number of times this coupon can be used.
            </p>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Minimum Purchase Amount
          </label>
          <div className="relative">
            <input type="number" className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. 5000" />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              ₦
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Leave blank for no minimum purchase requirement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date*
            </label>
            <div className="relative">
              <input type="date" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <CalendarIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date*
            </label>
            <div className="relative">
              <input type="date" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <CalendarIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Applicable Products
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="all">All Products</option>
            <option value="specific">Specific Products</option>
            <option value="category">Specific Categories</option>
          </select>
        </div>
        <div className="flex items-center">
          <input id="coupon-active" name="coupon-active" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
          <label htmlFor="coupon-active" className="ml-2 block text-sm text-gray-900">
            Coupon is active and can be used immediately
          </label>
        </div>
        <div className="flex justify-end space-x-3">
          <button type="button" onClick={onCancel} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center">
            <CheckIcon className="w-4 h-4 mr-2" />
            Create Coupon
          </button>
        </div>
      </form>
    </div>;
};