import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner, Table } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faUserCircle } from "@fortawesome/free-solid-svg-icons";
const MyBooking = () => {
  const userIcon = (
    <FontAwesomeIcon
      icon={faUserCircle}
      className="mainText display-2 border border-3  rounded-circle  me-2"
    />
  );
  const deleteIcon = (
    <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />
  );
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const email = user?.email;
  useEffect(() => {
    if (email) {
      fetch(`https://go-travel-server.onrender.com/bookings?email=${email}`)
			.then((res) => res.json())
			.then((data) => setBookings(data));
    } else {
      <Spinner animation="border" variant="success" className="p-5 my-5" />;
    }
  }, [email]);
  //deleting
  const handleDelete = (id) => {
    const url = `https://go-travel-server.onrender.com/bookings/${id}`;
    const proceed = window.confirm(
      "are you sure ? you want to delete the order"
    );
    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("booking deleted successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };
  return (
    <Container className="my-5 py-5">
      <Row>
        <Col lg={12}>
          <Card className="mx border border-0">
            <Card.Body className="mx-auto">
              <Card.Title className="text-center fw-bold fs-3 pt-5">
                My Booking
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#Booking No.</th>
                <th>Booking ID</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Destination</th>
                <th>Date</th>
                <th>Phone</th>
                <th>Ticket</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {bookings?.map((booking) => (
              <tbody key={booking._id} className="">
                <tr>
                  <td>{bookings.indexOf(booking) + 1}</td>
                  <td>{booking._id}</td>
                  <td>{booking.name}</td>
                  <td>{booking.email}</td>
                  <td>{booking.destination}</td>
                  <td>{booking.date}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.ticket}</td>
                  <td>{booking.status}</td>
                  <td onClick={() => handleDelete(booking._id)}>
                    {deleteIcon}
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default MyBooking;
