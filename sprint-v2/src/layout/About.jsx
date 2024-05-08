import React from "react";

//bootstrap
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

//css
import "./About.css";

//fa-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";

//images
import imageOne from "../assets/images/pic-2.jpg";

//react-scroll
import { Element } from "react-scroll";

//Components
import MultiCarousel from "../components/MultiCarousel";

function About() {
  return (
    <Element name="about">
      <Container className="about-child-container d-flex justify-content-center align-items-center">
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <div className="d-flex flex-column h-100 justify-content-center">
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Molestie at elementum eu facilisis. Sit amet massa vitae tortor
                condimentum lacinia. Viverra accumsan in nisl nisi scelerisque
                eu ultrices. Faucibus interdum posuere lorem ipsum dolor. Id eu
                nisl nunc mi ipsum. Lobortis scelerisque fermentum dui faucibus
                in ornare. Lacus viverra vitae congue eu consequat. Scelerisque
                mauris pellentesque pulvinar pellentesque. Phasellus vestibulum
                lorem sed risus ultricies tristique nulla aliquet enim. Tellus
                elementum sagittis vitae et leo. Sed lectus vestibulum mattis
                ullamcorper. Metus aliquam eleifend mi in nulla posuere. At
                volutpat diam ut venenatis tellus in metus vulputate eu. Quis
                varius quam quisque id diam vel quam elementum.
              </p>
            </div>
          </Col>
          <Col md={6} className="">
            <div className="d-flex flex-column h-100 justify-content-center">
              <Image src={imageOne} fluid />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="multi-carousel_container">
        <MultiCarousel />
      </Container>
      <Container className="about-child-container d-flex justify-content-center align-items-center">
        <Row className="justify-content-center">
          <Col md={6} className="">
            <div className="d-flex flex-column h-100 justify-content-center">
              <Image src={imageOne} fluid />
            </div>
          </Col>
          <Col md={6} className="">
            <div className="d-flex flex-column justify-content-center h-100">
              <div className="d-flex justify-content-between align-items-center">
                <FontAwesomeIcon
                  icon={faServer}
                  className="fa-2x p-4 text-warning"
                />
                <div className="d-flex flex-column">
                  <h5>Lorem Ipsum</h5>
                  <p>
                    At volutpat diam ut venenatis tellus in metus vulputate eu.
                    Quis varius quam quisque id diam vel quam elementum.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faServer}
                  className="fa-2x p-4 text-warning"
                />
                <div className="d-flex flex-column">
                  <h5>Lorem Ipsum</h5>
                  <p>
                    At volutpat diam ut venenatis tellus in metus vulputate eu.
                    Quis varius quam quisque id diam vel quam elementum.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  icon={faServer}
                  className="fa-2x p-4 text-warning"
                />
                <div className="d-flex flex-column">
                  <h5>Lorem Ipsum</h5>
                  <p>
                    At volutpat diam ut venenatis tellus in metus vulputate eu.
                    Quis varius quam quisque id diam vel quam elementum.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  icon={faServer}
                  className="fa-2x p-4 text-warning"
                />
                <div className="d-flex flex-column">
                  <h5>Lorem Ipsum</h5>
                  <p>
                    At volutpat diam ut venenatis tellus in metus vulputate eu.
                    Quis varius quam quisque id diam vel quam elementum.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Element>
  );
}

export default About;
