import React from "react";

//bootstrap
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";

//css
import "./Footer.css";

//fa-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquarespace } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

//images
import logo2 from "../assets/images/logo2.jpg";

function Footer() {
  return (
    <>
      <Container className="footer-child_container d-flex justify-content-between">
        <Row className="align-items-center w-100 py-5">
          <Col sm={6} md={4} className="h-100">
            <div className="d-flex flex-column align-items-center h-100">
              <Image
                src={logo2}
                height="40"
                width="40"
                className="d-inline-block mb-3"
              />
              <div className="my-4">
                <p className="m-0">Aqua Plaza 2nd Floor - Suite No.2</p>
                <p className="m-0">Muranga Road - Nairobi, Kenya</p>
              </div>
              <div className="mb-5">
                <p className="m-0">Phone: +254 7151 15480</p>
                <p className="m-0">Email: info@sprintitsolutions.co.ke</p>
              </div>
              <div className="d-flex justify-content-center w-100">
                <a href="#">
                  <span className="border border-warning rounded py-2 px-3 mx-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </span>
                </a>
                <a href="#">
                  <span className="border border-warning rounded py-2 px-3 mx-2">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </span>
                </a>
                <a href="#">
                  <span className="border border-warning rounded py-2 px-3 mx-2">
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </a>
                <a href="#">
                  <span className="border border-warning rounded py-2 px-3 mx-2">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </span>
                </a>
                <a href="#">
                  <span className="border border-warning rounded py-2 px-3 mx-2">
                    <FontAwesomeIcon icon={faSquarespace} />
                  </span>
                </a>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} className="h-100">
            <div className="d-flex flex-column">
              <h5 className="lead text-center">Useful Links</h5>
              <ListGroup variant="flush">
                <ListGroup.Item
                  action
                  href="#"
                  className="custom-list-item bg-transparent border border-0"
                >
                  <span>
                    <FontAwesomeIcon
                      icon={faGreaterThan}
                      className="me-2 text-warning"
                    />
                    Home
                  </span>
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  href="#"
                  className="custom-list-item bg-transparent border border-0"
                >
                  <span>
                    <FontAwesomeIcon
                      icon={faGreaterThan}
                      className="me-2 text-warning"
                    />
                    About
                  </span>
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  href="#"
                  className="custom-list-item bg-transparent border border-0"
                >
                  <span>
                    <FontAwesomeIcon
                      icon={faGreaterThan}
                      className="me-2 text-warning"
                    />
                    Services
                  </span>
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  href="#"
                  className="custom-list-item bg-transparent border border-0"
                >
                  <span>
                    <FontAwesomeIcon
                      icon={faGreaterThan}
                      className="me-2 text-warning"
                    />
                    Portfolio
                  </span>
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  href="#"
                  className="custom-list-item bg-transparent border border-0"
                >
                  <span>
                    <FontAwesomeIcon
                      icon={faGreaterThan}
                      className="me-2 text-warning"
                    />
                    Team
                  </span>
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  href="#"
                  className="custom-list-item bg-transparent border border-0"
                >
                  <span>
                    <FontAwesomeIcon
                      icon={faGreaterThan}
                      className="me-2 text-warning"
                    />
                    Contact
                  </span>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col sm={6} md={4} className="h-100">
            <div className="d-flex flex-column">
              <h5 className="lead text-center">Our Services</h5>
              <ListGroup variant="flush">
                <ListGroup.Item
                  action
                  href="#"
                  className="custom-list-item bg-transparent border border-0"
                >
                  <span>
                    <FontAwesomeIcon
                      icon={faGreaterThan}
                      className="me-2 text-warning"
                    />
                    Network Design & Deployment
                  </span>
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  href="#"
                  className="custom-list-item bg-transparent border border-0"
                >
                  <span>
                    <FontAwesomeIcon
                      icon={faGreaterThan}
                      className="me-2 text-warning"
                    />
                    Database Administration
                  </span>
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  href="#"
                  className="custom-list-item bg-transparent border border-0"
                >
                  <span>
                    <FontAwesomeIcon
                      icon={faGreaterThan}
                      className="me-2 text-warning"
                    />
                    Server Management
                  </span>
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  href="#"
                  className="custom-list-item bg-transparent border border-0"
                >
                  <span>
                    <FontAwesomeIcon
                      icon={faGreaterThan}
                      className="me-2 text-warning"
                    />
                    Network & Internet Security Services
                  </span>
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  href="#"
                  className="custom-list-item bg-transparent border border-0"
                >
                  <span>
                    <FontAwesomeIcon
                      icon={faGreaterThan}
                      className="me-2 text-warning"
                    />
                    I.P Telephony
                  </span>
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  href="#"
                  className="custom-list-item bg-transparent border border-0"
                >
                  <span>
                    <FontAwesomeIcon
                      icon={faGreaterThan}
                      className="me-2 text-warning"
                    />
                    Managed I.T Services
                  </span>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <p className="lead text-center fs-6">
            <small>© Copyright. All Rights Reserved. Designed By oddRas</small>
          </p>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
