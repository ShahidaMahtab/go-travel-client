import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import Title from "../Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
const ManageBookings = () => {
  const deleteIcon = (
    <FontAwesomeIcon icon={faTrashAlt} className="text-danger" />
  );
  const editIcon = (
    <FontAwesomeIcon icon={faCheckSquare} className="text-success" />
  );
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch('https://go-travel-server.onrender.com/managebookings')
		.then((res) => res.json())
		.then((data) => setBookings(data));
  }, [bookings]);
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
  //approve
  const handleApprove = (id) => {
    const matchedId = bookings.filter((booking) => booking._id === id);
    const [data] = matchedId;
    // console.log(data);
    //update approve
    const url = `https://go-travel-server.onrender.com/bookings/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          data.status = "approved";
        }
      });
  };
  return (
    <Container className="my-5 py-5">
      <Title
        smallTitle="Manage All The Bookings"
        titleStart="Manage ALL"
        titleEnd="Bookings"
      ></Title>
      <div>
        <Table striped bordered hover responsive="xl">
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
              <th>Approve</th>
              <th>Action</th>
            </tr>
          </thead>
          {bookings?.map((booking) => (
            <tbody key={booking._id}>
              <tr>
                <td>{bookings.indexOf(booking) + 1}</td>
                <td>{booking._id}</td>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.destination}</td>
                <td>{booking.date}</td>
                <td>{booking.phone}</td>
                <td>{booking.ticket}</td>
                <td className="text-success">{booking.status}</td>
                <td
                  className="text-success"
                  onClick={() => handleApprove(booking._id)}
                >
                  {editIcon}
                </td>
                <td onClick={() => handleDelete(booking._id)}>{deleteIcon}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
      <p className="text-end fw-bold">
        {deleteIcon} : Delete{" "}
        <span className="ms-3"> {editIcon} : approve status</span>
      </p>
    </Container>
  );
};

export default ManageBookings;
