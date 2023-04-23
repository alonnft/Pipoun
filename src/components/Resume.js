import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Assets/Style/postIt.css";

function Resume() {

    return(
        <Container fluid className="roadmap">
            <Row className=" section-title justify-content-md-center">
                <Col className="title" md={12}>
            <div>
                <h1 style={{ fontSize: "3em" }}>Decovery Pipoun</h1>
            </div>
            <div className="separator separator-bottom separator-skew">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="fill-black"
								points="2560 0 2560 100 0 100"
							/>
						</svg>
					</div>
            </Col>
            </Row>
            <Row className="roadmap-content justify-content-md-center">
                <Col md={6}>
                    <div>
                        <ul>
                            <li>
                                <div className="postit">
                                    <h2>Cartoon</h2>
                                    <p>Text Content #1</p>
                                </div>
                            </li>
                            <li>
                                <div className="postit">
                                    <h2>dNFT</h2>
                                    <p>Text Content #2</p>
                                </div>
                            </li>
                            <li>
                                <div className="postit">
                                    <h2>H2E</h2>
                                    <p>Text Content #3</p>
                                </div>
                            </li>
                            <li>
                                <div className="postit">
                                    <h2>World Pipoun</h2>
                                    <p>Text Content #4</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
            
            <div className="separator separator-bottom separator-skew">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="fill-white"
								points="2560 0 2560 100 0 100"
							/>
						</svg>
					</div>
        </Container>
    );
}

export default Resume;