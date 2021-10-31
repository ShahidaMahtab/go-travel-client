import React from "react";
import { Container, Nav, Navbar, NavDropdown, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAfrica, faUserCircle } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const { user, logOut } = useAuth();
  const element = (
    <FontAwesomeIcon icon={faGlobeAfrica} className="text-success fs-2" />
  );
  const userIcon = (
    <FontAwesomeIcon icon={faUserCircle} className="mainText fs-3 me-2" />
  );
  return (
    <div>
      <Navbar bg="light" expand="lg" className="shadow" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="border border-0">
            <h5 className="mainText fw-bold fs-4 display-6 border border-0">
              {element} GoTravel
            </h5>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mainText">
              <Nav.Link as={Link} to="/home">
                <h5 className="mainText">Home</h5>
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                <h5 className="mainText">About</h5>
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                <h5 className="mainText">Services</h5>
              </Nav.Link>

              {user.email && (
                <>
                  <Nav.Link as={Link} to="/mybooking">
                    <h5 className="mainText">MyBooking</h5>
                  </Nav.Link>
                  <NavDropdown
                    title="Admin"
                    id="basic-nav-dropdown"
                    className="drop"
                  >
                    <NavDropdown.Item as={Link} to="/addServices">
                      <h5 className="mainText">Add Services</h5>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/managebookings">
                      <h5 className="mainText">ManageAllBookings</h5>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                </>
              )}
              <Nav.Link as={Link} to="/register">
                <h5 className="mainText">Register</h5>
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                <h5 className="mainText">Login</h5>
              </Nav.Link>
              {user.email && (
                <>
                  <Badge
                    pill
                    bg="light"
                    text="dark fs-5"
                    className="text-center d-flex justify-content-center align-items-center"
                  >
                    {userIcon}
                    {user.displayName || user.email}
                  </Badge>
                  <button className="btn-main btn-sm" onClick={logOut}>
                    SignOut
                  </button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
