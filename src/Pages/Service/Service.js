import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  const { img, title, desc, rating, price, days, _id } = service;
  return (
    <Col>
      <Card className="h-100 mx-auto" style={{ width: "20rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-wrap fw-bold">{title}</Card.Title>
          <Card.Text className="text-wrap">{desc}</Card.Text>
          <div>
            <h4 className="text-wrap mainText fw-bold">${price}</h4>
          </div>
          <div className="d-flex justify-content-between">
            <Rating
              initialRating={rating}
              readonly
              emptySymbol="far fa-star star-icon"
              fullSymbol="fas fa-star star-icon"
            />
            <div>
              <span className="text-secondary">{days}</span>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-1">
            <Link to={`/booking/${_id}`} className="text-decoration-none">
              <button className="btn btn-main ">BookNow</button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
