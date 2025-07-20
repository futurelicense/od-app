import React, { useState } from 'react';
import { AlertCircleIcon, MessageCircleIcon, CheckCircleIcon, XCircleIcon, ClockIcon, PlusIcon } from 'lucide-react';
export const SubAgentComplaints = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [showNewComplaintForm, setShowNewComplaintForm] = useState(false);
  // Mock data for complaints
  const activeComplaints = [{
    id: 'COMP-123',
    orderId: 'ORD-3825',
    title: 'Wrong Delivery Address',
    description: 'The address provided in the system is incorrect. Customer provided updated address.',
    status: 'Under Review',
    statusColor: 'bg-yellow-100 text-yellow-800',
    date: 'Today, 10:30 AM',
    updates: [{
      message: 'Complaint received and under review by support team.',
      time: 'Today, 10:45 AM',
      author: 'System'
    }, {
      message: 'We are contacting the customer to verify the correct address.',
      time: 'Today, 11:15 AM',
      author: 'Support Team'
    }]
  }, {
    id: 'COMP-122',
    orderId: 'ORD-3820',
    title: 'Delivery Delay',
    description: 'Heavy traffic causing significant delay in delivery. Customer has been notified.',
    status: 'In Progress',
    statusColor: 'bg-blue-100 text-blue-800',
    date: 'Yesterday, 3:15 PM',
    updates: [{
      message: 'Complaint logged in the system.',
      time: 'Yesterday, 3:20 PM',
      author: 'System'
    }, {
      message: 'We have notified the customer about the delay.',
      time: 'Yesterday, 3:45 PM',
      author: 'Support Team'
    }, {
      message: 'Please provide an updated ETA when available.',
      time: 'Yesterday, 4:00 PM',
      author: 'Support Team'
    }]
  }];
  const resolvedComplaints = [{
    id: 'COMP-120',
    orderId: 'ORD-3815',
    title: 'Customer Unavailable',
    description: 'Customer not available at delivery location. Package returned to office.',
    status: 'Resolved',
    statusColor: 'bg-green-100 text-green-800',
    date: '2 days ago',
    resolution: 'Customer rescheduled delivery for tomorrow.',
    resolvedDate: 'Yesterday, 5:30 PM'
  }, {
    id: 'COMP-119',
    orderId: 'ORD-3810',
    title: 'Package Damaged',
    description: 'Package was damaged during transit. Customer refused to accept delivery.',
    status: 'Resolved',
    statusColor: 'bg-green-100 text-green-800',
    date: '3 days ago',
    resolution: 'Replacement package delivered and accepted by customer.',
    resolvedDate: '2 days ago, 2:15 PM'
  }];
  if (showNewComplaintForm) {
    return <div className="space-y-6">
        <div className="flex items-center">
          <button onClick={() => setShowNewComplaintForm(false)} className="text-gray-500 hover:text-gray-700 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Report New Issue</h1>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Order ID <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. ORD-3842" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Issue Type <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required>
                <option value="">Select issue type</option>
                <option value="delivery_delay">Delivery Delay</option>
                <option value="wrong_address">Wrong Address</option>
                <option value="customer_unavailable">
                  Customer Unavailable
                </option>
                <option value="damaged_item">Damaged Item</option>
                <option value="operator_issue">Operator Issue</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Issue Title <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Brief title of the issue" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Issue Description <span className="text-red-500">*</span>
              </label>
              <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" rows={5} placeholder="Describe the issue in detail..." required></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Image (optional)
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Priority
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="priority" value="low" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                  <span className="ml-2 text-sm text-gray-700">Low</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="priority" value="medium" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">Medium</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="priority" value="high" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                  <span className="ml-2 text-sm text-gray-700">High</span>
                </label>
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button type="button" onClick={() => setShowNewComplaintForm(false)} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                Submit Issue
              </button>
            </div>
          </form>
        </div>
      </div>;
  }
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          Complaints & Issues
        </h1>
        <button onClick={() => setShowNewComplaintForm(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center">
          <PlusIcon className="w-5 h-5 mr-2" />
          Report New Issue
        </button>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button onClick={() => setActiveTab('active')} className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'active' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              Active Issues ({activeComplaints.length})
            </button>
            <button onClick={() => setActiveTab('resolved')} className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'resolved' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
              Resolved Issues ({resolvedComplaints.length})
            </button>
          </nav>
        </div>
        <div className="p-6">
          {activeTab === 'active' ? activeComplaints.length > 0 ? <div className="space-y-6">
                {activeComplaints.map(complaint => <div key={complaint.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4 border-b border-gray-200">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center mb-2 md:mb-0">
                          <AlertCircleIcon className="w-5 h-5 text-red-500 mr-2" />
                          <h3 className="font-medium text-gray-800">
                            {complaint.title}
                          </h3>
                          <span className={`ml-3 px-2 py-1 text-xs font-semibold rounded-full ${complaint.statusColor}`}>
                            {complaint.status}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="mr-2">
                            Order #{complaint.orderId}
                          </span>
                          <span>{complaint.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700 mb-4">
                        {complaint.description}
                      </p>
                      <div className="border-t border-gray-100 pt-4 mt-4">
                        <h4 className="font-medium text-gray-800 mb-3">
                          Updates
                        </h4>
                        <div className="space-y-4">
                          {complaint.updates.map((update, index) => <div key={index} className="flex">
                              <div className="flex-shrink-0 mr-3">
                                <div className="h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center">
                                  <MessageCircleIcon className="h-4 w-4 text-indigo-600" />
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="text-sm">
                                  <span className="font-medium text-gray-900">
                                    {update.author}
                                  </span>
                                  <span className="text-gray-500 ml-2">
                                    {update.time}
                                  </span>
                                </div>
                                <p className="mt-1 text-sm text-gray-700">
                                  {update.message}
                                </p>
                              </div>
                            </div>)}
                        </div>
                      </div>
                      <div className="border-t border-gray-100 pt-4 mt-4">
                        <div className="flex">
                          <input type="text" className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Add a comment..." />
                          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-r-lg">
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>)}
              </div> : <div className="text-center py-12">
                <div className="mx-auto h-12 w-12 text-gray-400">
                  <CheckCircleIcon className="h-12 w-12" />
                </div>
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No Active Issues
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  You don't have any active issues at the moment.
                </p>
                <div className="mt-6">
                  <button onClick={() => setShowNewComplaintForm(true)} className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                    Report an Issue
                  </button>
                </div>
              </div> : resolvedComplaints.length > 0 ? <div className="space-y-6">
              {resolvedComplaints.map(complaint => <div key={complaint.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-4 border-b border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center mb-2 md:mb-0">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                        <h3 className="font-medium text-gray-800">
                          {complaint.title}
                        </h3>
                        <span className={`ml-3 px-2 py-1 text-xs font-semibold rounded-full ${complaint.statusColor}`}>
                          {complaint.status}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="mr-2">Order #{complaint.orderId}</span>
                        <span>{complaint.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-4">
                      {complaint.description}
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon className="h-5 w-5 text-green-400" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-green-800">
                            Resolution
                          </h3>
                          <div className="mt-2 text-sm text-green-700">
                            <p>{complaint.resolution}</p>
                          </div>
                          <div className="mt-1 text-xs text-green-600">
                            Resolved on {complaint.resolvedDate}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div> : <div className="text-center py-12">
              <div className="mx-auto h-12 w-12 text-gray-400">
                <ClockIcon className="h-12 w-12" />
              </div>
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                No Resolved Issues
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                You don't have any resolved issues yet.
              </p>
            </div>}
        </div>
      </div>
    </div>;
};