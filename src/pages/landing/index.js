import React, { useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { Container, Row, Col } from "react-bootstrap";
import {
  industryContent,
} from "../../content_option";
import { useIndustry } from "../../contexts/IndustryContext";
import * as SiIcons from "react-icons/si";
import GitIcon from "../../components/icons/GitIcon";
import ReactIcon from "../../components/icons/ReactIcon";
import FirebaseIcon from "../../components/icons/FirebaseIcon";
import MacOSIcon from "../../components/icons/MacOSIcon";
import CursorIcon from "../../components/icons/CursorIcon";
import VSCodeIcon from "../../components/icons/VSCodeIcon";
import SQLIcon from "../../components/icons/SQLIcon";
import FerrytIcon from "../../components/icons/FerrytIcon";
import JiraIcon from "../../components/icons/JiraIcon";
import RedmineIcon from "../../components/icons/RedmineIcon";
import CSharpIcon from "../../components/icons/CSharpIcon";
import CompaniesWorkedWith from "../../components/CompaniesWorkedWith";

export const Landing = () => {
  const { currentIndustry } = useIndustry();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentContent = industryContent[currentIndustry];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Trigger transition effect when industry changes
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [currentIndustry]);

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{currentContent.meta.title}</title>
        <meta name="description" content={currentContent.meta.description} />
      </Helmet>

      {/* Home Section */}
      <section id="home" className={`home ${isTransitioning ? 'transitioning' : ''}`}>
        <div className="intro_sec d-block d-lg-flex align-items-center">
          <div className="h_bg-image order-1 order-lg-2 d-flex justify-content-center align-items-center">
            <img 
              src={currentContent.introdata.your_img_url} 
              alt={currentContent.introdata.title}
              className="profile-image"
            />
          </div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center">
              <div className="intro mx-auto">
                {currentIndustry === 'crypto' ? (
                  <div className="logo-container mb-1x">
                    <img 
                      src="/assets/images/mgrGraczIntroWhite.svg" 
                      alt="Logo" 
                      className="logo-svg"
                    />
                  </div>
                ) : (
                  <h2 className="mb-1x">{currentContent.introdata.title}</h2>
                )}
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    key={currentIndustry}
                    options={{
                      strings: [
                        currentContent.introdata.animated.first,
                        currentContent.introdata.animated.second,
                        currentContent.introdata.animated.third,
                        currentContent.introdata.animated.fourth,
                        currentContent.introdata.animated.fifth,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{currentContent.introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="ac_btn btn"
                    id="button_p"
                  >
                    Zobacz Portfolio
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="ac_btn btn"
                    id="button_h"
                  >
                    O Mnie
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </button>
                </div>
                {currentIndustry === 'business' && (
                  <div className="buycoffee-mobile">
                    <a 
                      href="https://buycoffee.to/mgrgracz" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Postaw mi kawę"
                    >
                      <img 
                        src="https://buycoffee.to/img/share-button-white.png" 
                        alt="Postaw mi kawę na buycoffee.to" 
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BuyCoffee widget - only for Banking theme (placed at end to allow bottom positioning) */}
      {currentIndustry === 'business' && (
        <div className="buycoffee-container">
          <a 
            href="https://buycoffee.to/mgrgracz" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="buycoffee-widget"
            aria-label="Postaw mi kawę"
          >
            <img 
              src="/assets/images/Logo-sygnet.png" 
              alt="Postaw mi kawę na buycoffee.to" 
            />
          </a>
        </div>
      )}

      {/* About Section */}
      <section id="about" className={`about-section ${isTransitioning ? 'transitioning' : ''}`}>
        <Container className="About-header">
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">About me</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          {currentIndustry === 'business' && (
            <a 
              href="https://buycoffee.to/mgrgracz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="buycoffee-widget"
              aria-label="Postaw mi kawę"
            >
              <img 
                src="/assets/images/Logo-sygnet.png" 
                alt="Postaw mi kawę na buycoffee.to" 
              />
            </a>
          )}
          <Row className="sec_sp">
            <Col lg="12">
              <h3 className="color_sec py-4 text-center">
                {currentContent.dataabout.title}
              </h3>
              <div className="about-content-card">
                <p>{currentContent.dataabout.aboutme}</p>
              </div>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="12">
              <h3 className="color_sec py-4 text-center">
                Umiejętności
              </h3>
              {currentContent.skills && (currentContent.skills.mainTechnologies || currentContent.skills.technologies) ? (
                <div>
                  {/* Główne technologie - tylko dla Banking */}
                  {currentContent.skills.mainTechnologies && (
                    <div className="main-technologies-grid">
                      {currentContent.skills.mainTechnologies.map((tech, index) => (
                        <div key={index} className={`main-technology-item ${index === 0 ? 'first-item' : 'second-item'}`}>
                          {tech.icon.startsWith('/') ? (
                            <img 
                              src={tech.icon} 
                              alt={tech.name}
                              className="main-technology-image"
                            />
                          ) : (
                            <FerrytIcon size="16em" color="#0E655D" />
                          )}
                          {tech.name && <div className="main-technology-name">{tech.name}</div>}
                          <div className="main-technology-description">{tech.description}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Małe ikonki - dla Web3 i Banking */}
                  {currentContent.skills.technologies && (
                    <div className="technologies-grid">
                      {currentContent.skills.technologies.map((tech, index) => {
                        let IconComponent;
                        
                        // Sprawdź czy to nasza własna ikona czy React Icon
                        if (tech.icon === "GitIcon") {
                          IconComponent = GitIcon;
                        } else if (tech.icon === "ReactIcon") {
                          IconComponent = ReactIcon;
                        } else if (tech.icon === "FirebaseIcon") {
                          IconComponent = FirebaseIcon;
                        } else if (tech.icon === "MacOSIcon") {
                          IconComponent = MacOSIcon;
                        } else if (tech.icon === "CursorIcon") {
                          IconComponent = CursorIcon;
                        } else if (tech.icon === "VSCodeIcon") {
                          IconComponent = VSCodeIcon;
                        } else if (tech.icon === "SQLIcon") {
                          IconComponent = SQLIcon;
                        } else if (tech.icon === "FerrytIcon") {
                          IconComponent = FerrytIcon;
                        } else if (tech.icon === "JiraIcon") {
                          IconComponent = JiraIcon;
                        } else if (tech.icon === "RedmineIcon") {
                          IconComponent = RedmineIcon;
                        } else if (tech.icon === "CSharpIcon") {
                          IconComponent = CSharpIcon;
                        } else {
                          IconComponent = SiIcons[tech.icon];
                        }
                        
                        // Sprawdź czy komponent istnieje
                        if (!IconComponent) {
                          IconComponent = () => <div>❌</div>; // Fallback icon
                        }
                        
                        return (
                          <div 
                            key={index} 
                            className="technology-icon" 
                            title={`${tech.name}: ${tech.description}`}
                            data-tooltip={tech.description}
                          >
                            <IconComponent />
                            <div className="tooltip">
                              <div className="tooltip-title">{tech.name}</div>
                              <div className="tooltip-description">{tech.description}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : currentContent.skills && Array.isArray(currentContent.skills) ? (
                <div className="legacy-skills">
                  {currentContent.skills.map((data, i) => {
                    return (
                      <div key={i}>
                        <h3 className="progress-title">{data.name}</h3>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            style={{
                              width: `${data.value}%`,
                            }}
                          >
                            <div className="progress-value">{data.value}%</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </Col>
          </Row>
          
          {/* Tools Section */}
          {currentContent.tools && currentContent.tools.technologies && (
            <Row className="sec_sp">
              <Col lg="12">
                <h3 className="color_sec py-4 text-center">
                  {currentContent.tools.title}
                </h3>
                <div className="technologies-grid">
                  {currentContent.tools.technologies.map((tech, index) => {
                    let IconComponent;
                    
                    // Sprawdź czy to nasza własna ikona czy React Icon
                    if (tech.icon === "GitIcon") {
                      IconComponent = GitIcon;
                    } else if (tech.icon === "ReactIcon") {
                      IconComponent = ReactIcon;
                    } else if (tech.icon === "FirebaseIcon") {
                      IconComponent = FirebaseIcon;
                    } else if (tech.icon === "MacOSIcon") {
                      IconComponent = MacOSIcon;
                    } else if (tech.icon === "CursorIcon") {
                      IconComponent = CursorIcon;
                   } else if (tech.icon === "VSCodeIcon") {
                     IconComponent = VSCodeIcon;
                   } else if (tech.icon === "SQLIcon") {
                     IconComponent = SQLIcon;
                   } else {
                     IconComponent = SiIcons[tech.icon];
                   }
                    
                    return (
                      <div 
                        key={index} 
                        className="technology-icon" 
                        title={`${tech.name}: ${tech.description}`}
                        data-tooltip={tech.description}
                      >
                        <IconComponent />
                        <div className="tooltip">
                          <div className="tooltip-title">{tech.name}</div>
                          <div className="tooltip-description">{tech.description}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Col>
            </Row>
          )}
          
        {currentContent.worktimeline.length > 0 && (
          <Row className="sec_sp">
            <Col lg="12">
              <CompaniesWorkedWith companies={currentContent.worktimeline} />
            </Col>
          </Row>
        )}
          
          {currentContent.education.length > 0 && (
            <Row className="sec_sp education-header-row">
              <Col lg="12">
                <h3 className="color_sec py-4 text-center">Wykształcenie</h3>
              </Col>
            </Row>
          )}
          {currentContent.education.length > 0 && (
            <Row className="sec_sp education-content-row">
              <Col lg="12">
                <div className="education-grid">
                  {currentContent.education.map((data, i) => {
                    return (
                      <div key={i} className="education-item">
                        <div className="education-header">
                          <h4 className="education-degree">{data.degree}</h4>
                          <span className="education-date">{data.date}</span>
                        </div>
                        <div className="education-school">{data.school}</div>
                        <div className="education-project">
                          <strong>Projekt:</strong> {data.project}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section">
        <Container className="About-header">
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4"> Doświadczenie w procesach </h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="12">
              <div className="portfolio-grid">
                {currentContent.portfolio.map((data, i) => {
                  // Banking industry - card format
                  if (currentIndustry === "business") {
                    return (
                      <div key={i} className="portfolio-card-banking">
                        <div className="portfolio-card-header">
                          <h5 className="portfolio-title">{data.title}</h5>
                          <span className="portfolio-category">{data.category}</span>
                        </div>
                        <div className="portfolio-card-content">
                          <p className="portfolio-description">{data.description}</p>
                        </div>
                      </div>
                    );
                  }
                  
                  // Web3 industry - original format with images
                  return (
                    <div key={i} className="portfolio-card">
                      <div className="portfolio-image">
                        <img src={data.img} alt={data.title} />
                        <div className="portfolio-overlay">
                          <h5 className="portfolio-title">{data.title}</h5>
                          <p className="portfolio-short-desc">{data.shortDescription}</p>
                          <div className="portfolio-links">
                            {data.link && data.link !== "" && (
                              <a href={data.link} className="portfolio-link" target="_blank" rel="noopener noreferrer">
                                {data.link === "#" ? "Zobacz projekt →" : 
                                 data.link.includes("drive.google.com") ? "Pobierz →" : "Zobacz stronę →"}
                              </a>
                            )}
                            {data.github && (
                              <a href={data.github} className="portfolio-link" target="_blank" rel="noopener noreferrer">
                                GitHub →
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-content">
                        <h5 className="portfolio-title">{data.title}</h5>
                        <p className="portfolio-short-desc">{data.shortDescription}</p>
                        <p className="portfolio-description">{data.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </HelmetProvider>
  );
};
