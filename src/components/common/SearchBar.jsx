// src/components/common/SearchBar.jsx
import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ 
  searchTerm, 
  onSearchChange, 
  placeholder = "Search for students...",
  width = "w-80",
  className = ""
}) => {
  return (
    <div className={`relative ${className}`}>
      
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className={`pr-10 pl-4 py-2 border ${width} border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`} 
      />
      <Search size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default SearchBar;