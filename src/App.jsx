import React, { useState, useEffect } from 'react';
import HomePage from './components/pages/HomePage';
import InterventionTracking from './components/pages/InterventionTracking';
import TierPage from './components/pages/TierPage';
import StudentProfile from './components/student/StudentProfile';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [previousPage, setPreviousPage] = useState('home');
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state) {
        setCurrentPage(event.state.page);
        setSelectedStudentId(event.state.studentId);
        setPreviousPage(event.state.previousPage);
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Set initial state
    window.history.replaceState({
      page: currentPage,
      studentId: selectedStudentId,
      previousPage: previousPage
    }, '', '');

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [currentPage, selectedStudentId, previousPage]);

  const handleNavigation = (page, studentId = null) => {
    setPreviousPage(currentPage);
    setCurrentPage(page);
    setSelectedStudentId(studentId);
    
    // Push new state to browser history
    window.history.pushState({
      page: page,
      studentId: studentId,
      previousPage: currentPage
    }, '', '');
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'intervention':
        return <InterventionTracking onNavigate={handleNavigation} />;
      case 'tier':
        return <TierPage tierNumber={1} onNavigate={handleNavigation} />;
      case 'tier2':
        return <TierPage tierNumber={2} onNavigate={handleNavigation} />;
      case 'tier3':
        return <TierPage tierNumber={3} onNavigate={handleNavigation} />;
      case 'student-profile':
        return <StudentProfile studentId={selectedStudentId} onNavigate={handleNavigation} />;
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