import React from 'react';

const RedmineIcon = ({ size = "1em", color = "currentColor" }) => {
  return (
    <svg 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 80 80"
    >
      <text 
        transform="matrix(1 0 0 1 5 45)" 
        x="0" 
        y="0" 
        fill={color} 
        fontFamily="Arial, sans-serif" 
        fontSize="16" 
        fontWeight="bold"
      >
        REDMINE
      </text>
    </svg>
  );
};

export default RedmineIcon;
