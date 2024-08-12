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
import portraitOne from "../assets/images/pp-3.png";
import portraitThree from "../assets/images/demo-portrait.png";
import portraitFour from "../assets/images/pp-4.png";

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
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={portraitOne}
                className="bg-secondary-subtle card__image"
              />
              <Card.Body>
                <Card.Title>
                  <span className="fw-bold">Kelvin Ontumbi</span>
                </Card.Title>
                <Card.Text>
                  <span className="lead text-muted">CEO | Director</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3} className="">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={portraitTwo}
                className="bg-secondary-subtle card__image"
              />
              <Card.Body>
                <Card.Title>
                  <span className="fw-bold">Kelvin Ontumbi</span>
                </Card.Title>
                <Card.Text>
                  <span className="lead text-muted">CTO | Director</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3} className="">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={portraitThree}
                className="bg-secondary-subtle card__image"
              />
              <Card.Body>
                <Card.Title>
                  <span className="fw-bold">Karen Reson</span>
                </Card.Title>
                <Card.Text>
                  <span className="lead text-muted">CFO | Director</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3} className="">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={portraitFour}
                className="bg-secondary-subtle card__image"
              />
              <Card.Body>
                <Card.Title>
                  <span className="fw-bold">Tafari Marley</span>
                </Card.Title>
                <Card.Text>
                  <span className="lead text-muted">Project Manager</span>
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
