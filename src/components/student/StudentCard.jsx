// src/components/student/StudentCard.jsx
import React from 'react';
import Button from '../common/Button';

const StudentCard = ({ student, onViewProfile }) => {
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

  const getAbsenceColor = (absences) => {
    if (absences === 0) return 'text-green-600';
    if (absences <= 2) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow w-full h-72 flex flex-col">
      {/* Header with Avatar and Info */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-lg">
              {student.initials}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{student.name}</h3>
            <p className="text-gray-600">Grade {student.grade}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTierColor(student.tier)}`}>
          Tier {student.tier}
        </span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-gray-600 text-sm">GPA</p>
          <p className={`font-bold text-lg ${getGpaColor(student.gpa)}`}>
            {student.gpa}
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Unexcused Absences</p>
          <p className={`font-bold text-lg ${getAbsenceColor(student.unexcusedAbsences)}`}>
            {student.unexcusedAbsences}
          </p>
        </div>
      </div>

      {/* Active Interventions */}
      <div className="mb-4 flex-grow">
        <p className="text-gray-600 text-sm mb-2">Active Interventions:</p>
        <div className="flex flex-wrap gap-2">
          {student.activeInterventions.split(',').slice(0, 2).map((intervention, index) => (
            <span 
              key={index}
              className="px-3 py-1 border-2 border-gray-300 rounded-full text-black-800 text-sm font-semibold"
            >
              {intervention.trim()}
            </span>
          ))}
          {student.activeInterventions.split(',').length > 2 && (
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600 text-sm font-semibold">
              +{student.activeInterventions.split(',').length - 2} more
            </span>
          )}
        </div>
      </div>

      {/* View Profile Button */}
      <div className="mt-auto">
        <Button 
          variant="black" 
          size="sm" 
          className="w-full"
          onClick={() => onViewProfile(student)}
        >
          View Full Profile
        </Button>
      </div>
    </div>
  );
};

export default StudentCard;