import React, {useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Home2 from "./Home2";
import Title from './Title';
import Roadmap from "./roadmap";
import Resume from "../Resume";
import Type from "./Type";
import Soucoupe from './Soucoupe';
import Pipoun from './Pipoun';
import SeparatorWhite from './SeparatorWhite';
import soucoupeImage from "../../Assets/soucoupe.svg";
import pipounImage from "../../Assets/PipounSite1.png";
  
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function Home() {

  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -85,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
      }
    )
  }
  useEffect(() => {
    console.log(slideInTop("#aa", "1", "3"));
  }, [])
  return (
    <section className="home">
      {/* <Particle /> */}
      <Container fluid className="home-section" id="home">
        <Container fluid className="home-content">
          <Row>
            <Col md={12} lg={12} className="home-header">
              <Title />
              <div className="typewrite-effect">
                <Type />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} className="home-soucoupe">
            <Soucoupe imageUrl={soucoupeImage} />
            <Pipoun imageUrl={pipounImage}/>
            </Col>
            <Col className="text-presentation" xs={12} md={6}>
              <div>
                <p className="home-about-body ">
                  Athekrist, God of the planet <b className="purple">PPN-54/83 </b> sends to our Earth some Pipouns, these crazy celebrities who are here in test. He wants to know if they are fit to live on <b className="purple">PPN-54/83</b>, and it is YOU, Pipounians, who will vote and choose who will be crazy enough to stay on Earth and who will be too serious, we will send him back to be bored with Athekrist.

                  Because ATK doesn't know it, but we like the crazy and the laughter.
                </p>
              </div>

            </Col>
          </Row>
        </Container>
        <SeparatorWhite />
      </Container>
      <Resume />
      <Roadmap />
      <Home2 />
    </section>

  );
}

export default Home;
