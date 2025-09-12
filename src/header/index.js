import React from "react";
import "./style.css";
import { logotext } from "../content_option";
import IndustrySwitch from "../components/industryswitch";
import { useIndustry } from "../contexts/IndustryContext";

const Headermain = () => {
  const { changeIndustry } = useIndustry();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <button 
            className="navbar-brand nav_ac" 
            onClick={() => scrollToSection("home")}
            style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
          >
            {logotext}
          </button>
          <div className="d-flex align-items-center">
            <IndustrySwitch onIndustryChange={changeIndustry} />
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
