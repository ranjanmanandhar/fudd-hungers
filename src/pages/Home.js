import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaInstagram, FaBars } from "react-icons/fa"; // Importing Instagram and Menu icons
import { Link } from "react-router-dom"; // Importing Link for navigation
import Logo from "../assets/photos/logo-fudd.png"; // Assuming you have the logo image in this path

function Home() {
  return (
    <div className="home" id="/">
      <Container className="d-flex justify-content-center">
        <Row className="mb-4">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
        </Row>
      </Container>

      <Container fluid>
        <div className="mb-4 text-center">
          {/* Instagram icon with link */}
          <a
            href="https://www.instagram.com/ranjan_mndr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={50} color="black" />{" "}
            {/* Change color as needed */}
          </a>

          {/* Menu icon to go to /menu */}
          <div className="mt-4">
            <Link to="/menu" className="menu-icon">
              <FaBars size={40} color="black" />{" "}
              {/* Adjust size and color as needed */}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
