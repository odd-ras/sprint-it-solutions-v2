import React from "react";

//css
import "./App.css";

import {
  Header,
  Home,
  About,
  Portfolio,
  Services,
  Team,
  Contact,
  Footer,
} from "./layout";

//bootstrap
import Container from "react-bootstrap/Container";
import BackToTopButton from "./components/BackToTopButton";
import CallToAction from "./components/CallToAction";
import TestimonialCarousel from "./components/TestimonialCarousel";

function App() {
  return (
    <>
      <Header />
      <Container fluid className="home-container">
        <Home />
      </Container>
      <Container fluid className="about-container">
        <About />
      </Container>
      <Container fluid className="service-container">
        <Services />
      </Container>
      <Container fluid className="call-to-action_container text-white">
        <CallToAction />
      </Container>
      <Container fluid className="portfolio-container">
        <Portfolio />
      </Container>
      <Container fluid className="testimonial-container text-warning py-3">
        <TestimonialCarousel />
      </Container>
      <Container fluid className="team-container">
        <Team />
      </Container>
      <Container fluid className="contact-container">
        <Contact />
      </Container>
      <Container fluid className="footer-container bg-dark text-white">
        <Footer />
      </Container>
      <BackToTopButton />
    </>
  );
}

export default App;
