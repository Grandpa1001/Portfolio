import React, { useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { Container, Row, Col } from "react-bootstrap";
import {
  industryContent,
  dataportfolio,
} from "../../content_option";
import { useIndustry } from "../../contexts/IndustryContext";

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
          <div
            className="h_bg-image order-1 order-lg-2 h-100"
            style={{ backgroundImage: `url(${currentContent.introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{currentContent.introdata.title}</h2>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`about-section ${isTransitioning ? 'transitioning' : ''}`}>
        <Container className="About-header">
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">About me</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">{currentContent.dataabout.title}</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div>
                <p>{currentContent.dataabout.aboutme}</p>
              </div>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Work Timeline</h3>
            </Col>
            <Col lg="7">
              <table className="table caption-top">
                <tbody>
                  {currentContent.worktimeline.map((data, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{data.jobtitle}</th>
                        <td>{data.where}</td>
                        <td>{data.date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Skills</h3>
            </Col>
            <Col lg="7">
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
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Services</h3>
            </Col>
            <Col lg="7">
              {currentContent.services.map((data, i) => {
                return (
                  <div className="service_ py-4" key={i}>
                    <h5 className="service__title">{data.title}</h5>
                    <p className="service_desc">{data.description}</p>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section">
        <Container className="About-header">
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4"> Portfolio </h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="12">
              <div className="projects-list">
                {dataportfolio.map((data, i) => {
                  return (
                    <div key={i} className="project-item">
                      <h5 className="project-title">{data.title}</h5>
                      <p className="project-description">{data.description}</p>
                      <a href={data.link} className="project-link">Zobacz projekt →</a>
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
