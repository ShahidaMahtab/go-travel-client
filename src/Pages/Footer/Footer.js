import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAfrica,
  faMapMarker,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Nav, Navbar } from "react-bootstrap";
library.add(fab, faFacebook, faGithub, faLinkedin);
const Footer = () => {
  const element = (
    <FontAwesomeIcon icon={faGlobeAfrica} className="text-success fs-2" />
  );
  const locationIcon = (
    <FontAwesomeIcon icon={faMapMarker} className="text-white" />
  );
  const phoneIcon = <FontAwesomeIcon icon={faPhone} className="text-white" />;
  const emailIcon = (
    <FontAwesomeIcon icon={faEnvelope} className="text-white" />
  );
  return (
    <div className="footer-bg ">
      <Navbar bg="footer-bg" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="p-lg-4 mt-0">
            <div>
              <h3 className="fs-3 fw-bold text-white mb-0 pt-0">
                {element} GoTravel
              </h3>
              <p className="p-0 m-0 fs-6 text-white text-wrap">
                <small className="text-wrap">
                  we provide the best services, book today, plan your <br />
                  trip ,we are here to guide you and assist you to your
                  <br /> dream adventure.
                </small>
                <br />
                <br />
                <span className="mt-0  pt-0">
                  <FontAwesomeIcon
                    icon={["fab", "facebook"]}
                    className="text-white fs-5 ms-2 "
                  />
                  <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    className="text-white fs-5 ms-2 "
                  />
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    className="text-white fs-5 ms-2 "
                  />
                </span>
              </p>
            </div>
          </Navbar.Brand>
          <Nav className="d-flex flex-row flex-lg-none text-white justify-content-center me-auto">
            <div>
              <Nav.Link href="#home" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="text-light">
                About
              </Nav.Link>
              <Nav.Link href="#link" className="text-light">
                Service
              </Nav.Link>
            </div>
            <div>
              <Nav.Link href="#home" className="text-light">
                Booking
              </Nav.Link>
              <Nav.Link href="#link" className="text-light">
                Travel
              </Nav.Link>
              <Nav.Link href="#link" className="text-light">
                Ticket
              </Nav.Link>
            </div>
            <div>
              <Nav.Link href="#home" className="text-light">
                Destination
              </Nav.Link>
              <Nav.Link href="#link" className="text-light">
                Tour
              </Nav.Link>
              <Nav.Link href="#link" className="text-light">
                Tourist
              </Nav.Link>
            </div>
          </Nav>
          <div className="d-flex justify-content-center flex-column me-auto">
            <Nav.Link href="#home" className="text-light">
              {phoneIcon} +880 8123-456
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              {emailIcon} gotravel@gmail.com
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              {locationIcon} sylhet-3100,Bangladesh
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
      <Nav.Link href="#link" className="text-light text-lg-center">
        &copy;2021 GOTravel. ALL RIGHTS RESERVED.
      </Nav.Link>
    </div>
  );
};

export default Footer;
