import React from "react";

//bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

//images
import logo2 from "../assets/images/logo2.jpg";

//css
import "./NavigationPanel.css";

//react-scroll
import { Link } from "react-scroll";

function NavigationPanel() {
  return (
    <>
      <Navbar expand="lg" className="navbar-custom" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo2}
              width="30"
              height="30"
              className="d-inline-block"
              alt="React Bootstrap logo"
            />
            <span className="ms-1"></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Link to="home" smooth={true} duration={500} className="nav-link">
                Home
              </Link>

              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                About
              </Link>

              <Link
                to="services"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Services
              </Link>

              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Portfolio
              </Link>

              <Link to="team" smooth={true} duration={500} className="nav-link">
                Team
              </Link>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Contact
              </Link>

              <Nav.Link
                as={Link}
                to="contact"
                smooth
                duration={500}
                className="navigation_link"
              >
                <Button variant="outline-success">Get Started</Button>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationPanel;
