import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import about from "../../Images/Flying around the world-amico.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  const phoneIcon = (
    <FontAwesomeIcon icon={faPhone} className="mainText fs-3 me-2" />
  );
  return (
    <Container className="py-5 my-5 ">
      <p className="mb-1 text-center text-secondary fw-bold">
        <small className="">know more about us</small>
      </p>
      <h2 className="text-center mb-5 fw-bold">
        About <span className="mainText ">Us</span>
      </h2>
      <Row className="g-4 mx-auto text-center">
        <Col xs={12} lg={5}>
          <div>
            <img src={about} alt="" className="img-fluid" />
          </div>
        </Col>
        <Col xs={12} lg={7}>
          <div className="text-center text-lg-start ">
            <h3 className="text wrap fw-bold">Plan Your Trip With Us</h3>
            <p className="text-wrap text-secondary">
              GoTravel is world's largest travel platform. browse hundreds of
              millions of traveler reviews and opinions. compare low prices on
              hotels, flights, and cruises. book popular tours and attractions
              as well as reserve tables at great restaurants easily from our
              website. You might feel like you’re stuck in a rut in your daily
              life. Or you’re yearning for something exciting and different.
              You’re craving new experiences and new challenges.
              <br />
              <br />
              Travel is the ideal place to test yourself. It pushes people to
              their limits and gets them outside their comfort zone We can help
              you select the best destination to plan your next great trip.We
              offer the best services help you navigate your trip.You can rest
              assured we’ll have the capacity to make you feel comfortable as we
              leave the techy stuff and we focus on helping people.
            </p>
          </div>
          <div className="mt-5 d-flex">
            <button className="btn btn-main px-4 py-2">Learn More</button>
            <h3 className="ms-5">
              {phoneIcon} <span className="fs-4">01856884923</span>
            </h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
