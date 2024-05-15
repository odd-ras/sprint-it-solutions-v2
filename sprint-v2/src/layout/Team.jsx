import React from "react";

//bootstrap
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

//css
import "./Team.css";

//images
import portraitTwo from "../assets/images/portrait-2.png";

//react-scroll
import { Element } from "react-scroll";

function Team() {
  return (
    <Element name="team">
      <Container className="team-child_container d-flex justify-content-center align-items-center mt-0 mb-5">
        <Row className="justify-content-center w-100 gy-4">
          <Col sm={12} className="">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center">
                <h6 className="display text-muted">TEAM</h6>
                <hr className="bg-warning mx-2 styled_hr" />
              </div>
              <h6 className="display-6 fw-bold">CHECK OUR TEAM</h6>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="">
            <Card>
              <Card.Img
                variant="top"
                src={portraitTwo}
                className="bg-secondary-subtle"
              />
              <Card.Body>
                <Card.Title>
                  <span className="fw-bold">Dr. Silvester Otieno</span>
                </Card.Title>
                <Card.Text>
                  <span className="lead text-muted">CEO</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3} className="">
            <Card>
              <Card.Img
                variant="top"
                src={portraitTwo}
                className="bg-secondary-subtle"
              />
              <Card.Body>
                <Card.Title>
                  <span className="fw-bold">Eng. Kelvin Ontumbi</span>
                </Card.Title>
                <Card.Text>
                  <span className="lead text-muted">CTO</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3} className="">
            <Card>
              <Card.Img
                variant="top"
                src={portraitTwo}
                className="bg-secondary-subtle"
              />
              <Card.Body>
                <Card.Title>
                  <span className="fw-bold">Ms. Karen Reson</span>
                </Card.Title>
                <Card.Text>
                  <span className="lead text-muted">BDR</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3} className="">
            <Card>
              <Card.Img
                variant="top"
                src={portraitTwo}
                className="bg-secondary-subtle"
              />
              <Card.Body>
                <Card.Title>
                  <span className="fw-bold">Dr. Tafari Marley</span>
                </Card.Title>
                <Card.Text>
                  <span className="lead text-muted">Accountant</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Element>
  );
}

export default Team;
