// src/components/student/StudentProfile.jsx
import React, { useState } from 'react';
import { getAllStudents } from '../../data/mockStudents';
import StudentProfileContent from './StudentProfileContent';

const StudentProfile = ({ studentId, onNavigate }) => {
  const allStudents = getAllStudents();
  const [student, setStudent] = useState(allStudents.find(s => s.id === parseInt(studentId)));

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

  const handleStudentUpdate = (updatedStudent) => {
    setStudent(updatedStudent);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
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
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
          <div className="px-8 pb-24">
            <StudentProfileContent student={student} onStudentUpdate={handleStudentUpdate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;