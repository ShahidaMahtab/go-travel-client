import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Title from "../Title/Title";
import Service from "../Service/Service";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container className="pt-5 my-5 mx-auto">
      <Title
        smallTitle="Amazing Places To Enjoy Your Travel"
        titleStart="Most popular"
        titleEnd="Tour"
      ></Title>
      <Row xs={1} md={2} lg={3} className="gx-2 gy-5 py-4">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
