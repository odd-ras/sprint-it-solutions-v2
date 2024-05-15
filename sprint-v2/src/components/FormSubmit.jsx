import React from "react";

//css
import "./FormSubmit.css";

//bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FormSubmit() {
  return (
    <>
      <Form>
        <Row>
          <Col>
            <Form.Control type="text" placeholder="Your Name" />
          </Col>
          <Col>
            <Form.Control type="text" placeholder="Your Email" />
          </Col>
        </Row>
        <Form.Group className="my-3" controlId="formBasicSubject">
          <Form.Control type="text" placeholder="Subject" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Message"
            rows={5}
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="warning" size="lg" type="submit">
            Send Message
          </Button>
        </div>
      </Form>
    </>
  );
}

export default FormSubmit;
