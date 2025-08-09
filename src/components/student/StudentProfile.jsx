// src/components/student/StudentProfile.jsx
import React from 'react';
import { ArrowLeft, User, GraduationCap, Target, AlertTriangle, Calendar, TrendingDown, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { getAllStudents } from '../../data/mockStudents';

const StudentProfile = ({ studentId, onNavigate, previousPage }) => {
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

  const getInterventionStatusIcon = (status) => {
    switch(status) {
      case 'In Progress':
        return <Clock className="text-blue-500" size={16} />;
      case 'Needs Attention':
        return <AlertTriangle className="text-red-500" size={16} />;
      case 'Completed':
        return <CheckCircle className="text-green-500" size={16} />;
      default:
        return <AlertCircle className="text-gray-500" size={16} />;
    }
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
      {/* Header */}
      <div className="flex items-center justify-between pb-8">
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
          <button 
            onClick={() => onNavigate('intervention')}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors outline-purple-950 text-md font-semibold"
          >
            Intervention Tracking
          </button>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Student Header */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-2xl">
                  {student.initials}
                </span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{student.name}</h1>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center space-x-1">
                    <GraduationCap size={18} />
                    <span>Grade {student.grade}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Target size={18} />
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTierColor(student.tier)}`}>
                      Tier {student.tier}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">GPA</h3>
              <User size={18} className="text-gray-400" />
            </div>
            <p className={`text-2xl font-bold ${getGpaColor(student.gpa)}`}>
              {student.gpa}
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Unexcused Absences</h3>
              <TrendingDown size={18} className="text-gray-400" />
            </div>
            <p className="text-2xl font-bold text-red-600">
              {student.unexcusedAbsences}
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Attendance Rate</h3>
              <Calendar size={18} className="text-gray-400" />
            </div>
            <p className={`text-2xl font-bold ${getAttendanceColor(student.attendanceRate)}`}>
              {student.attendanceRate}%
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Tier Status</h3>
              <Target size={18} className="text-gray-400" />
            </div>
            <p className="text-lg font-semibold text-gray-900">
              Tier {student.tier}
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Unexcused Absences Details */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                <Calendar size={20} />
                <span>Unexcused Absences</span>
              </h2>
            </div>
            <div className="p-6">
              {student.absenceDetails && student.absenceDetails.length > 0 ? (
                <div className="space-y-4">
                  {student.absenceDetails.map((absence, index) => (
                    <div key={index} className="border-l-4 border-red-400 pl-4 py-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-gray-900">
                          {formatDate(absence.date)}
                        </span>
                        <span className="text-sm text-red-600 font-medium">Unexcused</span>
                      </div>
                      <p className="text-gray-600 text-sm">{absence.reason}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No unexcused absences recorded</p>
              )}
            </div>
          </div>

          {/* Intervention Progress */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                <Target size={20} />
                <span>Intervention Progress</span>
              </h2>
            </div>
            <div className="p-6">
              {student.interventionProgress && student.interventionProgress.length > 0 ? (
                <div className="space-y-6">
                  {student.interventionProgress.map((intervention, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{intervention.name}</h3>
                        <div className="flex items-center space-x-1">
                          {getInterventionStatusIcon(intervention.status)}
                          <span className={`text-sm font-medium ${
                            intervention.status === 'In Progress' ? 'text-blue-600' :
                            intervention.status === 'Needs Attention' ? 'text-red-600' :
                            intervention.status === 'Completed' ? 'text-green-600' :
                            'text-gray-600'
                          }`}>
                            {intervention.status}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{intervention.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No interventions currently active</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;