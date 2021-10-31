import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Feature from "../Feature/Feature";

const Features = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/features")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);
  return (
    <Container>
      <div>
        <h2 className="fw-bold text-center mt-5">
          Why <span className="mainText">Choose</span> Us?
        </h2>
      </div>
      <Row xs={1} md={2} lg={3} className="mx-auto g-4">
        {features.map((feature) => (
          <Feature key={feature.id} feature={feature}></Feature>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
