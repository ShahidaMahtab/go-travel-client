import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Feature from "../Feature/Feature";
import Title from "../Title/Title";

const Features = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch('https://go-travel-server.onrender.com/features')
		.then((res) => res.json())
		.then((data) => setFeatures(data));
  }, []);
  return (
    <Container className="mt-5 pt-5">
      <Title
        smallTitle="Our Features"
        titleStart="Why Choose"
        titleEnd="US?"
      ></Title>
      <Row xs={1} md={2} lg={3} className="mx-auto g-4">
        {features.map((feature) => (
          <Feature key={feature.id} feature={feature}></Feature>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
