import React from "react";

//bootstrap
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//fa-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";

//css
import "./Services.css";

//react-scroll
import { Element } from "react-scroll";

function Services() {
  return (
    <Element name="services">
      <Container className="services-child_container d-flex justify-content-center align-items-center">
        <Row className="justify-content-center w-100 gy-4">
          <Col sm={12} className="">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center">
                <h5 className="display text-muted">SERVICES</h5>
                <hr className="bg-warning mx-2 styled_hr" />
              </div>
              <h5 className="display-5">CHECK OUR SERVICES</h5>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} className="text-center">
            <div className="d-flex flex-column justify-content-center align-items-center py-4 px-2 border">
              <FontAwesomeIcon
                icon={faServer}
                className="fa-5x p-4 text-warning"
              />
              <h5 className="display-5">Lorem Ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} className="text-center">
            <div className="d-flex flex-column justify-content-center align-items-center py-4 px-2 border">
              <FontAwesomeIcon
                icon={faServer}
                className="fa-5x p-4 text-warning"
              />
              <h5 className="display-5">Lorem Ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} className="text-center">
            <div className="d-flex flex-column justify-content-center align-items-center py-4 px-2 border">
              <FontAwesomeIcon
                icon={faServer}
                className="fa-5x p-4 text-warning"
              />
              <h5 className="display-5">Lorem Ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} className="text-center">
            <div className="d-flex flex-column justify-content-center align-items-center py-4 px-2 border">
              <FontAwesomeIcon
                icon={faServer}
                className="fa-5x p-4 text-warning"
              />
              <h5 className="display-5">Lorem Ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} className="text-center">
            <div className="d-flex flex-column justify-content-center align-items-center py-4 px-2 border">
              <FontAwesomeIcon
                icon={faServer}
                className="fa-5x p-4 text-warning"
              />
              <h5 className="display-5">Lorem Ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} className="text-center">
            <div className="d-flex flex-column justify-content-center align-items-center py-4 px-2 border">
              <FontAwesomeIcon
                icon={faServer}
                className="fa-5x p-4 text-warning"
              />
              <h5 className="display-5">Lorem Ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Element>
  );
}

export default Services;
