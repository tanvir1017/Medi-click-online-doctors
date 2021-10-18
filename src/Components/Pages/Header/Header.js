import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Img/Click-medic.png";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {" "}
          <img width="70px" src={logo} alt="" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link className="text-dark" as={Link} to="/home_page">
            Home
          </Nav.Link>
          <Nav.Link className="text-dark" as={Link} to="/about-us">
            about us
          </Nav.Link>
          <Nav.Link className="text-dark" as={Link} to="/Product">
            Product
          </Nav.Link>
          <Nav.Link className="text-dark" as={Link} to="/Contact_us">
            Contact us
          </Nav.Link>
          <Nav.Link className="text-dark" as={Link} to="/services">
            Services
          </Nav.Link>
          <Nav.Link className="text-dark" as={Link} to="">
            Consumer satisfaction
          </Nav.Link>
          <Nav.Link className="text-dark" as={Link} to="/faq">
            FAQ
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
