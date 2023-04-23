import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/newLogo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa"
import {
  // AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineTwitter,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{position: 'absolute', right: 0}}
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        ><div class="menu-icon">
          <span class="burger"></span>
          </div>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav  defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)} style={{ color:"#FFFFFF" }}>
                <AiOutlineHome style={{ marginBottom: "2px", color: "#FFAA01" }} /> <span>Home </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/roadmap"
                onClick={() => updateExpanded(false)}
                style={{ color:"#FFFFFF" }}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px", color: "#FFAA01" }}
                />
                <span className="ombre">Roadmap</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/collection"
                onClick={() => updateExpanded(false)}
                style={{ color:"#FFFFFF"}}
              >
                <CgFileDocument style={{ marginBottom: "2px", color:"#FFAA01" }} /> <span>Collection</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                style={{ color:"#FFFFFF" }}
              >
                <AiOutlineUser style={{ marginBottom: "2px", color: "#FFAA01" }} /> <span>About</span>
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
            <Nav.Item  className="fork-btn">
              <Button
                href="https://twitter.com/PipounART"
                target="_blank"
                className="fork-btn-inner"
              >
                <AiOutlineTwitter style={{ fontSize: "1.1em", color: "#FFAA01" }} />
              </Button>
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <FaTelegramPlane style={{ fontSize: "1.2em", color: "#FFAA01" }} />{" "}
              </Button>
            </Nav.Item>
      </Container>
    </Navbar>
  );
}

export default NavBar;