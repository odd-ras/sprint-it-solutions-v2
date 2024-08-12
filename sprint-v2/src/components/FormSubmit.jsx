import React, { useState } from "react";

//css
import "./FormSubmit.css";

//bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//react-scroll
import { animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
  scroll.scrollToTop({ duration: 50, smooth: true });
};

let users = [];

const data = {
  firstName: "",
  emailAddress: "",
  subject: "",
  message: "",
};

function FormSubmit() {
  const [userData, setUserData] = useState(data);

  const handleFirstNameChange = (event) => {
    setUserData({
      ...userData,
      firstName: event.target.value,
    });
  };

  const handleEmailChange = (event) => {
    setUserData({
      ...userData,
      emailAddress: event.target.value,
    });
  };
  const handleSubjectChange = (event) => {
    setUserData({
      ...userData,
      subject: event.target.value,
    });
  };
  const handleMessageChange = (event) => {
    setUserData({
      ...userData,
      message: event.target.value,
    });
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    users.push(userData);
    console.log(users);
    setUserData(data);
    scrollToTop();
  };

  return (
    <>
      <Form onSubmit={handleFormSubmission}>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Your Name"
              required
              value={userData.firstName}
              onChange={handleFirstNameChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="email"
              required
              placeholder="Your Email"
              value={userData.emailAddress}
              onChange={handleEmailChange}
            />
          </Col>
        </Row>
        <Form.Group className="my-3" controlId="formBasicSubject">
          <Form.Control
            type="text"
            required
            placeholder="Subject"
            value={userData.subject}
            onChange={handleSubjectChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            type="text"
            required
            placeholder="Message"
            value={userData.message}
            onChange={handleMessageChange}
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
