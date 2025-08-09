import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, FileText, Calendar, User, AlertCircle } from 'lucide-react';
import SearchBar from '../common/SearchBar';
import { getAllStudents } from '../../data/mockStudents';

const InterventionTracking = ({ onNavigate, previousPage }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Gets all students and filter for those with active interventions
  const allStudents = getAllStudents();
  const studentsWithInterventions = allStudents.filter(student => 
    student.interventionProgress && 
    student.interventionProgress.length > 0 && 
    student.caseManager
  );

  // Transforms student data to match the intervention tracking format with mockStudents.js file
  const interventions = studentsWithInterventions.map(student => ({
    id: student.id,
    studentName: student.name,
    tier: student.tier,
    intervention: student.activeInterventions,
    caseManager: student.caseManager || "Not assigned",
    notes: student.interventionNotes || "No notes available",
    startDate: student.interventionStartDate || "Not specified",
    status: "Active",
    progress: student.interventionProgress.some(int => int.status === "Needs Attention") ? "Needs Attention" : 
              student.interventionProgress.every(int => int.status === "Completed") ? "Completed" : "In Progress",
    latestUpdate: student.lastUpdated || "No updates"
  }));

  const getTierColor = (tier) => {
    switch(tier) {
      case 3: return "text-[#B70606]";
      case 2: return 'text-[#D9C702]';
      case 1: return 'text-[#4CAF50]';
      default: return 'text-gray-800';
    }
  };

  const getStatusColor = (progress) => {
    switch(progress) {
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Needs Attention': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredInterventions = interventions.filter(intervention => {
    const matchesSearch = intervention.studentName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onNavigate(previousPage || 'home')}
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
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 space-y-4 lg:space-y-0">         
          <div className="flex flex-col sm:flex-row sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4 w-full">
            {/* Title and Description */}
            <div className="flex items-center space-x-2">
               <div className="px-6 py-4  border-gray-200">
                <h1 className="text-2xl font-bold text-gray-900">Interventions Tracking</h1>
                <p className="text-md text-gray-700">Monitor progress and manage interventions</p>
                </div>
            </div>

            {/* Search */}
            <div className="relative flex items-center">
              <SearchBar 
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />              
            </div>
          </div>
          {/* Add New Button */}
          <button className="bg-blue-600 text-white rounded-lg hover:bg-[#2F61CE] transition-colors flex items-center justify-between w-[200px] h-[50px] px-4">
            <span className="flex items-center">
              <FileText size={23.5} className="text-gray-200" />
            </span>
            <span className="font-bold">
              Export Report
            </span>
          </button>
        </div>
      </div>

      {/* Interventions List */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">       
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F3F3F3]">
              <tr className="h-16">
                <th className="px-6 py-3 text-left text-md font-bold text-black tracking-wider">
                  Student Name
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black tracking-wider">
                  Tier
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black tracking-wider">
                  Interventions
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black tracking-wider">
                  Case Manager
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black tracking-wider">
                  Progress
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black tracking-wider">
                  Notes
                </th>
                <th className="px-6 py-3 text-center text-md font-bold text-black tracking-wider">
                  Last Updated
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInterventions.map((intervention) => (
                <tr key={intervention.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        {intervention.studentName}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-md font-bold rounded-full ${getTierColor(intervention.tier)}`}>
                      {intervention.tier}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {intervention.intervention}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-black">
                        {intervention.caseManager}
                      </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(intervention.progress)}`}>
                      {intervention.progress}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 max-w-xs truncate">
                    {intervention.notes}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                    <div className="flex items-center justify-center text-sm text-gray-700">
                      <Calendar size={16} className="mr-1" />
                      {intervention.latestUpdate}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredInterventions.length === 0 && (
          <div className="px-6 py-12 text-center">
            <AlertCircle size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Student not found</h3>
            <p className="text-gray-500">Try adjusting your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterventionTracking;