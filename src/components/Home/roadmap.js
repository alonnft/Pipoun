import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { Container, Row, Col } from "react-bootstrap";
import Pipounian from "../../Assets/PipounSite2.png";
import SeparatorWhite from './SeparatorWhite';
import SeparatorBlack from "./SeparatorBlack";
import { useLocation } from 'react-router-dom';
// import { CgEnter } from "react-icons/cg";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function Roadmap() {

    const location = useLocation();
  const [showSeparator, setShowSeparator] = useState(true);

  useEffect(() => {
    if (location.pathname === "/roadmap") {
      setShowSeparator(false);
    } else {
      setShowSeparator(true);
    }
  }, [location]);

    const slideInLeft = (elem, delay, duration) => {
        gsap.fromTo(
          elem,
          {
            opacity: 0,
            x: -45,
          },
          {
            opacity: 1,
            x: 0,
            delay: delay || 0.1,
            duration: duration || 0.6,
            scrollTrigger: {
                trigger: elem,
                start : "top center",
                end : "bottom center"
            }
          }
        )
      }
      useEffect(() => {
        slideInLeft(".reveal-1");
      }, [])
      useEffect(() => {
        slideInLeft(".reveal-2");
      }, [])
      useEffect(() => {
        slideInLeft(".reveal-3");
      }, [])

    return(
        <Container fluid className="roadmap">
            <Row className=" section-title justify-content-md-center">
                <Col className="title" md={12}>
            <div>
                <h1 style={{ fontSize: "3em" }}>Roadmap</h1>
            </div>
            <SeparatorBlack />
            </Col>
            </Row>
            <Row className="roadmap-content justify-content-md-center">
                <Col md={4} className="reveal-1">
                    <div className="roadmap-case">
                        <div className="roadmap-date">
                            <h3>Q1 2023</h3>
                        </div>
                        <div className="roadmap-text">
                            {/* <h4>Lancement de Pipoun</h4> */}
                            <ul>
                            <li>NFT collection First Serie</li>
                                <li>Influencers, Marketing, Partnerships</li>
                                </ul>
                        </div>
                        <div className="roadmap-image">
                            {<img src= {Pipounian} className="roadmap-pipounian" alt="pipounian"></img>}
                        </div>
                    </div>
                </Col>
                <Col md={4} className="reveal-1">
                    <div className="roadmap-case">
                        <div className="roadmap-date">
                            <h3>Q2 2023</h3>
                        </div>
                        <div className="roadmap-text">
                            {/* <h4>Lancement de Pipoun</h4> */}
                            <ul>
                            <li>NFT collection Second Serie</li>
                            </ul>
                                <br/>
                                
                                <br/>
                        </div>
                        <div className="roadmap-image">
                            {<img src= {Pipounian} className="roadmap-pipounian" alt="pipounian"></img>}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="roadmap-content justify-content-md-center">
                <Col md={4} className="reveal-2">
                    <div className="roadmap-case">
                        <div className="roadmap-date">
                            <h3>Q3 2023</h3>
                        </div>
                        <div className="roadmap-text">
                            {/* <h4>Lancement de Pipoun</h4> */}
                            <ul>
                            <li>dNft Launch</li>
                            <li>Governance Stories</li>
                            </ul>
                        </div>
                        <div className="roadmap-image">
                            {<img src= {Pipounian} className="roadmap-pipounian" alt="pipounian"></img>}
                        </div>
                    </div>
                </Col>
                <Col md={4} className="reveal-2">
                    <div className="roadmap-case">
                        <div className="roadmap-date">
                            <h3>Q4 2023</h3>
                        </div>
                        <div className="roadmap-text">
                            {/* <h4>Lancement de Pipoun</h4> */}
                            <ul>
                            <li>Hold 2 Earn</li>
                            </ul>
                                <br/>
                                <br/>
                        </div>
                        <div className="roadmap-image">
                            {<img src= {Pipounian} className="roadmap-pipounian" alt="pipounian"></img>}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="roadmap-content justify-content-md-center">
                <Col md={4} className="reveal-3">
                    <div className="roadmap-case">
                        <div className="roadmap-date">
                            <h3>Q1 2024</h3>
                        </div>
                        <div className="roadmap-text">
                            {/* <h4>Lancement de Pipoun</h4> */}
                            <p>Pipoun Cartoon Season 1</p>
                            <br/>

                        </div>
                        <div className="roadmap-image">
                            {<img src= {Pipounian} className="roadmap-pipounian" alt="pipounian"></img>}
                        </div>
                    </div>
                </Col>
                <Col md={4} className="reveal-3">
                    <div className="roadmap-case">
                        <div className="roadmap-date">
                            <h3>Q2 2024</h3>
                        </div>
                        <div className="roadmap-text">
                            {/* <h4>Lancement de Pipoun</h4> */}
                            <p>$PPN Token Pipoun</p>
                                <br/>
                        </div>
                        <div className="roadmap-image">
                            {<img src= {Pipounian} className="roadmap-pipounian" alt="pipounian"></img>}
                        </div>
                    </div>
                </Col>
            </Row>
            {showSeparator && <SeparatorWhite />}
        </Container>
    );
    
}

export default Roadmap;