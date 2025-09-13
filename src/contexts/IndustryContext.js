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
  const [showMatrixRain, setShowMatrixRain] = useState(false);
  const [showStaircaseTransition, setShowStaircaseTransition] = useState(false);

  const changeIndustry = (newIndustry) => {
    if (isAnimating) return;

    setIsAnimating(true);

    // Animacje w zależności od kierunku
    if (newIndustry === "crypto") {
      // Banking → Web3: Matrix rain animation
      setShowMatrixRain(true);
    } else {
      // Web3 → Banking: Staircase transition animation
      setShowStaircaseTransition(true);
    }
  };

  const handleMatrixComplete = () => {
    setShowMatrixRain(false);
    setCurrentIndustry("crypto");
    localStorage.setItem("industry", "crypto");
    setIsAnimating(false);
  };

  const handleStaircaseComplete = () => {
    setShowStaircaseTransition(false);
    setCurrentIndustry("business");
    localStorage.setItem("industry", "business");
    setIsAnimating(false);
  };

  useEffect(() => {
    // Apply theme to body
    document.body.className = `${currentIndustry}-theme`;
  }, [currentIndustry]);

  const value = {
    currentIndustry,
    changeIndustry,
    isAnimating,
    showMatrixRain,
    showStaircaseTransition,
    handleMatrixComplete,
    handleStaircaseComplete,
  };

  return (
    <IndustryContext.Provider value={value}>
      {children}
    </IndustryContext.Provider>
  );
};
