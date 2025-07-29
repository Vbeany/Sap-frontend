import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, FileText, Calendar, User, AlertCircle } from 'lucide-react';

const InterventionTracking = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTier, setFilterTier] = useState('all');

  // Sample data - replace with real data later
  const interventions = [
    {
      id: 1,
      studentName: "John Doe",
      tier: 3,
      intervention: "Math tutoring, Housing support",
      caseManager: "Ms. Tracy",
      notes: "Needs additional support with math concepts",
      startDate: "2024-07-15",
      status: "Active",
      progress: "Improving",
      latestUpdate: "2024-08-01"
    },
    {
      id: 2,
      studentName: "Mario Rossi",
      tier: 2,
      intervention: "English tutoring, Weekly home visits",
      caseManager: "Ms. Debra",
      notes: "Struggling with reading comprehension",
      startDate: "2024-07-10",
      status: "Active",
      progress: "Stable", 
      latestUpdate: "2024-08-01"
    },
    {
      id: 3,
      studentName: "Ana Novak",
      tier: 1,
      intervention: "Daily counseling, carpool support",
      caseManager: "Mr. Truell",
      notes: "Needs emotional support and transportation assistance",
      startDate: "2024-07-01",
      status: "Completed",
      progress: "Successful",
      latestUpdate: "2024-08-01"
    },
    {
      id: 4,
      studentName: "Sean Murphy",
      tier: 2,
      intervention: "Daily counseling",
      caseManager: "Mr. Truell",
      notes: "Struggling with social interactions",
      startDate: "2024-07-10",
      status: "Active",
      progress: "Stable",
      latestUpdate: "2024-08-01",
    },
    {
      id: 5,
      studentName: "Anurag Pamuru",
      tier: 2,
      intervention: "Weekly counseling",
      caseManager: "Ms. Bea",
      notes: "Needs support with anxiety management",  
      startDate: "2024-07-10",
      status: "Active",
      progress: "Stable",
      latestUpdate: "2024-08-01",
    },
  ];

  const getTierColor = (tier) => {
    switch(tier) {
      case 3: return 'bg-red-100 text-red-800';
      case 2: return 'bg-yellow-100 text-yellow-800';
      case 1: return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredInterventions = interventions.filter(intervention => {
    const matchesSearch = intervention.studentName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTier = filterTier === 'all' || intervention.tier.toString() === filterTier;
    return matchesSearch && matchesTier;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onNavigate('home')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
          </div>
          <nav className="flex space-x-4">
            <button 
              onClick={() => onNavigate('home')}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors outline-purple-950 text-md font-semibold"
            >
              Home
            </button>
            <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors outline-purple-950 text-md font-semibold">
              Intervention Tracking
            </button>
          </nav>
        </div>
      </header>

      {/* Controls */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">

            {/* Title and Description */}
            <div className="flex items-center space-x-2">
               <div className="px-6 py-4  border-gray-200">
                <h1 className="text-2xl font-bold text-gray-900">Intervention Tracking</h1>
                <p className="text-sm text-gray-500">Track and manage student interventions effectively.</p>
                </div>
            </div>

            {/* Search */}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Add New Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <FileText size={20} />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Interventions List */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Active Interventions</h2>
          <p className="text-sm text-gray-500">Track and manage student interventions effectively.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tier
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Interventions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Case Manager
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Notes
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInterventions.map((intervention) => (
                <tr key={intervention.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <User size={16} className="text-gray-400 mr-2" />
                      <span className="text-sm font-medium text-gray-900">
                        {intervention.studentName}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTierColor(intervention.tier)}`}>
                      Tier {intervention.tier}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {intervention.intervention}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">
                        {intervention.caseManager}
                      </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(intervention.status)}`}>
                      {intervention.progress}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {intervention.notes}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      {intervention.latestUpdate}
                    </div>
                    {/* <button className="text-blue-600 hover:text-blue-900 mr-3">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Remove
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredInterventions.length === 0 && (
          <div className="px-6 py-12 text-center">
            <AlertCircle size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No interventions found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterventionTracking;