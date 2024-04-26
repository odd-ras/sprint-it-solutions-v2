import React from "react";

//bootstrap
import Container from "react-bootstrap/esm/Container";

//css
import "./Services.css";

//react-scroll
import { Element } from "react-scroll";

function Services() {
  return (
    <Element name="services">
      <Container fluid className="services-container bg-success">
        <h1 className="display-1">Hello world!, From Services</h1>
      </Container>
    </Element>
  );
}

export default Services;
