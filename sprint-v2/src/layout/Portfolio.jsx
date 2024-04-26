import React from "react";

//bootstrap
import Container from "react-bootstrap/esm/Container";

//css
import "./Portfolio.css";

//react-scroll
import { Element } from "react-scroll";

function Portfolio() {
  return (
    <Element name="portfolio">
      <Container fluid className="portfolio-container bg-primary">
        <h1 className="display-1">Hello world!, From Portfolio</h1>
      </Container>
    </Element>
  );
}

export default Portfolio;
