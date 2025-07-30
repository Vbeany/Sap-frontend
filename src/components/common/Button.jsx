// src/components/common/Button.jsx
import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  className = '',
  disabled = false,
  icon: Icon,
  ...props 
}) => {
  const baseClasses = "font-medium rounded-lg transition-colors focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
    black: "bg-black text-white hover:bg-gray-800 focus:ring-gray-500",
    outline: "border-2 border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
  };
  
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${Icon ? 'flex items-center space-x-2' : ''}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
      <span>{children}</span>
    </button>
  );
};

export default Button;