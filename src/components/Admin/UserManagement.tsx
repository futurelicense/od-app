import React, { useState } from 'react';
import { UsersIcon, SearchIcon, FilterIcon, PlusIcon, CheckCircleIcon, XCircleIcon, MoreHorizontalIcon, UserIcon, ShieldIcon, TruckIcon, LockIcon, UnlockIcon, TrashIcon, EditIcon, DownloadIcon } from 'lucide-react';
export const UserManagement = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUserDetails, setShowUserDetails] = useState(false);
  // Mock data for users
  const users = [{
    id: 'USR-0001',
    name: 'Adewale Johnson',
    email: 'adewale@example.com',
    role: 'Customer',
    status: 'Active',
    joined: '15 Aug 2023',
    lastActive: '2 hours ago',
    orders: 12,
    totalSpent: 45000
  }, {
    id: 'USR-0002',
    name: 'Ngozi Okafor',
    email: 'ngozi@example.com',
    role: 'Customer',
    status: 'Active',
    joined: '20 Jul 2023',
    lastActive: '5 days ago',
    orders: 8,
    totalSpent: 32000
  }, {
    id: 'USR-0003',
    name: 'Chijioke Eze',
    email: 'chijioke@example.com',
    role: 'Operator',
    status: 'Active',
    joined: '10 Jun 2023',
    lastActive: '1 day ago',
    orders: 0,
    totalSpent: 0,
    deliveries: 156
  }, {
    id: 'USR-0004',
    name: 'Funke Akindele',
    email: 'funke@example.com',
    role: 'Admin',
    status: 'Active',
    joined: '05 May 2023',
    lastActive: '4 hours ago',
    orders: 0,
    totalSpent: 0
  }, {
    id: 'USR-0005',
    name: 'Ibrahim Mohammed',
    email: 'ibrahim@example.com',
    role: 'Customer',
    status: 'Suspended',
    joined: '12 Apr 2023',
    lastActive: '30 days ago',
    orders: 3,
    totalSpent: 12500
  }, {
    id: 'USR-0006',
    name: 'Blessing Adekunle',
    email: 'blessing@example.com',
    role: 'Customer',
    status: 'Inactive',
    joined: '25 Mar 2023',
    lastActive: '45 days ago',
    orders: 1,
    totalSpent: 5000
  }, {
    id: 'USR-0007',
    name: 'David Adeleke',
    email: 'david@example.com',
    role: 'Operator',
    status: 'Active',
    joined: '18 Feb 2023',
    lastActive: '12 hours ago',
    orders: 0,
    totalSpent: 0,
    deliveries: 245
  }];
  // Filter users based on active tab and search query
  const filteredUsers = users.filter(user => {
    // Filter by tab
    if (activeTab !== 'all' && user.role.toLowerCase() !== activeTab.toLowerCase()) {
      return false;
    }
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query) || user.id.toLowerCase().includes(query);
    }
    return true;
  });
  const handleUserClick = user => {
    setSelectedUser(user);
    setShowUserDetails(true);
  };
  const getRoleIcon = role => {
    switch (role) {
      case 'Admin':
        return <ShieldIcon className="w-4 h-4 text-indigo-600" />;
      case 'Operator':
        return <TruckIcon className="w-4 h-4 text-green-600" />;
      default:
        return <UserIcon className="w-4 h-4 text-blue-600" />;
    }
  };
  const getStatusBadgeClass = status => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Inactive':
        return 'bg-gray-100 text-gray-800';
      case 'Suspended':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  const renderUserDetails = () => {
    if (!selectedUser) return null;
    return <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">User Details</h2>
            <button onClick={() => setShowUserDetails(false)} className="text-gray-400 hover:text-gray-500">
              <XCircleIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:space-x-8">
              {/* User Profile */}
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-24 w-24 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                      <span className="text-3xl font-bold text-indigo-600">
                        {selectedUser.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {selectedUser.name}
                    </h3>
                    <div className="flex items-center mt-1">
                      {getRoleIcon(selectedUser.role)}
                      <span className="ml-1 text-sm text-gray-600">
                        {selectedUser.role}
                      </span>
                    </div>
                    <span className={`mt-2 px-2 py-1 text-xs font-medium rounded-full ${getStatusBadgeClass(selectedUser.status)}`}>
                      {selectedUser.status}
                    </span>
                    <p className="mt-4 text-sm text-gray-600">
                      {selectedUser.email}
                    </p>
                    <div className="mt-6 w-full">
                      <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 mb-2">
                        Edit Profile
                      </button>
                      {selectedUser.status === 'Active' ? <button className="w-full bg-red-50 text-red-600 py-2 px-4 rounded-lg hover:bg-red-100 flex items-center justify-center">
                          <LockIcon className="w-4 h-4 mr-2" />
                          Suspend Account
                        </button> : <button className="w-full bg-green-50 text-green-600 py-2 px-4 rounded-lg hover:bg-green-100 flex items-center justify-center">
                          <UnlockIcon className="w-4 h-4 mr-2" />
                          Activate Account
                        </button>}
                    </div>
                  </div>
                </div>
              </div>
              {/* User Details & Activity */}
              <div className="md:w-2/3">
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">
                    Account Information
                  </h4>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      <div>
                        <p className="text-sm text-gray-500">User ID</p>
                        <p className="font-medium">{selectedUser.id}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Joined Date</p>
                        <p className="font-medium">{selectedUser.joined}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Last Active</p>
                        <p className="font-medium">{selectedUser.lastActive}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Role</p>
                        <p className="font-medium">{selectedUser.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {selectedUser.role === 'Customer' && <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-4">
                      Customer Activity
                    </h4>
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                          <p className="text-sm text-gray-500">Total Orders</p>
                          <p className="font-medium">{selectedUser.orders}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Total Spent</p>
                          <p className="font-medium">
                            ₦{selectedUser.totalSpent.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 p-4">
                        <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                          View Order History
                        </button>
                      </div>
                    </div>
                  </div>}
                {selectedUser.role === 'Operator' && <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-4">
                      Operator Activity
                    </h4>
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                          <p className="text-sm text-gray-500">
                            Total Deliveries
                          </p>
                          <p className="font-medium">
                            {selectedUser.deliveries}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            Completion Rate
                          </p>
                          <p className="font-medium">98.5%</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            Average Rating
                          </p>
                          <p className="font-medium">4.8/5.0</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            Commission Rate
                          </p>
                          <p className="font-medium">15%</p>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 p-4">
                        <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                          View Delivery History
                        </button>
                      </div>
                    </div>
                  </div>}
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-4">
                    Security & Permissions
                  </h4>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="font-medium">Password Reset</p>
                          <p className="text-sm text-gray-500">
                            Send a password reset link to the user
                          </p>
                        </div>
                        <button className="bg-indigo-50 text-indigo-600 py-1 px-3 rounded hover:bg-indigo-100 text-sm">
                          Send Link
                        </button>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="font-medium">
                            Two-Factor Authentication
                          </p>
                          <p className="text-sm text-gray-500">
                            Extra security for account login
                          </p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-500 mr-2">
                            Disabled
                          </span>
                          <button className="bg-gray-200 relative inline-flex h-6 w-11 items-center rounded-full">
                            <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Change User Role</p>
                          <p className="text-sm text-gray-500">
                            Modify user permissions and access
                          </p>
                        </div>
                        <select className="border border-gray-300 rounded-md text-sm p-1">
                          <option>{selectedUser.role}</option>
                          <option>Customer</option>
                          <option>Operator</option>
                          <option>Admin</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end">
            <button onClick={() => setShowUserDetails(false)} className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50">
              Close
            </button>
          </div>
        </div>
      </div>;
  };
  return <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
        <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          <PlusIcon className="w-4 h-4 mr-2" />
          Add User
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setActiveTab('all')} className={`px-3 py-1.5 text-sm font-medium rounded-lg ${activeTab === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                All Users
              </button>
              <button onClick={() => setActiveTab('customer')} className={`px-3 py-1.5 text-sm font-medium rounded-lg ${activeTab === 'customer' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                Customers
              </button>
              <button onClick={() => setActiveTab('operator')} className={`px-3 py-1.5 text-sm font-medium rounded-lg ${activeTab === 'operator' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                Operators
              </button>
              <button onClick={() => setActiveTab('admin')} className={`px-3 py-1.5 text-sm font-medium rounded-lg ${activeTab === 'admin' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                Admins
              </button>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <input type="text" placeholder="Search users..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-64" />
                <SearchIcon className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
              </div>
              <button className="flex items-center text-sm bg-white border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50">
                <FilterIcon className="w-4 h-4 mr-1.5" />
                Filters
              </button>
              <button className="flex items-center text-sm bg-white border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50">
                <DownloadIcon className="w-4 h-4 mr-1.5" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* User Stats */}
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <p className="text-xl font-bold">{users.length}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Users</p>
              <p className="text-xl font-bold">
                {users.filter(u => u.status === 'Active').length}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">New This Month</p>
              <p className="text-xl font-bold">24</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Suspended</p>
              <p className="text-xl font-bold">
                {users.filter(u => u.status === 'Suspended').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow flex-1 overflow-hidden flex flex-col">
        <div className="overflow-x-auto flex-1">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Joined
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Active
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map(user => <tr key={user.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => handleUserClick(user)}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">
                        {user.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getRoleIcon(user.role)}
                      <span className="ml-1.5 text-sm text-gray-900">
                        {user.role}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.joined}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.lastActive}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button onClick={e => {
                    e.stopPropagation();
                    // Handle edit
                  }} className="text-indigo-600 hover:text-indigo-900">
                        <EditIcon className="w-4 h-4" />
                      </button>
                      {user.status === 'Active' ? <button onClick={e => {
                    e.stopPropagation();
                    // Handle suspend
                  }} className="text-yellow-600 hover:text-yellow-900">
                          <LockIcon className="w-4 h-4" />
                        </button> : <button onClick={e => {
                    e.stopPropagation();
                    // Handle activate
                  }} className="text-green-600 hover:text-green-900">
                          <UnlockIcon className="w-4 h-4" />
                        </button>}
                      <button onClick={e => {
                    e.stopPropagation();
                    // Handle delete
                  }} className="text-red-600 hover:text-red-900">
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{' '}
                <span className="font-medium">10</span> of{' '}
                <span className="font-medium">{filteredUsers.length}</span>{' '}
                results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  1
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-indigo-50 text-sm font-medium text-indigo-600 hover:bg-indigo-100">
                  2
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                  ...
                </span>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  8
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  9
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  10
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* User Details Modal */}
      {showUserDetails && renderUserDetails()}
    </div>;
};