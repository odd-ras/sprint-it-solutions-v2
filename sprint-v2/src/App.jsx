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

function App() {
  return (
    <>
      <Header />
      <Container fluid className="home-container">
        <Home />
      </Container>
      <Container fluid className="bg-secondary">
        <About />
      </Container>
      <Services />
      <Portfolio />
      <Team />
      <Contact />
      <BackToTopButton />
    </>
  );
}

export default App;
