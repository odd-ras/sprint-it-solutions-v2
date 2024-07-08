import React from "react";

//bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//css
import "./Home.css";

//fa-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComputer,
  faDatabase,
  faNetworkWired,
  faServer,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

//react-scroll
import { Element } from "react-scroll";

function Home() {
  return (
    <Element name="home">
      <Container className="home-child-container d-flex justify-content-center align-items-center text-white">
        <div className="d-flex flex-column justify-content-center overlay">
          <Container className="mb-5">
            <Row className="justify-content-center">
              <Col xs={8} className="">
                <div className="d-flex flex-column text-center">
                  <h1 className="display-1">
                    Transforming Businesses with Smart IT Strategies
                  </h1>
                  <p className="fs-5">
                    Planning, enabling and supporting IT infrastructures.
                    Proactive IT services, cybersecurity, cloud, network
                    infrastructure, connectivity.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="">
            <Row className="justify-content-center">
              <Col xs={12} md={4} lg={2} className="">
                <a href="#">
                  <div className="d-flex flex-column border border-warning align-items-center py-5">
                    <FontAwesomeIcon icon={faNetworkWired} className="fa-2x" />
                    <span>Networks</span>
                  </div>
                </a>
              </Col>
              <Col xs={12} md={4} lg={2} className="">
                <a href="#">
                  <div className="d-flex flex-column border border-warning align-items-center py-5">
                    <FontAwesomeIcon icon={faDatabase} className="fa-2x" />
                    <span>Database</span>
                  </div>
                </a>
              </Col>
              <Col xs={12} md={4} lg={2} className="">
                <a href="#">
                  <div className="d-flex flex-column border border-warning align-items-center py-5">
                    <FontAwesomeIcon icon={faServer} className="fa-2x" />
                    <span>Servers</span>
                  </div>
                </a>
              </Col>
              <Col xs={12} md={4} lg={2} className="">
                <a href="#">
                  <div className="d-flex flex-column border border-warning align-items-center py-5">
                    <FontAwesomeIcon icon={faShieldHalved} className="fa-2x" />
                    <span>Cyber Security</span>
                  </div>
                </a>
              </Col>
              <Col xs={12} md={4} lg={2} className="">
                <a href="#">
                  <div className="d-flex flex-column border border-warning align-items-center py-5">
                    <FontAwesomeIcon icon={faComputer} className="fa-2x" />
                    <span>IT Support</span>
                  </div>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </Element>
  );
}

export default Home;
