import React, { useState, useEffect } from "react";
import "./style.css";
import { logotext } from "../content_option";
import IndustrySwitch from "../components/industryswitch";
import { useIndustry } from "../contexts/IndustryContext";

const Headermain = () => {
  const { changeIndustry } = useIndustry();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`fixed-top site__header ${!isHeaderVisible ? 'header-hidden' : ''}`}>
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
    </>
  );
};

export default Headermain;
