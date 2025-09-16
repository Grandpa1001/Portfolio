import React from 'react';
import BGKIcon from '../icons/BGKIcon';
import BlueSoftIcon from '../icons/BlueSoftIcon';
import PretiusIcon from '../icons/PretiusIcon';
import DomDataIcon from '../icons/DomDataIcon';
import INGIcon from '../icons/INGIcon';
import MbankIcon from '../icons/MbankIcon';
import VeloIcon from '../icons/VeloIcon';
import BNPIcon from '../icons/BNPIcon';
import './style.css';

const CompaniesWorkedWith = ({ companies }) => {
  const getLogoComponent = (logoName) => {
    switch (logoName) {
      case 'BGKIcon':
        return BGKIcon;
      case 'BlueSoftIcon':
        return BlueSoftIcon;
      case 'PretiusIcon':
        return PretiusIcon;
      case 'DomDataIcon':
        return DomDataIcon;
      case 'INGIcon':
        return INGIcon;
      case 'MbankIcon':
        return MbankIcon;
      case 'VeloIcon':
        return VeloIcon;
      case 'BNPIcon':
        return BNPIcon;
      default:
        return null;
    }
  };

  return (
    <div className="companies-section">
      <h3 className="color_sec py-4 text-center">Doświadczenie</h3>
      <div className="companies-table">
        {companies.map((company, index) => {
          const LogoComponent = getLogoComponent(company.logo);
          return (
            <div key={index} className="company-logo-item">
              {LogoComponent && (
                <LogoComponent 
                  size="112px" 
                  color="var(--secondary-color)" 
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompaniesWorkedWith;
