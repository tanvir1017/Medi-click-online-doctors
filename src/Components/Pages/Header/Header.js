import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";
import logo from "../../../Img/Click-medic.png";

const Header = () => {
  const { logOut, user } = useFirebase();
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
          <Nav.Link className="text-dark" as={Link} to="/">
            Consumer satisfaction
          </Nav.Link>
          <Nav.Link className="text-dark me-3" as={Link} to="/faq">
            FAQ
          </Nav.Link>

          {user.displayName && (
            <button onClick={logOut} className="btn btn-outline-primary">
              Log out
            </button>
          )}
          <Nav.Link className="text-dark" as={Link} to="/home_page"></Nav.Link>
          {
            <img
              width="50px"
              className="rounded-circle"
              src={user.photoURL}
              alt=""
            />
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
