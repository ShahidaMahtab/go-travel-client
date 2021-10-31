import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const BannerForm = () => {
  return (
    <div className="form-bg pt-3">
      <Container className="p-5">
        <Form>
          <Row>
            <Col>
              <Form.Label className="fw-bold">Destination</Form.Label>
              <Form.Control type="text" placeholder="Search Destination" />
            </Col>
            <Col>
              <Form.Label className="fw-bold">Tour Type</Form.Label>
              <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                <option value="0">Select Tour Type</option>
                <option value="1">Flight</option>
                <option value="2">Train</option>
                <option value="3">Bus</option>
                <option value="3">Ship</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Label className="fw-bold">Date</Form.Label>
              <Form.Control type="Month" placeholder="Select Date and Time" />
            </Col>
            <Col xs="auto" className="mt-4">
              <Button type="submit" className="mt-1 btn-main">
                BookNow!
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default BannerForm;
