import React, { useState, useEffect } from 'react';
import { FileText, Calendar, User, AlertCircle, X, GraduationCap, TrendingUp, Edit3, Plus } from 'lucide-react';
import SearchBar from '../common/SearchBar';
import { getAllStudents } from '../../data/mockStudents';
import StudentProfileContent from '../student/StudentProfileContent';

const InterventionTracking = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editingNotes, setEditingNotes] = useState(null);
  const [notesText, setNotesText] = useState('');
  const [isAddingNewNote, setIsAddingNewNote] = useState(false);
  const [editingNoteIndex, setEditingNoteIndex] = useState(null);
  const [studentsData, setStudentsData] = useState(() => getAllStudents());

  const allStudents = studentsData;
  const studentsWithInterventions = allStudents.sort((a, b) => b.tier - a.tier);

  const interventions = studentsWithInterventions.map(student => {
    let notesText = "No notes available";
    if (student.interventionNotes) {
      if (Array.isArray(student.interventionNotes)) {
        notesText = student.interventionNotes.length > 0
          ? student.interventionNotes[0].content
          : "No notes available";
      } else if (typeof student.interventionNotes === 'string') {
        notesText = student.interventionNotes;
      }
    }

    return {
      id: student.id,
      studentName: student.name,
      tier: student.tier,
      intervention: student.activeInterventions || "N/A",
      caseManager: student.caseManager || "Not assigned",
      notes: notesText,
      petition: student.petition !== undefined ? (student.petition ? "Yes" : "No") : "No",
      specialEducation: student.specialEducation !== undefined ? (student.specialEducation ? "Yes" : "No") : "No",
      plan504: student.plan504 !== undefined ? (student.plan504 ? "Yes" : "No") : "No",
      iep: student.iep !== undefined ? (student.iep ? "Yes" : "No") : "No",
      ml: student.ml !== undefined ? (student.ml ? "Yes" : "No") : "No",
      rti: student.rti !== undefined ? (student.rti ? "Yes" : "No") : "No",
      flexAcademy: student.flexAcademy !== undefined ? (student.flexAcademy ? "Yes" : "No") : "No",
      startDate: student.interventionStartDate || "Not specified",
      status: "Active",
      latestUpdate: student.lastUpdated || "No updates"
    };
  });

  const getTierColor = (tier) => {
    switch(tier) {
      case 3: return "text-[#B70606]";
      case 2: return 'text-[#D9C702]';
      case 1: return 'text-[#4CAF50]';
      default: return 'text-gray-800';
    }
  };

  const filteredInterventions = interventions.filter(intervention => {
    const matchesSearch = intervention.studentName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const handleRowClick = (intervention) => {
    const student = allStudents.find(s => s.id === intervention.id);
    setSelectedStudent(student);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedStudent(null);
    document.body.style.overflow = 'unset';
  };

  const updateStudentNotes = (studentId, newNotes) => {
    setStudentsData(prevStudents => 
      prevStudents.map(student => 
        student.id === studentId 
          ? { ...student, interventionNotes: newNotes }
          : student
      )
    );
  };

  const handleEditNotes = (intervention) => {
    setEditingNotes(intervention);
    setNotesText('');
    setIsAddingNewNote(false);
    document.body.style.overflow = 'hidden';
  };

  const handleAddNewNote = () => {
    setIsAddingNewNote(true);
    setEditingNoteIndex(null);
    setNotesText('');
  };

  const handleEditNote = (noteIndex) => {
    const student = allStudents.find(s => s.id === editingNotes.id);
    const notes = Array.isArray(student.interventionNotes)
      ? student.interventionNotes
      : student.interventionNotes
        ? [{ author: student.caseManager || 'Case Manager', date: student.lastUpdated || 'Recently', content: student.interventionNotes }]
        : [];

    setEditingNoteIndex(noteIndex);
    setNotesText(notes[noteIndex]?.content || '');
    setIsAddingNewNote(false);
  };

  const handleSaveNotes = () => {
    if (notesText.trim()) {
      const student = allStudents.find(s => s.id === editingNotes.id);

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

      updateStudentNotes(editingNotes.id, updatedNotes);
    }

    setNotesText('');
    setIsAddingNewNote(false);
    setEditingNoteIndex(null);
  };

  const handleCancelNoteEdit = () => {
    setNotesText('');
    setIsAddingNewNote(false);
    setEditingNoteIndex(null);
  };

  const handleCancelEditNotes = () => {
    setEditingNotes(null);
    setNotesText('');
    setIsAddingNewNote(false);
    setEditingNoteIndex(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Title Box with Controls and Navigation */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm st">
        <div className="flex items-center justify-between px-6 py-4 border-gray-200">
          {/* Left side - Title and Description */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Interventions Tracking</h1>
            <p className="text-md text-gray-700">Monitor progress and manage interventions</p>
          </div>
          
          {/* Right side - Search, Export, Divider, and Navigation */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              width="w-64"
            />
            
            {/* Export Report Button */}
            <button className="bg-blue-600 text-white rounded-lg hover:bg-[#2F61CE] transition-colors flex items-center justify-between w-[200px] h-[50px] px-4">
              <span className="flex items-center">
                <FileText size={23.5} className="text-gray-200" />
              </span>
              <span className="font-bold">
                Export Report
              </span>
            </button>
            
            {/* Divider */}
            <div className="h-8 w-px bg-gray-300"></div>
            
            {/* Navigation */}
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
        </div>
      </div>

      {/* Interventions List */}
      <div className="px-2">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">

        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full min-w-max">
            <thead className="bg-[#F3F3F3] sticky top-0 z-10">
              <tr className="h-16">
                <th className="px-3 py-3 text-left text-sm font-bold text-black tracking-wider min-w-[110px]">
                  Student Name
                </th>
                <th className="px-2 py-3 text-left text-sm font-bold text-black tracking-wider min-w-[50px]">
                  Tier
                </th>
                <th className="px-2 py-3 text-left text-sm font-bold text-black tracking-wider min-w-[150px]">
                  Interventions
                </th>
                <th className="px-2 py-3 text-left text-sm font-bold text-black tracking-wider min-w-[100px]">
                  Case Manager
                </th>
                <th className="px-2 py-3 text-left text-sm font-bold text-black tracking-wider min-w-[120px] max-w-[120px]">
                  Notes
                </th>
                <th className="px-2 py-3 text-center text-sm font-bold text-black tracking-wider min-w-[75px]">
                  Petitions
                </th>
                <th className="px-2 py-3 text-center text-sm font-bold text-black tracking-wider min-w-[85px]">
                  Special Ed
                </th>
                <th className="px-2 py-3 text-center text-sm font-bold text-black tracking-wider min-w-[55px]">
                  504
                </th>
                <th className="px-2 py-3 text-center text-sm font-bold text-black tracking-wider min-w-[55px]">
                  IEP
                </th>
                <th className="px-2 py-3 text-center text-sm font-bold text-black tracking-wider min-w-[50px]">
                  ML
                </th>
                <th className="px-2 py-3 text-center text-sm font-bold text-black tracking-wider min-w-[55px]">
                  RTI
                </th>
                <th className="px-2 py-3 text-center text-sm font-bold text-black tracking-wider min-w-[85px]">
                  Flex Academy
                </th>
                <th className="px-2 py-3 text-center text-sm font-bold text-black tracking-wider min-w-[100px]">
                  Last Updated
                </th>
                <th className="px-2 py-3 text-center text-sm font-bold text-black tracking-wider min-w-[85px]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInterventions.map((intervention) => (
                <tr 
                  key={intervention.id} 
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-3 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        {intervention.studentName}
                      </span>
                    </div>
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-md font-bold rounded-full ${getTierColor(intervention.tier)}`}>
                      {intervention.tier}
                    </span>
                  </td>
                  <td className="px-2 py-4 text-sm text-gray-900 max-w-[120px]">
                    {intervention.intervention}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap">
                      <span className="text-sm text-black">
                        {intervention.caseManager}
                      </span>
                  </td>
                  <td className="px-2 py-4 text-sm text-gray-900 max-w-[320px]">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditNotes(intervention);
                      }}
                      className="cursor-pointer hover:bg-blue-50 p-2 -m-2 rounded transition-colors hover:outline hover:outline-2 hover:outline-blue-400"
                      title="Click to view and edit all notes"
                    >
                      <span className="truncate block">{intervention.notes}</span>
                    </div>
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-center">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                      intervention.petition === "Yes" ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {intervention.petition}
                    </span>
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-center">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                      intervention.specialEducation === "Yes" ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {intervention.specialEducation}
                    </span>
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-center">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                      intervention.plan504 === "Yes" ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {intervention.plan504}
                    </span>
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-center">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                      intervention.iep === "Yes" ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {intervention.iep}
                    </span>
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-center">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                      intervention.ml === "Yes" ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {intervention.ml}
                    </span>
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-center">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                      intervention.rti === "Yes" ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {intervention.rti}
                    </span>
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-center">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                      intervention.flexAcademy === "Yes" ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {intervention.flexAcademy}
                    </span>
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-center">
                    <div className="flex items-center justify-center text-sm text-gray-700">
                      <Calendar size={16} className="mr-1" />
                      {intervention.latestUpdate}
                    </div>
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-center">
                    <button
                      onClick={() => handleRowClick(intervention)}
                      className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      See More
                    </button>
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

      {/* Student Profile Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Student Profile</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <StudentProfileContent student={selectedStudent} onStudentUpdate={setSelectedStudent} />
            </div>
          </div>
        </div>
      )}

      {/* Notes Viewing/Editing Modal */}
      {editingNotes && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[85vh] overflow-y-auto scrollbar-hide">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Notes & Comments</h2>
                <p className="text-sm text-gray-600 mt-1">Student: {editingNotes.studentName}</p>
              </div>
              <button
                onClick={handleCancelEditNotes}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Add/Edit Note Section */}
              {(isAddingNewNote || editingNoteIndex !== null) ? (
                <div className="mb-6 space-y-4">
                  <label htmlFor="notes-textarea" className="block text-sm font-medium text-gray-700">
                    {editingNoteIndex !== null ? 'Edit Note' : 'Add New Note'}
                  </label>
                  <textarea
                    id="notes-textarea"
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
                        onClick={handleCancelNoteEdit}
                        className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSaveNotes}
                        className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Save Note
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleAddNewNote}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 mb-6 text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors border-2 border-dashed border-blue-300"
                >
                  <Plus size={16} />
                  <span>Add New Note</span>
                </button>
              )}

              {/* All Notes Display */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">All Notes</h3>
                {(() => {
                  const student = allStudents.find(s => s.id === editingNotes.id);
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
                          {(editingNoteIndex !== index && !isAddingNewNote) && (
                            <button
                              onClick={() => handleEditNote(index)}
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
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                      <p className="text-gray-500 text-sm">No notes available yet. Click "Add New Note" to create one.</p>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end p-6 border-t border-gray-200 bg-gray-50">
              <button
                onClick={handleCancelEditNotes}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterventionTracking;