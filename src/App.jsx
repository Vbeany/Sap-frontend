import React, { useState } from 'react';
import HomePage from './components/pages/HomePage';
import InterventionTracking from './components/pages/InterventionTracking';
import TierPage from './components/pages/TierPage';
import StudentProfile from './components/student/StudentProfile';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [previousPage, setPreviousPage] = useState('home');
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  const handleNavigation = (page, studentId = null) => {
    setPreviousPage(currentPage);
    setCurrentPage(page);
    setSelectedStudentId(studentId);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'intervention':
        return <InterventionTracking onNavigate={handleNavigation} previousPage={previousPage} />;
      case 'tier':
        return <TierPage tierNumber={1} onNavigate={handleNavigation} />;
      case 'tier2':
        return <TierPage tierNumber={2} onNavigate={handleNavigation} />;
      case 'tier3':
        return <TierPage tierNumber={3} onNavigate={handleNavigation} />;
      case 'student-profile':
        return <StudentProfile studentId={selectedStudentId} onNavigate={handleNavigation} previousPage={previousPage} />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;