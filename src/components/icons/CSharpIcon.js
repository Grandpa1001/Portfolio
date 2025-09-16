import React from 'react';

const CSharpIcon = ({ size = "3em", color = "currentColor" }) => {
  return (
    <svg 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 80 80"
      data-icon="csharp"
    >
      <text 
        transform="matrix(1 0 0 1 20 50)" 
        x="0" 
        y="0" 
        fill={color} 
        fontFamily="Arial, sans-serif" 
        fontSize="24" 
        fontWeight="bold"
      >
        C#
      </text>
    </svg>
  );
};

export default CSharpIcon;
