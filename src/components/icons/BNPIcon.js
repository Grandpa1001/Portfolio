import React from 'react';

const BNPIcon = ({ size = "1em" }) => {
  return (
    <img 
      src="/assets/images/bnp.png" 
      alt="BNP Logo" 
      width="112px" 
      height="112px"
      style={{ objectFit: 'contain' }}
    />
  );
};

export default BNPIcon;
