import React, { useState } from 'react';
import { User, GraduationCap, Calendar, TrendingUp, FileText, Edit3 } from 'lucide-react';

const StudentProfileContent = ({ student, onStudentUpdate }) => {
  const [editingNotes, setEditingNotes] = useState(false);
  const [notesText, setNotesText] = useState('');
  const [editingNoteIndex, setEditingNoteIndex] = useState(null);

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
    const percentage = rate <= 1 ? rate * 100 : rate;
    if (percentage >= 95) return 'text-green-600';
    if (percentage >= 85) return 'text-yellow-600';
    return 'text-red-600';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleEditNotes = (noteIndex = null) => {
    setEditingNotes(true);
    setEditingNoteIndex(noteIndex);

    if (noteIndex !== null) {
      const notes = Array.isArray(student.interventionNotes)
        ? student.interventionNotes
        : student.interventionNotes
          ? [{ author: student.caseManager || 'Case Manager', date: student.lastUpdated || 'Recently', content: student.interventionNotes }]
          : [];
      setNotesText(notes[noteIndex]?.content || '');
    } else {
      setNotesText('');
    }

    document.body.style.overflow = 'hidden';
  };

  const handleSaveNotes = () => {
    if (notesText.trim() && onStudentUpdate) {
      const currentNotes = Array.isArray(student.interventionNotes)
        ? student.interventionNotes
        : student.interventionNotes
          ? [{ author: student.caseManager || 'Case Manager', date: student.lastUpdated || 'Recently', content: student.interventionNotes }]
          : [];

      let updatedNotes;

      if (editingNoteIndex !== null) {
        updatedNotes = currentNotes.map((note, index) =>
          index === editingNoteIndex
            ? { ...note, content: notesText, date: 'Edited just now' }
            : note
        );
      } else {
        const newNote = {
          author: student.caseManager || 'Case Manager',
          date: 'Just now',
          content: notesText
        };
        updatedNotes = [newNote, ...currentNotes];
      }

      onStudentUpdate({ ...student, interventionNotes: updatedNotes });
    }

    setEditingNotes(false);
    setNotesText('');
    setEditingNoteIndex(null);
    document.body.style.overflow = 'unset';
  };

  const handleCancelEditNotes = () => {
    setEditingNotes(false);
    setNotesText('');
    setEditingNoteIndex(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center justify-between">
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
          <div className="flex items-center space-x-1">
            <span className={`px-12 py-2 rounded-md text-md font-medium ${getTierColor(student.tier)}`}>
              Tier {student.tier}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
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
              {student.attendanceRate <= 1 ? (student.attendanceRate * 100).toFixed(1) : student.attendanceRate}%
            </p>
            <p className="text-sm text-gray-500">This academic year</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p className="text-xs text-gray-600 mb-2 font-medium">Program Participation:</p>
          <div className="flex flex-wrap gap-2">
            {student.petition && (
              <span className="inline-flex px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800">
                Petitions
              </span>
            )}
            {student.specialEducation && (
              <span className="inline-flex px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800">
                Special Ed
              </span>
            )}
            {student.plan504 && (
              <span className="inline-flex px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800">
                504
              </span>
            )}
            {student.iep && (
              <span className="inline-flex px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800">
                IEP
              </span>
            )}
            {student.ml && (
              <span className="inline-flex px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800">
                ML
              </span>
            )}
            {student.rti && (
              <span className="inline-flex px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800">
                RTI
              </span>
            )}
            {student.flexAcademy && (
              <span className="inline-flex px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800">
                Flex Academy
              </span>
            )}
            {!student.petition && !student.specialEducation && !student.plan504 && !student.iep && !student.ml && !student.rti && !student.flexAcademy && (
              <span className="text-xs text-gray-500">None</span>
            )}
          </div>
        </div>
      </div>

      <div className="mb-6">
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

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center space-x-2 mb-4">
          <TrendingUp size={20} />
          <span>Intervention Progress</span>
        </h2>
        {student.interventionProgress && student.interventionProgress.length > 0 ? (
          <div className="space-y-6">
            {student.interventionProgress.map((intervention, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-2">{intervention.name}</h3>
                    <p className="text-gray-600 text-sm">{intervention.description}</p>
                  </div>
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

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center space-x-2 mb-4">
          <FileText size={20} />
          <span>Notes & Comments</span>
        </h2>

        <div className="space-y-4">
          {editingNotes && (
            <div className="space-y-4 mb-4">
              <textarea
                value={notesText}
                onChange={(e) => setNotesText(e.target.value)}
                placeholder="Enter intervention notes and observations..."
                className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                autoFocus
              />
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">
                  Character count: {notesText.length}
                </p>
                <div className="flex space-x-2">
                  <button
                    onClick={handleCancelEditNotes}
                    className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveNotes}
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}

          {!editingNotes && (
            <button
              onClick={handleEditNotes}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors border-2 border-dashed border-blue-300"
            >
              <Edit3 size={16} />
              <span>Add New Note</span>
            </button>
          )}

          {(() => {
            const notes = Array.isArray(student.interventionNotes)
              ? student.interventionNotes
              : student.interventionNotes
                ? [{ author: student.caseManager || 'Case Manager', date: student.lastUpdated || 'Recently', content: student.interventionNotes }]
                : [];

            return notes.length > 0 ? (
              notes.map((note, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <User size={16} className="text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm font-medium text-gray-900">
                            {note.author}
                          </span>
                          <span className="text-xs text-gray-500">
                            {note.date}
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {note.content}
                        </p>
                      </div>
                    </div>
                    {!editingNotes && (
                      <button
                        onClick={() => handleEditNotes(index)}
                        className="flex items-center space-x-1 px-3 py-2 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-100 rounded-md transition-colors ml-2 self-center"
                      >
                        <Edit3 size={14} />
                        <span>Edit</span>
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              !editingNotes && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                  <p className="text-gray-500 text-sm">No notes available yet.</p>
                </div>
              )
            );
          })()}
        </div>
      </div>
    </div>
  );
};

export default StudentProfileContent;
