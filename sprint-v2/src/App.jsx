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
} from "./layout";

//bootstrap
import Container from "react-bootstrap/Container";
import BackToTopButton from "./components/BackToTopButton";
import CallToAction from "./components/CallToAction";

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

      <Portfolio />
      <Team />
      <Contact />
      <BackToTopButton />
    </>
  );
}

export default App;
