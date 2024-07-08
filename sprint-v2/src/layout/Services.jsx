import React from "react";

//bootstrap
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//fa-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faNetworkWired,
  faServer,
  faShieldHalved,
  faPhone,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";

//css
import "./Services.css";

//react-scroll
import { Element } from "react-scroll";

function Services() {
  return (
    <Element name="services">
      <Container className="services-child_container d-flex justify-content-center align-items-center mb-4">
        <Row className="justify-content-center w-100 gy-4">
          <Col sm={12} className="">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center">
                <h6 className="display text-muted">SERVICES</h6>
                <hr className="bg-warning mx-2 styled_hr" />
              </div>
              <h6 className="display-6 fw-bold">CHECK OUR SERVICES</h6>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} className="text-center">
            <div className="d-flex flex-column justify-content-center align-items-center py-4 px-2 border inner_style">
              <FontAwesomeIcon
                icon={faNetworkWired}
                className="fa-5x p-4 text-warning"
              />
              <h5 className="display-5">Network Design & Deployment</h5>
              <p>
                As network specialists, we meticulously craft tailored solutions
                to meet the diverse connectivity needs of our clients. We take
                our time to understand our customers' unique requirements and
                challenges, leverage our expertise and experience to design and
                implement comprehensive network architectures that optimize
                performance and security.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} className="text-center">
            <div className="d-flex flex-column justify-content-center align-items-center py-4 px-2 border inner_style">
              <FontAwesomeIcon
                icon={faDatabase}
                className="fa-5x p-4 text-warning"
              />
              <h5 className="display-5">Database Administration</h5>
              <p>
                We support our customers in managing and optimizing data storage
                systems to ensure efficiency, reliability, and security. This
                involves overseeing installation, configuration, and
                maintenance, as well as monitoring system performance and
                troubleshooting issues as they arise.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} className="text-center">
            <div className="d-flex flex-column justify-content-center align-items-center py-4 px-2 border inner_style">
              <FontAwesomeIcon
                icon={faServer}
                className="fa-5x p-4 text-warning"
              />
              <h5 className="display-5">Server Management</h5>
              <p>
                We provide specialist consultancy services that encompass server
                technology selection, setup, configuration, maintenance of
                server infrastructure to ensure optimal performance, security,
                and availability.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} className="text-center">
            <div className="d-flex flex-column justify-content-center align-items-center py-4 px-2 border inner_style">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="fa-5x p-4 text-warning"
              />
              <h5 className="display-5">Cybersecurity</h5>
              <p>
                We help our customers develop and implement robust security
                measures across network infrastructure and applications.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} className="text-center">
            <div className="d-flex flex-column justify-content-center align-items-center py-4 px-2 border inner_style">
              <FontAwesomeIcon
                icon={faPhone}
                className="fa-5x p-4 text-warning"
              />
              <h5 className="display-5">IP Telephony</h5>
              <p>
                We help our customers configure and optimize IP telephony
                infrastructure such as IP-PBX systems, SIP trunks, gateways, and
                ednpoints to ensure reliable voice communication services.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} className="text-center">
            <div className="d-flex flex-column justify-content-center align-items-center py-4 px-2 border inner_style">
              <FontAwesomeIcon
                icon={faComputer}
                className="fa-5x p-4 text-warning"
              />
              <h5 className="display-5">Managed I.T Services</h5>
              <p>
                We ovsersee and maintain the entirety of our client's IT
                infrastructure and systems. This includes proactive monitoring,
                regular maintenance, troubleshooting, and providing technical
                support to ensure the smooth operation of all IT components
                within the organization.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Element>
  );
}

export default Services;
