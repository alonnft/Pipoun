import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NFT_URLS } from "../config";
import SeparatorBlack from "./SeparatorBlack";
import Carousel3D from "./ControlledCarousel";


function Home2() {

  const imageElements = NFT_URLS.map((image, i) => (
    <span key={i}>
      <img src={image.src} id="moz-content" alt="card"></img>
      <div className="name-card" style={{ bottom: "20px" }}>
        {image.caption}
      </div>
    </span>
  ));
  
  return (
    <Container fluid className="home-about-section" id="about">
      <Row className=" section-title justify-content-md-center">
          <Col className="title" md={12}>
            <div>
            <h1 style={{ fontSize: "3em" }}>
                 Decovery NFT Pipoun
            </h1>
            </div>
            <SeparatorBlack />
          </Col>
      </Row>
      <Row>
          <Col className="home-carousel" md={12}>
          <Carousel3D>{imageElements}</Carousel3D>
          </Col>
      </Row>
    </Container>
  );
  
}

export default Home2;
