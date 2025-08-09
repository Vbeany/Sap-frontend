// src/components/student/StudentProfile.jsx
import React from 'react';
import { User, GraduationCap, Calendar, TrendingUp, FileText } from 'lucide-react';
import { getAllStudents } from '../../data/mockStudents';

const StudentProfile = ({ studentId, onNavigate }) => {
  // Find student by ID
  const allStudents = getAllStudents();
  const student = allStudents.find(s => s.id === parseInt(studentId));

  if (!student) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Student Not Found</h2>
          <p className="text-gray-600 mb-4">The student you're looking for doesn't exist.</p>
          <button 
            onClick={() => onNavigate('home')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const getTierColor = (tier) => {
    switch(tier) {
      case 1: return 'bg-green-600 text-white';
      case 2: return 'bg-yellow-500 text-white';
      case 3: return 'bg-red-600 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getGpaColor = (gpa) => {
    if (gpa >= 3.5) return 'text-green-600';
    if (gpa >= 3.0) return 'text-yellow-600';
    if (gpa >= 2.5) return 'text-orange-600';
    return 'text-red-600';
  };

  const getAttendanceColor = (rate) => {
    if (rate >= 95) return 'text-green-600';
    if (rate >= 85) return 'text-yellow-600';
    return 'text-red-600';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header similar to homepage */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 border-gray-200">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Student Profile</h1>
            <p className="text-md text-gray-700">View detailed student information and progress</p>
          </div>
          <nav className="flex space-x-4">
            <button 
              onClick={() => onNavigate('home')}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors outline-purple-950 text-md font-semibold"
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('intervention')}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors outline-purple-950 text-md font-semibold"
            >
              Intervention Tracking
            </button>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-12">
        {/* Combined Student Profile Box */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          {/* Student Header */}
          <div className="p-8">
            <div className="flex items-center justify-between px-8">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-3xl">
                    {student.initials}
                  </span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 mb-2">{student.name}</h1>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <GraduationCap size={18} />
                      <span className="text-md font-light text-gray-900">Grade {student.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tier Badge - Right Side */}
              <div className="flex items-center space-x-1">
                <span className={`px-12 py-2 rounded-md text-md font-medium ${getTierColor(student.tier)}`}>
                  Tier {student.tier}
                </span>
              </div>
            </div>
          </div>
          {/* Key Metrics in a Row */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 px-8">
              <div className="text-left flex-1">
                <div className="mb-2">
                  <h3 className="text-xl font-medium text-black">GPA</h3>
                </div>
                <p className={`text-2xl font-bold ${getGpaColor(student.gpa)}`}>
                  {student.gpa}
                </p>
                <p className="text-sm text-gray-500">Current semester</p>
              </div>

              <div className="text-left flex-1">
                <div className="mb-2">
                  <h3 className="text-xl font-medium text-black">Unexcused Absences</h3>
                </div>
                <p className="text-2xl font-bold text-red-500">
                  {student.unexcusedAbsences}
                </p>
                <p className="text-sm text-gray-500">This academic year</p>
              </div>

              <div className="text-left flex-1">
                <div className="mb-2">
                  <h3 className="text-xl font-medium text-black">Attendance Rate</h3>
                </div>
                <p className={`text-2xl font-bold ${getAttendanceColor(student.attendanceRate)}`}>
                  {student.attendanceRate}%
                </p>
                <p className="text-sm text-gray-500">This academic year</p>
              </div>
            </div>
          </div>

          {/* Unexcused Absences Details */}
          <div className="p-6">
            <div className="px-8">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center space-x-2 mb-4">
                <Calendar size={20} />
                <span>Unexcused Absences</span>
              </h2>
              {student.absenceDetails && student.absenceDetails.length > 0 ? (
                <div className="max-h-32 overflow-y-auto">
                <div className="flex flex-col md:flex-row md:flex-wrap gap-2">
                  {student.absenceDetails.map((absence, index) => (
                    <div key={index} className="flex items-center space-x-4 py-1 flex-1 md:flex-none md:w-[calc(50%-0.25rem)]">
                      <span className="font-semibold text-red-600 min-w-[100px]">
                        {formatDate(absence.date)}
                      </span>
                      <span className="text-red-600">{absence.reason}</span>
                    </div>
                  ))}
                </div>
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No unexcused absences recorded</p>
              )}
            </div>
          </div>

          {/* Intervention Progress */}
          <div className="p-6">
            <div className="px-8">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center space-x-2 mb-4">
                <TrendingUp size={20} />
                <span>Intervention Progress</span>
              </h2>
              {student.interventionProgress && student.interventionProgress.length > 0 ? (
                <div className="space-y-6">
                {student.interventionProgress.map((intervention, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      {/* Left side - Name and Description */}
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 mb-2">{intervention.name}</h3>
                        <p className="text-gray-600 text-sm">{intervention.description}</p>
                      </div>
                      
                      {/* Right side - Status Badge */}
                      <div className="flex items-center ml-4">
                        <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                          intervention.status === 'In Progress' ? 'bg-green-600 text-white' :
                          intervention.status === 'Needs Attention' ? 'bg-orange-600 text-white' :
                          intervention.status === 'Completed' ? 'bg-green-600 text-white' :
                          'bg-gray-600 text-white'
                        }`}>
                          {intervention.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No interventions currently active</p>
              )}
            </div>
          </div>

          {/* Notes Section */}
          <div className="p-6 pb-24">
            <div className="px-8">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center space-x-2 mb-4">
                <FileText size={20} />
                <span>Notes & Comments</span>
              </h2>
              {student.interventionNotes ? (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <User size={16} className="text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-medium text-gray-900">
                          {student.caseManager || 'Case Manager'}
                        </span>
                        <span className="text-xs text-gray-500">
                          {student.lastUpdated || 'Recently'}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {student.interventionNotes}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <FileText size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No notes available</h3>
                  <p className="text-gray-500">No intervention notes or comments have been added yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;