import React from "react";

//bootstrap
import Container from "react-bootstrap/esm/Container";

//css
import "./Contact.css";

//react-scroll
import { Element } from "react-scroll";

function Contact() {
  return (
    <Element name="contact">
      <Container fluid className="contact-container bg-warning">
        <h1 className="display-1">Hello world!, From Contact</h1>
      </Container>
    </Element>
  );
}

export default Contact;
