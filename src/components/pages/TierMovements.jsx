import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { tierMovements } from '../../data/mockStudents';

const TierMovements = ({ onNavigate }) => {
  // Week navigation state
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);

  
  const getCurrentWeekRange = () => {
    const today = new Date();
    
    const referenceDate = new Date(today);
    referenceDate.setDate(today.getDate() + (currentWeekOffset * 7));

    
    const dayOfWeek = referenceDate.getDay();
    const weekStart = new Date(referenceDate);
    
    const daysToFriday = (dayOfWeek + 2) % 7; 
    weekStart.setDate(referenceDate.getDate() - daysToFriday);

    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);

    return {
      start: weekStart,
      end: weekEnd
    };
  };

  const formatWeekRange = () => {
    const { start, end } = getCurrentWeekRange();
    const startMonth = start.getMonth() + 1;
    const startDay = start.getDate();
    const endMonth = end.getMonth() + 1;
    const endDay = end.getDate();

    return `Week ${startMonth}/${startDay} - ${endMonth}/${endDay}`;
  };

  // Helper function to get tier color class
  const getTierColorClass = (tier) => {
    switch (tier) {
      case 1:
        return 'text-[#4CAF50]';
      case 2:
        return 'text-[#D9C702]';
      case 3:
        return 'text-[#B70606]';
      default:
        return 'text-gray-600';
    }
  };

  const handlePreviousWeek = () => {
    setCurrentWeekOffset(currentWeekOffset - 1);
  };

  const handleNextWeek = () => {
    setCurrentWeekOffset(currentWeekOffset + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Box with Navigation */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 border-gray-200">
          {/* Left side - Title and Description */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Tier Movements</h1>
            <p className="text-md text-gray-700">Track student tier changes over time</p>
          </div>

          {/* Right side - Week Navigation, Divider, and Page Navigation */}
          <div className="flex items-center space-x-4">
            {/* Week Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePreviousWeek}
                className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
                aria-label="Previous week"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>

              <div className="text-xl font-semibold text-gray-900 min-w-[220px] text-center">
                {formatWeekRange()}
              </div>

              <button
                onClick={handleNextWeek}
                className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
                aria-label="Next week"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>

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
              <button
                onClick={() => onNavigate('intervention')}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors outline-purple-950 text-md font-semibold"
              >
                Intervention Tracking
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="px-2">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full min-w-max">
              <thead className="bg-[#F3F3F3] sticky top-0 z-10">
                <tr className="h-16">
                  <th className="pl-3 pr-1 py-3 text-left text-sm font-bold text-black tracking-wider min-w-[250px]">
                    Student Name
                  </th>
                  <th className="pl-2 pr-1 py-3 text-left text-sm font-bold text-black tracking-wider min-w-[250px]">
                    Grade
                  </th>
                  <th className="pl-2 pr-1 py-3 text-left text-sm font-bold text-black tracking-wider min-w-[250px]">
                    Previous Tier
                  </th>
                  <th className="pl-2 pr-1 py-3 text-left text-sm font-bold text-black tracking-wider min-w-[250px]">
                    New Tier
                  </th>
                  <th className="pl-2 pr-1 py-3 text-left text-sm font-bold text-black tracking-wider min-w-[250px]">
                    Reason
                  </th>
                  <th className="pl-2 pr-1 py-3 text-left text-sm font-bold text-black tracking-wider min-w-[250px]">
                    Last Updated
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tierMovements.length > 0 ? (
                  tierMovements.map((movement) => (
                    <tr
                      key={movement.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="pl-3 pr-1 py-3 whitespace-nowrap">
                        <span className="text-sm font-medium text-gray-900">
                          {movement.studentName}
                        </span>
                      </td>
                      <td className="pl-2 pr-1 py-3 whitespace-nowrap">
                        <span className="text-sm text-black">
                          {movement.grade}
                        </span>
                      </td>
                      <td className="pl-2 pr-1 py-3 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-md font-bold rounded-full ${getTierColorClass(movement.previousTier)}`}>
                          {movement.previousTier}
                        </span>
                      </td>
                      <td className="pl-2 pr-1 py-3 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-md font-bold rounded-full ${getTierColorClass(movement.newTier)}`}>
                          {movement.newTier}
                        </span>
                      </td>
                      <td className="pl-2 pr-1 py-3 text-sm text-gray-900">
                        {movement.reason}
                      </td>
                      <td className="pl-2 pr-1 py-3 whitespace-nowrap">
                        <span className="text-sm text-black">
                          {movement.lastUpdated}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                      No tier movements recorded for this week
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TierMovements;
