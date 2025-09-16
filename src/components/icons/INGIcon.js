import React from 'react';

const INGIcon = ({ size = "1em" }) => {
  return (
    <img 
      src="/assets/images/ING.png" 
      alt="ING Logo" 
      width="112px" 
      height="112px"
      style={{ objectFit: 'contain' }}
    />
  );
};

export default INGIcon;
