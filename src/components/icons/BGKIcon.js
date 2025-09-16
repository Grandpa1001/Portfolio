import React from 'react';

const BGKIcon = ({ size = "1em" }) => {
  return (
    <img 
      src="/assets/images/bgk-logo.svg" 
      alt="BGK Logo" 
      width="112px" 
      height="112px"
      style={{ objectFit: 'contain' }}
    />
  );
};

export default BGKIcon;
