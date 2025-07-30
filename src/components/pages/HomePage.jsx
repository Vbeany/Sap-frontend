import React from 'react';
import { Upload, AlertTriangle, CircleAlert, CheckSquare } from 'lucide-react';

const HomePage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Student Analytics Platform</h1>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">        
        {/* Left Panel - Today's Insights with background opacity only */}
        <div className="bg-indigo-100/60 rounded-lg border border-gray-200 p-6 shadow-sm outline outline-[3px] outline-offset-[-3px] outline-purple-950/60 min-w-80 max-w-2xl">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">Today's Insights</h2>
            <p className="text-gray-600 font-semibold">7/18</p>
          </div>
          
          <div className="space-y-4 mb-6 text-center">
            <div className="py-3">
              <span className="text-gray-700 font-medium">4 Unexcused Absences</span>
            </div>
            <div className="py-3">
              <span className="text-gray-700 font-medium">2 Tier Changes</span>
            </div>
            <div className="py-3">
              <span className="text-gray-700 font-medium">3 Intervention Updates</span>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
            <Upload size={20} />
            <span>Upload Data</span>
          </button>
        </div>

        {/* Right Panel - Tier Cards */}
        <div className="space-y-4 content-center min-w-80 max-w-2xl">
          {/* Tier 3 - Red */}
          <div className=" bg-red-600 text-white rounded-lg p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div>
              <h3 className="text-lg font-semibold">Tier 3 Students</h3>
              <p className="text-red-100">Intensive Intervention</p>
            </div>
            <AlertTriangle size={24} className="text-red-200" />
          </div>

          {/* Tier 2 - Yellow */}
          <div className="bg-yellow-500 text-white rounded-lg p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div>
              <h3 className="text-lg font-semibold">Tier 2 Students</h3>
              <p className="text-yellow-100">Selected Intervention</p>
            </div>
            <CircleAlert size={24} className="text-yellow-200" />
          </div>

          {/* Tier 1 - Green */}
          <div className="bg-green-600 text-white rounded-lg p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div>
              <h3 className="text-lg font-semibold">Tier 1 Students</h3>
              <p className="text-green-100">Universal Support</p>
            </div>
            <CheckSquare size={24} className="text-green-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;