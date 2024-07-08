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
import {
  faBezierCurve,
  faChartLine,
  faCircleInfo,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";

//images
import imageOne from "../assets/images/pic-2.jpg";
import teamPhotoOne from "../assets/images/team-photo1.jpg";
import teamPic from "../assets/images/team-pic.jpg";
import teamPhotoTwo from "../assets/images/team-photo2.jpg";

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
              <h1>Our team boasts expertise across diverse industries.</h1>
              <p>
                Catering to all your technological needs, our seasoned team of
                IT professionals stands ready to manage every aspect of your IT
                infrastructure, from seamless cloud storage solutions to
                meticulous data management, robust networking configurations,
                and the reliable upkeep of hardware resources. With our
                comprehensive suite of services, rest assured that your IT
                requirements are in expert hands, allowing you to focus on your
                core business objectives with confidence and peace of mind.
              </p>
            </div>
          </Col>
          <Col md={6} className="">
            <div className="d-flex flex-column h-100 justify-content-center">
              <Image src={teamPhotoTwo} fluid />
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
              <Image src={teamPic} fluid />
            </div>
          </Col>
          <Col md={6} className="">
            <div className="d-flex flex-column justify-content-center h-100">
              <div className="d-flex justify-content-between align-items-center">
                <FontAwesomeIcon
                  icon={faMedal}
                  className="fa-2x p-4 text-warning"
                />
                <div className="d-flex flex-column">
                  <h5>High QoS</h5>
                  <p>
                    With our commitment to excellence in QoS, you can trust that
                    your IT infrastructure will meet the demands of your
                    business, providing seamless connectivity and superior
                    performance.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="fa-2x p-4 text-warning"
                />
                <div className="d-flex flex-column">
                  <h5>Competitive Pricing</h5>
                  <p>
                    Our competitive pricing model is designed to offer you the
                    best value for your investment. We strive to provide
                    cost-effective solutions without compromising on the quality
                    and reliability of our services.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className="fa-2x p-4 text-warning"
                />
                <div className="d-flex flex-column">
                  <h5>Unrivaled Customer Support</h5>
                  <p>
                    We believe that exceptional customer service is the
                    cornerstone of a successful business relationship, and we go
                    above and beyond to provide personalized assistance tailored
                    to your specific requirements.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  icon={faBezierCurve}
                  className="fa-2x p-4 text-warning"
                />
                <div className="d-flex flex-column">
                  <h5>Modern Hardware & Design</h5>
                  <p>
                    By utilizing cutting-edge technology, we ensure that our
                    clients benefit from enhanced performance, reliability, and
                    efficiency.
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
