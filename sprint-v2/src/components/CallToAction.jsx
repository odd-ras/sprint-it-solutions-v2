import React from "react";

//bootstrap
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";

function CallToAction() {
  return (
    <Container className="text-center py-4">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h5 className="display-5">Call To Action</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non
          sodales neque sodales ut etiam sit amet. Praesent tristique magna sit
          amet purus. Iaculis eu non diam phasellus vestibulum lorem.
        </p>
        <Button variant="outline-warning" size="lg">
          Call To Action
        </Button>{" "}
      </div>
    </Container>
  );
}

export default CallToAction;
