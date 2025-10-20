import React, { useState, useEffect } from 'react';
import { FileText, Calendar, User, AlertCircle, X, GraduationCap, TrendingUp, Edit3 } from 'lucide-react';
import SearchBar from '../common/SearchBar';
import { getAllStudents } from '../../data/mockStudents';

const InterventionTracking = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editingNotes, setEditingNotes] = useState(null);
  const [notesText, setNotesText] = useState('');
  const [editingModalNotes, setEditingModalNotes] = useState(false);
  const [modalNotesText, setModalNotesText] = useState('');
  const [studentsData, setStudentsData] = useState(() => getAllStudents());

  const allStudents = studentsData;
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

  const handleRowClick = (intervention) => {
    const student = allStudents.find(s => s.id === intervention.id);
    setSelectedStudent(student);
    // Disable body scroll when modal opens
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedStudent(null);
    setEditingModalNotes(false);
    setModalNotesText('');
    // Re-enable body scroll when modal closes
    document.body.style.overflow = 'unset';
  };

  // Helper functions for modal
  const getTierColorForModal = (tier) => {
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

  // Function to update student notes in the main data state
  const updateStudentNotes = (studentId, newNotes) => {
    setStudentsData(prevStudents => 
      prevStudents.map(student => 
        student.id === studentId 
          ? { ...student, interventionNotes: newNotes }
          : student
      )
    );
  };

  // Notes editing functions
  const handleEditNotes = (intervention) => {
    setEditingNotes(intervention);
    setNotesText(intervention.notes || '');
    document.body.style.overflow = 'hidden';
  };

  const handleSaveNotes = () => {
    // Update the main students data state
    updateStudentNotes(editingNotes.id, notesText);
    
    setEditingNotes(null);
    setNotesText('');
    document.body.style.overflow = 'unset';
    
    // Note: In a real application, you would save this to your backend here
    console.log('Updated notes for student:', editingNotes.studentName, 'Notes:', notesText);
  };

  const handleCancelEditNotes = () => {
    setEditingNotes(null);
    setNotesText('');
    document.body.style.overflow = 'unset';
  };

  // Modal notes editing functions
  const handleEditModalNotes = () => {
    setEditingModalNotes(true);
    setModalNotesText(selectedStudent.interventionNotes || '');
  };

  const handleSaveModalNotes = () => {
    // Update the main students data state
    updateStudentNotes(selectedStudent.id, modalNotesText);
    

    setSelectedStudent(prev => ({
      ...prev,
      interventionNotes: modalNotesText
    }));
    
    setEditingModalNotes(false);
    setModalNotesText('');
    
  
    console.log('Updated modal notes for student:', selectedStudent.name, 'Notes:', modalNotesText);
  };

  const handleCancelEditModalNotes = () => {
    setEditingModalNotes(false);
    setModalNotesText('');
  };

  // Cleanup effect to restore body scroll if component unmounts with modal open
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
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full">
            <thead className="bg-[#F3F3F3] sticky top-0 z-10">
              <tr className="h-16">
                <th className="px-6 py-3 text-left text-md font-bold text-black tracking-wider w-40">
                  Student Name
                </th>
                <th className="px-2 py-3 text-left text-md font-bold text-black tracking-wider w-20">
                  Tier
                </th>
                <th className="px-2 py-3 text-left text-md font-bold text-black tracking-wider w-72">
                  Interventions
                </th>
                <th className="px-2 py-3 text-left text-md font-bold text-black tracking-wider w-40">
                  Case Manager
                </th>
                <th className="px-2 py-3 text-left text-md font-bold text-black tracking-wider w-40">
                  Progress
                </th>
                <th className="px-2 py-3 text-left text-md font-bold text-black tracking-wider w-64">
                  Notes
                </th>
                <th className="px-2 py-3 text-center text-md font-bold text-black tracking-wider w-40">
                  Last Updated
                </th>
                <th className="px-2 py-3 text-center text-md font-bold text-black tracking-wider w-32">
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
                  <td className="pl-6 pr-2 py-4 whitespace-nowrap">
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
                  <td className="px-2 py-4 text-sm text-gray-900 max-w-xs">
                    {intervention.intervention}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap">
                      <span className="text-sm text-black">
                        {intervention.caseManager}
                      </span>
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(intervention.progress)}`}>
                      {intervention.progress}
                    </span>
                  </td>
                  <td className="px-2 py-4 text-sm text-gray-900 max-w-xs">
                    <div className="flex items-center justify-between group">
                      <span className="truncate pr-2">{intervention.notes}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditNotes(intervention);
                        }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-gray-400 hover:text-blue-600"
                        title="Edit notes"
                      >
                        <Edit3 size={14} />
                      </button>
                    </div>
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
              {/* Student Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-2xl">
                        {selectedStudent.initials}
                      </span>
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-gray-900 mb-1">{selectedStudent.name}</h1>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <div className="flex items-center space-x-1">
                          <GraduationCap size={16} />
                          <span className="text-sm font-light text-gray-900">Grade {selectedStudent.grade}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Tier Badge */}
                  <div className="flex items-center">
                    <span className={`px-8 py-2 rounded-md text-sm font-medium ${getTierColorForModal(selectedStudent.tier)}`}>
                      Tier {selectedStudent.tier}
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <h3 className="text-lg font-medium text-black mb-2">GPA</h3>
                  <p className={`text-2xl font-bold ${getGpaColor(selectedStudent.gpa)}`}>
                    {selectedStudent.gpa}
                  </p>
                  <p className="text-sm text-gray-500">Current semester</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-medium text-black mb-2">Unexcused Absences</h3>
                  <p className="text-2xl font-bold text-red-500">
                    {selectedStudent.unexcusedAbsences}
                  </p>
                  <p className="text-sm text-gray-500">This academic year</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-medium text-black mb-2">Attendance Rate</h3>
                  <p className={`text-2xl font-bold ${getAttendanceColor(selectedStudent.attendanceRate)}`}>
                    {selectedStudent.attendanceRate}%
                  </p>
                  <p className="text-sm text-gray-500">This academic year</p>
                </div>
              </div>

              {/* Unexcused Absences Details */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center space-x-2 mb-3">
                  <Calendar size={18} />
                  <span>Unexcused Absences</span>
                </h2>
                {selectedStudent.absenceDetails && selectedStudent.absenceDetails.length > 0 ? (
                  <div className="max-h-32 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedStudent.absenceDetails.map((absence, index) => (
                        <div key={index} className="flex items-center space-x-4 py-1">
                          <span className="font-semibold text-red-600 min-w-[100px]">
                            {formatDate(absence.date)}
                          </span>
                          <span className="text-red-600 text-sm">{absence.reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-4">No unexcused absences recorded</p>
                )}
              </div>

              {/* Intervention Progress */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center space-x-2 mb-3">
                  <TrendingUp size={18} />
                  <span>Intervention Progress</span>
                </h2>
                {selectedStudent.interventionProgress && selectedStudent.interventionProgress.length > 0 ? (
                  <div className="space-y-3">
                    {selectedStudent.interventionProgress.map((intervention, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 mb-1">{intervention.name}</h3>
                            <p className="text-gray-600 text-sm">{intervention.description}</p>
                          </div>
                          <div className="ml-4">
                            <span className={`px-3 py-1 rounded-md text-xs font-medium ${
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
                  <p className="text-gray-500 text-center py-4">No interventions currently active</p>
                )}
              </div>

              {/* Notes Section */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    <FileText size={18} />
                    <span>Notes & Comments</span>
                  </h2>
                  {!editingModalNotes && (
                    <button
                      onClick={handleEditModalNotes}
                      className="flex items-center space-x-1 px-3 py-1 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                    >
                      <Edit3 size={14} />
                      <span>Edit</span>
                    </button>
                  )}
                </div>
                
                {editingModalNotes ? (
                  <div className="space-y-4">
                    <textarea
                      value={modalNotesText}
                      onChange={(e) => setModalNotesText(e.target.value)}
                      placeholder="Enter intervention notes and observations..."
                      className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      autoFocus
                    />
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500">
                        Character count: {modalNotesText.length}
                      </p>
                      <div className="flex space-x-2">
                        <button
                          onClick={handleCancelEditModalNotes}
                          className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSaveModalNotes}
                          className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  selectedStudent.interventionNotes ? (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <User size={14} className="text-blue-600" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-sm font-medium text-gray-900">
                              {selectedStudent.caseManager || 'Case Manager'}
                            </span>
                            <span className="text-xs text-gray-500">
                              {selectedStudent.lastUpdated || 'Recently'}
                            </span>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {selectedStudent.interventionNotes}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                      <p className="text-gray-500 text-sm">No notes available. Click "Edit" to add notes.</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notes Editing Modal */}
      {editingNotes && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Edit Notes</h2>
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
              <label htmlFor="notes-textarea" className="block text-sm font-medium text-gray-700 mb-2">
                Intervention Notes
              </label>
              <textarea
                id="notes-textarea"
                value={notesText}
                onChange={(e) => setNotesText(e.target.value)}
                placeholder="Enter intervention notes and observations..."
                className="w-full h-64 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                autoFocus
              />
              <p className="text-xs text-gray-500 mt-2">
                Character count: {notesText.length}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
              <button
                onClick={handleCancelEditNotes}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNotes}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save Notes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterventionTracking;