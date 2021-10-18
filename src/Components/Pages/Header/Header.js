import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";
import logo from "../../../Img/Click-medic.png";

const Header = () => {
  const { user, logOut } = useFirebase();
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
          <Nav.Link className="text-dark" as={Link} to="/product">
            Product
          </Nav.Link>
          <Nav.Link className="text-dark" as={Link} to="/contact_us">
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
          {user.displayName && (
            <button className="btn btn-outline-primary" onClick={logOut}>
              Log out
            </button>
          )}
          <Nav.Link className="text-dark" as={Link} to="/faq">
            <img
              width="50px"
              className="rounded-circle"
              src={user.photoURL}
              alt=""
            />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
