import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaInstagram, FaBars } from "react-icons/fa";
import Logo from "../assets/photos/logo-fudd.png";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="home" id="/">
      <Container
        fluid
        className="d-flex justify-content-center align-items-center min-vh-100"
      >
        {/* Use flexbox classes to center the content */}
        <Row className="text-center">
          <div className="logo mb-4">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="mb-4">
            {/*  <a
              href="https://www.instagram.com/yourprofile" // Replace with your Instagram profile link
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-icon mr-3"
            >
              <FaInstagram size={30} color="#E1306C" /> 
            </a>
            */}
            <Link to="/menu" className="menu-link">
              <FaBars size={30} color="#333" style={{ marginRight: "8px" }} />{" "}
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
