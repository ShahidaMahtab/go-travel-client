import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Card, Container, Tabs, Tab, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faPlaneDeparture,
  faPlaneArrival,
  faCalendar,
  faUser,
  faUsers,
  faScroll,
  faCheckCircle,
  faTimesCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
const Booking = () => {
  const { user } = useAuth();
  const clockIcon = <FontAwesomeIcon icon={faClock} className="mainText" />;
  const starIcon = <FontAwesomeIcon icon={faStar} className="mainText" />;
  const checkIcon = (
    <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
  );
  const unCheckIcon = (
    <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />
  );
  const planeDepartIcon = (
    <FontAwesomeIcon icon={faPlaneDeparture} className="mainText" />
  );
  const planeArriveIcon = (
    <FontAwesomeIcon icon={faPlaneArrival} className="mainText" />
  );
  const calendarIcon = (
    <FontAwesomeIcon icon={faCalendar} className="mainText" />
  );
  const scriptIcon = (
    <FontAwesomeIcon icon={faScroll} className="mainText fs-4" />
  );
  const userIcon = <FontAwesomeIcon icon={faUser} className="mainText" />;
  const usersIcon = <FontAwesomeIcon icon={faUsers} className="mainText" />;
  const [booking, setBooking] = useState({});
  const { bookingid } = useParams();
  useEffect(() => {
    fetch(`https://go-travel-server.onrender.com/services/${bookingid}`)
		.then((res) => res.json())
		.then((data) => setBooking(data));
  }, []);
  //useform
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch('https://go-travel-server.onrender.com/bookings', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.insertedId) {
				alert('booking successful');
				reset();
			}
		});
  };
  const {
    title,
    img,
    rating,
    desc,
    price,
    days,
    Availability,
    depart,
    land,
    MinAge,
    MaxPeople,
    TourDetail,
    Destination,
    pic3,
    pic2,
    pic1,
    TourPlan3,
    TourPlan2,
    TourPlan1,
    DressCode,
  } = booking;
  return (
    <Container className="my-4 pt-4 pb-5">
      <Row>
        <Card className="mainColor text-white">
          <Card.Img src={img} alt="Card image" className="img-fluid" />
          <Card.ImgOverlay></Card.ImgOverlay>
        </Card>
        <Col xs={12} lg={6}>
          <div>
            <div className="">
              <Card.Title className="fw-bold text-wrap">{title}</Card.Title>
              <Card.Text>{desc}</Card.Text>
              <Rating
                initialRating={rating}
                readonly
                emptySymbol="far fa-star star-icon"
                fullSymbol="fas fa-star star-icon"
              />
              <Card.Text className="fw-bold fs-3">${price}</Card.Text>
            </div>
            <Tabs
              defaultActiveKey="Information"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="Information" title="Information">
                <div className="p-2">
                  <Row>
                    <Col>
                      {clockIcon} <span className="ms-3">{days}</span>
                    </Col>
                    <Col>
                      {calendarIcon}{" "}
                      <span className="ms-3">{Availability}’</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {planeDepartIcon} <span className="ms-3">{depart}</span>
                    </Col>
                    <Col>
                      {planeArriveIcon} <span className="ms-3">{land}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {userIcon} <span className="ms-3">{MinAge}</span>
                    </Col>
                    <Col>
                      {usersIcon} <span className="ms-3">{MaxPeople}</span>
                    </Col>
                  </Row>
                  <h4 className="mt-5 mb-3">{scriptIcon} Tour Details</h4>
                  <p className="pb-3 text-wrap">{TourDetail}</p>
                  <div>
                    <p>
                      <span className="fw-bold me-5"> Destination</span>{" "}
                      {Destination}
                    </p>
                    <hr />

                    <p>
                      <span className="fw-bold me-4">Departure Time</span>
                      Approximately 8.30AM h
                    </p>
                    <hr />
                    <p>
                      <span className="fw-bold me-5"> Return Time</span>
                      Approximately 7.30PM
                    </p>
                    <hr />
                    <p>
                      <span className="fw-bold me-5">Dress Code</span>{" "}
                      {DressCode}
                    </p>
                    <hr />

                    <Row>
                      <Col lg={3}>
                        <span className="fw-bold me-5">Included</span>
                      </Col>
                      <Col lg={6}>
                        <span>{checkIcon}5 star accomodation</span>
                        <span>{checkIcon}Airport Transfer</span>
                        <br />
                        <span>{checkIcon}Breakfast</span>
                        <span>{checkIcon}Personal Guide</span>
                      </Col>
                    </Row>

                    <hr />
                    <p>
                      <span className="fw-bold me-5"> Not Included</span>
                      <span>{unCheckIcon} Lunch</span>
                      <span className="ms-3">{unCheckIcon}Gallery Ticket</span>
                    </p>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="TourPlan" title="TourPlan">
                <div>
                  <h4 className="my-3">TourPlan</h4>
                </div>
                {TourPlan1}
                <br /> <br />
                {TourPlan2}
                <br />
                <br />
                {TourPlan3}
              </Tab>
              <Tab eventKey="Review" title="Review">
                <h3 className="">Reviews Scores and Score Breakdown</h3>
                <div className="my-5 py-5">
                  <Row>
                    <Col lg={3}>
                      <h1>
                        <span> 6.0</span> <br />
                      </h1>
                      <p className="mainText fw-bold">{starIcon} good</p>
                    </Col>
                    <Col lg={9}>
                      <p className="fw-bold">Rating</p>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar mainColor "
                          role="progressbar"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <p className="fw-bold">Comfort</p>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar mainColor "
                          role="progressbar"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                      <p className="fw-bold">Hospitality</p>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar  mainColor "
                          role="progressbar"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                      <p className="fw-bold">Hygiene</p>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar mainColor "
                          role="progressbar"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <p className="fw-bold">Reception</p>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar mainColor "
                          role="progressbar"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Tab>
              <Tab eventKey="Gallery" title="Gallery">
                <h4 className="mt-5 mb-3">Gallery</h4>
                <h5 className="mt-5 mb-3">pictures from our gallery</h5>
                <Row className="g-4">
                  <Col lg={4}>
                    <img src={pic1} alt="" className="img-fluid" />
                  </Col>
                  <Col lg={4}>
                    <img src={pic2} alt="" className="img-fluid" />
                  </Col>
                  <Col lg={4}>
                    <img src={pic3} alt="" className="img-fluid" />
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <div>
            <div className="form-bg text-dark text-start display-flex justify-content-center align-items-center p-5 mx-lg-5 mt-5 mt-lg-0">
              <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto">
                <h3 className="fw-bold mb-3">Book This Tour</h3>
                <input
                  type="hidden"
                  defaultValue="pending"
                  {...register("status")}
                />
                <div className="mb-3">
                  <label className="fw-bold">Name</label>
                  <input
                    className="form-control"
                    placeholder="Name"
                    defaultValue={user?.displayName}
                    type="text"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-danger">Name is required</span>
                  )}
                </div>
                <div className="mb-3">
                  <label className="fw-bold">Email</label>
                  <input
                    className="form-control"
                    placeholder="Email"
                    defaultValue={user?.email}
                    type="text"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-danger">Email is required</span>
                  )}
                </div>
                <div className="mb-3">
                  <label className="fw-bold">Address</label>
                  <input
                    className="form-control"
                    placeholder="Address"
                    type="text"
                    {...register("address", { required: true })}
                  />
                  {errors.address && (
                    <span className="text-danger">Address is required</span>
                  )}
                </div>
                <div className="mb-3">
                  <label className="fw-bold">Destination</label>
                  <input
                    className="form-control"
                    placeholder="Destination"
                    type="text"
                    {...register("destination", { required: true })}
                  />
                  {errors.ticket && (
                    <span className="text-danger">Destination is required</span>
                  )}
                </div>
                <div className="mb-3">
                  <label className="fw-bold">Phone</label>
                  <input
                    className="form-control"
                    placeholder="Phone"
                    type="number"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && (
                    <span className="text-danger">Phone is required</span>
                  )}
                </div>
                <div className="mb-3">
                  <label className="fw-bold">Date</label>
                  <input
                    className="form-control"
                    placeholder="Phone"
                    type="date"
                    {...register("date", { required: true })}
                  />
                  {errors.date && (
                    <span className="text-danger">Date is required</span>
                  )}
                </div>
                <div className="mb-3">
                  <label className="fw-bold">Ticket</label>
                  <input
                    className="form-control"
                    placeholder="Number of Ticket"
                    type="Number"
                    {...register("ticket", { required: true })}
                  />
                  {errors.ticket && (
                    <span className="text-danger">ticket is required</span>
                  )}
                </div>
                <div className="mb-3 d-flex justify-content-center">
                  <button type="submit" className="btn btn-main">
                    Proceed Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Booking;
