import React, { useState } from 'react';
import HomePage from './components/pages/HomePage';
import InterventionTracking from './components/pages/InterventionTracking';
import TierPage from './components/pages/TierPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'intervention':
        return <InterventionTracking onNavigate={setCurrentPage} />;
      case 'tier':
        return <TierPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;