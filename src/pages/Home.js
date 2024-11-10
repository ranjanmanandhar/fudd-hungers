import React from "react";
import { Container, Row } from "react-bootstrap";
import Logo from "../assets/photos/logo-fudd.png";

function Home() {
  return (
    <div className="home" id="/">
      <Container className="d-flex justify-content-center">
        <Row className="mb-4">
          <div className="logo">
            <img src={Logo} />
          </div>
        </Row>
      </Container>

      <Container fluid>
        <div className="mb-4 text-center"></div>
      </Container>
    </div>
  );
}

export default Home;
