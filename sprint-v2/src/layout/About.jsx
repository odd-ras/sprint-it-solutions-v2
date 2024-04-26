import React from "react";

//bootstrap
import Container from "react-bootstrap/esm/Container";

//css
import "./About.css";

//react-scroll
import { Element } from "react-scroll";

function About() {
  return (
    <Element name="about">
      <Container className="about-container">
        <h1 className="display-1">Hello world!, From About</h1>
      </Container>
    </Element>
  );
}

export default About;
