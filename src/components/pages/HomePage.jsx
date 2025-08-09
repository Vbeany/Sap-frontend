import React from 'react';
import { Upload, AlertTriangle, CircleAlert, CheckSquare } from 'lucide-react';

const HomePage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center justify-end">
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
      </header>

      {/* Title Box */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm ">
        <div className="px-6 py-4 border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Student Analytics Platform</h1>
          <p className="text-md text-gray-700">Comprehensive student data and intervention management</p>
        </div>
      </div>

      {/* Main Content Box */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 py-20 max-w-6xl mx-auto">
        
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 justify-between px-12 max-w-4xl mx-auto">        
          {/* Left Panel - Today's Insights */}
          <div className="bg-indigo-100/60 rounded-lg border border-gray-200 py-16 px-4 shadow-sm outline outline-[3px] outline-offset-[-3px] outline-purple-950/60 w-full max-w-sm flex flex-col justify-center">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-1">Today's Insights</h2>
              <p className="text-2xl font-semibold text-gray-800 mb-1">7/18</p>
            </div>
            <div className="space-y-2 mb-6 flex flex-col items-center">
              <div className="text-left">
                <div className="py-2">
                  <span className="text-gray-700 font-normal text-lg">4 Unexcused Absences</span>
                </div>
                <div className="py-2">
                  <span className="text-gray-700 font-normal text-lg">2 Tier Changes</span>
                </div>
                <div className="py-2">
                  <span className="text-gray-700 font-normal text-lg">3 Intervention Updates</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="w-52 bg-blue-600 text-lg font-medium text-white py-4 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                <Upload size={18} />
                <span>Upload Data</span>
              </button>
            </div>
          </div>

          {/* Right Panel - Tier Cards */}
          <div className="space-y-4 flex flex-col justify-center min-w-80 max-w-2xl ">
            {/* Tier 3 - Red */}
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

            {/* Tier 2 - Yellow */}
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

            {/* Tier 1 - Green */}
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