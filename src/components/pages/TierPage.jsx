// src/components/pages/TierPage.jsx
import React, { useState } from 'react';
import SearchBar from '../common/SearchBar';
import Button from '../common/Button';
import StudentCard from '../student/StudentCard';
import { getStudentsByTier, searchStudents } from '../../data/mockStudents';
import { ArrowLeft, Search, Filter, FileText, Calendar, User, AlertCircle } from 'lucide-react';

const TierPage = ({ tierNumber = 1, onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Get students for the specific tier
  const allStudents = getStudentsByTier(tierNumber);
  
  // Filter students based on search
  const filteredStudents = searchStudents(allStudents, searchTerm);

  const handleViewProfile = (student) => {
    console.log('View profile for:', student.name);
    // Navigate to student profile page
    // onNavigate(`student-profile/${student.id}`);
  };

  const getTierTitle = (tier) => {
    const titles = {
      1: "Tier 1 Student Profiles",
      2: "Tier 2 Student Profiles", 
      3: "Tier 3 Student Profiles"
    };
    return titles[tier] || "Student Profiles";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col justify-center">

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
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">
            {getTierTitle(tierNumber)}
          </h1>
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>
      </header>

      

      {/* Students Grid */}
      <div className="max-w-4xl mx-auto w-full">
        {filteredStudents.length > 0 ? (
          <div className="grid grid-cols-2 gap-6">
            {filteredStudents.map((student) => (
              <StudentCard 
                key={student.id} 
                student={student} 
                onViewProfile={handleViewProfile}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {searchTerm ? 'No students found matching your search.' : 'No students in this tier.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TierPage;