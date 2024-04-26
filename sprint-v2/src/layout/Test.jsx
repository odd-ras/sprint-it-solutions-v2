import React from "react";

//bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//css
import "./Home.css";

//fa-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";

//react-scroll
import { Element } from "react-scroll";

function Home() {
  return (
    <Element name="home">
      <Container className="home-container border">
        <Row className="h-100  align-items-center justify-content-center">
          <Col xs={12} className="border my-auto">
            <div className="d-flex flex-column text-center">
              <h1 className="display-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
              <p className="fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4} lg={2} className="">
            <div className="d-flex flex-column border align-items-center py-5">
              <FontAwesomeIcon icon={faServer} className="fa-2x" />
              <span>lorem ipsum</span>
            </div>
          </Col>
          <Col xs={12} md={4} lg={2} className="">
            <div className="d-flex flex-column border align-items-center py-5">
              <FontAwesomeIcon icon={faServer} className="fa-2x" />
              <span>lorem ipsum</span>
            </div>
          </Col>
          <Col xs={12} md={4} lg={2} className="">
            <div className="d-flex flex-column border align-items-center py-5">
              <FontAwesomeIcon icon={faServer} className="fa-2x" />
              <span>lorem ipsum</span>
            </div>
          </Col>
          <Col xs={12} md={4} lg={2} className="">
            <div className="d-flex flex-column border align-items-center py-5">
              <FontAwesomeIcon icon={faServer} className="fa-2x" />
              <span>lorem ipsum</span>
            </div>
          </Col>
          <Col xs={12} md={4} lg={2} className="">
            <div className="d-flex flex-column border align-items-center py-5">
              <FontAwesomeIcon icon={faServer} className="fa-2x" />
              <span>lorem ipsum</span>
            </div>
          </Col>
        </Row>
      </Container>
    </Element>
  );
}

export default Home;