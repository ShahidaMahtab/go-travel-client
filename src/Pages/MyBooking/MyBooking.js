import Button from "@restart/ui/esm/Button";
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
      fetch(`http://localhost:5000/bookings?email=${email}`)
        .then((res) => res.json())
        .then((data) => setBookings(data));
    } else {
      <Spinner animation="border" variant="success" className="p-5 my-5" />;
    }
  }, [email]);
  //deleting
  const handleDelete = (id) => {
    const url = `http://localhost:5000/bookings/${id}`;
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
        <Col xs={12} lg={2}>
          <Card>
            <Card.Body>
              <p className="text-center">{userIcon}</p>
              <Card.Title className="text-center fw-bold">MyBooking</Card.Title>
              <Card.Text>
                <span className="fw-bold">UserName: </span>
                {user.displayName}
                <br />
                <span className="fw-bold"> Email:</span>
                {user.email}
              </Card.Text>
              <Button className="btn btn-main">Check Out!</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={10}>
          <Table striped bordered hover responsive="xl">
            <thead>
              <tr>
                <th># Booking ID</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Destination</th>
                <th>Date</th>
                <th>Phone</th>
                <th>Ticket</th>
                <th>Action</th>
              </tr>
            </thead>
            {bookings?.map((booking) => (
              <>
                <tbody key={booking._id}>
                  <tr>
                    <td>{booking._id}</td>
                    <td>{booking.name}</td>
                    <td>{booking.email}</td>
                    <td>{booking.destination}</td>
                    <td>{booking.date}</td>
                    <td>{booking.phone}</td>
                    <td>{booking.ticket}</td>
                    <button
                      className="border border-0"
                      onClick={() => handleDelete(booking._id)}
                    >
                      <td>{deleteIcon}</td>
                    </button>
                  </tr>
                </tbody>
              </>
            ))}
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default MyBooking;
