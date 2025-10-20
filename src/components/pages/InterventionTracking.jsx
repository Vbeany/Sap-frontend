import React, { useState, useEffect } from 'react';
import { FileText, Calendar, User, AlertCircle, X, GraduationCap, TrendingUp, Edit3 } from 'lucide-react';
import SearchBar from '../common/SearchBar';
import { getAllStudents } from '../../data/mockStudents';
import StudentProfileContent from '../student/StudentProfileContent';

const InterventionTracking = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editingNotes, setEditingNotes] = useState(null);
  const [notesText, setNotesText] = useState('');
  const [studentsData, setStudentsData] = useState(() => getAllStudents());

  const allStudents = studentsData;
  const studentsWithInterventions = allStudents.sort((a, b) => b.tier - a.tier);

  const interventions = studentsWithInterventions.map(student => ({
    id: student.id,
    studentName: student.name,
    tier: student.tier,
    intervention: student.activeInterventions || "N/A",
    caseManager: student.caseManager || "Not assigned",
    notes: student.interventionNotes || "No notes available",
    petition: student.petition !== undefined ? (student.petition ? "Yes" : "No") : "No",
    specialEducation: student.specialEducation !== undefined ? (student.specialEducation ? "Yes" : "No") : "No",
    plan504: student.plan504 !== undefined ? (student.plan504 ? "Yes" : "No") : "No",
    iep: student.iep !== undefined ? (student.iep ? "Yes" : "No") : "No",
    ml: student.ml !== undefined ? (student.ml ? "Yes" : "No") : "No",
    rti: student.rti !== undefined ? (student.rti ? "Yes" : "No") : "No",
    flexAcademy: student.flexAcademy !== undefined ? (student.flexAcademy ? "Yes" : "No") : "No",
    startDate: student.interventionStartDate || "Not specified",
    status: "Active",
    progress: student.interventionProgress && student.interventionProgress.length > 0
      ? (student.interventionProgress.some(int => int.status === "Needs Attention") ? "Needs Attention" :
         student.interventionProgress.every(int => int.status === "Completed") ? "Completed" : "In Progress")
      : "N/A",
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
    setNotesText(intervention.notes || '');
    document.body.style.overflow = 'hidden';
  };

  const handleSaveNotes = () => {
    updateStudentNotes(editingNotes.id, notesText);

    setEditingNotes(null);
    setNotesText('');
    document.body.style.overflow = 'unset';
  };

  const handleCancelEditNotes = () => {
    setEditingNotes(null);
    setNotesText('');
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
      <div className="flex justify-center px-4">
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
                <th className="px-2 py-3 text-center text-md font-bold text-black tracking-wider w-28">
                  Petitions
                </th>
                <th className="px-2 py-3 text-center text-md font-bold text-black tracking-wider w-32">
                  Special Education
                </th>
                <th className="px-2 py-3 text-center text-md font-bold text-black tracking-wider w-24">
                  504
                </th>
                <th className="px-2 py-3 text-center text-md font-bold text-black tracking-wider w-24">
                  IEP
                </th>
                <th className="px-2 py-3 text-center text-md font-bold text-black tracking-wider w-24">
                  ML
                </th>
                <th className="px-2 py-3 text-center text-md font-bold text-black tracking-wider w-24">
                  RTI
                </th>
                <th className="px-2 py-3 text-center text-md font-bold text-black tracking-wider w-28">
                  Flex Academy
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