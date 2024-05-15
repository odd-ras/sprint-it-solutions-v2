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
import imageOne from "../assets/images/pic-2.jpg";
import MasonryLayout from "../components/MasonryLayout";

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
          <MasonryLayout />
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
                  <h5>Lorem Ipsum</h5>
                  <p>
                    At volutpat diam ut venenatis tellus in metus vulputate eu.
                    Quis varius quam quisque id diam vel quam elementum.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faServer}
                  className="fa-2x p-4 text-warning"
                />
                <div className="d-flex flex-column">
                  <h5>Lorem Ipsum</h5>
                  <p>
                    At volutpat diam ut venenatis tellus in metus vulputate eu.
                    Quis varius quam quisque id diam vel quam elementum.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  icon={faServer}
                  className="fa-2x p-4 text-warning"
                />
                <div className="d-flex flex-column">
                  <h5>Lorem Ipsum</h5>
                  <p>
                    At volutpat diam ut venenatis tellus in metus vulputate eu.
                    Quis varius quam quisque id diam vel quam elementum.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  icon={faServer}
                  className="fa-2x p-4 text-warning"
                />
                <div className="d-flex flex-column">
                  <h5>Lorem Ipsum</h5>
                  <p>
                    At volutpat diam ut venenatis tellus in metus vulputate eu.
                    Quis varius quam quisque id diam vel quam elementum.
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
