import axios from "axios";
import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { myContext } from "../Context";

function Navbarcomp() {
  const context = useContext(myContext);
  console.log("Context in Navbar", context);

  const logout = () => {
    axios
      .get("https://audiomarking-backend.herokuapp.com/auth/logout")
      .then((res) => {
        if (res.status === 200) {
          console.log("Logout:", res);
          window.location.href = "/";
        }
      });
  };
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Audio Marking
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {context ? (
              <>
                <Nav.Link as={Link} to="/create">
                  Create
                </Nav.Link>
                <Nav.Link as={Link} to="/public">
                  Public
                </Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarcomp;
