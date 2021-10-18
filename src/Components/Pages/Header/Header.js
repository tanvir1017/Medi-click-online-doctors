import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#">
          {" "}
          <img
            width="70px"
            src="https://i.ibb.co/X3b6tj2/Click-medic.png"
            alt=""
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/about-us">
              about us
            </Nav.Link>
            <Nav.Link as={Link} to="/Product">
              Product
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact_us">
              Contact us
            </Nav.Link>
            <Nav.Link as={Link} to="/FAQ">
              Consumer satisfaction
            </Nav.Link>
            <Nav.Link as={Link} to="/FAQ">
              FAQ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
