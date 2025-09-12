import React, { useState, useEffect } from "react";
import { FaBitcoin, FaBuilding } from "react-icons/fa";
import "./style.css";

const IndustrySwitch = ({ onIndustryChange }) => {
  const [industry, setIndustry] = useState(localStorage.getItem("industry") || "crypto");

  const toggleIndustry = () => {
    const newIndustry = industry === "crypto" ? "business" : "crypto";
    setIndustry(newIndustry);
    localStorage.setItem("industry", newIndustry);
    if (onIndustryChange) {
      onIndustryChange(newIndustry);
    }
  };

  useEffect(() => {
    if (onIndustryChange) {
      onIndustryChange(industry);
    }
  }, [industry, onIndustryChange]);

  return (
    <div className="industry-switch-container">
      <div className="industry-switch" onClick={toggleIndustry}>
        <div className={`switch-slider ${industry === "business" ? "switched" : ""}`}>
          <div className="switch-handle">
            {industry === "crypto" ? (
              <FaBitcoin className="switch-icon" />
            ) : (
              <FaBuilding className="switch-icon" />
            )}
          </div>
          <div className="switch-labels">
            <span className={`label ${industry === "crypto" ? "active" : ""}`}>
              BANKING
            </span>
            <span className={`label ${industry === "business" ? "active" : ""}`}>
              Web3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySwitch;
