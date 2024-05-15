import React from "react";

//bootstrap
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//css
import "./Contact.css";

//fa-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationArrow,
  faLocationDot,
  faLocationPin,
  faMapLocation,
  faPhone,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

//react-scroll
import { Element } from "react-scroll";
import FormSubmit from "../components/FormSubmit";

function Contact() {
  return (
    <Element name="contact">
      <Container className="contact-child_container d-flex justify-content-center align-items-center mt-5">
        <Row className="justify-content-center w-100 gy-4">
          <Col sm={12} className="">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center">
                <h6 className="display text-muted">CONTACT</h6>
                <hr className="bg-warning mx-2 styled_hr" />
              </div>
              <h6 className="display-6 fw-bold">CONTACT US</h6>
            </div>
          </Col>
          <Col sm={4} className="h-100">
            <div className="d-flex flex-column h-100 justify-content-center align-items-center">
              <div className="d-flex align-items-center mb-3 w-100">
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  className="fa-2x p-4 text-dark bg-warning me-4 rounded-4"
                />
                <div className="d-flex flex-column align-items-start justify-content-center">
                  <h4 className="text-bold">Location</h4>
                  <p className="text-muted">
                    nulla facilisi cras fermentum odio eu
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3 w-100">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="fa-2x p-4 text-dark bg-warning me-4 rounded-4"
                />
                <div className="d-flex flex-column align-items-start justify-content-center">
                  <h4 className="text-bold">Email</h4>
                  <p className="text-muted">info@sprintitsolutions.co.ke</p>
                </div>
              </div>
              <div className="d-flex align-items-center w-100">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="fa-2x p-4 text-dark bg-warning me-4 rounded-4"
                />
                <div className="d-flex flex-column align-items-start justify-content-center">
                  <h4 className="text-bold">Phone</h4>
                  <p className="text-muted">+254715115480</p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={8}>
            <FormSubmit />
          </Col>
        </Row>
      </Container>
    </Element>
  );
}

export default Contact;
