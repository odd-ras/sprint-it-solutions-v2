import React from "react";

//bootstrap
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import "./MasonryLayout.css";

//images
import footballPic from "../assets/images/football-pic.png";

function MasonryLayout() {
  return (
    <>
      <Container className="overflow-hidden my-4 d-flex justify-content-center align-items-center">
        <Row className="gx-3 gy-4 gy-md-4">
          <Col sm={12} md={6} lg={4} className="border text-center col-2-style">
            <Image src={footballPic} className="col-image" />
          </Col>
          <Col sm={12} md={6} lg={4} className="border text-center col-1-style">
            <Image src={footballPic} className="col-image" />
          </Col>
          <Col sm={12} md={6} lg={4} className="border text-center col-2-style">
            <Image src={footballPic} className="col-image" />
          </Col>
          <Col sm={12} md={6} lg={4} className="border text-center col-1-style">
            <Image src={footballPic} className="col-image" />
          </Col>
          <Col sm={12} md={6} lg={4} className="border text-center col-1-style">
            <Image src={footballPic} className="col-image" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MasonryLayout;
