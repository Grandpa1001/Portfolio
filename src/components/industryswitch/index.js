import React from "react";
import { FaBitcoin, FaBuilding } from "react-icons/fa";
import { useIndustry } from "../../contexts/IndustryContext";
import "./style.css";

const IndustrySwitch = ({ onIndustryChange }) => {
  const { currentIndustry, changeIndustry, isAnimating } = useIndustry();

  const toggleIndustry = () => {
    if (isAnimating) return;
    
    const newIndustry = currentIndustry === "crypto" ? "business" : "crypto";
    changeIndustry(newIndustry);
    if (onIndustryChange) {
      onIndustryChange(newIndustry);
    }
  };

  return (
    <div className={`industry-switch-container ${isAnimating ? 'hidden' : ''}`}>
      <div 
        className="industry-switch" 
        onClick={toggleIndustry}
      >
        <div className={`switch-slider ${currentIndustry === "business" ? "switched" : ""}`}>
          <div className="switch-handle">
            {currentIndustry === "crypto" ? (
              <FaBitcoin className="switch-icon" />
            ) : (
              <FaBuilding className="switch-icon" />
            )}
          </div>
          <div className="switch-labels">
            <span className={`label ${currentIndustry === "crypto" ? "active" : ""}`}>
              BANKING
            </span>
            <span className={`label ${currentIndustry === "business" ? "active" : ""}`}>
              Web3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySwitch;
