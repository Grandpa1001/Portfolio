import React, { createContext, useContext, useState, useEffect } from 'react';

const IndustryContext = createContext();

export const useIndustry = () => {
  const context = useContext(IndustryContext);
  if (!context) {
    throw new Error('useIndustry must be used within an IndustryProvider');
  }
  return context;
};

export const IndustryProvider = ({ children }) => {
  const [currentIndustry, setCurrentIndustry] = useState(
    localStorage.getItem("industry") || "crypto"
  );
  const [isAnimating, setIsAnimating] = useState(false);

  const changeIndustry = (newIndustry) => {
    if (isAnimating) return;

    setIsAnimating(true);
    
    // Prosta zmiana industry bez animacji
    setCurrentIndustry(newIndustry);
    localStorage.setItem("industry", newIndustry);
    
    // Krótkie opóźnienie żeby zapobiec wielokrotnym kliknięciom
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    // Apply theme to body
    document.body.className = `${currentIndustry}-theme`;
  }, [currentIndustry]);

  const value = {
    currentIndustry,
    changeIndustry,
    isAnimating,
  };

  return (
    <IndustryContext.Provider value={value}>
      {children}
    </IndustryContext.Provider>
  );
};
