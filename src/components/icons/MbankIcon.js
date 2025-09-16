import React from 'react';

const MbankIcon = ({ size = "1em" }) => {
  return (
    <img 
      src="/assets/images/mbank.jpg" 
      alt="mBank Logo" 
      width="112px" 
      height="112px"
      style={{ objectFit: 'contain' }}
    />
  );
};

export default MbankIcon;
