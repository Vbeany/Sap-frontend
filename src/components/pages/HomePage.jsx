import React, { useRef, useState } from 'react';
import { Upload, AlertTriangle, CircleAlert, CheckSquare, FileText, X, TrendingDown, ClipboardList } from 'lucide-react';

const HomePage = ({ onNavigate }) => {
  const fileInputRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showUploadFeedback, setShowUploadFeedback] = useState(false);

  const getWeekDateRange = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - dayOfWeek);
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    const formatDate = (date) => {
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${month}/${day}`;
    };

    return `${formatDate(startOfWeek)}-${formatDate(endOfWeek)}`;
  };

  const getLastUpdated = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${month}/${day}`;
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      setShowUploadFeedback(true);
      event.target.value = '';
    }
  };

  const clearUpload = () => {
    setUploadedFile(null);
    setShowUploadFeedback(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 border-gray-200">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Student Analytics Platform</h1>
            <p className="text-md text-gray-700">Comprehensive student data and intervention management</p>
          </div>
          <nav className="flex space-x-4">
            <button
              onClick={() => onNavigate('home')}
              className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors outline-purple-950 text-md font-semibold"
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

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 py-20 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 justify-between px-12 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg border border-gray-200 py-8 px-6 shadow-sm w-full max-w-sm flex flex-col justify-center">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-semibold text-gray-800 mb-1">Week {getWeekDateRange()}</h2>
              <p className="text-3xl font-semibold text-gray-800">Insights</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">Total Tier Changes</h3>
                  <TrendingDown size={24} className="text-red-500" />
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-3xl font-bold text-gray-900">3</p>
                  <p className="text-sm text-gray-500">Last Updated {getLastUpdated()}</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">Intervention Updates</h3>
                  <ClipboardList size={24} className="text-gray-600" />
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-3xl font-bold text-gray-900">3</p>
                  <p className="text-sm text-gray-500">Last Updated {getLastUpdated()}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleUploadClick}
                className="w-52 bg-blue-600 text-lg font-medium text-white py-4 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Upload size={18} />
                <span>Upload Data</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {showUploadFeedback && uploadedFile && (
              <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FileText size={16} className="text-green-600" />
                    <div>
                      <p className="text-sm font-medium text-green-800">File Selected</p>
                      <p className="text-xs text-green-600 truncate max-w-32">{uploadedFile.name}</p>
                    </div>
                  </div>
                  <button
                    onClick={clearUpload}
                    className="text-green-600 hover:text-green-800"
                  >
                    <X size={16} />
                  </button>
                </div>
                <p className="text-xs text-green-600 mt-1">File ready for processing (not saved yet)</p>
              </div>
            )}
          </div>

          <div className="space-y-4 flex flex-col justify-center min-w-80 max-w-2xl">
            <button
              onClick={() => onNavigate('tier3')}
              type="button"
              className="bg-red-600 text-white rounded-lg p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full"
              aria-label="View Tier 3 Students"
            >
              <div>
                <h3 className="text-lg font-semibold">Tier 3 Students</h3>
                <p className="text-red-100">Intensive Intervention</p>
              </div>
              <AlertTriangle size={24} className="text-red-200" />
            </button>

            <button
              onClick={() => onNavigate('tier2')}
              type="button"
              className="bg-yellow-500 text-white rounded-lg p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full"
              aria-label="View Tier 2 Students"
            >
              <div>
                <h3 className="text-lg font-semibold">Tier 2 Students</h3>
                <p className="text-yellow-100">Selected Intervention</p>
              </div>
              <CircleAlert size={24} className="text-yellow-200" />
            </button>

            <button
              onClick={() => onNavigate('tier')}
              type="button"
              className="bg-green-600 text-white rounded-lg p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full"
              aria-label="View Tier 1 Students"
            >
              <div>
                <h3 className="text-lg font-semibold">Tier 1 Students</h3>
                <p className="text-green-100">Universal Support</p>
              </div>
              <CheckSquare size={24} className="text-green-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;