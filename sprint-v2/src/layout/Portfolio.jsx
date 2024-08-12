import React from "react";

//bootstrap
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

//css
import "./Portfolio.css";

//fa-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";

//react-scroll
import { Element } from "react-scroll";

//images
import imageOne from "../assets/images/core-value2.jpg";
import MasonryLayout from "../components/MasonryLayout";
import CardComponent from "../components/CardComponent";

function Portfolio() {
  return (
    <Element name="portfolio">
      <Container className="portfolio-child-container d-flex justify-content-center align-items-center my-4">
        <Row className="justify-content-center">
          <Col sm={12} className="">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center">
                <h6 className="text-muted">PORTFOLIO</h6>
                <hr className="bg-warning mx-2 styled_hr" />
              </div>
              <h6 className="display-6 fw-bold">CHECK OUR PORTFOLIO</h6>
            </div>
          </Col>
          <Row xs={1} md={2} lg={4} className="py-4">
            <CardComponent />
          </Row>
          <Col md={6} className="">
            <div className="d-flex flex-column h-100 justify-content-center">
              <Image src={imageOne} fluid />
            </div>
          </Col>
          <Col md={6} className="">
            <div className="d-flex flex-column justify-content-center h-100">
              <div className="d-flex justify-content-between align-items-center">
                <FontAwesomeIcon
                  icon={faServer}
                  className="fa-2x p-4 text-warning"
                />
                <div className="d-flex flex-column">
                  <h5>Integrity</h5>
                  <p>
                    Integrity guides our actions and decisions, ensuring
                    transparency, trustworthiness, and ethical conduct in all
                    aspects of our operations.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faServer}
                  className="fa-2x p-4 text-warning"
                />
                <div className="d-flex flex-column">
                  <h5>Care</h5>
                  <p>
                    We demonstrate empathy and consideration in our
                    interactions, fostering a supportive and compassionate
                    environment for our team members and stakeholders alike.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  icon={faServer}
                  className="fa-2x p-4 text-warning"
                />
                <div className="d-flex flex-column">
                  <h5>Data Driven</h5>
                  <p>
                    By leveraging data analytics and insights, we empower
                    informed choices that drive innovation, efficiency, and
                    growth across all aspects of our operations.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  icon={faServer}
                  className="fa-2x p-4 text-warning"
                />
                <div className="d-flex flex-column">
                  <h5>Growth Mindset</h5>
                  <p>
                    We encourage continuous learning, resilience in the face of
                    challenges, and the pursuit of innovative solutions to
                    foster personal and organizational development.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Element>
  );
}

export default Portfolio;
