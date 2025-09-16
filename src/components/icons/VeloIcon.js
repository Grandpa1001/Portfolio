import React from 'react';

const VeloIcon = ({ size = "1em" }) => {
  return (
    <img 
      src="/assets/images/Velo.png" 
      alt="Velo Logo" 
      width="112px" 
      height="112px"
      style={{ objectFit: 'contain' }}
    />
  );
};

export default VeloIcon;
