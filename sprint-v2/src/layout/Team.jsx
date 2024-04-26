import React from "react";

//bootstrap
import Container from "react-bootstrap/esm/Container";

//css
import "./Team.css";

//react-scroll
import { Element } from "react-scroll";

function Team() {
  return (
    <Element name="team">
      <Container fluid className="team-container bg-info">
        <h1 className="display-1">Hello world!, From Team</h1>
      </Container>
    </Element>
  );
}

export default Team;
